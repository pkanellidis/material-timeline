"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _enums = require("../enums/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    Timeline: {
      listStylePosition: 'inside',
      listStyleType: 'none'
    },
    TimelineElement: {
      position: "relative",

      /* so that pseudoelements are positioned relatively to their "li"s*/

      /* use padding-bottom instead of margin-bottom.*/
      marginBottom: "0"
      /* This overrides previously specified margin-bottom */

    },
    leftDirection: {
      direction: 'ltr'
    },
    rightDirection: {
      direction: 'rtl'
    }
  };
});

var generateNewProps = function generateNewProps(props, direction) {
  var newProps = {
    isOneWay: props.isOneWay,
    direction: direction
  };

  if (props.stackedImages != null) {
    newProps = _objectSpread({}, newProps, {
      isStackedImage: props.stackedImages
    });
  }

  return newProps;
};

var processExternalStyles = function processExternalStyles(props) {
  if (props.style) {
    delete props.style.listStylePosition;
    delete props.style.listStyleType;
  }
};

var Timeline = function Timeline(props) {
  var classes = useStyles(props);
  processExternalStyles(props);
  var isOneWay = props.isOneWay,
      wrapItem = props.wrapItem,
      isLeft = props.isLeft,
      stackedImages = props.stackedImages,
      htmlProps = props.htmlProps;

  var processedItems = _react.default.Children.map(props.children, function (item, index) {
    var processedItem;

    if (!props.isOneWay) {
      var _isLeft;

      if (props.isLeft) {
        _isLeft = props.isLeft(item, index);
      } else {
        _isLeft = index % 2 === 0;
      }

      var newProps = generateNewProps(props, _isLeft ? _enums.directions.RIGHT : _enums.directions.LEFT);
      processedItem = /*#__PURE__*/_react.default.createElement("li", {
        className: _isLeft ? [classes.leftDirection, classes.TimelineElement].join(' ') : [classes.rightDirection, classes.TimelineElement].join(' ')
      }, _react.default.cloneElement(item, newProps));
    } else {
      var direction;
      var isInvalidValidValue = !props.side || props.side && props.side !== _enums.directions.LEFT && props.side !== _enums.directions.RIGHT;

      if (isInvalidValidValue) {
        direction = _enums.directions.LEFT;
      } else {
        direction = props.side;
      }

      var _newProps = generateNewProps(props, direction);

      processedItem = /*#__PURE__*/_react.default.createElement("li", {
        className: direction === _enums.directions.LEFT ? [classes.leftDirection, classes.TimelineElement].join(' ') : [classes.rightDirection, classes.TimelineElement].join(' ')
      }, _react.default.cloneElement(item, _newProps));
    }

    return props.wrapItem ? props.wrapItem(processedItem, index) : processedItem;
  });

  return (/*#__PURE__*/_react.default.createElement("ul", _extends({}, htmlProps, {
      className: [classes.Timeline, props.className].join(' ')
    }), processedItems)
  );
};

Timeline.propTypes = {
  isOneWay: _propTypes.default.bool,
  wrapItem: function wrapItem(item, index) {},
  isLeft: function isLeft(item, index) {},
  stackedImages: _propTypes.default.bool
};
var _default = Timeline;
exports.default = _default;