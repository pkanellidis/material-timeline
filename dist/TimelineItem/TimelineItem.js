"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.useStyles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _core = require("@material-ui/core");

var _enums = require("../enums/enums");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    TimelineItem: {
      width: function width(props) {
        return props.timelineItemWidth ? props.timelineItemWidth : '50%';
      },
      alignItems: 'center'
    },
    TimelineItemFull: {
      width: function width(props) {
        return props.timelineItemWidth ? props.timelineItemWidth : '100%';
      },
      flexDirection: 'row',
      display: 'flex'
    },
    TimelineCard: {
      marginLeft: '-1em'
    },
    TimelineCardContent: {
      paddingTop: function paddingTop(props) {
        return props.padTop ? '8px' : null;
      }
    },
    ArrowLeft: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: theme.spacing(2),
      direction: 'ltr',
      marginLeft: function marginLeft(props) {
        return !props.isOneWay ? '6em' : '0';
      },
      '&::before': {
        content: '" "',
        width: 0,
        height: 0,
        borderTop: '0.5em solid white',
        borderBottom: '0.5em solid white',
        borderLeft: '0.5em solid white',
        borderRight: '0.5em solid white',
        boxShadow: '-1px 2px 1px -1px rgba(0,0,0,0.4)',
        transformOrigin: '0 0',
        transform: 'rotate(45deg)',
        marginLeft: '1em'
      }
    },
    ArrowRight: {
      display: 'flex',
      flexDirection: 'row-reverse',
      marginTop: theme.spacing(2),
      direction: 'ltr',
      marginRight: function marginRight(props) {
        return !props.isOneWay ? '6em' : '0';
      },
      '&::before': {
        content: '" "',
        width: 0,
        height: 0,
        borderTop: '0.5em solid white',
        borderBottom: '0.5em solid white',
        borderLeft: '0.5em solid white',
        borderRight: '0.5em solid white',
        boxShadow: '2px -1px 1px -1px rgba(0,0,0,0.4)',
        transformOrigin: '0 0',
        transform: 'rotate(45deg)'
      }
    },
    timelineYearWrapper: {
      content: '" "',
      background: function background(props) {
        return props.customLine ? props.customLine : 'linear-gradient(' + props.yearBackgroundColor + ',' + props.yearBackgroundColor + ' ) no-repeat center/4px 100%';
      },
      height: '100%',
      display: 'block'
    },
    timelineYear: {
      alignSelf: 'flex-start',
      padding: 16,
      backgroundColor: function backgroundColor(props) {
        return props.yearBackgroundColor;
      },
      color: function color(props) {
        return props.yearColor;
      }
    },
    timelineItemHeader: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    cardMedia: {
      height: function height(props) {
        return props.cardMediaProps && props.cardMediaProps.height ? props.cardMediaProps.height : '100px';
      },
      objectFit: "contain"
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    listDotLeft: {
      position: 'absolute',
      left: '50%',
      transform: 'translate(-50%, 0)',
      height: '100%',
      maxWidth: '11em'
    },
    listDotRight: {
      position: 'absolute',
      right: '50%',
      transform: 'translate(50%, 0)',
      height: '100%',
      maxWidth: '11em'
    }
  };
});
exports.useStyles = useStyles;

