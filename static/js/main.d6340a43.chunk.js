(this.webpackJsonpfeedbackproject=this.webpackJsonpfeedbackproject||[]).push([[0],{36:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/close.ecf05d86.svg"},74:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/logo.1d3e0137.svg"},75:function(n,e,t){"use strict";t.r(e);var a,i,o,r,c,l,s,d,b,p,u,x,g,f,h,m,j,w,O,y,v,k,S,T,R,z,C,E,L,F,N,I,P,A,_,D,B,U,G,M,J,K,Y,H=t(1),Q=t.n(H),W=t(19),q=t.n(W),V=t(3),X=t(4),Z="linear-gradient(90deg, rgba(249,179,203,1) 0%, rgba(225,163,225,1) 35%, rgba(196,145,251,1) 100%)",$={themeBackground:Z},nn=640,en=800,tn=1024,an=1280,on=Object(V.b)(a||(a=Object(X.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  html, body {\n    height: 100%;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'Open Sans', sans-serif !important;\n    font-weight: 400 !important;\n    font-style: normal;\n    background: "," !important;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n"])),Z),rn=t(9),cn=t(8),ln=t(7),sn=t(11),dn=t.n(sn),bn=t(12),pn=t(14),un=t.n(pn),xn=t(45),gn=t(16),fn=t(41),hn=t(6),mn="FEEDBACK_POST_REQUEST",jn="FEEDBACK_POST_SUCCESS",wn="FEEDBACK_POST_FAIL",On="GET_FEEDBACKS_REQUEST",yn="GET_FEEDBACKS_SUCCESS",vn="GET_FEEDBACKS_FAIL",kn={feedbackPostLoading:!1,feedbackPostSuccess:"",feedbackPostFail:"",feedbacksLoading:!1,allFeedbacks:[],feedbacksFail:""},Sn="LOGIN_REQUEST",Tn="LOGIN_SUCCESS",Rn="LOGIN_FAIL",zn="SIGNUP_REQUEST",Cn="SIGNUP_SUCCESS",En="SIGNUP_FAIL",Ln="LOGOUT",Fn={loginLoading:!1,loginSuccess:localStorage.getItem("loginSuccess")||"",loginFail:"",signupLoading:!1,signupSuccess:"",signupFail:""},Nn=Object(gn.b)({user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Sn:return Object(hn.a)(Object(hn.a)({},n),{},{loginLoading:!0,loginFail:"",loginSuccess:""});case Tn:return console.log(e.payload,"PAYLOAD"),sessionStorage.setItem("loginSuccess",JSON.stringify(e.payload)),localStorage.setItem("loginSuccess",JSON.stringify(e.payload)),localStorage.setItem("name",e.payload.name),localStorage.setItem("email",e.payload.email),sessionStorage.setItem("name",e.payload.name),sessionStorage.setItem("email",e.payload.email),Object(hn.a)(Object(hn.a)({},n),{},{loginSuccess:e.payload,loginLoading:!1});case Rn:return Object(hn.a)(Object(hn.a)({},n),{},{loginLoading:!1,loginFail:e.payload});case zn:return Object(hn.a)(Object(hn.a)({},n),{},{signupLoading:!0,signupFail:""});case Cn:return Object(hn.a)(Object(hn.a)({},n),{},{signupSuccess:e.payload,signupLoading:!1});case En:return Object(hn.a)(Object(hn.a)({},n),{},{signupLoading:!1,signupFail:e.payload});case Ln:return sessionStorage.clear(),localStorage.clear(),Object(hn.a)(Object(hn.a)({},n),{},{loginSuccess:""});default:return n}},feedback:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case mn:return Object(hn.a)(Object(hn.a)({},n),{},{feedbackPostLoading:!0,feedbackPostFail:"",feedbackPostSuccess:""});case jn:return Object(hn.a)(Object(hn.a)({},n),{},{feedbackPostLoading:!1,feedbackPostSuccess:e.payload});case wn:return Object(hn.a)(Object(hn.a)({},n),{},{feedbackPostLoading:!1,feedbackPostFail:e.payload});case On:return Object(hn.a)(Object(hn.a)({},n),{},{feedbacksLoading:!0,feedbacksFail:""});case yn:return Object(hn.a)(Object(hn.a)({},n),{},{feedbacksLoading:!1,allFeedbacks:e.payload});case vn:return Object(hn.a)(Object(hn.a)({},n),{},{feedbacksLoading:!1,feedbacksFail:e.payload});default:return n}}}),In=Nn,Pn=[fn.a],An=Object(gn.c)(In,(i=Pn,gn.a.apply(void 0,Object(xn.a)(i)))),_n="https://feedback-rapid.herokuapp.com",Dn=V.d.div(o||(o=Object(X.a)(["\n  margin-left: 15px;\n  margin-right: 15px;\n  @media only screen and (min-width: 640px) {\n    margin-left: 20%;\n    margin-right: 20%;\n  }\n"]))),Bn=V.d.div(r||(r=Object(X.a)(["\n  max-width: 450px;\n  background: #fff;\n  padding: 50px;\n  margin: 75px auto;\n  border-radius: 30px;\n  position: relative;\n"]))),Un=V.d.h1(c||(c=Object(X.a)(["\n  color: #535274;\n  font-weight: bold !important;\n  letter-spacing: 3px;\n  margin-bottom: 25px;\n  text-align: center;\n  font-size: 22px;\n"]))),Gn=V.d.div(l||(l=Object(X.a)(["\n  width: 100%;\n"]))),Mn=V.d.input(s||(s=Object(X.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px 40px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  font-size: 14px;\n  color: #535274;\n  &::placeholder {\n    opacity: 1;\n    font-size: 14px;\n  }\n"]))),Jn=V.d.select(d||(d=Object(X.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #535274;\n"]))),Kn=V.d.textarea(b||(b=Object(X.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px 40px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  height: 125px;\n  border-radius: 15px;\n  margin-bottom: 30px;\n  padding: 15px 15px;\n  resize: none;\n  font-size: 14px;\n  color: #535274;\n  &::placeholder {\n    opacity: 1;\n  }\n"]))),Yn=V.d.i(p||(p=Object(X.a)(["\n  position: absolute;\n  left: 65px;\n  margin-top: 17px;\n  color: #535274;\n"]))),Hn=V.d.button(u||(u=Object(X.a)(["\n  background: #827ffe;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 12px;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n"]))),Qn=V.d.i(x||(x=Object(X.a)(["\n  margin-left: 10px;\n  font-size: 12px;\n"]))),Wn=V.d.thead(g||(g=Object(X.a)(["\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 20px;\n  color: #212241;\n"]))),qn=V.d.div(f||(f=Object(X.a)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: #a09fa2;\n"]))),Vn=V.d.div(h||(h=Object(X.a)(["\n  color: #212241;\n  @media only screen and (min-width: 640px) {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n"]))),Xn=t(44),Zn=t(43),$n="50px",ne=function(n){return Object(Zn.a)(255,255,255,n)},ee=V.d.div(m||(m=Object(X.a)(["\n  transition: width 600ms ease-out, height 600ms ease-out;\n  padding-top: 24px;\n  color: #212241;\n\n  .ReactTable {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n\n    flex-direction: column;\n    color: #212241;\n\n    clear: both;\n    border: none;\n  }\n  .ReactTable * {\n    box-sizing: border-box;\n  }\n  .ReactTable .rt-table {\n    -webkit-box-flex: 1;\n    -ms-flex: auto 1;\n    flex: auto 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    width: 100%;\n    border-collapse: collapse;\n    overflow-x: hidden;\n  }\n  .ReactTable .rt-thead {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: ",";\n    -webkit-box-orient: horizontal;\n    flex-direction: row;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background: rgba(186, 169, 255, 0.07);\n  }\n  .ReactTable .rt-thead.-headerGroups {\n    background: '#6B00D7';\n  }\n  .ReactTable .rt-thead.-filters {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .ReactTable .rt-thead.-filters input,\n  .ReactTable .rt-thead.-filters select {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    background: #fff;\n    padding: 15px 7px;\n    font-size: inherit;\n    border-radius: 3px;\n    font-weight: normal;\n    outline: none;\n  }\n  .ReactTable .rt-thead.-filters .rt-th {\n    border-right: 1px solid rgba(0, 0, 0, 0.02);\n    text-align: start;\n  }\n  .ReactTable .rt-thead.-header {\n    // border-bottom: 1px solid ",";\n  }\n  .ReactTable .rt-thead .rt-tr {\n    text-align: center;\n  }\n\n  .ReactTable .rt-thead .rt-th.-sort-asc {\n    box-shadow: none;\n  }\n  .ReactTable .rt-tbody .rt-tr-group {\n  }\n  .ReactTable .rt-thead .rt-th,\n  .rt-tr.-odd .ReactTable .rt-thead .rt-td {\n    padding: 5px 5px;\n    line-height: normal;\n    position: relative;\n    text-align: right;\n  }\n  .ReactTable .rt-thead .rt-th.-cursor-pointer,\n  .ReactTable .rt-thead .rt-td.-cursor-pointer {\n    cursor: pointer;\n  }\n  .ReactTable .rt-thead .rt-th:last-child,\n  .ReactTable .rt-thead .rt-td:last-child {\n    border-right: 0;\n  }\n  .ReactTable .rt-thead .rt-th:focus {\n    outline: none;\n  }\n  .ReactTable .rt-thead .rt-resizable-header {\n    text-align: start;\n    overflow: visible;\n  }\n  .ReactTable .rt-thead .rt-resizable-header:last-child {\n    overflow: hidden;\n  }\n  .ReactTable .rt-thead .rt-resizable-header-content {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .ReactTable .rt-thead .rt-header-pivot {\n    border-right-color: #f7f7f7;\n  }\n  .ReactTable .rt-thead .rt-header-pivot:after,\n  .ReactTable .rt-thead .rt-header-pivot:before {\n    left: 100%;\n    top: 50%;\n    border: solid transparent;\n    content: ' ';\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n  .ReactTable .rt-thead .rt-header-pivot:after {\n    border-color: rgba(255, 255, 255, 0);\n    border-left-color: #fff;\n    border-width: 8px;\n    margin-top: -8px;\n  }\n  .ReactTable .rt-thead .rt-header-pivot:before {\n    border-color: rgba(102, 102, 102, 0);\n    border-left-color: #f7f7f7;\n    border-width: 10px;\n    margin-top: -10px;\n  }\n  .ReactTable .rt-tbody {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    background: #212241;\n  }\n  .ReactTable .rt-tbody .rt-tr-group:last-child {\n    border-bottom: 0;\n  }\n  .ReactTable .rt-tbody .rt-tr.-odd {\n    background: #2b2b4d;\n    border-radius: 3px;\n  }\n  .ReactTable .rt-tbody .rt-td {\n    display: flex;\n    align-items: right;\n    height: ",";\n    border-right: 1px solid rgba(0, 0, 0, 0.02);\n  }\n  .ReactTable .rt-tbody .rt-td:last-child {\n    border-right: 0;\n    width: auto;\n  }\n  .ReactTable .rt-tbody .rt-expandable {\n    cursor: auto !important;\n    text-overflow: clip;\n    overflow: visible;\n    > div {\n      overflow-x: visible;\n    }\n  }\n  .ReactTable .rt-tr-group {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    border-bottom: 2px solid #413764;\n    border-bottom: 1px solid #232222;\n  }\n  .ReactTable .rt-tr {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    align-items: center;\n    justify-content: space-around;\n  }\n  .ReactTable .rt-th,\n  .ReactTable .rt-td {\n    flex: 1;\n    align-items: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    padding: 5px;\n    overflow: hidden;\n    transition: 0.3s ease;\n    transition-property: width, min-width, padding, opacity;\n    > div,\n    > div span {\n      text-overflow: ellipsis;\n      overflow-x: hidden;\n    }\n  }\n  .ReactTable .rt-th.-hidden,\n  .ReactTable .rt-td.-hidden {\n    width: 0 !important;\n    min-width: 0 !important;\n    padding: 0 !important;\n    border: 0 !important;\n    opacity: 0 !important;\n  }\n  .ReactTable .rt-expander {\n    display: inline-block;\n    position: relative;\n    margin: 0;\n    color: transparent;\n    margin: 0 10px;\n  }\n  .ReactTable .rt-expander:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%) rotate(-90deg);\n    transform: translate(-50%, -50%) rotate(-90deg);\n    border-left: 5.04px solid transparent;\n    border-right: 5.04px solid transparent;\n    border-top: 7px solid rgba(0, 0, 0, 0.8);\n    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    cursor: pointer;\n  }\n  .ReactTable .rt-expander.-open:after {\n    -webkit-transform: translate(-50%, -50%) rotate(0);\n    transform: translate(-50%, -50%) rotate(0);\n  }\n  .ReactTable .rt-resizer {\n    display: inline-block;\n    position: absolute;\n    width: 36px;\n    top: 0;\n    bottom: 0;\n    right: -18px;\n    cursor: col-resize;\n    z-index: 10;\n  }\n  .ReactTable .rt-tfoot {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n    border-bottom: 1px solid ",";\n    border-top: 1px solid ",";\n    height: ",";\n    flex: 1 0 auto;\n    flex-direction: row;\n    align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    color: #212241;\n  }\n  .ReactTable .rt-tfoot .rt-td {\n    border-right: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .ReactTable .rt-tfoot .rt-td:last-child {\n    border-right: 0;\n  }\n  .ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {\n    background: '#6B00D7';\n  }\n  .ReactTable .-pagination {\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    padding: 3px;\n    border-top: 2px solid rgba(0, 0, 0, 0.1);\n    color: #212241;\n  }\n  .ReactTable .-pagination input,\n  .ReactTable .-pagination select {\n    background: inherit;\n    height: 30px;\n    padding: 5px 7px;\n    font-size: inherit;\n    border-radius: 3px;\n    font-weight: normal;\n    outline: none;\n    border: 0;\n  }\n  .ReactTable .-pagination .-btn {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    display: block;\n    width: 100%;\n    border: 0;\n    border-radius: 3px;\n    padding: 6px;\n    font-size: 1em;\n    background: inherit;\n    transition: all 0.1s ease;\n    cursor: pointer;\n    outline: none;\n  }\n  .ReactTable .-pagination .-btn[disabled] {\n    opacity: 0.5;\n    cursor: default;\n  }\n  .-next > button {\n    text-align: right;\n  }\n  .-previous > button {\n    text-align: left;\n  }\n  .ReactTable .-pagination .-previous,\n  .ReactTable .-pagination .-next {\n    text-align: center;\n  }\n  .ReactTable .-pagination .-center {\n    -webkit-box-flex: 1.5;\n    -ms-flex: 1.5;\n    flex: 1.5;\n    text-align: center;\n    margin-bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    justify-content: space-around;\n  }\n  .ReactTable .-pagination .-pageInfo {\n    display: inline-block;\n    margin: 3px 10px;\n    white-space: nowrap;\n    color: #212241;\n\n    input {\n      margin-bottom: 0 !important;\n    }\n  }\n  .ReactTable .-pagination .-pageJump {\n    width: 18px;\n    display: inline-block;\n  }\n  .ReactTable .-pagination .-pageJump input {\n    width: 70px;\n    text-align: start;\n    color: #212241;\n    font-weight: 700;\n    -moz-appearance: textfield;\n    ::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n  .ReactTable .-pagination .-pageSizeOptions {\n    margin: 3px 10px;\n    position: absolute;\n    left: 0;\n    bottom: -20px;\n    color: #212241;\n\n    :before {\n      cursor: initial;\n      content: 'showing:';\n    }\n    select {\n      margin-bottom: 0;\n      color: white;\n      background-color: #312964;\n    }\n  }\n  .ReactTable .rt-noData {\n    width: 100%;\n    text-align: center;\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: 100%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    background: rgba(255, 255, 255, 0.8);\n    transition: all 0.3s ease;\n    z-index: 1;\n    pointer-events: none;\n    padding: 20px;\n    color: rgba(0, 0, 0, 0.5);\n  }\n  .ReactTable .-loading {\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.8);\n    transition: all 0.3s ease;\n    z-index: -1;\n    opacity: 0;\n    pointer-events: none;\n  }\n  .ReactTable .-loading > div {\n    position: absolute;\n    display: block;\n    text-align: center;\n    width: 100%;\n    top: 50%;\n    left: 0;\n    font-size: 15px;\n    color: rgba(0, 0, 0, 0.6);\n    -webkit-transform: translateY(-52%);\n    transform: translateY(-52%);\n    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  }\n  .ReactTable .-loading.-active {\n    opacity: 1;\n    z-index: 2;\n    pointer-events: all;\n  }\n  .ReactTable .-loading.-active > div {\n    -webkit-transform: translateY(50%);\n    transform: translateY(50%);\n  }\n  .ReactTable .rt-resizing .rt-th,\n  .ReactTable .rt-resizing .rt-td {\n    transition: none !important;\n    cursor: col-resize;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n"])),$n,ne(.1),$n,ne(.1),ne(.1),$n),te=t(42),ae=t.n(te),ie=t(2),oe=function(){var n=Object(ln.b)(),e=Object(ln.c)((function(n){return n.feedback})),t=e.allFeedbacks,a=e.feedbacksLoading,i=Q.a.useState([]),o=Object(cn.a)(i,2),r=o[0],c=o[1],l=Q.a.useState(!1),s=Object(cn.a)(l,2),d=s[0];s[1];Object(H.useEffect)((function(){n(function(){var n=Object(bn.a)(dn.a.mark((function n(e,t){var a;return dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:On}),n.next=4,un.a.get("".concat(_n,"/all-feedbacks"));case 4:a=n.sent,e({type:yn,payload:a.data}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e({type:vn,payload:null===n.t0||void 0===n.t0?void 0:n.t0.message});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}())}),[]),Object(H.useEffect)((function(){t&&c(t)}),[t]),Object(H.useEffect)((function(){a?rn.b.loading("Loading..."):rn.b.dismiss()}),[a]);var b=function(n){return Object(ie.jsx)(Wn,{style:{fontFamily:"Regular"},children:n})};return Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsx)(Vn,{children:Object(ie.jsx)(ee,{children:Object(ie.jsx)(Xn.a,{data:r,columns:[{Header:Object(ie.jsx)("div",{children:b("Name")}),accessor:"date",Cell:function(n){return Object(ie.jsx)(qn,{children:Object(ie.jsx)("div",{children:n.original.name})})},sortMethod:function(n,e){return Number(e)-Number(n)},width:d?130:140},{Header:Object(ie.jsx)("div",{children:b("Email")}),accessor:"pair",Cell:function(n){return Object(ie.jsx)(qn,{children:Object(ie.jsx)("div",{children:n.original.email})})},sortMethod:function(n,e){return Number(e)-Number(n)},width:d?90:140},{Header:b("Category"),accessor:"side",Cell:function(n){return Object(ie.jsx)(qn,{children:Object(ie.jsx)("div",{children:n.original.category})})},sortMethod:function(n,e){return Number(e)-Number(n)},width:d?90:120},{Header:b("Message"),accessor:"side",Cell:function(n){return Object(ie.jsx)(qn,{onClick:function(){var e;e=n.original.feedback,ae()(e)},children:Object(ie.jsx)("div",{children:n.original.feedback})})},sortMethod:function(n,e){return Number(e)-Number(n)},width:d?90:120}],showPagination:!0,defaultPageSize:10,minRows:0,resizable:!1,showFilters:!0})})})})},re=function(n){var e=Object(ln.b)(),t=Object(ln.c)((function(n){return n.feedback})),a=t.feedbackPostSuccess,i=t.feedbackPostLoading,o=Object(ln.c)((function(n){return n.user})).loginSuccess,r=Object(H.useState)(""),c=Object(cn.a)(r,2),l=c[0],s=c[1],d=Object(H.useState)(""),b=Object(cn.a)(d,2),p=b[0],u=b[1],x=Object(H.useState)(""),g=Object(cn.a)(x,2),f=g[0],h=g[1],m=Object(H.useState)(""),j=Object(cn.a)(m,2),w=j[0],O=j[1],y=function(n,e){var t=n.target.value;"name"===e?s(t):"email"===e?u(t):"category"===e?O(t):h(t)};return Object(H.useEffect)((function(){"success"===a?(rn.b.success("Successfully Submitted!"),h(""),O("")):rn.b.dismiss()}),[a]),Object(H.useEffect)((function(){""!==o?(s(o.name),u(o.email)):(s(""),u(""))}),[o]),Object(H.useEffect)((function(){localStorage.getItem("name")&&(s(localStorage.getItem("name")||""),u(localStorage.getItem("email")||""))}),[]),Object(ie.jsx)(ie.Fragment,{children:o.isAdmin?Object(ie.jsx)(oe,{}):Object(ie.jsx)(Dn,{children:Object(ie.jsxs)(Bn,{children:[Object(ie.jsx)(Un,{children:"We value your feedback"}),Object(ie.jsxs)(Gn,{children:[Object(ie.jsx)(Mn,{type:"text",placeholder:"Name",value:l,onChange:function(n){return y(n,"name")},readOnly:!0}),Object(ie.jsx)(Yn,{className:"fas fa-user"}),Object(ie.jsx)(Mn,{type:"email",placeholder:"Email",value:p,onChange:function(n){return y(n,"email")},readOnly:!0}),Object(ie.jsx)(Yn,{className:"fas fa-envelope"}),Object(ie.jsxs)(Jn,{value:w,onChange:function(n){return y(n,"category")},children:[Object(ie.jsx)("option",{hidden:!0,children:"Select Category"}),Object(ie.jsx)("option",{value:"blockchain",children:"Blockchain"}),Object(ie.jsx)("option",{value:"frontend",children:"Frontend"}),Object(ie.jsx)("option",{value:"styled_components",children:"Styled Components"}),Object(ie.jsx)("option",{value:"others",children:"Others"})]}),Object(ie.jsx)(Kn,{placeholder:"Message.....",cols:30,rows:10,value:f,onChange:function(n){return y(n,"message")}}),Object(ie.jsxs)(Hn,{onClick:function(){""===l||""===p||""===f?(s(""),u(""),h(""),alert("All fields are mandatory!")):e(function(n){return function(){var e=Object(bn.a)(dn.a.mark((function e(t,a){return dn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:mn}),e.next=4,un.a.post("".concat(_n,"/add-feedbacks"),n);case 4:t({type:jn,payload:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:wn,payload:null===e.t0||void 0===e.t0?void 0:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()}({name:l,email:p,feedback:f,category:w}))},disabled:i,children:[i?"Submitting...":"Submit",Object(ie.jsx)(Qn,{className:i?"fas fa-spinner":"fas fa-arrow-right"})]})]})]})})})},ce=re,le=V.d.img(j||(j=Object(X.a)(["\n  width: 186px;\n  height: 86px;\n  @media only screen and (max-width: 600px) {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]))),se=V.d.div(w||(w=Object(X.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 25px;\n  margin: 20px 15px 15px 15px;\n"]))),de=V.d.div(O||(O=Object(X.a)(["\n  display: ",";\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: rgba(15, 16, 23, 0.9);\n"])),(function(n){return n.show?"block":"none"})),be=V.d.div(y||(y=Object(X.a)(["\n  padding: 20px;\n  background-color: white;\n  display: inline-block;\n  border-radius: 8px;\n  margin: 0 auto;\n  border: none;\n  border-radius: 4px;\n  overflow: visible;\n  // min-width: 280px;\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  top: 35%;\n  transform: translate(-50%, -50%);\n  max-height: 100%;\n  // overflow-y: auto;\n  ::-webkit-scrollbar {\n    width: 0 !important;\n  }\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n  width: 80%;\n  @media (min-width: 426px) {\n    width: 450px;\n  }\n  h5 {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 25px;\n    color: #8499ae;\n    margin: 0;\n    @media (min-width: 300px) {\n      font-size: 20px;\n      line-height: 30px;\n    }\n  }\n"]))),pe=V.d.div(v||(v=Object(X.a)(["\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 25px;\n    color: #8499ae;\n    margin: 0;\n    @media (min-width: 300px) {\n      font-size: 20px;\n      line-height: 30px;\n    }\n  }\n"]))),ue=V.d.img(k||(k=Object(X.a)(["\n  cursor: pointer;\n  width: 20px;\n  :hover {\n    width: 25px;\n  }\n"]))),xe=V.d.form(S||(S=Object(X.a)(["\n  width: 100%;\n"]))),ge=V.d.input(T||(T=Object(X.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px 40px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  font-size: 14px;\n"]))),fe=V.d.button(R||(R=Object(X.a)(["\n  background: #827ffe;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 12px;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n"]))),he=V.d.i(z||(z=Object(X.a)(["\n  margin-left: 10px;\n  font-size: 12px;\n"]))),me=V.d.i(C||(C=Object(X.a)(["\n  position: absolute;\n  margin-top: 17px;\n  left: 35px;\n  color: #9a99aa;\n"]))),je=function(n){var e=Object(ln.b)(),a=Object(ln.c)((function(n){return n.user})),i=a.loginSuccess,o=a.loginLoading,r=a.loginFail,c=Object(H.useState)(""),l=Object(cn.a)(c,2),s=l[0],d=l[1],b=Object(H.useState)(""),p=Object(cn.a)(b,2),u=p[0],x=p[1];return Object(H.useEffect)((function(){""!==i?(n.Close(),rn.b.success("Successfully Logged In!"),d(""),x("")):"error"===r?(n.Close(),rn.b.error("Error Logging In!")):rn.b.dismiss()}),[i,r]),Object(ie.jsx)("div",{children:Object(ie.jsx)(de,{show:n.show,children:Object(ie.jsxs)(be,{children:[Object(ie.jsxs)(pe,{children:[Object(ie.jsx)("h2",{children:"Login"}),Object(ie.jsx)(ue,{onClick:n.Close,src:t(36).default})]}),Object(ie.jsx)("h5",{style:{textAlign:"center"},children:"Log in to exsisting account "}),Object(ie.jsx)("br",{}),Object(ie.jsxs)(xe,{onSubmit:function(n){(n.preventDefault(),""===s||""===u)?alert("All fields are mandatory!"):e(function(n){return function(){var e=Object(bn.a)(dn.a.mark((function e(t,a){return dn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Sn}),e.next=4,un.a.post("".concat(_n,"/userlogin"),n).then((function(n){console.log(n.data),"success"===n.data.login?t({type:Tn,payload:n.data}):t({type:Rn,payload:"error"})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:Rn,payload:null===e.t0||void 0===e.t0?void 0:e.t0.message});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t){return e.apply(this,arguments)}}()}({email:s,password:u}))},children:[Object(ie.jsx)(ge,{placeholder:"Email",type:"email",value:s,onChange:function(n){return d(n.target.value)}}),Object(ie.jsx)(me,{className:"fas fa-envelope"}),Object(ie.jsx)(ge,{placeholder:"Password",type:"password",value:u,onChange:function(n){return x(n.target.value)}}),Object(ie.jsx)(me,{className:"fas fa-lock-open"}),Object(ie.jsxs)(fe,{type:"submit",disabled:o,children:[o?"Logging In...":"Login",Object(ie.jsx)(he,{className:o?"fas fa-spinner":"fas fa-arrow-right"})]})]})]})})})},we=je,Oe=V.d.div(E||(E=Object(X.a)(["\n  display: ",";\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: rgba(15, 16, 23, 0.9);\n"])),(function(n){return n.show?"block":"none"})),ye=V.d.div(L||(L=Object(X.a)(["\n  padding: 20px;\n  background-color: white;\n  display: inline-block;\n  border-radius: 8px;\n  margin: 0 auto;\n  border: none;\n  border-radius: 4px;\n  overflow: visible;\n  // min-width: 280px;\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  top: 35%;\n  transform: translate(-50%, -50%);\n  max-height: 100%;\n  // overflow-y: auto;\n  ::-webkit-scrollbar {\n    width: 0 !important;\n  }\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n  width: 80%;\n  @media (min-width: 425px) {\n    width: 450px;\n  }\n  h5 {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 25px;\n    color: #8499ae;\n    margin: 0;\n    @media (min-width: 300px) {\n      font-size: 20px;\n      line-height: 30px;\n    }\n  }\n"]))),ve=V.d.div(F||(F=Object(X.a)(["\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 25px;\n    color: #8499ae;\n    margin: 0;\n    @media (min-width: 300px) {\n      font-size: 20px;\n      line-height: 30px;\n    }\n  }\n"]))),ke=V.d.img(N||(N=Object(X.a)(["\n  cursor: pointer;\n  width: 20px;\n  :hover {\n    width: 25px;\n  }\n"]))),Se=V.d.form(I||(I=Object(X.a)(["\n  width: 100%;\n"]))),Te=V.d.input(P||(P=Object(X.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px 40px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  font-size: 14px;\n"]))),Re=V.d.button(A||(A=Object(X.a)(["\n  background: #827ffe;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 12px;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n"]))),ze=V.d.i(_||(_=Object(X.a)(["\n  margin-left: 10px;\n  font-size: 12px;\n"]))),Ce=V.d.i(D||(D=Object(X.a)(["\n  position: absolute;\n  margin-top: 17px;\n  left: 35px;\n  color: #9a99aa;\n"]))),Ee=function(n){var e=Object(ln.b)(),a=Object(ln.c)((function(n){return n.user})),i=a.signupSuccess,o=a.signupLoading,r=Object(H.useState)(""),c=Object(cn.a)(r,2),l=c[0],s=c[1],d=Object(H.useState)(""),b=Object(cn.a)(d,2),p=b[0],u=b[1],x=Object(H.useState)(""),g=Object(cn.a)(x,2),f=g[0],h=g[1];return Object(H.useEffect)((function(){"success"===i?(n.Close(),rn.b.success("Acount Created Successfully!"),s(""),u(""),h("")):rn.b.dismiss()}),[i]),Object(ie.jsx)("div",{children:Object(ie.jsx)(Oe,{show:n.show,children:Object(ie.jsxs)(ye,{children:[Object(ie.jsxs)(ve,{children:[Object(ie.jsx)("h2",{children:"Signup"}),Object(ie.jsx)(ke,{onClick:n.Close,src:t(36).default})]}),Object(ie.jsx)("h5",{style:{textAlign:"center"},children:"Create a new account "}),Object(ie.jsx)("br",{}),Object(ie.jsxs)(Se,{children:[Object(ie.jsx)(Te,{placeholder:"Full Name",type:"text",value:l,onChange:function(n){return s(n.target.value)}}),Object(ie.jsx)(Ce,{className:"fas fa-user"}),Object(ie.jsx)(Te,{placeholder:"Email",type:"email",value:p,onChange:function(n){return u(n.target.value)}}),Object(ie.jsx)(Ce,{className:"fas fa-envelope"}),Object(ie.jsx)(Te,{placeholder:"Password",type:"password",value:f,onChange:function(n){return h(n.target.value)}}),Object(ie.jsx)(Ce,{className:"fas fa-lock-open"}),Object(ie.jsxs)(Re,{onClick:function(n){""===l||""===p||""===f?alert("All fields are mandatory!"):e(function(n){return function(){var e=Object(bn.a)(dn.a.mark((function e(t,a){return dn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:zn}),e.next=4,un.a.post("".concat(_n,"/add-user"),n).then((function(n){console.log(n)}));case 4:t({type:Cn,payload:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:En,payload:null===e.t0||void 0===e.t0?void 0:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()}({name:l,email:p,password:f}))},disabled:o,children:[o?"Submitting...":"Submit",Object(ie.jsx)(ze,{className:o?"fas fa-spinner":"fas fa-arrow-right"})]})]})]})})})},Le=Ee,Fe=(V.d.div(B||(B=Object(X.a)(["\n  width: 85%;\n  margin: 0 auto;\n  @media (min-width: ","px) {\n    width: 70%;\n    margin: 0 auto;\n  }\n"])),en),V.d.div(U||(U=Object(X.a)(["\n  display: grid;\n  grid-gap: 0px;\n  /* grid-template-columns: repeat(1, 1fr); */\n  @media (min-width: ","px) {\n    grid-gap: 8px;\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: ","px) {\n    grid-gap: 15px;\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media (min-width: ","px) {\n    grid-gap: 195px;\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),nn,tn,an)),Ne=(V.d.div(G||(G=Object(X.a)(["\n  display: grid;\n  grid-gap: 0px;\n  padding-top: 24px;\n  grid-template-columns: repeat(1, 1fr);\n  @media (min-width: ","px) {\n    grid-gap: 25px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (min-width: ","px) {\n    grid-gap: 25px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (min-width: ","px) {\n    grid-gap: 25px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])),nn,tn,an),V.d.div(M||(M=Object(X.a)(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: ","px) {\n    display: flex;\n    flex-direction: row;\n  }\n"])),tn),V.d.div(J||(J=Object(X.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n"]))),Object(V.c)(K||(K=Object(X.a)(["\n  display: inline-block;\n  opacity: 0.8;\n  margin: ",";\n  background: ",";\n  color: ",";\n  font-size: 12px;\n  text-align: center;\n  cursor: pointer;\n\n  transition: all 0.1s;\n  padding: 12px 24px 12px;\n  height: 41px;\n  letter-spacing: 0.1em;\n  border: 1px solid #fff;\n  width: 95%;\n  border-radius: 4px;\n  text-transform: uppercase;\n  @media (min-width: ",'px) {\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 15px;\n  }\n\n  &:hover {\n    background: rgb(130, 127, 254);\n  }\n\n  &:active {\n    transform: translate(1px, -1px);\n    border: 1px solid #fff;\n  }\n\n  &:disabled {\n    cursor: no-drop;\n    background: #1d1b28;\n    opacity: 0.5;\n    color: white;\n    height: 44px;\n    &:hover {\n      box-shadow: none;\n    }\n    &:after {\n      content: "";\n      border: none;\n    }\n  }\n\n  + a {\n    margin-left: 10px;\n    cursor: initial;\n  }\n'])),(function(n){return n.margin}),(function(n){return n.background}),(function(n){return n.color}),an)),Ie=V.d.button(Y||(Y=Object(X.a)(["\n  ","\n"])),Ne),Pe=function(n){var e=Object(ln.b)(),a=Object(ln.c)((function(n){return n.user})).loginSuccess,i=Q.a.useState(""),o=Object(cn.a)(i,2),r=o[0],c=o[1],l=function(){c("")};return Object(ie.jsxs)("div",{style:{marginTop:"20px"},children:[Object(ie.jsxs)(Fe,{children:[Object(ie.jsx)("div",{}),Object(ie.jsx)(le,{className:"header-logo",src:t(74).default,alt:"logo"}),Object(ie.jsxs)(se,{children:[a?Object(ie.jsx)(Ie,{background:"rgb(162,48,237)",color:"white",onClick:function(){return e(function(){var n=Object(bn.a)(dn.a.mark((function n(e,t){return dn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:Ln});case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())},children:"Logout"}):Object(ie.jsx)(Ie,{background:"rgb(162,48,237)",color:"white",onClick:function(){return c("login")},children:"Login"}),a?"":Object(ie.jsx)(Ie,{background:"rgb(110,71,255)",color:"white",onClick:function(){return c("signup")},children:"Signup"})]})]}),Object(ie.jsx)(we,{show:"login"===r,Close:function(){return l()}}),Object(ie.jsx)(Le,{show:"signup"===r,Close:function(){return l()}})]})},Ae=Pe;var _e=function(){return Object(ie.jsxs)(V.a,{theme:$,children:[Object(ie.jsx)(on,{}),Object(ie.jsx)(Ae,{}),Object(ie.jsx)(ce,{}),Object(ie.jsx)(rn.a,{toastOptions:{success:{border:"1px solid #A230ED",padding:"16px",color:"#A230ED"}}})]})},De=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,76)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;t(n),a(n),i(n),o(n),r(n)}))};q.a.render(Object(ie.jsx)(Q.a.StrictMode,{children:Object(ie.jsx)(ln.a,{store:An,children:Object(ie.jsx)(_e,{})})}),document.getElementById("root")),De()}},[[75,1,2]]]);
//# sourceMappingURL=main.d6340a43.chunk.js.map