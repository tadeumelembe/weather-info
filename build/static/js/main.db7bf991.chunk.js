(this["webpackJsonprecruiter-front-end"]=this["webpackJsonprecruiter-front-end"]||[]).push([[0],{166:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(31),l=a.n(s),r=(a(89),a(90),a(91),a(25)),i=a(7),o=a(36),d=a(75),j=a(189),u=a(190),h=a(191),m=a(192),b=a(4),x=a(9),O=a(187),g=a(197),p=a(194),f=a(188),v=a(193),w=a(195),y=(a(158),a(1));function N(e){console.log("-----------------------"),console.log(e.weather);var t=function(){return window.google?Promise.resolve():new Promise((function(e){var t=document.createElement("script"),a=document.getElementsByTagName("head")[0];t.src="https://www.gstatic.com/charts/loader.js",t.async=!0,a.appendChild(t),t.addEventListener("load",(function(){return e(t)}))}))};function a(e){var t=new Date(1e3*e),a=(t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2)),c=("0"+t.getDate()).slice(-2),n=t.getHours();("0"+t.getMinutes()).slice(-2);return n>12?(n-12,"PM"):12===n?(12,"PM"):0==n&&12,c+"/"+a}return Object(c.useEffect)((function(){window.google=void 0,t().then((function(){return function(){function t(){var t=new window.google.visualization.DataTable;t.addColumn("string","X"),t.addColumn("number","Temperatura"),t.addRows([[a(e.weather[0].dt),e.weather[0].temp.max],[a(e.weather[1].dt),e.weather[1].temp.max],[a(e.weather[2].dt),e.weather[2].temp.max],[a(e.weather[3].dt),e.weather[3].temp.max],[a(e.weather[4].dt),e.weather[4].temp.max],[a(e.weather[5].dt),e.weather[5].temp.max],[a(e.weather[6].dt),e.weather[6].temp.max]]);var c={hAxis:{title:"Data"},vAxis:{title:"Temperatura (Celsius)"}};new window.google.visualization.LineChart(document.getElementById("chart_div")).draw(t,c)}window.google.charts.load("current",{packages:["corechart","line"]}),window.google.charts.setOnLoadCallback(t)}()}))}),[]),Object(y.jsxs)("div",{style:{maxWidth:"100%",width:"90%"},className:"row",children:[Object(y.jsx)("div",{className:"col-12 w-full",children:Object(y.jsx)("h5",{children:"Gr\xe1fico da taxa de varia\xe7\xe3o da temperatura"})}),Object(y.jsx)("div",{className:"col-12 w-full mx-auto text-center",children:Object(y.jsx)("div",{className:"mx-auto",id:"chart_div",style:{height:400}})})]})}var S=["children","value","index"];function E(e){var t=e.children,a=e.value,c=e.index,n=Object(x.a)(e,S);return Object(y.jsx)("div",Object(b.a)(Object(b.a)({role:"tabpanel",hidden:a!==c,id:"scrollable-auto-tabpanel-".concat(c),"aria-labelledby":"scrollable-auto-tab-".concat(c)},n),{},{children:a===c&&Object(y.jsx)(v.a,{p:3,children:Object(y.jsx)("div",{children:t})})}))}function C(e){return{id:"scrollable-auto-tab-".concat(e),"aria-controls":"scrollable-auto-tabpanel-".concat(e)}}var P=Object(O.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function D(e){var t=P(),a=n.a.useState(0),c=Object(r.a)(a,2),s=c[0],l=c[1],i=["Dom","Seg","Ter","Qua","Qui","Sex","S\xe1b"];function o(e){var t=new Date(1e3*e),a=(t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2)),c=("0"+t.getDate()).slice(-2),n=t.getHours();("0"+t.getMinutes()).slice(-2);return n>12?(n-12,"PM"):12===n?(12,"PM"):0==n&&12,c+"/"+a}function d(e){var t=new Date(1e3*e).getDay();return i[t]}return Object(y.jsxs)("div",{className:t.root,children:[Object(y.jsx)(g.a,{position:"static",color:"default",children:Object(y.jsxs)(p.a,{value:s,onChange:function(e,t){l(t)},variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example",TabIndicatorProps:{style:{backgroundColor:"#20232a"}},children:[Object(y.jsx)(f.a,Object(b.a)({label:"Di\xe1rio"},C(0))),Object(y.jsx)(f.a,Object(b.a)({label:"Gr\xe1fico"},C(1))),Object(y.jsx)(f.a,Object(b.a)({label:"Mapa"},C(2)))]})}),Object(y.jsx)(E,{value:s,index:0,children:Object(y.jsx)("div",{className:"row",children:e.dailyWeather.map((function(e,t){if(!(0==t||t>=6))return Object(y.jsx)("div",{className:"col-12 p-2 col-md-6",children:Object(y.jsx)(w.a,{style:{width:"100%"},children:Object(y.jsx)(w.a.Body,{children:Object(y.jsxs)("div",{className:"d-flex",children:[Object(y.jsxs)("h6",{style:{marginRight:10},className:"my-auto",children:[d(e.dt),", ",o(e.dt),"  "]}),Object(y.jsxs)("div",{style:{marginLeft:5},className:"my-auto",children:[Object(y.jsxs)("h3",{style:{display:"inline"},className:"",children:[e.temp.max,Object(y.jsx)("span",{children:"\u2103"})]}),Object(y.jsxs)("h6",{style:{display:"inline",marginLeft:5},className:"text-muted",children:[e.temp.min,Object(y.jsx)("span",{children:"\u2103"})]})]}),Object(y.jsx)("p",{style:{marginLeft:30},className:"my-auto text-capitalize",children:e.weather[0].description})]})})})},t)}))})}),Object(y.jsx)(E,{value:s,index:1,children:Object(y.jsx)(N,{weather:e.dailyWeather})}),Object(y.jsx)(E,{value:s,index:2})]})}var T=a(79),F=a.n(T),L=a(78),_=a.n(L);Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).GOOGLE_API_KEY;function M(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(i.f)(),l=function(){return window.google?Promise.resolve():new Promise((function(e){var t=document.createElement("script"),a=document.getElementsByTagName("head")[0];t.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOmbgpcRJXTRLaF0YVwXHFPxSmCbGf7lA&libraries=places&v=weekly&channel=2",t.async=!0,a.appendChild(t),t.addEventListener("load",(function(){return e(t)}))}))};Object(c.useEffect)((function(){window.google=void 0,l().then((function(){return o()}))}),[]);var o=function(){var e=document.getElementById("pac-input"),t=new window.google.maps.places.SearchBox(e,{types:["(cities)"]});t.addListener("places_changed",(function(){var e=t.getPlaces(),a=e[0].formatted_address;e.forEach((function(e){if(e.geometry){console.log("lat",e.geometry.location.lat()),console.log("lng",e.geometry.location.lng());var t={lat:e.geometry.location.lat(),lng:e.geometry.location.lng()};return s.push("/weather/".concat(a,"/").concat(t.lat,"/").concat(t.lng))}}))}))};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(_.a,{}),Object(y.jsx)("input",{id:"pac-input",className:"controls",type:"text",placeholder:"Introduzir cidade/regi\xe3o",value:a,onChange:function(e){return n(e.target.value)}})]})}var k=Object(d.create)({baseURL:"https://api.openweathermap.org/data/2.5",headers:{Accept:"application/vnd.github.v3+json"}});function z(){var e=Object(i.g)(),t=e.address,a=e.lat,n=e.lng,s=Object(c.useState)(!0),l=Object(r.a)(s,2),d=l[0],b=l[1],x=Object(c.useState)(null),O=Object(r.a)(x,2),g=O[0],p=O[1];return Object(c.useEffect)((function(){b(!0),k.get("/onecall?lat=".concat(a,"&lon=").concat(n,"&exclude=hourly,minutely,alerts&appid=41dd22a7dd63c54afb6b91e5144b8c63&units=metric&lang=pt")).then((function(e){console.log(e.data.daily),(e.status="200")?p(e.data):p("")})).catch((function(e){console.log(e)})).finally((function(){b(!1)}))}),[]),Object(y.jsxs)("div",{children:[Object(y.jsx)("div",{style:{minHeight:60,backgroundColor:"#20232a"},children:Object(y.jsx)(j.a,{className:"px-5 py-2",children:Object(y.jsxs)(u.a,{className:"justify-content-center w-full",children:[Object(y.jsx)(h.a,{xs:12,sm:12,md:6,className:"d-flex",children:Object(y.jsx)(o.b,{style:{textDecoration:"none"},to:"/about",children:Object(y.jsx)(F.a,{style:{color:"#fff",fontSize:40}})})}),Object(y.jsx)(h.a,{xs:12,sm:12,md:6,className:"text-left mr-0",children:Object(y.jsx)("h1",{className:"text-white d-none",children:"Weater"})})]})})}),d?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(j.a,{className:"mx-auto pt-5",children:Object(y.jsx)("div",{className:"mx-auto text-center",children:Object(y.jsx)(m.a,{animation:"border",style:{width:"3rem",height:"3rem"},role:"status",children:Object(y.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})})}):Object(y.jsx)(y.Fragment,{children:g?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:"pt-5",children:Object(y.jsxs)(j.a,{className:"mx-auto",children:[Object(y.jsxs)("div",{className:"mx-auto text-center",children:[Object(y.jsx)("h2",{children:t}),Object(y.jsxs)("p",{style:{fontSize:20},children:["Actualizado \xe0 ",function(e){var t=new Date(1e3*e),a=t.getFullYear(),c=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2),s=t.getHours(),l=s,r="AM";return s>12?(l=s-12,r="PM"):12===s?(l=12,r="PM"):0==s&&(l=12),n+"-"+c+"-"+a+", "+l+":"+("0"+t.getMinutes()).slice(-2)+" "+r}(g.current.dt)]}),Object(y.jsxs)("span",{style:{fontSize:60},children:[g.current.temp,Object(y.jsx)("span",{children:"\u2103"})]}),Object(y.jsx)("p",{style:{textTransform:"capitalize",fontSize:20},children:g.current.weather[0].description}),Object(y.jsxs)("div",{style:{fontSize:18},className:"row w-75 mx-auto",children:[Object(y.jsxs)("div",{className:"col-sm-12 col-md-4",children:[Object(y.jsx)("span",{style:{fontWeight:500},children:"Humidade: "}),g.current.humidity," %"]}),Object(y.jsxs)("div",{className:"col-sm-12 col-md-4",children:[Object(y.jsx)("span",{style:{fontWeight:500},children:"Visibilidade: "}),Number(g.current.visibility)/1e3," km"]}),Object(y.jsxs)("div",{className:"col-sm-12 col-md-4",children:[Object(y.jsx)("span",{style:{fontWeight:500},children:"Vento: "}),(3.6*Number(g.current.wind_speed)).toFixed(2)," km/h"]})]})]}),Object(y.jsx)("div",{className:"pt-5",children:Object(y.jsx)(D,{dailyWeather:g.daily})})]})})}):Object(y.jsx)("div",{className:"pt-5",children:Object(y.jsx)(j.a,{className:"mx-auto",children:Object(y.jsx)("div",{className:"mx-auto text-center",children:Object(y.jsx)("h2",{children:"Sem informa\xe7\xe3o dispon\xedvel"})})})})})]})}function W(){return Object(y.jsx)("div",{className:"home-div",children:Object(y.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center h-75 w-50 ml-0 mr-0 mx-auto",children:[Object(y.jsx)("h1",{className:"text-center pb-3 text-white",children:"Weather"}),Object(y.jsx)("div",{children:Object(y.jsx)("span",{className:"home-search w-full",children:Object(y.jsx)(M,{})})})]})})}var B=function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(o.a,{children:Object(y.jsxs)(i.c,{children:[Object(y.jsx)(i.a,{path:"/weather/:address/:lat/:lng",children:Object(y.jsx)(z,{})}),Object(y.jsx)(i.a,{path:"/",children:Object(y.jsx)(W,{})})]})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,199)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),s(e),l(e)}))};l.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(B,{})}),document.getElementById("root")),A()},89:function(e,t,a){},90:function(e,t,a){}},[[166,1,2]]]);
//# sourceMappingURL=main.db7bf991.chunk.js.map