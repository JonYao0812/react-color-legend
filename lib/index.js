"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _colorBarStyle = require("./style/color-bar.style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorBar = function ColorBar(_ref) {
  var data = _ref.data,
      rootStyle = _ref.rootStyle,
      barContainerStyle = _ref.barContainerStyle,
      legendContainerStyle = _ref.legendContainerStyle,
      legendRowContainerStyle = _ref.legendRowContainerStyle,
      legendRowTitleContainerStyle = _ref.legendRowTitleContainerStyle,
      legendRowTitleStyle = _ref.legendRowTitleStyle,
      legendRowBodyStyle = _ref.legendRowBodyStyle,
      tooltipType = _ref.tooltipType,
      tooltipPosition = _ref.tooltipPosition,
      tooltipStyle = _ref.tooltipStyle;

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  var tooltipDisappearEvent = isMobile ? 'touchstart' : undefined;

  _reactTooltip.default.rebuild();

  var sum = data.reduce(function (a, b) {
    return {
      value: a.value + b.value
    };
  }).value;
  var colorBarSections = [];
  var legendRows = [];
  var colorBarTooltips = [];
  data.forEach(function (d, i) {
    legendRows.push(_react.default.createElement("div", {
      key: i,
      style: Object.assign({}, _colorBarStyle.styles.legendRowContainer, legendRowContainerStyle)
    }, _react.default.createElement("div", {
      style: Object.assign({}, _colorBarStyle.styles.legendRowTitleContainer, legendRowTitleContainerStyle)
    }, _react.default.createElement("svg", {
      viewBox: '0 0 50 50',
      class: d.className,
      style: {
        width: 36,
        height: 12,
        fill: d.color
      }
    },
    //  _react.default.createElement("rect", {
    //   // cx: 60,
    //   // cy: 60,
    //   // r: 50
    //   width: '200px',
    //   height: '100px'
    // })
    ), _react.default.createElement("span", {
      style: Object.assign({}, _colorBarStyle.styles.legendRowTitle, legendRowTitleStyle)
    }, d.legendLabel)), _react.default.createElement("span", {
      style: Object.assign({}, _colorBarStyle.styles.legendRowBody, legendRowBodyStyle)
    }, d.legendValue)));

    if (d.tooltip) {
      colorBarTooltips.push(_react.default.createElement(_reactTooltip.default, {
        key: i,
        style: tooltipStyle,
        id: "color-bar-tooltip-".concat(i),
        type: tooltipType || 'info',
        place: tooltipPosition || 'bottom',
        globalEventOff: tooltipDisappearEvent
      }, _react.default.createElement("span", null, d.tooltip)));
    }
  });
  return _react.default.createElement("div", {
    style: rootStyle
  }, colorBarTooltips, _react.default.createElement("div", {
    style: Object.assign({}, _colorBarStyle.styles.colorBarSectionsContainer, barContainerStyle)
  }, colorBarSections), _react.default.createElement("div", {
    style: Object.assign({}, _colorBarStyle.styles.legendContainer, legendContainerStyle)
  }, legendRows));
};

ColorBar.propTypes = {
  data: _propTypes.default.array.isRequired,
  rootStyle: _propTypes.default.object,
  barContainerStyle: _propTypes.default.object,
  legendContainerStyle: _propTypes.default.object,
  legendRowContainerStyle: _propTypes.default.object,
  legendRowTitleContainerStyle: _propTypes.default.object,
  legendRowTitleStyle: _propTypes.default.object,
  legendRowBodyStyle: _propTypes.default.object,
  tooltipType: _propTypes.default.string,
  tooltipPosition: _propTypes.default.string,
  tooltipStyle: _propTypes.default.object
};
var _default = ColorBar;
exports.default = _default;