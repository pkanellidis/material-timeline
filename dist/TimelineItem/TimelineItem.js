import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Card, Grid, CardMedia, CardContent, Box, Paper, makeStyles, Divider, Collapse, CardActions, IconButton } from '@material-ui/core';
import { directions } from '../enums/enums';
export var useStyles = makeStyles(function (theme) {
  return {
    TimelineItem: {
      width: function width(props) {
        return props.timelineItemWidth ? props.timelineItemWidth : '50%';
      },
      alignContent: 'center'
    },
    TimelineItemFull: {
      width: function width(props) {
        return props.timelineItemWidth ? props.timelineItemWidth : '100%';
      },
      alignSelf: 'flex-start',
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
        return !props.isOneWay ? '64px' : '0';
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
        return !props.isOneWay ? '64px' : '0';
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
      height: '100%'
    },
    listDotRight: {
      position: 'absolute',
      right: '50%',
      transform: 'translate(50%, 0)',
      height: '100%'
    }
  };
});

var TimelineItem = function TimelineItem(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var handleExpandClick = function handleExpandClick() {
    setExpanded(!expanded);
  };

  var classes = useStyles(props);
  var cardMedia = props.cardMediaProps ? React.createElement(CardMedia, {
    className: classes.cardMedia,
    component: "img",
    src: props.cardMediaProps.imgUrl
  }) : null;
  var cardHeader = props.titleChildren || props.cardHeaderChildren ? React.createElement(Grid, {
    container: true,
    direction: "column"
  }, props.titleChildren ? React.createElement(Grid, {
    item: true,
    xs: 12,
    md: 12
  }, props.titleChildren) : null, props.cardHeaderChildren ? React.createElement(Grid, {
    item: true,
    xs: 12,
    md: 12
  }, React.createElement(Grid, {
    container: true,
    direction: "row"
  }, props.cardHeaderChildren)) : null) : null;
  var cardContent = props.cardContentChildren ? React.createElement(CardContent, null, props.cardContentChildren) : null;

  if (props.expandableCardContent && props.cardContentChildren) {
    cardContent = React.createElement(React.Fragment, null, React.createElement(CardActions, null, React.createElement(IconButton, {
      className: expanded ? [classes.expand, classes.expandOpen].join(' ') : [classes.expand].join(' '),
      onClick: handleExpandClick,
      "aria-expanded": expanded,
      "aria-label": "show more"
    }, React.createElement(ExpandMoreIcon, null))), React.createElement(Collapse, {
      in: expanded,
      timeout: "auto"
    }, cardContent));
  }

  var dividerGrid = props.hasDivider ? React.createElement(Grid, {
    item: true,
    xs: 12,
    md: 12
  }, React.createElement("br", null), React.createElement(Divider, null)) : null;
  var listDotDirection;

  if (!props.isOneWay) {
    listDotDirection = props.direction === directions.LEFT ? classes.listDotLeft : classes.listDotRight;
  }

  var finalItem;

  if (props.isStackedImage) {
    finalItem = React.createElement("div", {
      className: props.isOneWay ? classes.TimelineItemFull : classes.TimelineItem
    }, React.createElement("div", {
      className: listDotDirection
    }, React.createElement(Paper, {
      className: classes.timelineYear
    }, props.iconContent), React.createElement("div", {
      className: classes.timelineYearWrapper
    })), React.createElement(Box, {
      className: props.direction === directions.LEFT ? classes.ArrowLeft : classes.ArrowRight
    }, React.createElement(Card, {
      component: "div",
      className: classes.TimelineCard
    }, React.createElement(Grid, {
      container: true,
      justify: "space-evenly"
    }, React.createElement(Grid, {
      item: true,
      xs: 12,
      md: 12
    }, cardMedia), React.createElement(Grid, {
      className: classes.TimelineCardContent,
      item: true,
      xs: 12,
      md: 12
    }, cardHeader), dividerGrid, React.createElement(Grid, {
      item: true,
      xs: 12,
      md: 12
    }, cardContent)))));
  } else {
    finalItem = React.createElement("div", {
      className: props.isOneWay ? classes.TimelineItemFull : classes.TimelineItem
    }, React.createElement("div", {
      className: listDotDirection
    }, React.createElement(Paper, {
      className: classes.timelineYear
    }, props.iconContent), React.createElement("div", {
      className: classes.timelineYearWrapper
    })), React.createElement(Box, {
      className: props.direction === directions.LEFT ? classes.ArrowLeft : classes.ArrowRight
    }, React.createElement(Card, {
      component: "div",
      className: classes.TimelineCard
    }, React.createElement(Grid, {
      container: true,
      justify: "space-evenly"
    }, React.createElement(Grid, {
      item: true,
      xs: 4,
      md: 3
    }, cardMedia), React.createElement(Grid, {
      className: classes.TimelineCardContent,
      item: true,
      xs: 7,
      md: 8
    }, cardHeader), dividerGrid, React.createElement(Grid, {
      item: true,
      xs: 12,
      md: 12
    }, cardContent)))));
  }

  return finalItem;
};

export default TimelineItem;