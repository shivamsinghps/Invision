(this.webpackJsonpinvision=this.webpackJsonpinvision||[]).push([[0],{34:function(e,t,a){e.exports={Header:"Header_Header__3yweT",MailLogo:"Header_MailLogo__qmpjO",Logo:"Header_Logo__3B7Kj",root:"Header_root__3vO_f",title:"Header_title__mOpxj"}},56:function(e,t,a){e.exports={reading_progress_bar:"ReadingProgress_reading_progress_bar__bgU6W"}},59:function(e,t,a){e.exports={Layout:"Layout_Layout__37MHr"}},61:function(e,t,a){e.exports=a.p+"static/media/Header.0afc1251.jpg"},62:function(e,t,a){e.exports={Menu:"SideDrawer_Menu__3MVJk"}},64:function(e,t,a){e.exports=a.p+"static/media/envelope-solid.82189696.svg"},81:function(e,t,a){e.exports=a(92)},86:function(e,t,a){},87:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),i=(a(86),a(87),a(26)),c=a(56),s=a.n(c),u=function(e){var t=e.target,a=Object(n.useState)(0),l=Object(i.a)(a,2),o=l[0],c=l[1],u=function(){if(t.current){console.log(t);var e=t.current,a=e.clientHeight-e.offsetTop-window.innerHeight,n=window.pageYOffset||0;return 0===n?c(0):n>a?c(100):void c(n/a*100)}};return Object(n.useEffect)((function(){return window.addEventListener("scroll",u),function(){return window.removeEventListener("scroll",u)}})),r.a.createElement("div",{className:s.a.reading_progress_bar,style:{width:"".concat(o,"%")}})},m=a(57),d=a(58),p=a(66),E=a(65),f=a(59),g=a.n(f),b=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={sideDrawer:!1},e.toggleDrawer=function(){e.set.setState((function(e){return{sideDrawer:!e.sideDrawer}}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:g.a.Layout},this.props.children))}}]),a}(n.Component),v=a(139),w=a(34),_=a.n(w),h=a(138),y=a(131),k=a(137),j=a(135),L=a(136),O=a(134),H=a(93),x=r.a.forwardRef((function(e,t){return r.a.createElement(H.a,Object.assign({direction:"up",ref:t},e))}));function M(){var e=r.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],l=function(){n(!1)};return r.a.createElement("div",null,r.a.createElement("p",{onClick:function(){n(!0)}},"SUBMIT"),r.a.createElement(y.a,{open:a,TransitionComponent:x,keepMounted:!0,onClose:l,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(O.a,{id:"alert-dialog-slide-title"},"Submitted"),r.a.createElement(j.a,null,r.a.createElement(L.a,{id:"alert-dialog-slide-description"},"Submitted. Check Your EmailId!")),r.a.createElement(k.a,null,r.a.createElement(h.a,{onClick:l,color:"primary"},"Back"))))}var N=a(61),C=a.n(N),S=a(146),B=a(147),D=a(30),U=a(145),I=a(63),T=a.n(I),A=a(140),F=a(144),J=a(141),R=a(142),W=a(143),V=a(46),Y=a.n(V),q=a(47),z=a.n(q),K=a(62),P=a.n(K),$=Object(v.a)({list:{width:250},text:{color:"white"},fullList:{width:"auto"},paper:{background:"#333333"}}),G=function(){var e=$(),t=r.a.useState(!1),a=Object(i.a)(t,2),n=a[0],l=a[1],o=function(){l(!n)},c=r.a.createElement("div",{className:e.list,role:"presentation",onClick:o},r.a.createElement(A.a,null,["Home","Latest News","AboutUs","Contact Us"].map((function(t,a){return r.a.createElement(J.a,{button:!0,key:t},r.a.createElement(R.a,null,a%2===0?r.a.createElement(Y.a,null):r.a.createElement(z.a,null)),r.a.createElement(W.a,{classes:{root:e.text},primary:t}))}))),r.a.createElement(F.a,null),r.a.createElement(A.a,null,["UnBunked","Team Anonymous"].map((function(e,t){return r.a.createElement(J.a,{button:!0,key:e},r.a.createElement(R.a,null,t%2===0?r.a.createElement(Y.a,null):r.a.createElement(z.a,null)),r.a.createElement(W.a,{primary:e}))}))));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:P.a.Menu},r.a.createElement(h.a,{onClick:o},r.a.createElement(T.a,null))),r.a.createElement(U.a,{classes:{paper:e.paper},anchor:"right",open:n,onClose:o},c))},Q=a(64),X=a.n(Q),Z=a(148),ee=Object(v.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"45ch"}},title:{fontSize:34}}})),te=function(e){var t=ee();return r.a.createElement("header",{className:_.a.Header,style:{backgroundImage:"url(".concat(C.a,") ")}},r.a.createElement("div",{className:_.a.Logo},r.a.createElement("p",null,"Logo")),r.a.createElement(G,null),r.a.createElement(S.a,{className:_.a.root,border:1,variant:"outlined"},r.a.createElement(B.a,null,r.a.createElement(D.a,{className:t.title},"Join Us! Let's Move Forward"),r.a.createElement("img",{className:_.a.MailLogo,src:X.a,alt:"mail-logo"})),r.a.createElement(B.a,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("submitted")},noValidate:!0},r.a.createElement(Z.a,{style:{width:"60%",marginBottom:"10px"},id:"filled-basic",label:"EmailID",variant:"filled"}),r.a.createElement(h.a,{type:"submit",style:{display:"block",width:"50%",margin:"auto"}},r.a.createElement(M,null))))))},ae=r.a.createRef();var ne=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(u,{target:ae}),r.a.createElement("div",{className:"App",ref:ae},r.a.createElement(b,null,r.a.createElement(te,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.39fad595.chunk.js.map