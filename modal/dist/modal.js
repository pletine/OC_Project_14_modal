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
    onClose = _ref.onClose,
    _ref$classNameModal = _ref.classNameModal,
    classNameModal = _ref$classNameModal === void 0 ? "modal" : _ref$classNameModal,
    _ref$classModalConten = _ref.classModalContent,
    classModalContent = _ref$classModalConten === void 0 ? "modal-content" : _ref$classModalConten,
    _ref$styleModal = _ref.styleModal,
    styleModal = _ref$styleModal === void 0 ? {} : _ref$styleModal,
    _ref$styleModalConten = _ref.styleModalContent,
    styleModalContent = _ref$styleModalConten === void 0 ? {} : _ref$styleModalConten;
  if (!show) {
    return null;
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classNameModal,
    onClick: onClose,
    style: styleModal
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classModalContent,
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: styleModalContent
  }, children, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "close-modal"
  }, "CLOSE")));
}