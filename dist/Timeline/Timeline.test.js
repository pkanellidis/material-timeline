import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { mount, configure } from 'enzyme';
import Timeline from './Timeline';
import TimelineItem from '../TimelineItem/TimelineItem';
import { directions } from '../enums/enums';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
configure({
  adapter: new Adapter()
});
describe('Timeline', function () {
  var props;
  var itemProps;
  var component;
  var elementType;

  var isLeft = function isLeft(item, index) {
    return true;
  };

  var isNotLeft = function isNotLeft(item, index) {
    return false;
  };

  var createTimelineItem = function createTimelineItem(props) {
    return React.createElement(TimelineItem, props);
  };

  beforeEach(function () {
    props = {
      yearBackgroundColor: '#fafafa'
    };
    itemProps = {
      titleChildren: React.createElement("div", null),
      yearBackgroundColor: '#fafafa',
      yearColor: 'white',
      cardContentChildren: React.createElement("div", null),
      cardHeaderChildren: React.createElement("div", null),
      iconContent: React.createElement("div", null),
      cardMediaProps: {
        src: ''
      },
      expandableCardContent: true,
      padTo: true,
      hasDivider: true
    };
  });
  it('Should render on the left-to-right (Directions.RIGHT) side based on isLeft', function () {
    props = {
      isLeft: isLeft,
      isOneWay: false
    };
    component = mount(React.createElement(Timeline, props, createTimelineItem(itemProps)));
    var item = component.find(TimelineItem);
    var generatedProps = {
      isOneWay: item.prop('isOneWay'),
      direction: item.prop('direction')
    };
    console.log(generatedProps);
    expect(generatedProps.isOneWay === props.isOneWay && generatedProps.direction === directions.RIGHT).toEqual(true);
  });
  it('Should render on the right side based on isLeft', function () {
    props = {
      isLeft: isNotLeft,
      isOneWay: false
    };
    component = mount(React.createElement(Timeline, props, createTimelineItem(itemProps)));
    var item = component.find(TimelineItem);
    var generatedProps = {
      direction: item.prop('direction'),
      isOneWay: item.prop('isOneWay')
    }; //For the arrow direction

    expect(generatedProps.direction === directions.LEFT).toEqual(true);
  }); //TODO: test if <li> is rendered correctly with its classes

  it('Should render <li> element', function () {
    props = {
      isLeft: isLeft,
      isOneWay: false
    };
    elementType = HTMLLIElement;

    var _render = render(React.createElement(Timeline, props, createTimelineItem(itemProps))),
        container = _render.container;

    expect(container.firstChild.firstChild instanceof elementType).toEqual(true);
  });
  it('Should render on <li> element with Left Direction class', function () {
    props = {
      isLeft: isLeft,
      isOneWay: false
    };

    var _render2 = render(React.createElement(Timeline, props, createTimelineItem(itemProps))),
        container = _render2.container;

    expect(container.firstChild.firstChild.classList.toString().includes('leftDirection')).toEqual(true);
  });
  it('Should render on <li> element with Right Direction class', function () {
    props = {
      isLeft: isNotLeft,
      isOneWay: false
    };

    var _render3 = render(React.createElement(Timeline, props, createTimelineItem(itemProps))),
        container = _render3.container;

    expect(container.firstChild.firstChild.classList.toString().includes('rightDirection')).toEqual(true);
  }); //TODO: test if one way the elements are rendered on the correct side

  it('Should render on the Left side based on isOneWay and props.side', function () {
    props = {
      isOneWay: true,
      side: directions.LEFT
    };
    component = mount(React.createElement(Timeline, props, createTimelineItem(itemProps)));
    var item = component.find(TimelineItem);
    var generatedProps = {
      direction: item.prop('direction'),
      isOneWay: item.prop('isOneWay')
    };
    expect(generatedProps.direction === directions.LEFT && generatedProps.isOneWay).toEqual(true);
  });
  it('Should render on the Right side based on isOneWay and props.side', function () {
    props = {
      isOneWay: true,
      side: directions.RIGHT
    };
    component = mount(React.createElement(Timeline, props, createTimelineItem(itemProps)));
    var item = component.find(TimelineItem);
    var generatedProps = {
      direction: item.prop('direction'),
      isOneWay: item.prop('isOneWay')
    };
    expect(generatedProps.direction === directions.RIGHT && generatedProps.isOneWay).toEqual(true);
  }); //TODO: test if the <li> are correctly wrapped from the wrap by function

  it('Should render on the left side based on isOneWay and props.side', function () {
    elementType = HTMLDivElement;

    var wrapWith = function wrapWith(item, index) {
      return React.createElement("div", {
        className: "wrappingElement"
      }, item);
    };

    props = {
      isOneWay: true,
      side: directions.LEFT,
      wrapItem: wrapWith
    };

    var _render4 = render(React.createElement(Timeline, props, createTimelineItem(itemProps))),
        container = _render4.container;

    expect(container.firstChild.firstChild instanceof elementType).toEqual(true);
  });
  it('Should pass True to isStackedImage prop', function () {
    props = {
      isLeft: isNotLeft,
      isOneWay: false,
      stackedImages: true
    };
    component = mount(React.createElement(Timeline, props, createTimelineItem(itemProps)));
    var item = component.find(TimelineItem);
    var generatedProps = {
      isStackedImage: item.prop('isStackedImage')
    }; //For the arrow direction

    expect(generatedProps.isStackedImage).toEqual(true);
  });
  it('Should keep isStackedImage value passed directly to the TimelineItem', function () {
    props = {
      isLeft: isNotLeft,
      isOneWay: false
    };
    component = mount(React.createElement(Timeline, props, createTimelineItem(_objectSpread({}, itemProps, {
      isStackedImage: true
    }))));
    var item = component.find(TimelineItem);
    var generatedProps = {
      isStackedImage: item.prop('isStackedImage')
    }; //For the arrow direction

    expect(generatedProps.isStackedImage).toEqual(true);
  }); // Render / mount / integration tests begin here
});