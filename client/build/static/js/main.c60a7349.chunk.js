(this["webpackJsonpeci-frontend"]=this["webpackJsonpeci-frontend"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(24),i=c.n(r),a=(c(29),c(30),c(12)),j=c.n(a),d=c(15),o=c(4),h=c(5),b=c(8),u=c(7),l=c(53),v=c(54),O=c(10),x=c.n(O),f=c(0),p=function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.service.SERVICE_NAME}),Object(f.jsx)("td",{children:e.service.STATE}),Object(f.jsx)("td",{children:Object(f.jsx)(v.a,{type:"button",class:"btn btn-success active",children:"Start"})}),Object(f.jsx)("td",{children:Object(f.jsx)(v.a,{type:"button",class:"btn btn-danger active",children:" Stop"})})]})},S=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).fetchData=Object(d.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:3000/tcservices/set1/",e.next=3,fetch("http://localhost:3000/tcservices/set1/");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n.setState({services:c.Windows[0].TC});case 8:case"end":return e.stop()}}),e)}))),n.state={services:[]},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t=this;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:this.intervalId=setInterval((function(){t.fetchData()}),3e3);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"serviceList",value:function(){return this.state.services.map((function(e){return Object(f.jsx)(p,{service:e},e._id)}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"TC Service List"}),Object(f.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Service Name"}),Object(f.jsx)("th",{children:"Status"})]})}),Object(f.jsx)("tbody",{children:this.serviceList()})]})]})}}]),c}(n.Component),y=function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.service.SERVICE_NAME}),Object(f.jsx)("td",{children:e.service.STATE}),Object(f.jsx)("td",{children:Object(f.jsx)(v.a,{type:"button",class:"btn btn-success active",children:"Start"})}),Object(f.jsx)("td",{children:Object(f.jsx)(v.a,{type:"button",class:"btn btn-danger active",children:" Stop"})})]})},m=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={services:[]},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:3000/awservices/set1/").then((function(t){console.log(t.data),e.setState({services:t.data.Windows[0].AW})})).catch((function(e){console.log(e)}))}},{key:"serviceList",value:function(){return this.state.services.map((function(e){return Object(f.jsx)(y,{service:e},e._id)}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"AW Service List"}),Object(f.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Service Name"}),Object(f.jsx)("th",{children:"Status"})]})}),Object(f.jsx)("tbody",{children:this.serviceList()})]})]})}}]),c}(n.Component),g=function(e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.service.SERVICE_NAME}),Object(f.jsx)("td",{children:e.service.STATE}),Object(f.jsx)("td",{children:Object(f.jsx)(v.a,{type:"button",class:"btn btn-success active",children:"Start"})}),Object(f.jsx)("td",{children:Object(f.jsx)(v.a,{type:"button",class:"btn btn-danger active",children:" Stop"})})]})},k=function(e){Object(b.a)(c,e);var t=Object(u.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={services:[]},n}return Object(h.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.a.get("http://localhost:3000/dbservices/set1/").then((function(t){console.log(t.data),e.setState({services:t.data.Windows[0].DB})})).catch((function(e){console.log(e)}))}},{key:"serviceList",value:function(){return this.state.services.map((function(e){return Object(f.jsx)(g,{service:e},e._id)}))}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"DB Service List"}),Object(f.jsxs)(l.a,{striped:!0,bordered:!0,hover:!0,children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Service Name"}),Object(f.jsx)("th",{children:"Status"})]})}),Object(f.jsx)("tbody",{children:this.serviceList()})]})]})}}]),c}(n.Component);var E=function(){return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(S,{}),Object(f.jsx)(m,{}),Object(f.jsx)(k,{})]})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),r(e),i(e)}))};c(51);i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(E,{})}),document.getElementById("root")),C()}},[[52,1,2]]]);
//# sourceMappingURL=main.c60a7349.chunk.js.map