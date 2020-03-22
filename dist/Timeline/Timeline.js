import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { directions } from '../enums/enums';
var useStyles = makeStyles(function (theme) {
  return {
    Timeline: {
      listStylePosition: 'inside',
      listStyleType: 'none',
      marginLeft: 0,
      paddingLeft: '1em'
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

var Timeline = function Timeline(props) {
  var classes = useStyles(props);
  var processedItems = React.Children.map(props.children, function (item, index) {
    var processedItem;

    if (!props.isOneWay) {
      var isLeft;

      if (props.isLeft) {
        isLeft = props.isLeft(item, index);
      } else {
        isLeft = index % 2 === 0;
      }

      var newProps = generateNewProps(props, isLeft ? directions.RIGHT : directions.LEFT);
      processedItem = React.createElement("li", {
        className: isLeft ? [classes.leftDirection, classes.TimelineElement].join(' ') : [classes.rightDirection, classes.TimelineElement].join(' ')
      }, React.cloneElement(item, newProps));
    } else {
      var direction;
      var isInvalidValidValue = !props.side || props.side && props.side !== directions.LEFT && props.side !== directions.RIGHT;

      if (isInvalidValidValue) {
        direction = directions.LEFT;
      } else {
        direction = props.side;
      }

      var _newProps = generateNewProps(props, direction);

      processedItem = React.createElement("li", {
        className: direction === directions.LEFT ? [classes.leftDirection, classes.TimelineElement].join(' ') : [classes.rightDirection, classes.TimelineElement].join(' ')
      }, React.cloneElement(item, _newProps));
    }

    return props.wrapItem ? props.wrapItem(processedItem, index) : processedItem;
  });
  return React.createElement("ul", {
    className: classes.Timeline
  }, processedItems);
};

export default Timeline;