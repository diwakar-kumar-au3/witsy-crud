(this.webpackJsonpinternship=this.webpackJsonpinternship||[]).push([[0],{30:function(e,t,a){e.exports=a(58)},35:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),o=(a(35),a(7)),s=a(6),u=a.n(s),m=a(10),i=a(9);var d=function(e){var t=e.user,a=e.setuser;return r.a.createElement("div",{className:"container"},function(){if(t)return r.a.createElement(m.a,{to:"/dashboard"})}(),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"mx-auto"},r.a.createElement("h4",{className:"text-info my-4"},"Login"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t={email:e.target.email.value,password:e.target.password.value};u.a.post("api/user/login",t).then((function(e){a(e.data),localStorage.setItem("user",JSON.stringify(e.data.username))})).catch((function(e){return console.log(e.data)}))}(e)}},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Email",r.a.createElement("input",{type:"email",name:"email",class:"form-control",placeholder:"Email",required:!0}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",name:"password",class:"form-control",placeholder:"Password",required:!0}))),r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"login")),r.a.createElement("p",null,"Create an Account ",r.a.createElement(i.b,{to:"/signup"},"signup")))))},p=a(2);var f=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),s=Object(o.a)(c,2),d=s[0],f=s[1],E=Object(n.useState)({username:null,email:null,password:null,confpassword:null}),g=Object(o.a)(E,2),b=g[0],h=g[1],v=Object(n.useState)(),w=Object(o.a)(v,2),N=w[0],j=w[1],y=RegExp(/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);Object(n.useEffect)((function(){u.a.get("https://freegeoip.app/json/").then((function(e){return l(e.data.region_name)}))}));var O=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"email":b.email=y.test(n)?null:"invalid email";break;case"username":b.username=n.length<2?"Username must be atleast 2 characters":null;break;case"password":j(n),b.password=n.length<8?"Password must be atleast 8 characters":null;break;case"confpassword":b.confpassword=N!==n?"password does not matched":null}h(Object(p.a)({},b))},C=function(e){return e?r.a.createElement("small",{className:"text-danger "},e):null};return r.a.createElement("div",{className:"container"},function(){if(!0===d)return r.a.createElement(m.a,{to:"/"})}(),r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"mx-auto"},r.a.createElement("h4",{className:"text-info my-4"},"signup"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault();var t=Date.now(),a=e.target.email.value,n=e.target.region.value,r=e.target.username.value,l=e.target.password.value;console.log(t);var c={email:a,region:n,username:r,password:l,created_At:t};u.a.post("api/user/signup",c).then((function(e){f(!d)})).catch((function(e){return console.log(e)})),console.log(a,l,n,r,t)}(e)}},r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"inputEmail"},"Email",r.a.createElement("input",{type:"email",name:"email",class:"form-control",placeholder:"Email",onChange:function(e){return O(e)},required:!0}))),C(b.email),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"inputEmail"},"Region",r.a.createElement("input",{type:"text",name:"region",class:"form-control",placeholder:"Region",value:a,readOnly:!0}))),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"inputEmail"},"Username",r.a.createElement("input",{type:"text",name:"username",class:"form-control",placeholder:"username",onChange:function(e){return O(e)},required:!0}))),C(b.username),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"inputPassword"},"Password",r.a.createElement("input",{type:"password",name:"password",class:"form-control",placeholder:"Password",onChange:function(e){return O(e)},required:!0}))),C(b.password),r.a.createElement("div",{class:"form-group"},r.a.createElement("label",{for:"inputPassword"},"Confirm Password",r.a.createElement("input",{type:"password",name:"confpassword",class:"form-control",placeholder:"confirm Password",onChange:function(e){return O(e)},required:!0}))),C(b.confpassword),r.a.createElement("div",{class:"form-group"},r.a.createElement("button",{type:"submit",class:"btn btn-primary"},"Sign up"))),r.a.createElement("p",null,"Already have Account ",r.a.createElement(i.b,{to:"/"},"Login")))))};var E=function(e){var t=e.formdata,a=e.setformdata,n=e.getuser,l=e.addFormControl;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{scope:"row"},r.a.createElement("input",{className:"form-control",placeholder:"email",onChange:function(e){return a(Object(p.a)({},t,{email:e.target.value}))}})),r.a.createElement("td",null,r.a.createElement("input",{className:"form-control",placeholder:"username",onChange:function(e){return a(Object(p.a)({},t,{username:e.target.value}))}})),r.a.createElement("td",null,r.a.createElement("input",{className:"form-control",placeholder:"password",onChange:function(e){return a(Object(p.a)({},t,{password:e.target.value}))}})),r.a.createElement("td",null,r.a.createElement("input",{className:"form-control",placeholder:"Region",onChange:function(e){return a(Object(p.a)({},t,{region:e.target.value}))}})),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){u.a.post("api/user/signup",t).then((function(e){n(),l(),console.log(e)})).catch((function(e){return console.log(e)}))}},"Submit"))))},g=a(13);var b=function(){var e={email:"",username:"",password:"",region:""},t=Object(n.useState)(!1),a=Object(o.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(),m=Object(o.a)(s,2),i=m[0],d=m[1],f=Object(n.useState)(e),b=Object(o.a)(f,2),h=b[0],v=b[1];Object(n.useEffect)((function(){w()}),[l]);var w=function(){u.a.get("api/user/getinfo").then((function(e){var t=e.data.map((function(e){return Object(p.a)({},e,{isEditMode:!1})}));d(t)})).catch((function(e){return console.log(e)}))},N=function(){v(e),c(!l)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 d-flex justify-content-between my-2"},r.a.createElement("h4",{className:"text-secondary m-0"},"Users"),r.a.createElement("button",{className:"btn-sm btn btn-secondary",onClick:function(){return N()}},l?"cancel":"add"))),r.a.createElement("div",{className:"row"},r.a.createElement("table",{class:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"Username"),r.a.createElement("th",{scope:"col"},"Password"),r.a.createElement("th",{scope:"col"},"Region"),r.a.createElement("th",{scope:"col"},"Actions"))),r.a.createElement("tbody",null,l?r.a.createElement(E,{formdata:h,setformdata:v,getuser:w,addFormControl:N}):null,i&&i.map((function(t){return r.a.createElement("tr",{key:t._id},t.isEditMode?r.a.createElement("td",null,r.a.createElement("input",{value:h.email,placeholder:"email",className:"form-control",onChange:function(e){return v(Object(p.a)({},h,{email:e.target.value}))}})):r.a.createElement("td",null,t.email),t.isEditMode?r.a.createElement("td",null,r.a.createElement("input",{value:h.username,className:"form-control",placeholder:"username",onChange:function(e){return v(Object(p.a)({},h,{username:e.target.value}))}})):r.a.createElement("td",null,t.username),t.isEditMode?r.a.createElement("td",null,r.a.createElement("input",{value:h.password,className:"form-control",placeholder:"password",onChange:function(e){return v(Object(p.a)({},h,{password:e.target.value}))}})):r.a.createElement("td",null,t.password),t.isEditMode?r.a.createElement("td",null," ",r.a.createElement("input",{value:h.region,className:"form-control",placeholder:"region",onChange:function(e){return v(Object(p.a)({},h,{region:e.target.value}))}})):r.a.createElement("td",null,t.region),t.isEditMode?r.a.createElement("td",null,r.a.createElement(g.a,{className:"mr-3 text-success font-weight-bold",style:{fontSize:"1.4rem"},onClick:function(){return function(e){var t=Object(p.a)({},h,{id:e});u.a.put("api/user/edit",t).then((function(e){w()})).catch((function(e){return console.log(e)}))}(t._id)}}),r.a.createElement(g.b,{className:"text-danger",onClick:function(){return function(){var t=i.map((function(e){return Object(p.a)({},e,{isEditMode:!1})}));d(t),v(e)}()},style:{fontSize:"1.4rem"}})):r.a.createElement("td",null,r.a.createElement(g.d,{className:"mr-3 text-info",onClick:function(){return function(e){var t;for(var a in i)i[a]._id===e&&(t=a);var n=i[t],r=n.email,l=n.username,c=n.password,o=n.region;v({email:r,username:l,password:c,region:o});var s=i.map((function(t){return t._id===e?Object(p.a)({},t,{isEditMode:!0}):Object(p.a)({},t,{isEditMode:!1})}));d(s)}(t._id)},style:{fontSize:"1.4rem"}}),r.a.createElement(g.c,{onClick:function(){var e;e=t._id,u.a.delete("api/user/delete/".concat(e)).then((function(e){w()})).catch((function(e){return console.log(e)}))},style:{fontSize:"1.4rem"},className:"text-danger"})))})))))))};var h=function(e){var t=e.user;return r.a.createElement("div",{className:"container mt-2"},function(){var e=localStorage.getItem("user");if(!t&&null==e)return r.a.createElement(m.a,{to:"/"})}(),r.a.createElement("div",{className:"row p-3 my-4 rounded shadow-lg  bg-secondary"},r.a.createElement("div",{className:"col-11 bg-secondary"},r.a.createElement("h1",{className:"text-light m-0"},"Dashboard")),r.a.createElement("div",{className:"col-1"},r.a.createElement(i.b,{to:"/logout",className:"btn btn-danger ",style:{cursor:"pointer"}},"Logout"))),r.a.createElement("div",{className:"row p-3 rounded bg-secondary"},r.a.createElement("div",{className:"col-12 py-2 rounded bg-light"},r.a.createElement(b,null))))};var v=function(e){var t=e.setuser;return Object(n.useEffect)((function(){t(null),localStorage.clear()}),[]),r.a.createElement(m.a,{to:"/"})};var w=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(i.a,null,r.a.createElement(m.b,{exact:!0,path:"/",component:function(){return r.a.createElement(d,{setuser:l,user:a})}}),r.a.createElement(m.b,{path:"/signup",component:function(){return r.a.createElement(f,{user:a,setuser:l})}}),r.a.createElement(m.b,{path:"/dashboard",component:function(){return r.a.createElement(h,{user:a,setuser:l})}}),r.a.createElement(m.b,{path:"/logout",component:function(){return r.a.createElement(v,{setuser:l})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.b781c9b6.chunk.js.map