(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{CnBM:function(e,t,a){"use strict";a("91GP"),a("VRzm"),a("XfO3"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("8+KV"),a("LK8F"),a("/SS/"),a("hHhE"),a("rE2o"),a("ioFf");var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=a("q1tI"),s=a("17x9"),c=[],u=[];function m(e){var t=e(),a={loading:!0,loaded:null,error:null};return a.promise=t.then((function(e){return a.loading=!1,a.loaded=e,e})).catch((function(e){throw a.loading=!1,a.error=e,e})),a}function d(e){var t={loading:!1,loaded:{},error:null},a=[];try{Object.keys(e).forEach((function(n){var r=m(e[n]);r.loading?t.loading=!0:(t.loaded[n]=r.loaded,t.error=r.error),a.push(r.promise),r.promise.then((function(e){t.loaded[n]=e})).catch((function(e){t.error=e}))}))}catch(n){t.error=n}return t.promise=Promise.all(a).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function h(e,t){return i.createElement((a=e)&&a.__esModule?a.default:a,t);var a}function p(e,t){var m,d;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var p=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:h,webpack:null,modules:null},t),f=null;function g(){return f||(f=e(p.loader)),f.promise}return c.push(g),"function"==typeof p.webpack&&u.push((function(){if(e=p.webpack,"object"===n(a.m)&&e().every((function(e){return void 0!==e&&void 0!==a.m[e]})))return g();var e})),d=m=function(t){function a(n){r(this,a);var o=l(this,t.call(this,n));return o.retry=function(){o.setState({error:null,loading:!0,timedOut:!1}),f=e(p.loader),o._loadModule()},g(),o.state={error:f.error,pastDelay:!1,timedOut:!1,loading:f.loading,loaded:f.loaded},o}return o(a,t),a.preload=function(){return g()},a.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},a.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(p.modules)&&p.modules.forEach((function(t){e.context.loadable.report(t)})),f.loading){"number"==typeof p.delay&&(0===p.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),p.delay)),"number"==typeof p.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),p.timeout));var t=function(){e._mounted&&(e.setState({error:f.error,loaded:f.loaded,loading:f.loading}),e._clearTimeouts())};f.promise.then((function(){t()})).catch((function(e){t()}))}},a.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},a.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},a.prototype.render=function(){return this.state.loading||this.state.error?i.createElement(p.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?p.render(this.state.loaded,this.props):null},a}(i.Component),m.contextTypes={loadable:s.shape({report:s.func.isRequired})},d}function f(e){return p(m,e)}f.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return p(d,e)};var g=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return i.Children.only(this.props.children)},t}(i.Component);function y(e){for(var t=[];e.length;){var a=e.pop();t.push(a())}return Promise.all(t).then((function(){if(e.length)return y(e)}))}g.propTypes={report:s.func.isRequired},g.childContextTypes={loadable:s.shape({report:s.func.isRequired}).isRequired},f.Capture=g,f.preloadAll=function(){return new Promise((function(e,t){y(c).then(e,t)}))},f.preloadReady=function(){return new Promise((function(e,t){y(u).then(e,e)}))},e.exports=f},lpph:function(e,t,a){"use strict";function n(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}a.d(t,"a",(function(){return n}))},mnx0:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("CnBM"),o=a.n(l),i=a("Wbzz"),s=function(){return r.a.createElement("div",{className:"bg-blue-50 px-4 py-3 overflow-hidden rounded-lg flex items-start lg:justify-center lg:px-8 lg:py-4"},r.a.createElement("div",{className:"flex-shrink-0"},r.a.createElement("svg",{className:"h-6 w-6 text-blue-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"}))),r.a.createElement("div",{className:"ml-3 flex-1 lg:flex lg:justify-between"},r.a.createElement("p",{className:"text-sm leading-6 font-medium text-blue-700"},"Got a question?"),r.a.createElement("p",{className:"mt-2 text-sm leading-6 lg:mt-0 lg:ml-4"},r.a.createElement(i.Link,{to:"/comments",className:"font-medium text-blue-700 hover:underline hover:text-blue-500 transition ease-in-out duration-150"},"Ask Support →"))))},c=a("vrFN"),u=a("lpph"),m=(a("fp82"),o()({loader:function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,"P8hX"))},loading:function(){return r.a.createElement("span",null,"Loading...")}})),d=o()({loader:function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,"7z/1"))},loading:function(){return r.a.createElement("span",null,"Loading...")}}),h=o()({loader:function(){return Promise.all([a.e(0),a.e(22)]).then(a.bind(null,"2lmN"))},loading:function(){return r.a.createElement("span",null,"Loading...")}}),p=o()({loader:function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,"2DQG"))},loading:function(){return r.a.createElement("span",null,"Loading...")}}),f=o()({loader:function(){return Promise.all([a.e(0),a.e(21)]).then(a.bind(null,"TFqH"))},loading:function(){return r.a.createElement("span",null,"Loading...")}}),g=o()({loader:function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,"CHqQ"))},loading:function(){return r.a.createElement("span",null,"Loading...")}});t.default=function(){var e=Object(n.useState)(!0),t=e[0],a=e[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{title:"Documentation"}),r.a.createElement("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"},r.a.createElement("h1",{className:"text-2xl leading-8 font-semibold font-display text-gray-900 sm:text-3xl sm:leading-9"},"User Guide"),r.a.createElement("div",{className:"mt-6 border-t border-gray-200 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 lg:gap-6"},r.a.createElement("div",{className:"lg:col-span-4"},r.a.createElement("ul",{className:"sticky top-8 space-y-5 text-sm leading-5 text-gray-900 font-medium lg:mr-10 lg:overflow-y-auto toc"},r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#overview"},"Overview"),r.a.createElement("ul",{className:"pl-3 space-y-3"},r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#introduction"},"Introduction"),r.a.createElement("ul",{className:"pl-3 space-y-3"},r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#audio-described-user-guide"},"Audio Described User Guide")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#whats-included"},"What's Included?")))),r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#the-main-controller"},"The Main Controller")),r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#refreshable-cells"},"Refreshable Cells")),r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#interacting-with-louis"},"Interacting with ",r.a.createElement("span",{className:"font-louis"},"louis")),r.a.createElement("ul",{className:"pl-3 space-y-3"},r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#audio-speech-output"},"Audio Speech Output")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#audio-speech-input"},"Audio Speech Input")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#braille-output-through-the-cells"},"Braille Output Through the Cells")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#selection-of-a-particular-cell"},"Selection of a Particular Cell")))))),r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#installation"},"Installation"),r.a.createElement("ul",{className:"pl-3 space-y-3"},r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#setup-the-hardware"},"Set up the Hardware")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#setup-the-software"},"Set up the Software")))),r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#operation"},"Operation"),r.a.createElement("ul",{className:"pl-3 space-y-3"},r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#general-commands"},"General Commands")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#charge-louis"},"Charge ",r.a.createElement("span",{className:"font-louis"},"louis"))),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#switch-on"},"Switch on")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#switch-off"},"Switch off")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#open-an-application"},"Open an Application")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#exit-an-application"},"Exit an Application")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#install-an-application"},"Install an Application")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#help"},"Help")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#pagination"},"Pagination")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#contractions"},"Contractions")))),r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#troubleshooting-guide"},"Troubleshooting Guide")),r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#maintenance"},"Maintenance"),r.a.createElement("ul",{className:"pl-3 space-y-3"},r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#cleaning-louis"},"Cleaning ",r.a.createElement("span",{className:"font-louis"},"louis"))),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#cleaning-connectors"},"Cleaning the Connectors")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#replacing-battery"},"Replacing the Battery")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#calibrating-cell"},"Calibrating a Cell’s Output")))),r.a.createElement("li",{className:"space-y-3"},r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#developer-documentation"},"Developer Documentation"),r.a.createElement("ul",{className:"pl-3 space-y-3"},r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#cell"},"Cell")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#audio"},"Audio")),r.a.createElement("li",null,r.a.createElement("a",{className:"block text-gray-900 hover:text-gray-700 transition ease-in-out duration-150",href:"#direct"},"Direct")))))),r.a.createElement("div",{className:"lg:col-span-8"},r.a.createElement(s,null),r.a.createElement("div",{className:"prose my-4"},r.a.createElement(m,null),r.a.createElement("hr",null),r.a.createElement(d,null),r.a.createElement("hr",null),r.a.createElement(h,null),r.a.createElement("hr",null),r.a.createElement(p,null),r.a.createElement("hr",null),r.a.createElement(f,null),r.a.createElement("hr",null),r.a.createElement(g,null)),r.a.createElement(s,null)))),r.a.createElement("div",{className:Object(u.a)("fixed inset-x-0 bottom-0",!t&&"hidden")},r.a.createElement("div",{className:"bg-indigo-600"},r.a.createElement("div",{className:"max-w-screen-xl mx-auto py-3 px-3 sm:px-6 lg:px-8"},r.a.createElement("div",{className:"flex items-center justify-between flex-wrap"},r.a.createElement("div",{className:"w-0 flex-1 flex items-center"},r.a.createElement("span",{className:"flex p-2 rounded-lg bg-indigo-800"},r.a.createElement("svg",{className:"h-6 w-6 text-white",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"}))),r.a.createElement("p",{className:"ml-3 font-medium text-white truncate"},r.a.createElement("span",{className:"lg:hidden"},"This page is accessible!"),r.a.createElement("span",{className:"hidden lg:inline"},"This page can be used with assistive technologies (e.g. screen readers)."))),r.a.createElement("div",{className:"order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto"},r.a.createElement("div",{className:"rounded-md shadow-sm"},r.a.createElement("a",{href:"https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Flouis-threedots.github.io%2Fwebsite%2Fdocumentation#accessibility",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"},"Learn more"))),r.a.createElement("div",{className:"order-2 flex-shrink-0 sm:order-3 sm:ml-3"},r.a.createElement("button",{type:"button",className:"-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 sm:-mr-2 transition ease-in-out duration-150","aria-label":"Dismiss",onClick:function(){return a(!1)}},r.a.createElement("svg",{className:"h-6 w-6 text-white",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},r.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})))))))))}}}]);
//# sourceMappingURL=component---src-pages-documentation-js-58e65ba01bc7f22fb383.js.map