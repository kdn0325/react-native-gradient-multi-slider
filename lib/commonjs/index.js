'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var _exportNames = {
  LinearGradient: true,
};
Object.defineProperty(exports, 'LinearGradient', {
  enumerable: true,
  get: function() {
    return _RNLinearGradientNativeComponent.default;
  },
});
exports.default = void 0;
var _RNLinearGradientNativeComponent = _interopRequireWildcard(
  require('./RNLinearGradientNativeComponent'),
);
Object.keys(_RNLinearGradientNativeComponent).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _RNLinearGradientNativeComponent[key])
    return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function() {
      return _RNLinearGradientNativeComponent[key];
    },
  });
});
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ('object' != typeof e && 'function' != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
var _default = (exports.default = _RNLinearGradientNativeComponent.default);
//# sourceMappingURL=index.js.map
