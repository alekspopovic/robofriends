(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=n(10),s=n(8),l=n(17),u=n(18),h=(n(28),n(3)),d=n(4),b=n(6),p=n(5),m=n(7),E=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"avatar"}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},f=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,n){return a.a.createElement(E,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},g=function(e){e.searchField;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},O=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid white",height:"800px"}},e.children)},v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"The application has encountered an error. Oooops!"):this.props.children}}]),t}(r.Component),j=function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return a.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),t}(r.Component),y=(n(29),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement(j,null),a.a.createElement(g,{searchChange:n}),a.a.createElement(O,null,a.a.createElement(v,null,a.a.createElement(f,{robots:c}))))}}]),t}(r.Component)),R=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAIL",payload:t})})})}}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S={searchField:""},w={isPending:!1,robots:[],error:""},C=(n(30),Object(l.createLogger)()),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAIL":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(s.d)(_,Object(s.a)(u.a,C));c.a.render(a.a.createElement(i.a,{store:T},a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.1dc04deb.chunk.js.map