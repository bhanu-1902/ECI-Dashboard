(this["webpackJsonpeci-frontend"]=this["webpackJsonpeci-frontend"]||[]).push([[0],{25:function(e,t,c){},26:function(e){e.exports=JSON.parse('{"windows":{"set1":{"tc":{"creds":{"ip":"10.134.64.43","username":"yytcadm","password":"Pa55w_rd"},"Teamcenter Action Manager Service":"actionmgrd","Teamcenter 4GD Change Detection Service":"4gd_change_detection_service","Teamcenter Schedule Management Service":"schmgtwfd","Teamcenter Shared Metadata Cache Service":"shared_server_metadata_cache_mgr","Teamcenter Subscription Manager Service":"subscripmgrd","Teamcenter Task Monitor Service":"taskmonitor","Teamcenter Tessellation Service":"tess_server","Teamcenter Server Manager config1_PoolA":"\\"Teamcenter Server Manager config1_PoolA\\"","Teamcenter FSC Service FSC_pnv6s1869_yytcadm":"\\"Teamcenter FSC Service FSC_pnv6s1869_yytcadm\\"","Teamcenter LIS Service LIS_pnv6s1869_yytcadm":"\\"Teamcenter LIS Service LIS_pnv6s1869_yytcadm\\""},"aw":{"creds":{"ip":"10.134.64.163","username":"yytcadm","password":"Pa55w_rd"},"Teamcenter Log Forwarder":"Teamcenter_Log_Forwarder","Teamcenter Process Manager":"\\"Teamcenter Process Manager\\"","Weblogic_tc_AdminServer":"Weblogic_tc_AdminServer"},"db":{"creds":{"ip":"10.134.64.140","username":"yytcadm","password":"Pa55w_rd"},"OracleServiceTC":"OracleServiceTC"}},"set2":{"tc":{"creds":{"ip":"pnv6s1884","username":"plm\\\\yytcadm","password":"S!p!APR04S!p!APR04S!p!APR04"},"Teamcenter Action Manager Service":"actionmgrd","Teamcenter 4GD Change Detection Service":"4gd_change_detection_service","Teamcenter Schedule Management Service":"schmgtwfd","Teamcenter Shared Metadata Cache Service":"shared_server_metadata_cache_mgr","Teamcenter Subscription Manager Service":"subscripmgrd","Teamcenter Task Monitor Service":"taskmonitor","Teamcenter Tessellation Service":"tess_server","Teamcenter Server Manager config1_PoolA":"\\"Teamcenter Server Manager config1_PoolA\\"","Teamcenter FSC Service FSC_pnv6s1869_yytcadm":"\\"Teamcenter FSC Service FSC_pnv6s1869_yytcadm\\"","Teamcenter LIS Service LIS_pnv6s1869_yytcadm":"\\"Teamcenter LIS Service LIS_pnv6s1869_yytcadm\\""},"aw":{"creds":{"ip":"pnv6s1883","username":"plm\\\\yytcadm","password":"S!p!APR04S!p!APR04S!p!APR04"},"Teamcenter Log Forwarder":"Teamcenter_Log_Forwarder","Teamcenter Process Manager":"\\"Teamcenter Process Manager\\"","Weblogic_tc_AdminServer":"Weblogic_tc_AdminServer"},"db":{"creds":{"ip":"pnv6s1939","username":"plm\\\\yytcadm","password":"S!p!APR04S!p!APR04S!p!APR04"},"OracleServiceTC":"OracleServiceTC"}}}}')},44:function(e,t,c){},45:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(38),s=c.n(a),i=(c(44),c(15)),o=(c(45),c(2)),d=c.n(o),h=c(5),l=c(13),u=c(14),j=c(12),v=c(17),p=c(16),m=c(75),b=c(76),O=c(6),f=c.n(O),x=(c(25),c(0)),S=c(26),g=[];for(var w in S.windows.set1.tc)S.windows.set1.tc.hasOwnProperty(w)&&"creds"!==w&&g.push(w);var y=function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"td1 data",children:e.displayname}),Object(x.jsx)("td",{className:"td1 data",children:e.service}),Object(x.jsx)("td",{className:"td1",children:Object(x.jsx)(b.a,{type:"button",onClick:function(){e.startService(e.displayname)},children:"Start"})}),Object(x.jsx)("td",{className:"td1",children:Object(x.jsx)(b.a,{type:"button",onClick:function(){e.stopService(e.displayname)},children:"Stop"})})]})},_=function(e){Object(v.a)(c,e);var t=Object(p.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).fetchData=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("http://localhost:3000/tcservices/get/set/1").then((function(e){n.setState({services:e.data[0].Windows[0].TC})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),n.updateData=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=0;t<g.length;t++)f.a.patch("http://localhost:3000/tcservices/update/set/1/"+g[t]);case 1:case"end":return e.stop()}}),e)}))),n.startService=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.patch("http://localhost:3000/tcservices/start/set/1/"+t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.stopService=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.patch("http://localhost:3000/tcservices/stop/set/1/"+t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.startService=n.startService.bind(Object(j.a)(n)),n.stopService=n.stopService.bind(Object(j.a)(n)),n.state={services:[]},n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:return this.intervalId=setInterval((function(){t.fetchData()}),3e3),e.next=5,this.updateData();case 5:this.intervalId2=setInterval((function(){t.updateData()}),3e3);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"serviceList",value:function(){for(var e=this,t=0,c=Object.entries(this.state.services),n=new Map,r=0;r<c.length;r++)n.set(c[r][1].SERVICE_NAME,[]),n.get(c[r][1].SERVICE_NAME).push(c[r][1].STATE),n.get(c[r][1].SERVICE_NAME).push(c[r][1]._id);return this.state.services.map((function(){return Object(x.jsx)(y,{displayname:g[t++],service:n.get(S.windows.set1.tc[g[t-1]].replace(/['"]+/g,""))[0],_id:n.get(S.windows.set1.tc[g[t-1]].replace(/['"]+/g,""))[1],startService:e.startService,stopService:e.stopService})}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"TC Service List"}),Object(x.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{className:"td1 heading",children:"Service Name"}),Object(x.jsx)("th",{className:"td1 heading",children:"Status"})]})}),Object(x.jsx)("tbody",{children:this.serviceList()})]})]})}}]),c}(n.Component),T=c(26),C=[];for(var N in T.windows.set1.aw)T.windows.set1.aw.hasOwnProperty(N)&&"creds"!==N&&C.push(N);var E=function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"td1 data",children:e.displayname}),Object(x.jsx)("td",{className:"td1 data",children:e.service}),Object(x.jsx)("td",{className:"td1",children:Object(x.jsx)(b.a,{type:"button",onClick:function(){e.startService(e.displayname)},children:"Start"})}),Object(x.jsx)("td",{className:"td1",children:Object(x.jsx)(b.a,{type:"button",onClick:function(){e.stopService(e.displayname)},children:"Stop"})})]})},k=function(e){Object(v.a)(c,e);var t=Object(p.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).fetchData=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("http://localhost:3000/awservices/get/set/1").then((function(e){n.setState({services:e.data[0].Windows[0].AW})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),n.updateData=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=0;t<C.length;t++)f.a.patch("http://localhost:3000/awservices/update/set/1/"+C[t]);case 1:case"end":return e.stop()}}),e)}))),n.startService=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.patch("http://localhost:3000/awservices/start/set/1/"+t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.stopService=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.patch("http://localhost:3000/awservices/stop/set/1/"+t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.startService=n.startService.bind(Object(j.a)(n)),n.stopService=n.stopService.bind(Object(j.a)(n)),n.state={services:[]},n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:return this.intervalId=setInterval((function(){t.fetchData()}),3e3),e.next=5,this.updateData();case 5:this.intervalId2=setInterval((function(){t.updateData()}),3e3);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"serviceList",value:function(){for(var e=this,t=0,c=Object.entries(this.state.services),n=new Map,r=0;r<c.length;r++)n.set(c[r][1].SERVICE_NAME,[]),n.get(c[r][1].SERVICE_NAME).push(c[r][1].STATE),n.get(c[r][1].SERVICE_NAME).push(c[r][1]._id);return this.state.services.map((function(){return Object(x.jsx)(E,{displayname:C[t++],service:n.get(T.windows.set1.aw[C[t-1]].replace(/['"]+/g,""))[0],_id:n.get(T.windows.set1.aw[C[t-1]].replace(/['"]+/g,""))[1],startService:e.startService,stopService:e.stopService})}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"AW Service List"}),Object(x.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{className:"td1",children:"Service Name"}),Object(x.jsx)("th",{className:"td1",children:"Status"})]})}),Object(x.jsx)("tbody",{children:this.serviceList()})]})]})}}]),c}(n.Component),A=c(26),M=[];for(var I in A.windows.set1.db)A.windows.set1.db.hasOwnProperty(I)&&"creds"!==I&&M.push(I);var D=function(e){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{className:"td1 data",children:e.displayname}),Object(x.jsx)("td",{className:"td1 data",children:e.service}),Object(x.jsx)("td",{className:"td1",children:Object(x.jsx)(b.a,{type:"button",onClick:function(){e.startService(e.displayname)},children:"Start"})}),Object(x.jsx)("td",{className:"td1",children:Object(x.jsx)(b.a,{type:"button",onClick:function(){e.stopService(e.displayname)},children:"Stop"})})]})},P=function(e){Object(v.a)(c,e);var t=Object(p.a)(c);function c(e){var n;return Object(l.a)(this,c),(n=t.call(this,e)).fetchData=Object(h.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.get("http://localhost:3000/dbservices/get/set/1").then((function(e){n.setState({services:e.data[0].Windows[0].DB})})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),n.updateData=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=0;t<M.length;t++)f.a.patch("http://localhost:3000/dbservices/update/set/1/"+M[t]);case 1:case"end":return e.stop()}}),e)}))),n.startService=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.patch("http://localhost:3000/dbservices/start/set/1/"+t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.stopService=function(){var e=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.a.patch("http://localhost:3000/dbservices/stop/set/1/"+t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.startService=n.startService.bind(Object(j.a)(n)),n.stopService=n.stopService.bind(Object(j.a)(n)),n.state={services:[]},n}return Object(u.a)(c,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:return this.intervalId=setInterval((function(){t.fetchData()}),3e3),e.next=5,this.updateData();case 5:this.intervalId2=setInterval((function(){t.updateData()}),3e3);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"serviceList",value:function(){for(var e=this,t=0,c=Object.entries(this.state.services),n=new Map,r=0;r<c.length;r++)n.set(c[r][1].SERVICE_NAME,[]),n.get(c[r][1].SERVICE_NAME).push(c[r][1].STATE),n.get(c[r][1].SERVICE_NAME).push(c[r][1]._id);return this.state.services.map((function(){return Object(x.jsx)(D,{displayname:M[t++],service:n.get(A.windows.set1.db[M[t-1]].replace(/['"]+/g,""))[0],_id:n.get(A.windows.set1.db[M[t-1]].replace(/['"]+/g,""))[1],startService:e.startService,stopService:e.stopService})}))}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"DB Service List"}),Object(x.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{className:"td1",children:"Service Name"}),Object(x.jsx)("th",{className:"td1",children:"Status"})]})}),Object(x.jsx)("tbody",{children:this.serviceList()})]})]})}}]),c}(n.Component);c(66);var L=function(){return Object(x.jsxs)("div",{className:"auth-page",children:[Object(x.jsxs)("nav",{children:[Object(x.jsx)("h1",{children:Object(x.jsx)("a",{href:"/",children:"ECI Dashboard"})}),Object(x.jsx)("ul",{children:Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/signup",class:"btn",children:"Back"})})})]}),Object(x.jsxs)("form",{action:"/signup",children:[Object(x.jsx)("h2",{children:"Login"}),Object(x.jsx)("label",{for:"email",children:"Email"}),Object(x.jsx)("input",{type:"text",name:"email",required:!0}),Object(x.jsx)("div",{class:"email error"}),Object(x.jsx)("label",{for:"password",children:"Password"}),Object(x.jsx)("input",{type:"password",name:"password",required:!0}),Object(x.jsx)("div",{class:"password error"}),Object(x.jsx)("button",{children:"login"})]}),Object(x.jsx)("footer",{children:"Siemens Digital Industries Software"})]})},F=(c(67),c(21));var R=function(e){var t=e.name,c=e.subMenu,r=(e.onClick,e.to),a=Object(n.useState)(!1),s=Object(i.a)(a,2),o=s[0],d=s[1];return Object(x.jsxs)("li",{onClick:e.onClick,children:[Object(x.jsxs)(F.b,{to:r,onClick:function(){return d(!o)},className:"menu-item",children:[Object(x.jsx)("div",{className:"menu-icon",children:Object(x.jsx)("i",{class:"bi bi-circle"})}),Object(x.jsx)("span",{children:t})]}),c&&c.length>0?Object(x.jsx)("ul",{className:"sub-menu ".concat(o?"active":""),children:c.map((function(e,t){return Object(x.jsx)("li",{children:Object(x.jsx)(F.b,{to:e.to,children:e.name})},t)}))}):null]})},V=[{name:"Teamcenter ECI Owners",to:"/eci-home/environment-owners"},{name:"Environment Types",to:"/eci-home/environment-types"},{name:"Architecture Diagram",to:"/eci-home/diagram"},{name:"Data Available",to:"/eci-home/data"},{name:"Environment Admin",to:"/eci-home/environment-admin",subMenu:[{name:"Staging Environment",to:"/eci-home/environment-admin/staging"},{name:"Production Environment",to:"/eci-home/environment-admin/production"}]},{name:"Environment communication",to:"/eci-home/env-comm"},{name:"FAQ",to:"/eci-home/faq"},{name:"Login",to:"/eci-home/login"}];var W=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){r&&document.querySelectorAll(".sub-menu").forEach((function(e){e.classList.remove("active")})),e.onCollapse(r)}),[r]),Object(x.jsxs)("div",{className:"sidebar ".concat(r?"inactive":""),children:[Object(x.jsxs)("div",{className:"top-section",children:[Object(x.jsx)("div",{className:"sidebar-dashboard",children:Object(x.jsx)("i",{class:"nav-icon fas fa-tachometer-alt"})}),Object(x.jsx)("div",{onClick:function(){return a(!r)},className:"toggle-arrow",children:Object(x.jsx)("i",{class:"".concat(r?"bi bi-arrow-right-square-fill":"bi bi-arrow-left-square-fill")})})]}),Object(x.jsxs)("div",{className:"search-box",children:[Object(x.jsx)("div",{className:"search-btn",children:Object(x.jsx)("i",{class:"bi bi-search"})}),Object(x.jsx)("input",{type:"text",placeholder:"search"})]}),Object(x.jsx)("div",{className:"divider"}),Object(x.jsx)("div",{className:"main-menu",children:Object(x.jsx)("ul",{children:V.map((function(e,t){return Object(x.jsx)(R,{name:e.name,to:e.to,subMenu:e.subMenu||[],onClick:function(){r&&a(!1)}},t)}))})}),Object(x.jsxs)("div",{className:"footer",children:[Object(x.jsx)("div",{className:"avatar",children:Object(x.jsx)("i",{class:"bi bi-person-circle"})}),Object(x.jsxs)("div",{className:"user-info",children:[Object(x.jsx)("h4",{children:"User Name"}),Object(x.jsx)("p",{children:"user.name@gmail.com"})]})]})]})},q=c(4),B=function(){return Object(x.jsx)("h1",{children:"Teamcenter ECI Owners"})},J=function(){return Object(x.jsx)("h1",{children:"Environment Types"})},G=function(){return Object(x.jsx)("h1",{children:"Architecture Diagram"})},Q=function(){return Object(x.jsx)("h1",{children:"Data Available"})},U=function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(_,{}),Object(x.jsx)(k,{}),Object(x.jsx)(P,{})]})},z=function(){return Object(x.jsx)(k,{})},H=function(){return Object(x.jsx)("h1",{children:"Environment Admin/Production Environment"})},K=function(){return Object(x.jsx)("h1",{children:"Team links for environment communication"})},X=function(){return Object(x.jsx)("h1",{children:"FAQ"})};var Y=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],r=t[1];return Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(F.a,{children:[Object(x.jsx)(W,{onCollapse:function(e){r(e)}}),Object(x.jsx)("div",{className:"container ".concat(c?"inactive":""),children:Object(x.jsxs)(q.c,{children:[Object(x.jsx)(q.a,{path:"/eci-home/environment-owners",children:Object(x.jsx)(B,{})}),Object(x.jsx)(q.a,{path:"/eci-home/environment-types",children:Object(x.jsx)(J,{})}),Object(x.jsx)(q.a,{path:"/eci-home/diagram",children:Object(x.jsx)(G,{})}),Object(x.jsx)(q.a,{path:"/eci-home/data",children:Object(x.jsx)(Q,{})}),Object(x.jsx)(q.a,{path:"/eci-home/environment-admin",children:Object(x.jsx)(U,{})}),Object(x.jsx)(q.a,{path:"/eci-home/environment-admin/staging",children:Object(x.jsx)(z,{})}),Object(x.jsx)(q.a,{path:"/eci-home/environment-admin/production",children:Object(x.jsx)(H,{})}),Object(x.jsx)(q.a,{path:"/eci-home/env-comm",children:Object(x.jsx)(K,{})}),Object(x.jsx)(q.a,{path:"/eci-home/faq",children:Object(x.jsx)(X,{})}),Object(x.jsx)(q.a,{path:"/eci-home/login",children:Object(x.jsx)(L,{})})]})})]})})},Z=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(73);s.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[74,1,2]]]);
//# sourceMappingURL=main.160e84be.chunk.js.map