var TimelineItem = function TimelineItem(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  var classes = useStyles(props);
  var yearBackgroundColor = props.yearBackgroundColor,
      yearColor = props.yearColor,
      iconContent = props.iconContent,
      cardHeaderChildren = props.cardHeaderChildren,
      cardContentChildren = props.cardContentChildren,
      cardMediaProps = props.cardMediaProps,
      expandableCardContent = props.expandableCardContent,
      titleChildren = props.titleChildren,
      padTop = props.padTop,
      timelineItemWidth = props.timelineItemWidth,
      hasDivider = props.hasDivider,
      customLine = props.customLine,
      htmlProps = props.htmlProps;
  var cardMedia = props.cardMediaProps ? /*#__PURE__*/_react.default.createElement(_core.CardMedia, {
    className: classes.cardMedia,
    component: "img",
    src: props.cardMediaProps.imgUrl
  }) : null;
  var cardHeader = props.titleChildren || props.cardHeaderChildren ? /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "column"
  }, props.titleChildren ? /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 12
  }, props.titleChildren) : null, props.cardHeaderChildren ? /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
    container: true,
    direction: "row"
  }, props.cardHeaderChildren)) : null) : null;
  var cardContent = props.cardContentChildren ? /*#__PURE__*/_react.default.createElement(_core.CardContent, null, props.cardContentChildren) : null;

  if (props.expandableCardContent && props.cardContentChildren) {
    cardContent = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.CardActions, null, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      className: expanded ? [classes.expand, classes.expandOpen].join(' ') : [classes.expand].join(' '),
      onClick: handleExpandClick,
      "aria-expanded": expanded,
      "aria-label": "show more"
    }, /*#__PURE__*/_react.default.createElement(_ExpandMore.default, null))), /*#__PURE__*/_react.default.createElement(_core.Collapse, {
      in: expanded,
      timeout: "auto"
    }, cardContent));
  }

  var dividerGrid = props.hasDivider ? /*#__PURE__*/_react.default.createElement(_core.Grid, {
    item: true,
    xs: 12,
    md: 12
  }, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_core.Divider, null)) : null;
  var listDotDirection;

  if (!props.isOneWay) {
    listDotDirection = props.direction === _enums.directions.LEFT ? classes.listDotLeft : classes.listDotRight;
  }

  var finalItem;

  if (props.isStackedImage) {
    finalItem = /*#__PURE__*/_react.default.createElement("div", _extends({}, htmlProps, {
      className: props.isOneWay ? [classes.TimelineItemFull, props.className].join(' ') : [classes.TimelineItem, props.className].join(' ')
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: listDotDirection
    }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
      className: classes.timelineYear
    }, props.iconContent), /*#__PURE__*/_react.default.createElement("div", {
      className: classes.timelineYearWrapper
    })), /*#__PURE__*/_react.default.createElement(_core.Box, {
      className: props.direction === _enums.directions.LEFT ? classes.ArrowLeft : classes.ArrowRight
    }, /*#__PURE__*/_react.default.createElement(_core.Card, {
      component: "div",
      className: classes.TimelineCard
    }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      container: true,
      justify: "space-evenly"
    }, cardMedia ? /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      md: 12
    }, cardMedia) : null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      className: classes.TimelineCardContent,
      item: true,
      xs: 12,
      md: 12
    }, cardHeader), dividerGrid, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      md: 12
    }, cardContent)))));
  } else {
    finalItem = /*#__PURE__*/_react.default.createElement("div", _extends({}, htmlProps, {
      className: props.isOneWay ? [classes.TimelineItemFull, props.className].join(' ') : [classes.TimelineItem, props.className].join(' ')
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: listDotDirection
    }, /*#__PURE__*/_react.default.createElement(_core.Paper, {
      className: classes.timelineYear
    }, props.iconContent), /*#__PURE__*/_react.default.createElement("div", {
      className: classes.timelineYearWrapper
    })), /*#__PURE__*/_react.default.createElement(_core.Box, {
      className: props.direction === _enums.directions.LEFT ? classes.ArrowLeft : classes.ArrowRight
    }, /*#__PURE__*/_react.default.createElement(_core.Card, {
      component: "div",
      className: classes.TimelineCard
    }, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      container: true,
      justify: "space-evenly"
    }, cardMedia ? /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 4,
      md: 3
    }, cardMedia) : null, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      className: classes.TimelineCardContent,
      item: true,
      xs: 7,
      md: 8
    }, cardHeader), dividerGrid, /*#__PURE__*/_react.default.createElement(_core.Grid, {
      item: true,
      xs: 12,
      md: 12
    }, cardContent)))));
  }

  return finalItem;
};

TimelineItem.propTypes = {
  yearBackgroundColor: _propTypes.default.string,
  yearColor: _propTypes.default.string,
  iconContent: _propTypes.default.element,
  cardHeaderChildren: _propTypes.default.node,
  cardContentChildren: _propTypes.default.node,
  cardMediaProps: _propTypes.default.shape({
    imgUrl: _propTypes.default.string,
    height: _propTypes.default.string
  }),
  expandableCardContent: _propTypes.default.bool,
  titleChildren: _propTypes.default.node,
  padTop: _propTypes.default.bool,
  timelineItemWidth: _propTypes.default.string,
  hasDivider: _propTypes.default.bool,
  customLine: _propTypes.default.string
};
var _default = TimelineItem;
exports.default = _default;