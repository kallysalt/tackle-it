(this["webpackJsonptackle-it"]=this["webpackJsonptackle-it"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},57:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(21),s=n.n(a),i=(n(43),n(44),n(15)),u=n(17),l=n(6),o=n(9),j=n(20);n(80),n(46),n(79);j.a.initializeApp({apiKey:"AIzaSyBvdf5G18XliY3Q7zRMFM2Ujzk-mbP1cOI",authDomain:"tackle-it-7.firebaseapp.com",projectId:"tackle-it-7",storageBucket:"tackle-it-7.appspot.com",messagingSenderId:"463778182163",appId:"1:463778182163:web:1917ce5fcbff617232fbe6",measurementId:"G-TQMMP860YW"});var d=j.a.firestore(),b=j.a.auth(),O=j.a.storage(),p=j.a.firestore.Timestamp,h=n(2),x=Object(c.createContext)(),m=function(e,t){switch(t.type){case"LOGIN":return Object(o.a)(Object(o.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{user:null});case"AUTH_IS_READY":return{user:t.payload,authIsReady:!0};default:return e}},f=function(e){var t=e.children,n=Object(c.useReducer)(m,{user:null,authIsReady:!1}),r=Object(l.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){var e=b.onAuthStateChanged((function(t){s({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),console.log("AuthContext state:",a),Object(h.jsx)(x.Provider,{value:Object(o.a)(Object(o.a)({},a),{},{dispatch:s}),children:t})},v=function(){var e=Object(c.useContext)(x);if(!e)throw Error("useAuthContext must be used inside an AuthContextProvider");return e},g=(n(49),n(25)),y=function(e,t,n){var r=Object(c.useState)(null),a=Object(l.a)(r,2),s=a[0],i=a[1],u=Object(c.useState)(null),j=Object(l.a)(u,2),b=j[0],O=j[1],p=Object(c.useRef)(t).current,h=Object(c.useRef)(n).current;return Object(c.useEffect)((function(){var t,n,c=d.collection(e);p&&(c=(t=c).where.apply(t,Object(g.a)(p)));h&&(c=(n=c).orderBy.apply(n,Object(g.a)(h)));var r=c.onSnapshot((function(e){var t=[];e.docs.forEach((function(e){t.push(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id}))})),i(t),O(null)}),(function(e){console.log(e),O("could not fetch the data")}));return function(){return r()}}),[e,p,h]),{documents:s,error:b}};n(50),n(51);function N(e){var t=e.src;return Object(h.jsx)("div",{className:"avatar",children:Object(h.jsx)("img",{src:t,alt:"user avatar"})})}function D(e){var t=e.projects;return console.log(t),Object(h.jsxs)("div",{className:"project-list",children:[0===t.length&&Object(h.jsx)("p",{children:"No projects yet!"}),t.map((function(e){return Object(h.jsxs)(i.b,{to:"/projects/".concat(e.id),children:[Object(h.jsx)("h4",{children:e.name}),Object(h.jsxs)("p",{children:["Due by ",e.dueDate.toDate().toDateString()]}),Object(h.jsxs)("div",{className:"assigned-to",children:[Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:"Assigned to:"})}),Object(h.jsx)("ul",{children:e.assignedUsersList.map((function(e){return Object(h.jsxs)("li",{children:[" ",Object(h.jsx)(N,{src:e.photoURL})," "]},e.photoURL)}))})]})]},e.id)}))]})}var S=["all","mine","development","design","marketing","sales"];function E(e){var t=e.changeFilter,n=Object(c.useState)("all"),r=Object(l.a)(n,2),a=r[0],s=r[1];return Object(h.jsx)("div",{className:"project-filter",children:Object(h.jsxs)("nav",{children:[Object(h.jsx)("p",{children:"Filter by: "}),S.map((function(e){return Object(h.jsx)("button",{onClick:function(){return s(n=e),void t(n);var n},className:a===e?"active":"",children:e},e)}))]})})}function w(){var e=y("projects"),t=e.documents,n=e.error,r=v().user,a=Object(c.useState)("all"),s=Object(l.a)(a,2),i=s[0],u=s[1],o=t?t.filter((function(e){switch(i){case"all":return!0;case"mine":var t=!1;return e.assignedUsersList.forEach((function(e){e.id===r.uid&&(t=!0)})),t;case"development":case"design":case"sales":case"marketing":return console.log(e.category,i),e.category===i;default:return!0}})):null;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{className:"page-title",children:"Dashboard"}),n&&Object(h.jsx)("p",{className:"error",children:n}),t&&Object(h.jsx)(E,{changeFilter:function(e){u(e)}}),o&&Object(h.jsx)(D,{projects:o})]})}var P=n(7),R=n.n(P),k=n(11),U=(n(57),n(33)),C={document:null,isPending:!1,error:null,success:null},L=function(e,t){switch(t.type){case"IS_PENDING":return{isPending:!0,document:null,success:!1,error:null};case"ADDED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};case"DELETED_DOCUMENT":return{isPending:!1,document:null,success:!0,error:null};case"UPDATED_DOCUMENT":return{isPending:!1,document:t.payload,success:!0,error:null};case"ERROR":return{isPending:!1,document:null,success:!1,error:t.payload};default:return e}},A=function(e){var t=Object(c.useReducer)(L,C),n=Object(l.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),u=i[0],j=i[1],b=d.collection(e),O=function(e){u||a(e)},h=function(){var e=Object(k.a)(R.a.mark((function e(t){var n,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,n=p.fromDate(new Date),e.next=5,b.add(Object(o.a)(Object(o.a)({},t),{},{createdAt:n}));case 5:c=e.sent,O({type:"ADDED_DOCUMENT",payload:c}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),O({type:"ERROR",payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(k.a)(R.a.mark((function e(t){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).delete();case 4:O({type:"DELETED_DOCUMENT"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),O({type:"ERROR",payload:"could not delete"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(k.a)(R.a.mark((function e(t,n){var c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"IS_PENDING"}),e.prev=1,e.next=4,b.doc(t).update(n);case 4:return c=e.sent,O({type:"UPDATED_DOCUMENT",payload:c}),e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),O({type:"ERROR",payload:e.t0}),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return j(!0)}}),[]),{addDocument:h,deleteDocument:x,updateDocument:m,response:r}},I=[{value:"development",label:"Development"},{value:"design",label:"Design"},{value:"sales",label:"Sales"},{value:"marketing",label:"Marketing"}];function T(){var e=v().user,t=y("users").documents,n=A("projects"),r=n.addDocument,a=n.response,s=Object(u.g)(),i=Object(c.useState)([]),j=Object(l.a)(i,2),d=j[0],b=j[1],O=Object(c.useState)(""),x=Object(l.a)(O,2),m=x[0],f=x[1],g=Object(c.useState)(""),N=Object(l.a)(g,2),D=N[0],S=N[1],E=Object(c.useState)(""),w=Object(l.a)(E,2),P=w[0],C=w[1],L=Object(c.useState)(""),T=Object(l.a)(L,2),M=T[0],_=T[1],G=Object(c.useState)([]),q=Object(l.a)(G,2),B=q[0],z=q[1],F=Object(c.useState)(null),Y=Object(l.a)(F,2),H=Y[0],W=Y[1];Object(c.useEffect)((function(){t&&b(t.map((function(e){return{value:Object(o.a)(Object(o.a)({},e),{},{id:e.id}),label:e.displayName}})))}),[t]);var J=function(){var t=Object(k.a)(R.a.mark((function t(n){var c,i,u;return R.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),W(null),M){t.next=5;break}return W("Please select a project category."),t.abrupt("return");case 5:if(!(B.length<1)){t.next=8;break}return W("Please assign the project to at least 1 user"),t.abrupt("return");case 8:return c={displayName:e.displayName,photoURL:e.photoURL,id:e.uid},i=B.map((function(e){return{displayName:e.value.displayName,photoURL:e.value.photoURL,id:e.value.id}})),u={name:m,details:D,category:M.value,dueDate:p.fromDate(new Date(P)),comments:[],createdBy:c,assignedUsersList:i},t.next=13,r(u);case 13:a.error||s.push("/");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"create-form",children:[Object(h.jsx)("h2",{className:"page-title",children:"Create a new project"}),Object(h.jsxs)("form",{onSubmit:J,children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Project name:"}),Object(h.jsx)("input",{required:!0,type:"text",onChange:function(e){return f(e.target.value)},value:m})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Project details:"}),Object(h.jsx)("textarea",{required:!0,type:"text",onChange:function(e){return S(e.target.value)},value:D})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Set due date:"}),Object(h.jsx)("input",{required:!0,type:"date",onChange:function(e){return C(e.target.value)},value:P})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Project category:"}),Object(h.jsx)(U.a,{onChange:function(e){return _(e)},options:I})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Assign to:"}),Object(h.jsx)(U.a,{onChange:function(e){return z(e)},options:d,isMulti:!0})]}),Object(h.jsx)("button",{className:"btn",children:"Add Project"}),H&&Object(h.jsx)("p",{className:"error",children:H})]})]})}n(72);function M(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],o=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),O=j[0],p=j[1],h=v().dispatch,x=function(){var e=Object(k.a)(R.a.mark((function e(t,c){var r,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),p(!0),e.prev=2,e.next=5,b.signInWithEmailAndPassword(t,c);case 5:return r=e.sent,a=d.collection("users").doc(r.user.uid),e.next=9,a.update({online:!0});case 9:h({type:"LOGIN",payload:r.user}),n||(p(!1),u(null)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),n||(u(e.t0.message),p(!1));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{login:x,isPending:O,error:i}}(),j=o.login,O=o.error,p=o.isPending;return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),j(n,i)},className:"auth-form",children:[Object(h.jsx)("h2",{children:"login"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"email:"}),Object(h.jsx)("input",{required:!0,type:"email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"password:"}),Object(h.jsx)("input",{required:!0,type:"password",onChange:function(e){return u(e.target.value)},value:i})]}),!p&&Object(h.jsx)("button",{className:"btn",children:"Log in"}),p&&Object(h.jsx)("button",{className:"btn",disabled:!0,children:"loading"}),O&&Object(h.jsx)("div",{className:"error",children:O})]})}n(73);function _(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(""),j=Object(l.a)(o,2),p=j[0],x=j[1],m=Object(c.useState)(null),f=Object(l.a)(m,2),g=f[0],y=f[1],N=Object(c.useState)(null),D=Object(l.a)(N,2),S=D[0],E=D[1],w=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),p=j[0],h=j[1],x=v().dispatch,m=function(){var e=Object(k.a)(R.a.mark((function e(t,c,r,a){var s,i,l,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),h(!0),e.prev=2,e.next=5,b.createUserWithEmailAndPassword(t,c);case 5:if(s=e.sent){e.next=8;break}throw new Error("Could not complete signup");case 8:return i="avatars/".concat(s.user.uid,"/").concat(a.name),e.next=11,O.ref(i).put(a);case 11:return l=e.sent,e.next=14,l.ref.getDownloadURL();case 14:return o=e.sent,e.next=17,s.user.updateProfile({displayName:r,photoURL:o});case 17:return e.next=19,d.collection("users").doc(s.user.uid).set({online:!0,displayName:r,photoURL:o});case 19:x({type:"LOGIN",payload:s.user}),n||(h(!1),u(null)),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),n||(u(e.t0.message),h(!1));case 26:case"end":return e.stop()}}),e,null,[[2,23]])})));return function(t,n,c,r){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{signup:m,error:i,isPending:p}}(),P=w.signup,U=w.isPending,C=w.error;return Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),P(n,i,p,g)},className:"auth-form",children:[Object(h.jsx)("h2",{children:"sign up"}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"email:"}),Object(h.jsx)("input",{required:!0,type:"email",onChange:function(e){return r(e.target.value)},value:n})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"password:"}),Object(h.jsx)("input",{required:!0,type:"password",onChange:function(e){return u(e.target.value)},value:i})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"display name:"}),Object(h.jsx)("input",{required:!0,type:"text",onChange:function(e){return x(e.target.value)},value:p})]}),Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Profile avatar:"}),Object(h.jsx)("input",{required:!0,type:"file",onChange:function(e){y(null);var t=e.target.files[0];console.log(t),t?t.type.includes("image")?t.size>1e5?E("Image file size must be less than 100kb"):(E(null),y(t),console.log("avatar updated")):E("Selected file must be an image"):E("Please select a file")}}),S&&Object(h.jsx)("div",{className:"error",children:S})]}),!U&&Object(h.jsx)("button",{className:"btn",children:"Sign up"}),U&&Object(h.jsx)("button",{className:"btn",disabled:!0,children:"loading"}),C&&Object(h.jsx)("div",{className:"error",children:C})]})}n(74);function G(e){var t=e.project,n=A("projects").deleteDocument,c=v().user,r=Object(u.g)();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"project-summary",children:[Object(h.jsx)("h2",{className:"page-title",children:t.name}),Object(h.jsxs)("p",{className:"created-by",children:["By ",t.createdBy.displayName]}),Object(h.jsxs)("p",{className:"due-date",children:["Project due by ",t.dueDate.toDate().toDateString()]}),Object(h.jsx)("p",{className:"details",children:t.details}),Object(h.jsx)("h4",{children:"Project assigned to:"}),Object(h.jsx)("div",{className:"assigned-users",children:t.assignedUsersList.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(N,{src:e.photoURL})},e.id)}))})]}),c.uid===t.createdBy.id&&Object(h.jsx)("button",{className:"btn",onClick:function(){n(t.id),r.push("/")},children:"Mark as Completed"})]})}var q=n(38);function B(e){var t=e.project,n=A("projects"),r=n.updateDocument,a=n.response,s=v().user,i=Object(c.useState)(""),u=Object(l.a)(i,2),o=u[0],j=u[1],d=function(){var e=Object(k.a)(R.a.mark((function e(n){var c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),c={displayName:s.displayName,photoURL:s.photoURL,content:o,createdAt:p.fromDate(new Date),id:Math.random()},e.next=4,r(t.id,{comments:[].concat(Object(g.a)(t.comments),[c])});case 4:a.error||j("");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"project-comments",children:[Object(h.jsx)("h4",{children:"Project Comments"}),Object(h.jsx)("ul",{children:t.comments.length>0&&t.comments.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsxs)("div",{className:"comment-author",children:[Object(h.jsx)(N,{src:e.photoURL}),Object(h.jsx)("p",{children:e.displayName})]}),Object(h.jsx)("div",{className:"comment-date",children:Object(h.jsx)("p",{children:Object(q.a)(e.createdAt.toDate(),{addSuffix:!0})})}),Object(h.jsx)("div",{className:"comment-content",children:Object(h.jsx)("p",{children:e.content})})]},e.id)}))}),Object(h.jsxs)("form",{className:"add-comment",onSubmit:d,children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("span",{children:"Add new comment:"}),Object(h.jsx)("textarea",{onChange:function(e){return j(e.target.value)},value:o})]}),Object(h.jsx)("button",{className:"btn",children:"Add Comment"})]})]})}function z(){var e=function(e,t){var n=Object(c.useState)(null),r=Object(l.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(null),u=Object(l.a)(i,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){var n=d.collection(e).doc(t).onSnapshot((function(e){e.data()?(s(Object(o.a)(Object(o.a)({},e.data()),{},{id:e.id})),b(null)):b("No such document exists")}),(function(e){console.log(e.message),b("failed to get document")}));return function(){return n()}}),[e,t]),{document:a,error:j}}("projects",Object(u.h)().id),t=e.document,n=e.error;return n?Object(h.jsx)("div",{className:"error",children:n}):t?Object(h.jsxs)("div",{className:"project-details",children:[Object(h.jsx)(G,{project:t}),Object(h.jsx)(B,{project:t})]}):Object(h.jsx)("div",{className:"loading",children:"Loading..."})}n(75);var F=n.p+"static/media/team.36f268b6.svg";function Y(){var e=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(null),s=Object(l.a)(a,2),i=s[0],u=s[1],o=Object(c.useState)(!1),j=Object(l.a)(o,2),O=j[0],p=j[1],h=v().dispatch,x=function(){var e=Object(k.a)(R.a.mark((function e(){var t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(null),p(!0),e.prev=2,t=b.currentUser.uid,e.next=6,d.collection("users").doc(t).update({online:!1});case 6:return e.next=8,b.signOut();case 8:h({type:"LOGOUT"}),n||(p(!1),u(null)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),n||(u(e.t0.message),p(!1));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){return function(){return r(!0)}}),[]),{logout:x,error:i,isPending:O}}(),t=e.logout,n=e.isPending,r=v().user;return Object(h.jsx)("nav",{className:"navbar",children:Object(h.jsxs)("ul",{children:[!r&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("li",{className:"logo",children:[Object(h.jsx)("img",{src:F,alt:"logo"}),Object(h.jsx)("span",{children:"Tackle It"})]}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/login",children:"Login"})}),Object(h.jsx)("li",{children:Object(h.jsx)(i.b,{to:"/signup",children:"Signup"})})]}),r&&Object(h.jsxs)("li",{children:[!n&&Object(h.jsx)("button",{className:"btn",onClick:t,children:"Logout"}),n&&Object(h.jsx)("button",{className:"btn",disabled:!0,children:"Logging out..."})]})]})})}n(76);var H=n.p+"static/media/dashboard.bc800f3b.svg",W=n.p+"static/media/add.376e9b6a.svg";function J(){var e=v().user;return Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsxs)("div",{className:"sidebar-content",children:[Object(h.jsxs)("div",{className:"user",children:[Object(h.jsx)(N,{src:e.photoURL}),Object(h.jsxs)("p",{children:["Hi ",e.displayName," ~"]})]}),Object(h.jsx)("nav",{className:"links",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsxs)(i.c,{exact:!0,to:"/",children:[Object(h.jsx)("img",{src:H,alt:"dashboard icon"}),Object(h.jsx)("span",{children:"Dashboard"})]})}),Object(h.jsx)("li",{children:Object(h.jsxs)(i.c,{to:"/create",children:[Object(h.jsx)("img",{src:W,alt:"add project icon"}),Object(h.jsx)("span",{children:"New Project"})]})})]})})]})})}n(77);function Q(){var e=y("users"),t=e.isPending,n=e.error,c=e.documents;return Object(h.jsxs)("div",{className:"user-list",children:[Object(h.jsx)("h2",{children:"All Users"}),t&&Object(h.jsx)("div",{children:"Loading users..."}),n&&Object(h.jsx)("div",{children:n}),c&&c.map((function(e){return Object(h.jsxs)("div",{className:"user-list-item",children:[e.online&&Object(h.jsx)("span",{className:"online-user"}),Object(h.jsx)("span",{children:e.displayName}),Object(h.jsx)(N,{src:e.photoURL})]},e.id)}))]})}var K=function(){var e=v(),t=e.authIsReady,n=e.user;return Object(h.jsx)("div",{className:"App",children:t&&Object(h.jsxs)(i.a,{children:[n&&Object(h.jsx)(J,{}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(Y,{}),Object(h.jsxs)(u.d,{children:[Object(h.jsxs)(u.b,{exact:!0,path:"/",children:[!n&&Object(h.jsx)(u.a,{to:"/login"}),n&&Object(h.jsx)(w,{})]}),Object(h.jsxs)(u.b,{path:"/create",children:[!n&&Object(h.jsx)(u.a,{to:"/login"}),n&&Object(h.jsx)(T,{})]}),Object(h.jsxs)(u.b,{path:"/projects/:id",children:[!n&&Object(h.jsx)(u.a,{to:"/login"}),n&&Object(h.jsx)(z,{})]}),Object(h.jsxs)(u.b,{path:"/login",children:[n&&Object(h.jsx)(u.a,{to:"/"}),!n&&Object(h.jsx)(M,{})]}),Object(h.jsxs)(u.b,{path:"/signup",children:[n&&Object(h.jsx)(u.a,{to:"/"}),!n&&Object(h.jsx)(_,{})]})]})]}),n&&Object(h.jsx)(Q,{})]})})};s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(f,{children:Object(h.jsx)(K,{})})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.e288a71a.chunk.js.map