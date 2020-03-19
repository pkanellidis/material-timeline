import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import TimelineItem from './TimelineItem';
import { directions } from '../enums/enums';
import { render } from '@testing-library/react';
describe('TimelineItem', function () {
  var props;
  beforeEach(function () {
    props = {
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
  }); // Shallow / unit tests begin here

  it('Should render component with Full Element', function () {
    props = _objectSpread({}, props, {
      direction: directions.LEFT,
      isOneWay: true
    });

    var _render = render(React.createElement(TimelineItem, props)),
        container = _render.container;

    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(true);
  });
  it('Should render component with Simple Element', function () {
    props = _objectSpread({}, props, {
      direction: directions.LEFT,
      isOneWay: false
    });

    var _render2 = render(React.createElement(TimelineItem, props)),
        container = _render2.container;

    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(false);
  });
  it('Should render component with Simple Element (default value)', function () {
    props = _objectSpread({}, props, {
      direction: directions.LEFT
    });

    var _render3 = render(React.createElement(TimelineItem, props)),
        container = _render3.container;

    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(false);
  });
  it('Should render component with Full Element with Left Arrow', function () {
    props = _objectSpread({}, props, {
      direction: directions.LEFT,
      isOneWay: true
    });

    var _render4 = render(React.createElement(TimelineItem, props)),
        container = _render4.container;

    expect(container.firstChild.children[1].classList.toString().includes('ArrowLeft')).toBe(true);
  });
  it('Should render component with Full Element with Right Arrow', function () {
    props = _objectSpread({}, props, {
      direction: directions.RIGHT,
      isOneWay: true
    });

    var _render5 = render(React.createElement(TimelineItem, props)),
        container = _render5.container;

    expect(container.firstChild.children[1].classList.toString().includes('ArrowRight')).toBe(true);
  });
  it('Should render component with Full Element with Right Arrow (default value)', function () {
    props = _objectSpread({}, props);

    var _render6 = render(React.createElement(TimelineItem, props)),
        container = _render6.container;

    expect(container.firstChild.children[1].classList.toString().includes('ArrowRight')).toBe(true);
  });
  it('Should render component with Element with List Dot Left', function () {
    props = _objectSpread({}, props, {
      direction: directions.LEFT,
      isOneWay: false
    });

    var _render7 = render(React.createElement(TimelineItem, props)),
        container = _render7.container;

    expect(container.firstChild.children[0].classList.toString().includes('listDotLeft')).toBe(true);
  });
  it('Should render component with Element with List Dot Right', function () {
    props = _objectSpread({}, props, {
      direction: directions.RIGHT,
      isOneWay: false
    });

    var _render8 = render(React.createElement(TimelineItem, props)),
        container = _render8.container;

    expect(container.firstChild.children[0].classList.toString().includes('listDotRight')).toBe(true);
  });
  it('Should render component with Element with List Dot Right (default value)', function () {
    props = _objectSpread({}, props);

    var _render9 = render(React.createElement(TimelineItem, props)),
        container = _render9.container;

    expect(container.firstChild.children[0].classList.toString().includes('listDotRight')).toBe(true);
  }); //TODO: check if the tests above work with no input (default values)
  // Render / mount / integration tests begin here
});