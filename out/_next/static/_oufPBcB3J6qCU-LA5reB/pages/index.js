(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"/0+H":function(e,t,a){"use strict";t.__esModule=!0,t.isInAmpMode=r,t.useAmp=function(){return r(o.default.useContext(i.AmpStateContext))};var n,o=(n=a("q1tI"))&&n.__esModule?n:{default:n},i=a("lwAK");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,a=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,i=e.hasQuery;return a||o&&(void 0!==i&&i)}},"1dv8":function(e,t,a){e.exports={headerContainer:"index_headerContainer__3IVua",squareContainer:"index_squareContainer__1Zye9",badgesContainer:"index_badgesContainer__oqxDr",ProjectImage:"index_ProjectImage__1HOiF",StackContainer:"index_StackContainer__2N3nK"}},"8Kt/":function(e,t,a){"use strict";t.__esModule=!0,t.defaultHead=s,t.default=void 0;var n=l(a("q1tI")),o=l(a("Xuae")),i=a("lwAK"),r=a("FYa8"),c=a("/0+H");function l(e){return e&&e.__esModule?e:{default:e}}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[n.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(n.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===n.default.Fragment?e.concat(n.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var u=["name","httpEquiv","charSet","itemProp"];function m(e,t){return e.reduce((function(e,t){var a=n.default.Children.toArray(t.props.children);return e.concat(a)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,a=new Set,n={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var r=o.key.slice(o.key.indexOf("$")+1);e.has(r)?i=!1:e.add(r)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var c=0,l=u.length;c<l;c++){var s=u[c];if(o.props.hasOwnProperty(s))if("charSet"===s)a.has(s)?i=!1:a.add(s);else{var d=o.props[s],m=n[s]||new Set;m.has(d)?i=!1:(m.add(d),n[s]=m)}}}return i}}()).reverse().map((function(e,t){var a=e.key||t;return n.default.cloneElement(e,{key:a})}))}var p=(0,o.default)();function f(e){var t=e.children;return(n.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return n.default.createElement(r.HeadManagerContext.Consumer,null,(function(a){return n.default.createElement(p,{reduceComponentsToState:m,handleStateChange:a,inAmpMode:(0,c.isInAmpMode)(e)},t)}))})))}f.rewind=p.rewind;var h=f;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,a){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext(null);t.HeadManagerContext=o},Ijbi:function(e,t,a){var n=a("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,a){var n=a("Ijbi"),o=a("EbDI"),i=a("ZhPi"),r=a("Bnag");e.exports=function(e){return n(e)||o(e)||i(e)||r()}},RNiq:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var n=a("ODXe"),o=a("q1tI"),i=a.n(o),r=a("8Kt/"),c=a.n(r),l=a("Eki8"),s=a("IP2g"),d=a("wHSu"),u=a("8tEE"),m=a("ZMKu"),p=[{100:"#cce1ff",200:"#99c3ff",300:"#66a6ff",400:"#3388ff",500:"#006aff",600:"#0055cc",700:"#004099",800:"#002a66",900:"#001533"},{100:"#FFF5F5",200:"#FED7D7",300:"#FEB2B2",400:"#FC8181",500:"#F56565",600:"#E53E3E",700:"#C53030",800:"#9B2C2C",900:"#742A2A"},{100:"#FFFAF0",200:"#FEEBC8",300:"#FBD38D",400:"#F6AD55",500:"#ED8936",600:"#DD6B20",700:"#C05621",800:"#9C4221",900:"#7B341E"},{100:"#FFFFF0",200:"#FEFCBF",300:"#FAF089",400:"#F6E05E",500:"#ECC94B",600:"#D69E2E",700:"#B7791F",800:"#975A16",900:"#744210"},{100:"#F0FFF4",200:"#C6F6D5",300:"#9AE6B4",400:"#68D391",500:"#48BB78",600:"#38A169",700:"#2F855A",800:"#276749",900:"#22543D"},{100:"#E6FFFA",200:"#B2F5EA",300:"#81E6D9",400:"#4FD1C5",500:"#38B2AC",600:"#319795",700:"#2C7A7B",800:"#285E61",900:"#234E52"},{100:"#FAF5FF",200:"#E9D8FD",300:"#D6BCFA",400:"#B794F4",500:"#9F7AEA",600:"#805AD5",700:"#6B46C1",800:"#553C9A",900:"#44337A"},{100:"#FFF5F7",200:"#FED7E2",300:"#FBB6CE",400:"#F687B3",500:"#ED64A6",600:"#D53F8C",700:"#B83280",800:"#97266D",900:"#702459"}],f=[{title:"Replayed Dashboard",description:"Video Editing Managment Dashboard",imageURL:"project-13.gif",stack:["REACT","JAVASCRIPT","GROMMET","STRIPE","DROPBOX"],demoLink:"https://app.replayed.co/"},{title:"Hacker News",description:"Trending News React App",imageURL:"project-12.png",stack:["REACT","JAVASCRIPT"],demoLink:"https://imsolitude.github.io/HackerNews/",githubLink:"https://github.com/ImSolitude/HackerNews"},{title:"Skippit",description:"Skippit's React Landing Page",imageURL:"project-11.png",stack:["REACT","JAVASCRIPT","ANT.DESIGN","CLOUD FIREBASE"],demoLink:"https://skippitapp.com/"},{title:"Replayed",description:"Replayed Co's Landing Page",imageURL:"project-10.png",stack:["JAVASCRIPT","BOOTSTRAP","HTML","CSS"],demoLink:"https://replayed.co/"},{title:"ReacTrivia",description:"React Quiz App",imageURL:"project-9.png",stack:["REACT","JAVASCRIPT"],demoLink:"https://imsolitude.github.io/ReacTrivia/",githubLink:"https://github.com/ImSolitude/ReacTrivia"},{title:"ReactCalculator",description:"Simple React Calculator",imageURL:"project-8.png",stack:["REACT","JAVASCRIPT","HTML","CSS"],demoLink:"https://imsolitude.github.io/ReactCalculator/",githubLink:"https://github.com/ImSolitude/ReactCalculator"},{title:"QuoteNext",description:"React Random Quotes Generator",imageURL:"project-7.png",stack:["REACT","JAVASCRIPT","HTML","CSS"],demoLink:"https://imsolitude.github.io/QuoteNext/",githubLink:"https://github.com/ImSolitude/QuoteNext"},{title:"MarketWhale",description:"React Inventory Web App",imageURL:"project-6.png",stack:["REACT","JAVASCRIPT","HTML","CSS"],demoLink:"https://market-whale-mj.netlify.com/",githubLink:"https://github.com/ImSolitude/market-whale"},{title:"GitDiamond",description:"App Landing Page",imageURL:"project-5.png",stack:["JAVASCRIPT","BOOTSTRAP","HTML","CSS"],demoLink:"https://imsolitude.github.io/GitDiamond/",githubLink:"https://github.com/ImSolitude/GitDiamond"},{title:"PCTrance",description:"Gaming Website Landing Page",imageURL:"project-4.png",stack:["JAVASCRIPT","BOOTSTRAP","HTML","CSS"],demoLink:"https://imsolitude.github.io/PCTrance/",githubLink:"https://github.com/ImSolitude/PCTrance"},{title:"QuickFood",description:"Web App UI Concept",imageURL:"project-3.png",stack:["JQUERY","HTML","CSS"],demoLink:"https://imsolitude.github.io/QuickFood/",githubLink:"https://github.com/ImSolitude/QuickFood"},{title:"Hover Styles",description:"On Hover Ready-to-use UI Snippets",imageURL:"project-2.png",stack:["HTML","CSS"],demoLink:"https://imsolitude.github.io/hover-styles/",githubLink:"https://github.com/ImSolitude/hover-styles"},{title:"MeteorX",description:"Jekyll-based Landing Page",imageURL:"project-1.png",stack:["JEKYLL","HTML","CSS"],demoLink:"https://imsolitude.github.io/MeteorX/",githubLink:"https://github.com/ImSolitude/MeteorX"}],h=a("1dv8"),b=a.n(h),g=i.a.createElement;function y(e){var t=Object(o.useState)(1),a=t[0],r=t[1],h=Object(m.d)({scale:1,rotate:0},{scale:1.2,rotate:30},{scale:1.3,rotate:60},{scale:1.4,rotate:90},{scale:1.5,rotate:120},{scale:1.6,rotate:150},{scale:1.7,rotate:165},{scale:1.8,rotate:180}),y=Object(n.a)(h,2),v=y[0],C=y[1];return g(i.a.Fragment,null,g(c.a,null,g("title",null,"Muhammad J \u2014 Front-end Developer")),g("div",{className:"".concat(b.a.headerContainer," max-w-screen-lg mx-auto flex flex-wrap items-center")},g(l.e,{className:"lg:w-1/2 w-full space-y-4"},g("p",{className:"text-base"},"Hey there, I'm a"),g("h1",{className:"text-2xl md:text-4xl font-semibold"},"Front-end Developer. JavaScript and UI/UX enthusiast. I build & rescue websites & applications mostly with React."),g("div",null)),g(m.b.div,{initial:{opacity:0},animate:{opacity:1},className:"".concat(b.a.squareContainer," bg-blue-500 rounded-none lg:rounded-lg lg:w-1/2 w-full flex justify-center items-center p-2 lg:py-0")},g(m.b.div,{initial:{scale:.5},animate:v,onTap:function(){!function(){var e=p[a];document.documentElement.style.setProperty("--main-100",e[100]),document.documentElement.style.setProperty("--main-200",e[200]),document.documentElement.style.setProperty("--main-300",e[300]),document.documentElement.style.setProperty("--main-400",e[400]),document.documentElement.style.setProperty("--main-500",e[500]),document.documentElement.style.setProperty("--main-600",e[600]),document.documentElement.style.setProperty("--main-700",e[700]),document.documentElement.style.setProperty("--main-800",e[800]),document.documentElement.style.setProperty("--main-900",e[900]),a!==p.length-1?r((function(e){return e+1})):r(0)}(),C()},whileTap:{scale:1.1},className:"bg-gray-100 rounded-lg w-24 h-24 md:w-32 md:h-32 cursor-pointer"}))),g(m.b.div,{className:"max-w-screen-lg mx-auto mt-12 md:mt-0 mb-20 md:mb-40"},g(l.e,{className:"w-full sm:pt-10 md:pb-10 px-2 rounded-none lg:rounded-lg bg-gray-100 text-black shadow-sm"},g("div",{className:"max-w-screen-lg flex flex-col justify-center md:px-16 px-8 mx-auto"},g("p",{className:"".concat(b.a.skillsParagraph," font-semibold text-lg md:text-2xl")},"I code with JavaScript, primarily in React and recently with Next.js, Gatsby & TailwindCSS. I have experience working in Firebase and 3rd party APIs (Stripe, Dropbox, Google Auth, etc.)."),g("div",{className:"".concat(b.a.badgesContainer," flex flex-wrap mt-4 mb-4")},g(l.b,{label:"JavaScript",icon:{icon:u.g,color:"#f0db4f"}}),g(l.b,{label:"React",icon:{icon:u.i,color:"#00d8ff"}}),g(l.b,{label:"HTML",icon:{icon:u.f,color:"#F16529"}}),g(l.b,{label:"CSS",icon:{icon:u.c,color:"#264de4"}}),g(l.b,{label:"Git",icon:{icon:u.d,color:"#000"}}),g(l.b,{label:"Next.js"}),g(l.b,{label:"Gatsby"}),g(l.b,{label:"Bootstrap",icon:{icon:u.a,color:"#602C50"}}),g(l.b,{label:"TailwindCSS"}),g(l.b,{label:"Firebase"}),g(l.b,{label:"REST API"}))),g("div",{className:"w-11/12 md:w-2/3 mx-auto bg-white text-gray-900 rounded-lg shadow-lg text-center py-6 md:py-5 px-4 md:px-2 -mb-20"},g("h1",{className:"mb-2 text-sm md:text-xl font-semibold break-words"},"Have a project, idea or problem you'd like to discuss?"),g("p",{className:"text-sm md:text-base"},"Let's talk:"," ",g("a",{href:"mailto:muhammadcodez@gmail.com",className:"underline"},"muhammadcodez@gmail.com"))))),g(l.e,{className:"max-w-screen-lg mx-auto mb-20",id:"work"},g("h1",{className:"text-4xl mb-5 md:mb-4"},"Work",g("span",{className:"text-blue-500"},".")),g("div",{className:"flex flex-wrap -m-4"},f.map((function(e,t){return g("div",{className:"w-full md:w-1/2 p-4",key:t},g("div",{className:"".concat(b.a.Project," ").concat(b.a["Project-".concat(t+1)]," overflow-hidden bg-gray-100 p-6 rounded-lg transition-shadow duration-300 shadow hover:shadow-lg")},g("img",{className:"".concat(b.a.ProjectImage," rounded shadow-xs w-full object-cover mb-4"),src:"/images/projects/".concat(e.imageURL),alt:"project-1",loading:"lazy"}),g("div",{className:"".concat(b.a.StackContainer," tracking-widest text-blue-500 font-medium title-font")},e.stack.map((function(e,t){return g(l.b,{key:t,label:e,className:"font-semibold bg-blue-100 hover:bg-blue-200 text-10"})}))),g("h2",{className:"text-gray-900 font-bold text-3xl title-font"},e.title),g("p",{className:"leading-relaxed text-base mb-4"},e.description),g("div",{className:"flex"},g(l.c,{onClick:function(){window.open(e.demoLink,"_blank")},icon:{icon:d.a},reverse:!0},"Demo"),e.githubLink&&g("a",{href:e.githubLink,target:"_blank",className:"plain flex items-center ml-auto transition duration-300 opacity-25 hover:opacity-50"},g(s.a,{icon:u.e,size:"2x"})))))})),g("div",{className:"w-full md:w-1/2 p-4"},g("a",{href:"https://codepen.io/muhammadj/",target:"_blank",className:"no-translate"},g("div",{className:"flex flex-col justify-center items-center cursor-pointer h-full overflow-hidden bg-blue-900 text-white p-6 rounded-lg transition-shadow duration-300 shadow hover:shadow-lg"},g("h2",{className:"font-bold text-2xl title-font"},g("span",null,"More at")," ",g(s.a,{icon:u.b,size:"2x"})," ",g("span",null,"Codepen")),g("p",{className:"leading-relaxed text-base mb-4 opacity-50 underline"},"https://codepen.io/muhammadj")))))),g(l.a,null))}},Xuae:function(e,t,a){"use strict";var n=a("lwsE"),o=a("PJYZ"),i=a("W8MJ"),r=a("7W2i"),c=a("a1gu"),l=a("Nsbk"),s=a("RIqP");function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=l(e);if(t){var o=l(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return c(this,a)}}t.__esModule=!0,t.default=void 0;var u=a("q1tI"),m=!1;t.default=function(){var e,t=new Set;function a(a){e=a.props.reduceComponentsToState(s(t),a.props),a.props.handleStateChange&&a.props.handleStateChange(e)}return(function(c){r(s,c);var l=d(s);function s(e){var i;return n(this,s),i=l.call(this,e),m&&(t.add(o(i)),a(o(i))),i}return i(s,null,[{key:"rewind",value:function(){var a=e;return e=void 0,t.clear(),a}}]),i(s,[{key:"componentDidMount",value:function(){t.add(this),a(this)}},{key:"componentDidUpdate",value:function(){a(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),a(this)}},{key:"render",value:function(){return null}}]),s}(u.Component))}},lwAK:function(e,t,a){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=a("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",1,2,5,3,6,0,4]]]);