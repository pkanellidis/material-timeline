"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Timeline = _interopRequireDefault(require("./Timeline"));

var _TimelineItem = _interopRequireDefault(require("../TimelineItem/TimelineItem"));

var _enums = require("../enums/enums");

var _react2 = require("@testing-library/react");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
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
    return (/*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)
    );
  };

  beforeEach(function () {
    props = {
      yearBackgroundColor: '#fafafa'
    };
    itemProps = {
      titleChildren: /*#__PURE__*/_react.default.createElement("div", null),
      yearBackgroundColor: '#fafafa',
      yearColor: 'white',
      cardContentChildren: /*#__PURE__*/_react.default.createElement("div", null),
      cardHeaderChildren: /*#__PURE__*/_react.default.createElement("div", null),
      iconContent: /*#__PURE__*/_react.default.createElement("div", null),
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
    component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(itemProps)));
    var item = component.find(_TimelineItem.default);
    var generatedProps = {
      isOneWay: item.prop('isOneWay'),
      direction: item.prop('direction')
    };
    expect(generatedProps.isOneWay === props.isOneWay && generatedProps.direction === _enums.directions.RIGHT).toEqual(true);
  });
  it('Should render on the right side based on isLeft', function () {
    props = {
      isLeft: isNotLeft,
      isOneWay: false
    };
    component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(itemProps)));
    var item = component.find(_TimelineItem.default);
    var generatedProps = {
      direction: item.prop('direction'),
      isOneWay: item.prop('isOneWay')
    }; //For the arrow direction

    expect(generatedProps.direction === _enums.directions.LEFT).toEqual(true);
  }); //TODO: test if <li> is rendered correctly with its classes

  it('Should render <li> element', function () {
    props = {
      isLeft: isLeft,
      isOneWay: false
    };
    elementType = HTMLLIElement;

    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(itemProps))),
        container = _render.container;

    expect(container.firstChild.firstChild instanceof elementType).toEqual(true);
  });
  it('Should render on <li> element with Left Direction class', function () {
    props = {
      isLeft: isLeft,
      isOneWay: false
    };

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(itemProps))),
        container = _render2.container;

    expect(container.firstChild.firstChild.classList.toString().includes('leftDirection')).toEqual(true);
  });
  it('Should render on <li> element with Right Direction class', function () {
    props = {
      isLeft: isNotLeft,
      isOneWay: false
    };

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(itemProps))),
        container = _render3.container;

    expect(container.firstChild.firstChild.classList.toString().includes('rightDirection')).toEqual(true);
  }); //TODO: test if one way the elements are rendered on the correct side

  it('Should render on the Left side based on isOneWay and props.side', function () {
    props = {
      isOneWay: true,
      side: _enums.directions.LEFT
    };
    component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(itemProps)));
    var item = component.find(_TimelineItem.default);
    var generatedProps = {
      direction: item.prop('direction'),
      isOneWay: item.prop('isOneWay')
    };
    expect(generatedProps.direction === _enums.directions.LEFT && generatedProps.isOneWay).toEqual(true);
  });
  it('Should render on the Right side based on isOneWay and props.side', function () {
    props = {
      isOneWay: true,
      side: _enums.directions.RIGHT
    };
    component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(itemProps)));
    var item = component.find(_TimelineItem.default);
    var generatedProps = {
      direction: item.prop('direction'),
      isOneWay: item.prop('isOneWay')
    };
    expect(generatedProps.direction === _enums.directions.RIGHT && generatedProps.isOneWay).toEqual(true);
  }); //TODO: test if the <li> are correctly wrapped from the wrap by function

  it('Should render on the left side based on isOneWay and props.side', function () {
    elementType = HTMLDivElement;

    var wrapWith = function wrapWith(item, index) {
      return (/*#__PURE__*/_react.default.createElement("div", {
          className: "wrappingElement"
        }, item)
      );
    };

    props = {
      isOneWay: true,
      side: _enums.directions.LEFT,
      wrapItem: wrapWith
    };

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(itemProps))),
        container = _render4.container;

    expect(container.firstChild.firstChild instanceof elementType).toEqual(true);
  });
  it('Should pass True to isStackedImage prop', function () {
    props = {
      isLeft: isNotLeft,
      isOneWay: false,
      stackedImages: true
    };
    component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(itemProps)));
    var item = component.find(_TimelineItem.default);
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
    component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(_objectSpread({}, itemProps, {
      isStackedImage: true
    }))));
    var item = component.find(_TimelineItem.default);
    var generatedProps = {
      isStackedImage: item.prop('isStackedImage')
    }; //For the arrow direction

    expect(generatedProps.isStackedImage).toEqual(true);
  });
  it('should remove styles that can break the component', function () {
    props = {
      isLeft: isNotLeft,
      isOneWay: false,
      style: {
        listStyleType: 'lao'
      }
    };
    component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_Timeline.default, props, createTimelineItem(_objectSpread({}, itemProps, {
      isStackedImage: true
    }))));
    var item = component.find(_Timeline.default);
    var generatedProps = {
      style: item.prop('style')
    }; //For the arrow direction

    expect(generatedProps.style.listStyleType).toEqual(undefined);
  });
});