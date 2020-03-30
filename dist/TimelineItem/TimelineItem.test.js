"use strict";

var _react = _interopRequireDefault(require("react"));

var _TimelineItem = _interopRequireDefault(require("./TimelineItem"));

var _enums = require("../enums/enums");

var _react2 = require("@testing-library/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('TimelineItem', function () {
  var props;
  beforeEach(function () {
    props = {
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
  }); // Shallow / unit tests begin here

  it('Should render component with Full Element', function () {
    props = _objectSpread({}, props, {
      direction: _enums.directions.LEFT,
      isOneWay: true
    });

    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)),
        container = _render.container;

    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(true);
  });
  it('Should render component with Simple Element', function () {
    props = _objectSpread({}, props, {
      direction: _enums.directions.LEFT,
      isOneWay: false
    });

    var _render2 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)),
        container = _render2.container;

    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(false);
  });
  it('Should render component with Simple Element (default value)', function () {
    props = _objectSpread({}, props, {
      direction: _enums.directions.LEFT
    });

    var _render3 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)),
        container = _render3.container;

    expect(container.firstChild.classList.toString().includes('TimelineItemFull')).toBe(false);
  });
  it('Should render component with Full Element with Left Arrow', function () {
    props = _objectSpread({}, props, {
      direction: _enums.directions.LEFT,
      isOneWay: true
    });

    var _render4 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)),
        container = _render4.container;

    expect(container.firstChild.children[1].classList.toString().includes('ArrowLeft')).toBe(true);
  });
  it('Should render component with Full Element with Right Arrow', function () {
    props = _objectSpread({}, props, {
      direction: _enums.directions.RIGHT,
      isOneWay: true
    });

    var _render5 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)),
        container = _render5.container;

    expect(container.firstChild.children[1].classList.toString().includes('ArrowRight')).toBe(true);
  });
  it('Should render component with Full Element with Right Arrow (default value)', function () {
    props = _objectSpread({}, props);

    var _render6 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)),
        container = _render6.container;

    expect(container.firstChild.children[1].classList.toString().includes('ArrowRight')).toBe(true);
  });
  it('Should render component with Element with List Dot Left', function () {
    props = _objectSpread({}, props, {
      direction: _enums.directions.LEFT,
      isOneWay: false
    });

    var _render7 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)),
        container = _render7.container;

    expect(container.firstChild.children[0].classList.toString().includes('listDotLeft')).toBe(true);
  });
  it('Should render component with Element with List Dot Right', function () {
    props = _objectSpread({}, props, {
      direction: _enums.directions.RIGHT,
      isOneWay: false
    });

    var _render8 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)),
        container = _render8.container;

    expect(container.firstChild.children[0].classList.toString().includes('listDotRight')).toBe(true);
  });
  it('Should render component with Element with List Dot Right (default value)', function () {
    props = _objectSpread({}, props);

    var _render9 = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_TimelineItem.default, props)),
        container = _render9.container;

    expect(container.firstChild.children[0].classList.toString().includes('listDotRight')).toBe(true);
  });
});