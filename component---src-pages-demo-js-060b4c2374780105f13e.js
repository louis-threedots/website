(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{vX0t:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),o=a.n(n),l=a("vrFN");function r(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}var s=a("MZca"),i=function(e){var t=e.loading,a=Object(n.useState)(!0),l=a[0],i=a[1];return Object(n.useEffect)((function(){t||setTimeout(i,1600,!1)}),[t]),o.a.createElement("div",{className:r("fixed bottom-0 inset-x-0 px-4 pb-6 sm:inset-0 sm:p-0 sm:flex sm:items-center sm:justify-center",!l&&"pointer-events-none")},o.a.createElement(s.a,{show:l,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"},o.a.createElement("div",{className:"fixed inset-0 transition-opacity"},o.a.createElement("div",{className:"absolute inset-0 bg-gray-500 opacity-75"}))),o.a.createElement(s.a,{show:l,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},o.a.createElement("div",{className:"bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-sm sm:w-full sm:p-6"},o.a.createElement("div",null,o.a.createElement("div",{className:r("mx-auto flex items-center justify-center h-12 w-12 rounded-full",t?"bg-orange-100":"bg-green-100")},t?o.a.createElement("svg",{fill:"currentColor",className:"h-6 w-6 text-orange-600",viewBox:"0 0 20 20"},o.a.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",clipRule:"evenodd"})):o.a.createElement("svg",{className:"h-6 w-6 text-green-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},o.a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 13l4 4L19 7"}))),o.a.createElement("div",{className:"mt-3 text-center sm:mt-5"},o.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},t?"Loading...":"Complete!"))))))},m=function(e){var t=Object(n.useState)(),a=t[0],o=t[1],l=Object(n.useState)(!0),r=l[0],s=l[1];Object(n.useEffect)((function(){var t=document.createElement("script");return t.innerHTML="self.pyodideWorker = new Worker('/website/pyodideWorker.js')",document.body.appendChild(t),window.pyodideWorker.onmessage=function(t){var a=t.data;r&&s(!1),e(a)},window.pyodideWorker.postMessage({method:"runPython",data:"True"}),o(window.pyodideWorker),function(){document.body.removeChild(t)}}),[]);return{loading:r,pyodide:a,runPython:function(e){a&&a.postMessage({method:"runPython",data:e})},loadPackages:function(e){a&&a.postMessage({method:"loadPackages",data:e})},getPythonGlobal:function(e){a&&a.postMessage({method:"pyimport",data:e})},attachGlobal:function(e){a&&a.postMessage({method:"attachGlobal",data:e})}}},c=function(){var e=m((function(e){c(e)})),t=e.loading,a=e.attachGlobal,l=e.runPython,r=Object(n.useState)("Loading..."),s=r[0],c=r[1];return Object(n.useEffect)((function(){t||(a({}),l("from js import demo"),l("exec(demo)"),l('"Hello, world!"'))}),[t]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"bg-gray-900 pb-32"},o.a.createElement("div",{className:"py-10"},o.a.createElement("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},o.a.createElement("h1",{className:"text-3xl leading-9 font-bold text-white"},o.a.createElement("span",{className:"font-louis"},"louis")," Demo")))),o.a.createElement("div",{className:"-mt-32"},o.a.createElement("div",{className:"max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8"},o.a.createElement("div",{className:"bg-white rounded-lg shadow"},o.a.createElement("div",{className:"py-5 border-b border-gray-200 px-4 sm:px-6"},o.a.createElement("div",{className:"-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-no-wrap"},o.a.createElement("div",{className:"ml-4 mt-2"},o.a.createElement("h3",{className:"text-lg leading-6 font-medium text-gray-900"},"Cells (3)")),o.a.createElement("div",{className:"ml-4 mt-2 flex-shrink-0"},o.a.createElement("span",{className:"inline-flex rounded-md shadow-sm"},o.a.createElement("button",{type:"button",className:"relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-700 active:bg-indigo-700"},"Add cell"))))),o.a.createElement("div",null,"Content from Python: ",o.a.createElement("br",null),s),o.a.createElement("div",{className:"spinner w-32 h-32"})))),o.a.createElement(i,{loading:t}))};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:"Interactive Demo"}),o.a.createElement(c,null))}}}]);
//# sourceMappingURL=component---src-pages-demo-js-060b4c2374780105f13e.js.map