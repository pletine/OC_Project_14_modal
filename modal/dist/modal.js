"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
require("./modal.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Modal(_ref) {
  var show = _ref.show,
    children = _ref.children,
    onClose = _ref.onClose;
  if (!show) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal",
    onClick: onClose
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-content",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, children, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "close-modal"
  }, "CLOSE")));
}