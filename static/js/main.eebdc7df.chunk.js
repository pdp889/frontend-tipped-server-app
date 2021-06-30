(this["webpackJsonptipped-server-frontend"]=this["webpackJsonptipped-server-frontend"]||[]).push([[1],{17:function(e,t,n){},24:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(18),s=n.n(c),i=n(10),o=n(5),u=(n(24),n(0));var l=function(e){return Object(u.jsxs)("div",{className:"d-flex justify-content-around bg-primary align-items-center",children:[Object(u.jsx)(i.b,{to:"/",children:Object(u.jsx)("div",{className:"text-white btn btn-primary",children:"Home"})}),Object(u.jsx)(i.b,{to:"/jobs",children:Object(u.jsx)("div",{className:"text-white btn btn-primary",children:"View Jobs"})}),Object(u.jsx)(i.b,{to:"/addRecord",children:Object(u.jsx)("div",{className:"text-white btn btn-primary",children:"Add Record"})}),Object(u.jsx)(i.b,{to:"/stats-search",children:Object(u.jsx)("div",{className:"text-white btn btn-primary",children:"Search Stats"})}),Object(u.jsx)(i.b,{to:"/myRecords",children:Object(u.jsx)("div",{className:"text-white btn btn-primary",children:"My Records"})}),Object(u.jsx)("button",{className:"text-white btn btn-primary",onClick:function(){sessionStorage.clear(),e.setToken("")},children:"Log Out"})]})},j=n(2),p=n(3),d=n.n(p),h=n(4);n(35);var b=function(e){Object(r.useEffect)((function(){F()}),[e]);var t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),o=i[0],l=i[1],p=Object(r.useState)(""),b=Object(j.a)(p,2),m=b[0],f=b[1],O=Object(r.useState)(""),x=Object(j.a)(O,2),v=x[0],y=x[1],g=Object(r.useState)(""),N=Object(j.a)(g,2),k=N[0],w=N[1],S=Object(r.useState)([]),C=Object(j.a)(S,2),R=C[0],T=C[1],P=Object(r.useState)([]),A=Object(j.a)(P,2),z=A[0],E=A[1],F=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tipped-server-app.herokuapp.com/api/createPay",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,c(r.title),a=[],Array.from(r.restaurants).forEach((function(e){var t=[e._id,e.zip_code,e.name,e.entree_price];a.push(t)})),T(a),w(a[0][0]);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),B=function(t){t.preventDefault(),function(){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify({hourly_pay:o,weekly_tips:m,weekly_hours:v,restaurant:k})};fetch("https://tipped-server-app.herokuapp.com/api/createPay",t).then((function(e){return e.json()})).then((function(e){if(void 0!==e.errors){var t=Array.from(e.errors),n=[];t.forEach((function(e){n.push(e.msg+"; ")})),E(n)}else alert("success!"),l(""),y(""),f(""),E([]);return e}))}()};return Object(u.jsxs)("div",{class:"card w-50 h-75 padding-10-px",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){B(e)},children:[Object(u.jsx)("h1",{children:a}),Object(u.jsx)("label",{htmlFor:"hourly",children:"Hourly"}),Object(u.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"number",name:"hourly",className:"form-control",autoComplete:"off",min:"1",value:o}),Object(u.jsx)("label",{htmlFor:"weekly tips",children:"Weekly Tips"}),Object(u.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"number",name:"weekly tips",className:"form-control",autoComplete:"off",min:"1",value:m}),Object(u.jsx)("label",{htmlFor:"weekly hours",children:"Weekly Hours"}),Object(u.jsx)("input",{onChange:function(e){return y(e.target.value)},type:"number",name:"weekly hours",className:"form-control",autoComplete:"off",min:"1",value:v}),Object(u.jsx)("label",{htmlFor:"restaurant",children:"Restaurant"}),Object(u.jsx)("select",{name:"restaurant",className:"form-select",onChange:function(e){w(e.target.value)},children:R.map((function(e,t){return Object(u.jsxs)("option",{value:e[0],children:[e[2]," | ",e[1]]},t)}))}),Object(u.jsx)("input",{type:"submit",className:"btn btn-primary record-submit",value:"Add Pay Record"})]})}),Object(u.jsx)("div",{children:z})]})};var m=function(e){Object(r.useEffect)((function(){P()}),[]);var t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),i=Object(j.a)(s,2),o=i[0],l=i[1],p=Object(r.useState)("51501"),b=Object(j.a)(p,2),m=b[0],f=b[1],O=Object(r.useState)(""),x=Object(j.a)(O,2),v=x[0],y=x[1],g=Object(r.useState)(1),N=Object(j.a)(g,2),k=N[0],w=N[1],S=Object(r.useState)(null),C=Object(j.a)(S,2),R=C[0],T=C[1],P=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tipped-server-app.herokuapp.com/api/createRestaurant",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a=r.zips.sort((function(e,t){return e<t?-1:e>t?1:0})),l(a),c(r.title);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(t){t.preventDefault(),function(){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify({zip_code:m,name:v,entree_price:k})};fetch("https://tipped-server-app.herokuapp.com/api/createRestaurant",t).then((function(e){return e.json()})).then((function(t){if(void 0!=t.errors){var n=Array.from(t.errors),r=[];n.forEach((function(e){r.push(e.msg+"; ")})),console.log(r),T(r)}else alert("success!"),f(""),y(""),w(1),T([]),e.setNewRestaurant();return t}))}(),e.setNewRestaurant()};return Object(u.jsxs)("div",{className:"card w-50 h-75 padding-10-px",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){A(e)},children:[Object(u.jsx)("h1",{className:"section-header",children:a}),Object(u.jsx)("label",{htmlFor:"zip",children:"Zip Code"}),Object(u.jsx)("select",{className:"form-select",name:"zip",onChange:function(e){f(e.target.value)},children:o.map((function(e,t){return Object(u.jsx)("option",{value:e,children:e},t)}))}),Object(u.jsx)("label",{htmlFor:"name",children:"Name"}),Object(u.jsx)("input",{onChange:function(e){return y(e.target.value)},type:"text",name:"name",className:"form-control",autoComplete:"off",value:v}),Object(u.jsx)("label",{htmlFor:"name",children:"Restaurant Price Rating (1-5)"}),Object(u.jsx)("input",{onChange:function(e){return w(e.target.value)},type:"text",name:"entree",className:"form-control",autoComplete:"off",value:k}),Object(u.jsx)("input",{type:"submit",className:"btn btn-primary record-submit",value:"Add Restaurant"})]})}),Object(u.jsx)("div",{children:R})]})};var f=function(e){var t=Object(r.useState)(0),n=Object(j.a)(t,2),a=n[0],c=n[1];return Object(u.jsxs)("div",{className:"d-flex flex-row bg-light full-height",children:[Object(u.jsx)(m,{setNewRestaurant:function(){c(a+1)},token:e.token}),Object(u.jsx)(b,{token:e.token})]})};n(36);function O(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),i=Object(j.a)(s,2),o=i[0],l=i[1],p=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tipped-server-app.herokuapp.com/api/getPayByZip/"+a,{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,c=r.average,console.log(c),null==c&&(c="unknown"),l(c);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(e){e.preventDefault(),p()};return"unknown"===o?Object(u.jsxs)("div",{className:"card w-50 h-75 padding-10-px",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){b(e)},children:[Object(u.jsx)("h1",{className:"section-header",children:"Search By Zip"}),Object(u.jsx)("label",{htmlFor:"zip",children:"Zip"}),Object(u.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"zip",className:"form-control",autoComplete:"off",minLength:"5",maxLength:"5",value:a}),Object(u.jsx)("input",{type:"submit",className:"btn btn-primary search-button",value:"Search by Zip"})]})}),Object(u.jsx)("div",{className:"text-info",children:"No records from this zip code."})]}):o?Object(u.jsxs)("div",{className:"card w-50 h-75 padding-10-px",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){b(e)},children:[Object(u.jsx)("h1",{className:"section-header",children:"Search By Zip"}),Object(u.jsx)("label",{htmlFor:"zip",children:"Zip"}),Object(u.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"zip",className:"form-control",autoComplete:"off",minLength:"5",maxLength:"5",value:a}),Object(u.jsx)("input",{type:"submit",className:"btn btn-primary search-button",value:"Search by Zip"})]})}),Object(u.jsxs)("div",{className:"text-info",children:["Result found: $",o," total compensation per hour"]})]}):Object(u.jsx)("div",{className:"card w-50 h-75 padding-10-px",children:Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){b(e)},children:[Object(u.jsx)("h1",{className:"section-header",children:"Search By Zip"}),Object(u.jsx)("label",{htmlFor:"zip",children:"Zip"}),Object(u.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"zip",className:"form-control",autoComplete:"off",minLength:"5",maxLength:"5",value:a}),Object(u.jsx)("input",{type:"submit",className:"btn btn-primary search-button",value:"Search by Zip"})]})})})}var x=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),o=i[0],l=i[1],p=Object(r.useState)(),b=Object(j.a)(p,2),m=b[0],f=b[1],O=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tipped-server-app.herokuapp.com/api/getPayByZipAndEntree/"+a+"/"+o,{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,c=r.average,console.log(c),null==c&&(c="unknown"),f(c);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(e){e.preventDefault(),O()};return"unknown"===m?Object(u.jsxs)("div",{className:"card w-50 h-75 padding-10-px",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){x(e)},children:[Object(u.jsx)("h1",{className:"section-header",children:"Search By Zip and Restaurant Price Rating"}),Object(u.jsx)("label",{htmlFor:"Zip",children:"Zip"}),Object(u.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"zip",className:"form-control",autoComplete:"off",minLength:"5",maxLength:"5",value:a}),Object(u.jsx)("label",{htmlFor:"entree",children:"Restaurant Price Rating (1-5)"}),Object(u.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",name:"entree",className:"form-control",autoComplete:"off",value:o}),Object(u.jsx)("input",{type:"submit",className:"btn btn-primary search-button",value:"Search by Zip and Restaurant Price Rating"})]})}),Object(u.jsx)("div",{className:"text-info",children:"No records from this zip code and restaurant price rating combination."})]}):m?Object(u.jsxs)("div",{className:"card w-50 h-75 padding-10-px",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){x(e)},children:[Object(u.jsx)("h1",{className:"section-header",children:"Search By Zip and Restaurant Price Rating"}),Object(u.jsx)("label",{htmlFor:"Zip",children:"Zip"}),Object(u.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"zip",className:"form-control",autoComplete:"off",minLength:"5",maxLength:"5",value:a}),Object(u.jsx)("label",{htmlFor:"entree",children:"Restaurant Price Rating (1-5)"}),Object(u.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",name:"entree",className:"form-control",autoComplete:"off",value:o}),Object(u.jsx)("input",{type:"submit",className:"btn btn-primary search-button",value:"Search by Zip and Restaurant Price Rating"})]})}),Object(u.jsxs)("div",{className:"text-info",children:["Result found: $",m," total compensation per hour"]})]}):Object(u.jsx)("div",{className:"card w-50 h-75 padding-10-px",children:Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(e){x(e)},children:[Object(u.jsx)("h1",{className:"section-header",children:"Search By Zip and Restaurant Price Rating"}),Object(u.jsx)("label",{htmlFor:"Zip",children:"Zip"}),Object(u.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"zip",className:"form-control",autoComplete:"off",minLength:"5",maxLength:"5",value:a}),Object(u.jsx)("label",{htmlFor:"entree",children:"Restaurant Price Rating (1-5)"}),Object(u.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"text",name:"entree",className:"form-control",autoComplete:"off",value:o}),Object(u.jsx)("input",{type:"submit",className:"btn btn-primary search-button",value:"Search by Zip and Restaurant Price Rating"})]})})})};var v=function(e){return Object(u.jsxs)("div",{className:"d-flex flex-row bg-light full-height",children:[Object(u.jsx)(O,{token:e.token}),Object(u.jsx)(x,{token:e.token})]})};function y(e){return"unknown"!==e.value[4]?Object(u.jsx)("div",{className:"card padding-10-px",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Title: ",e.value[0]]}),Object(u.jsxs)("p",{children:["Restaurant: ",e.value[1]]}),Object(u.jsxs)("p",{children:["Location: ",e.value[2]]}),Object(u.jsx)("a",{href:e.value[3],children:" Apply/Description "}),Object(u.jsxs)("p",{children:["Average pay for the zip code: $",e.value[4]]})]},e.index)}):Object(u.jsx)("div",{className:"card padding-10-px",children:Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:["Title: ",e.value[0]]}),Object(u.jsxs)("p",{children:["Restaurant: ",e.value[1]]}),Object(u.jsxs)("p",{children:["Location: ",e.value[2]]}),Object(u.jsx)("a",{href:e.value[3],children:" Apply/Description "})]},e.index)})}n.e(0).then(n.t.bind(null,42,7)),n.e(0).then(n.t.bind(null,42,7));var g=function(e){var t=Object(r.useState)(["hello paul"]),n=Object(j.a)(t,2),a=n[0],c=n[1];Object(r.useEffect)((function(){s()}),[]);var s=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tipped-server-app.herokuapp.com/api/scraper",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,console.log(r),a=[],Array.from(r.jobs).forEach((function(e){var t=[e.title,e.restaurant,e.location,e.url,e.average];a.push(t)})),c(a);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"d-flex justify-content-center bg-light",children:[Object(u.jsxs)("div",{className:"w-50 padding-10-px",children:[Object(u.jsx)("h1",{children:"Now Hiring - 10 great jobs!"}),Object(u.jsx)("p",{children:"These jobs are hiring now!"})]}),Object(u.jsx)("div",{className:"w-50",children:a.map((function(t,n){return Object(u.jsx)(y,{index:n,value:t,token:e.token})}))})]})};var N=function(e){Object(r.useEffect)((function(){p(),b()}),[]);var t=Object(r.useState)([]),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),i=Object(j.a)(s,2),o=i[0],l=i[1],p=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tipped-server-app.herokuapp.com/api/getTopFiveZips",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a=[],Array.from(r).forEach((function(e){a.push([e.zip,e.average])})),c(a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tipped-server-app.herokuapp.com/api/getAllPayByEntree",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a=[],Array.from(r).forEach((function(e){a.push([e.entree_price,e.average])})),l(a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"d-flex justify-content-center bg-light full-height",children:[Object(u.jsx)("div",{className:"w-50 padding-10-px",children:Object(u.jsx)("h1",{children:"Welcome to the Omaha Server App"})}),Object(u.jsxs)("div",{className:"w-50",children:[Object(u.jsxs)("div",{className:"card padding-10-px",children:[Object(u.jsx)("h3",{className:"card-title",children:"Top 5 Zip Codes for Total Hourly Compensation"}),Object(u.jsx)("div",{className:"card-body",children:a.map((function(e,t){return Object(u.jsxs)("div",{children:[e[0]," | Average Pay: $",e[1]]},t)}))})]}),Object(u.jsxs)("div",{className:"card padding-10-px",children:[Object(u.jsx)("h3",{className:"card-title",children:"Total Hourly Compensation by Restaurant Price Rating"}),Object(u.jsx)("div",{className:"card-body",children:o.map((function(e,t){return Object(u.jsxs)("div",{children:["Price Rating: ",e[0]," | Average Pay: $",e[1]]},t)}))})]})]})]})};n(17);function k(e){return w.apply(this,arguments)}function w(){return(w=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://tipped-server-app.herokuapp.com/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),i=Object(j.a)(s,2),o=i[0],l=i[1],p=Object(r.useState)(""),b=Object(j.a)(p,2),m=b[0],f=b[1],O=function(){var t=Object(h.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,k({username:a,password:o});case 3:(r=t.sent).error&&f(r.error),e.setToken(r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login-signup",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)("h3",{children:"Log In"}),Object(u.jsx)("button",{className:"btn btn-outline-link",onClick:e.toggle,children:"Back"})]}),Object(u.jsxs)("form",{onSubmit:O,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)("input",{type:"text",name:"username",className:"form-control",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",onChange:function(e){return l(e.target.value)}})]}),Object(u.jsx)("div",{className:"login-signup-button",children:Object(u.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})})]}),Object(u.jsx)("div",{className:"text-danger",children:m})]})}function C(e){return R.apply(this,arguments)}function R(){return(R=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://tipped-server-app.herokuapp.com/api/createNewUser",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(),i=Object(j.a)(s,2),o=i[0],l=i[1],p=Object(r.useState)(""),b=Object(j.a)(p,2),m=b[0],f=b[1],O=function(){var t=Object(h.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,C({username:a,password:o});case 3:(r=t.sent).error&&f(r.error),e.setToken(r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"login-signup",children:[Object(u.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(u.jsx)("h3",{children:"Sign Up"}),Object(u.jsx)("button",{className:"btn btn-outline-link",onClick:e.toggle,children:"Back"})]}),Object(u.jsxs)("form",{onSubmit:O,children:[Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"username",children:"Username"}),Object(u.jsx)("input",{type:"text",name:"username",className:"form-control",onChange:function(e){return c(e.target.value)}}),Object(u.jsx)("label",{htmlFor:"password",children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",onChange:function(e){return l(e.target.value)}})]}),Object(u.jsx)("div",{className:"login-signup-button",children:Object(u.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Submit"})})]}),Object(u.jsx)("div",{className:"text-danger",children:m})]})}function P(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(!1),i=Object(j.a)(s,2),o=i[0],l=i[1],p=function(){c(!0!==a)},d=function(){l(!0!==o)};return o?Object(u.jsx)(S,{setToken:e.setToken,toggle:d}):a?Object(u.jsx)(T,{setToken:e.setToken,toggle:p}):Object(u.jsxs)("div",{className:"main-login-section d-flex flex-column justify-content-around",children:[Object(u.jsx)("h2",{className:"title d-flex justify-content-around",children:"Omaha Server App"}),Object(u.jsxs)("div",{className:"body-login-section d-flex justify-content-around",children:[Object(u.jsx)("button",{className:"btn btn-primary btn-lg",onClick:p,children:"Sign Up"}),Object(u.jsx)("button",{className:"btn btn-primary btn-lg",onClick:d,children:"Log In"})]})]})}n(37);function A(e){return Object(u.jsx)("div",{className:"card padding-10-px",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsxs)("p",{children:["Pay Record Id: ",e.value[0]]}),Object(u.jsxs)("p",{children:["Hourly Pay: ",e.value[1]]}),Object(u.jsxs)("p",{children:["Weekly Tips: ",e.value[2]]}),Object(u.jsxs)("p",{children:["Weekly Hours: ",e.value[3]]}),Object(u.jsxs)("p",{children:["Restaurant: ",e.value[6]]}),Object(u.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify({payid:e.value[0]})};fetch("https://tipped-server-app.herokuapp.com/api/deletePay",t).then((function(e){return e.json()})).then((function(t){if(void 0!=t.errors){var n=Array.from(t.errors),r=[];n.forEach((function(e){r.push(e.msg+"; ")})),alert(r)}else e.increaseDeleteCount(),alert("success!");return t}))},children:"Delete"}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){e.increaseUpdateCount(e.value)},children:"Update"})]})]},e.index)})}function z(e){Object(r.useEffect)((function(){S()}),[]);var t=Object(r.useState)(e.value[1]),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(e.value[2]),i=Object(j.a)(s,2),o=i[0],l=i[1],p=Object(r.useState)(e.value[3]),b=Object(j.a)(p,2),m=b[0],f=b[1],O=Object(r.useState)(e.value[4]),x=Object(j.a)(O,2),v=x[0],y=x[1],g=Object(r.useState)([]),N=Object(j.a)(g,2),k=N[0],w=N[1],S=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tipped-server-app.herokuapp.com/api/createPay",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,a=[],Array.from(r.restaurants).forEach((function(e){var t=[e._id,e.zip_code,e.name,e.entree_price];a.push(t)})),w(a);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(t){t.preventDefault(),function(){var t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e.token},body:JSON.stringify({hourly_pay:a,weekly_tips:o,weekly_hours:m,restaurant:v,payid:e.value[0]})};console.log(t),fetch("https://tipped-server-app.herokuapp.com/api/updatePay",t).then((function(e){return e.json()})).then((function(t){if(void 0!=t.errors){var n=Array.from(t.errors),r=[];n.forEach((function(e){r.push(e.msg+"; ")})),alert(r)}else alert("success!"),e.resetUpdateValue();return console.log(t),t}))}()};return Object(u.jsxs)("div",{className:"d-flex flex-row bg-light full-height",children:[Object(u.jsx)("div",{className:"card w-50 h-75",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h1",{children:"Original"}),Object(u.jsxs)("p",{children:["Pay Record Id: ",e.value[0]]}),Object(u.jsxs)("p",{children:["Hourly Pay: ",e.value[1]]}),Object(u.jsxs)("p",{children:["Weekly Tips: ",e.value[2]]}),Object(u.jsxs)("p",{children:["Weekly Hours: ",e.value[3]]}),Object(u.jsxs)("p",{children:["Restaurant: ",e.value[6]]})]})}),Object(u.jsx)("div",{className:"card w-50 h-75",children:Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("form",{onSubmit:function(e){C(e)},children:[Object(u.jsx)("h1",{className:"section-header",children:"Update"}),Object(u.jsx)("label",{htmlFor:"hourly",children:"Hourly"}),Object(u.jsx)("input",{onChange:function(e){return c(e.target.value)},type:"number",name:"hourly",className:"form-control",autoComplete:"off",min:"1",value:a}),Object(u.jsx)("label",{htmlFor:"weekly tips",children:"Weekly Tips"}),Object(u.jsx)("input",{onChange:function(e){return l(e.target.value)},type:"number",name:"weekly tips",className:"form-control",autoComplete:"off",min:"1",value:o}),Object(u.jsx)("label",{htmlFor:"weekly hours",children:"Weekly Hours"}),Object(u.jsx)("input",{onChange:function(e){return f(e.target.value)},type:"number",name:"weekly hours",className:"form-control",autoComplete:"off",min:"1",value:m}),Object(u.jsx)("label",{htmlFor:"Restaurant",children:"Restaurant"}),Object(u.jsx)("select",{className:"form-select",name:"restaurant",onChange:function(e){y(e.target.value)},value:v,children:k.map((function(e,t){return Object(u.jsxs)("option",{value:e[0],children:[e[2]," | ",e[1]]},t)}))}),Object(u.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(u.jsx)("input",{type:"submit",className:"btn btn-primary record-submit",value:"Change Pay Record"}),Object(u.jsx)("button",{className:"btn btn-secondary record-submit",onClick:e.resetUpdateValue,children:"Cancel"})]})]})})})]})}n(38);function E(e){var t=Object(r.useState)(0),n=Object(j.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)([]),i=Object(j.a)(s,2),o=i[0],l=i[1],p=Object(r.useState)([[]]),b=Object(j.a)(p,2),m=b[0],f=b[1];Object(r.useEffect)((function(){v()}),[a,o]);var O=function(){c(a+1)};function x(e){console.log(o[0]),console.log(e[0]),o[0]!=e[0]?l(e):l([])}var v=function(){var t=Object(h.a)(d.a.mark((function t(){var n,r,a,c,s,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://tipped-server-app.herokuapp.com/api/getRestaurants",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 2:return n=t.sent,t.next=5,n.json();case 5:return r=t.sent,a=[],Array.from(r).forEach((function(e){var t=[e._id,e.zip_code,e.name,e.entree_price];a.push(t)})),t.next=10,fetch("https://tipped-server-app.herokuapp.com/api/allPayByUser",{method:"GET",headers:{Authorization:"Bearer "+e.token}});case 10:return c=t.sent,t.next=13,c.json();case 13:s=t.sent,i=[],Array.from(s).forEach((function(e){var t="";a.forEach((function(n){e.restaurant==n[0]&&(t=n[2])})),i.push([e._id,e.hourly_pay,e.weekly_tips,e.weekly_hours,e.restaurant,e.user,t])})),f(i);case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return o[0]?Object(u.jsx)("div",{children:Object(u.jsx)(z,{value:o,token:e.token,resetUpdateValue:function(){l([])}})}):Object(u.jsxs)("div",{className:"d-flex flex-row bg-light",children:[Object(u.jsxs)("div",{className:"w-50 padding-10-px",children:[Object(u.jsx)("h1",{children:"Current Records"}),Object(u.jsx)("p",{children:"These are all of your current records in our database, feel free to update or delete any of them"})]}),Object(u.jsx)("div",{className:"w-50",children:m.map((function(t,n){return Object(u.jsx)(A,{index:n,value:t,token:e.token,increaseDeleteCount:O,increaseUpdateCount:x})}))})]})}n(39);var F=function(){var e=function(){var e=Object(r.useState)(function(){var e=sessionStorage.getItem("token"),t=JSON.parse(e);return null===t||void 0===t?void 0:t.token}()),t=Object(j.a)(e,2),n=t[0],a=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),a(e.token)},token:n}}(),t=e.token,n=e.setToken;return t?Object(u.jsxs)(i.a,{basename:"/frontend-tipped-server-app",children:[Object(u.jsx)(l,{setToken:n}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,render:function(e){return Object(u.jsx)(N,{token:t})}}),Object(u.jsx)(o.a,{path:"/addRecord",exact:!0,render:function(e){return Object(u.jsx)(f,{token:t})}}),Object(u.jsx)(o.a,{path:"/jobs",exact:!0,render:function(e){return Object(u.jsx)(g,{token:t})}}),Object(u.jsx)(o.a,{path:"/stats-search",exact:!0,render:function(e){return Object(u.jsx)(v,{token:t})}}),Object(u.jsx)(o.a,{path:"/myRecords",exact:!0,render:function(e){return Object(u.jsx)(E,{token:t})}})]})]}):Object(u.jsxs)("div",{className:"row log-in-page",children:[Object(u.jsx)("div",{className:"col"}),Object(u.jsx)("div",{className:"col log-in-column justify-content-space-around",children:Object(u.jsx)(P,{setToken:n})}),Object(u.jsx)("div",{className:"col"})]})},B=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,43)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(40);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root")),B()}},[[41,2,3]]]);
//# sourceMappingURL=main.eebdc7df.chunk.js.map