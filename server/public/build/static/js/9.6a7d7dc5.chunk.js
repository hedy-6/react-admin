(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1016:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);n(173);var r=n(68),a=(n(440),n(442)),o=n(33),c=n(34),i=n(36),l=n(35),u=n(37),s=n(0),f=n.n(s),d=n(124),p=(n(336),n(339)),h=(n(337),n(340)),b=(n(1016),function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.columns,n=e.data;return f.a.createElement("div",{style:{maxWidth:"600px"}},t.map(function(e){return f.a.createElement(p.a,{key:e.key,className:"formDetail-row"},f.a.createElement(h.a,{xs:24,sm:8,className:"formDetail-row-label"},f.a.createElement("label",null,e.title,"\uff1a")),f.a.createElement(h.a,{xs:24,sm:16,className:"formDetail-row-content"},e.render?e.render(n[e.dataIndex],e):f.a.createElement("label",null,n[e.dataIndex])))}))}}]),t}(s.Component)),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,c=new Array(r),u=0;u<r;u++)c[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).state={columns:[{title:"\u4ea7\u54c1\u540d\u79f0",dataIndex:"name",key:"name"},{title:"\u4ea7\u54c1\u72b6\u6001",dataIndex:"status",key:"status",render:function(e,t){return f.a.createElement(a.a,{disabled:!0,checked:e})}},{title:"\u4ea7\u54c1\u5355\u4ef7",dataIndex:"price",key:"price"},{title:"\u4ea7\u54c1\u5e93\u5b58",dataIndex:"inventory",key:"inventory"},{title:"\u4ea7\u54c1\u5206\u7c7b",dataIndex:"category",key:"category"},{title:"\u5907\u6ce8\u4fe1\u606f",dataIndex:"description",key:"description"}],fieldsData:{}},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;Object(d.a)({url:"/sales/product/detail",method:"get",params:{id:t}}).then(function(t){if(t.data&&"OK"===t.data.status){var n=t.data.data;e.setState({fieldsData:n})}else r.a.error(t.data&&t.data.msg||"\u83b7\u53d6\u8be6\u60c5\u5931\u8d25")}).catch(function(e){r.a.error(e.message||"\u83b7\u53d6\u8be6\u60c5\u5931\u8d25")})}},{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement(b,{columns:this.state.columns,data:this.state.fieldsData}))}}]),t}(s.Component);t.default=y},336:function(e,t,n){"use strict";n(30),n(342)},337:function(e,t,n){"use strict";n(30),n(342)},339:function(e,t,n){"use strict";var r=n(701);t.a=r.a},340:function(e,t,n){"use strict";var r=n(706);t.a=r.a},440:function(e,t,n){"use strict";n(30),n(441)},441:function(e,t,n){},442:function(e,t,n){"use strict";n.d(t,"a",function(){return O});var r=n(0),a=n(1),o=n(443),c=n.n(o),i=n(6),l=n.n(i),u=n(58),s=n(125),f=n(13),d=n(12);function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=m(this,v(t).apply(this,arguments))).saveSwitch=function(t){e.rcSwitch=t},e.renderSwitch=function(t){var n,a=t.getPrefixCls,o=e.props,i=o.prefixCls,d=o.size,p=o.loading,y=o.className,m=void 0===y?"":y,v=o.disabled,k=a("switch",i),O=l()(m,(b(n={},"".concat(k,"-small"),"small"===d),b(n,"".concat(k,"-loading"),p),n)),w=p?r.createElement(f.a,{type:"loading",className:"".concat(k,"-loading-icon")}):null;return r.createElement(s.a,{insertExtraNode:!0},r.createElement(c.a,h({},Object(u.a)(e.props,["loading"]),{prefixCls:k,className:O,disabled:v||p,ref:e.saveSwitch,loadingIcon:w})))},e}var n,a,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,r["Component"]),n=t,(a=[{key:"focus",value:function(){this.rcSwitch.focus()}},{key:"blur",value:function(){this.rcSwitch.blur()}},{key:"render",value:function(){return r.createElement(d.a,null,this.renderSwitch)}}])&&y(n.prototype,a),o&&y(n,o),t}();O.propTypes={prefixCls:a.string,size:a.oneOf(["small","default","large"]),className:a.string}},443:function(e,t,n){e.exports=n(444)},444:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),c=n.n(o),i=n(26);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=n(6),y=function(e){function t(e){var n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=f(t).call(this,e),n=!a||"object"!==typeof a&&"function"!==typeof a?p(r):a,h(p(p(n)),"handleClick",function(e){var t=n.state.checked,r=n.props.onClick,a=!t;n.setChecked(a,e),r&&r(a,e)}),h(p(p(n)),"handleKeyDown",function(e){37===e.keyCode?n.setChecked(!1,e):39===e.keyCode&&n.setChecked(!0,e)}),h(p(p(n)),"handleMouseUp",function(e){var t=n.props.onMouseUp;n.node&&n.node.blur(),t&&t(e)}),h(p(p(n)),"saveNode",function(e){n.node=e});var o=!1;return o="checked"in e?!!e.checked:!!e.defaultChecked,n.state={checked:o},n}var n,o,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),n=t,c=[{key:"getDerivedStateFromProps",value:function(e){var t={},n=e.checked;return"checked"in e&&(t.checked=!!n),t}}],(o=[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus()}},{key:"setChecked",value:function(e,t){var n=this.props,r=n.disabled,a=n.onChange;r||("checked"in this.props||this.setState({checked:e}),a&&a(e,t))}},{key:"focus",value:function(){this.node.focus()}},{key:"blur",value:function(){this.node.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.className,r=t.prefixCls,o=t.disabled,c=t.loadingIcon,i=t.checkedChildren,s=t.unCheckedChildren,f=u(t,["className","prefixCls","disabled","loadingIcon","checkedChildren","unCheckedChildren"]),d=this.state.checked,p=b((h(e={},n,!!n),h(e,r,!0),h(e,"".concat(r,"-checked"),d),h(e,"".concat(r,"-disabled"),o),e));return a.a.createElement("button",l({},f,{type:"button",role:"switch","aria-checked":d,disabled:o,className:p,ref:this.saveNode,onKeyDown:this.handleKeyDown,onClick:this.handleClick,onMouseUp:this.handleMouseUp}),c,a.a.createElement("span",{className:"".concat(r,"-inner")},d?i:s))}}])&&s(n.prototype,o),c&&s(n,c),t}();y.propTypes={className:c.a.string,prefixCls:c.a.string,disabled:c.a.bool,checkedChildren:c.a.any,unCheckedChildren:c.a.any,onChange:c.a.func,onMouseUp:c.a.func,onClick:c.a.func,tabIndex:c.a.number,checked:c.a.bool,defaultChecked:c.a.bool,autoFocus:c.a.bool,loadingIcon:c.a.node},y.defaultProps={prefixCls:"rc-switch",checkedChildren:null,unCheckedChildren:null,className:"",defaultChecked:!1},Object(i.polyfill)(y),t.default=y}}]);
//# sourceMappingURL=9.6a7d7dc5.chunk.js.map