(this.webpackJsonpfeedbackproject=this.webpackJsonpfeedbackproject||[]).push([[0],{39:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/close.ecf05d86.svg"},77:function(n,e,t){"use strict";t.r(e),e.default=t.p+"static/media/logo.1d3e0137.svg"},78:function(n,e,t){"use strict";t.r(e);var a,i,r,o,c,l,s,d,b=t(0),p=t.n(b),u=t(22),x=t.n(u),f=t(3),g=t(4),h="linear-gradient(90deg, rgba(249,179,203,1) 0%, rgba(225,163,225,1) 35%, rgba(196,145,251,1) 100%)",m={themeBackground:h},j=640,O=800,w=1024,v=1280,y=Object(f.b)(a||(a=Object(g.a)(["\n  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n  * {\n    margin: 0;\n  }\n  html, body {\n    height: 100%;\n  }\n  body {\n    line-height: 1.5;\n    -webkit-font-smoothing: antialiased;\n    font-family: 'Open Sans', sans-serif !important;\n    font-weight: 400 !important;\n    font-style: normal;\n    background: "," !important;\n  }\n  img, picture, video, canvas, svg {\n    display: block;\n    max-width: 100%;\n  }\n  input, button, textarea, select {\n    font: inherit;\n  }\n  p, h1, h2, h3, h4, h5, h6 {\n    overflow-wrap: break-word;\n  }\n  #root, #__next {\n    isolation: isolate;\n  }\n"])),h),k=t(2),T=f.d.div(i||(i=Object(g.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 180px;\n"]))),R=f.d.div(r||(r=Object(g.a)(["\n  font-weight: 600;\n  font-size: 20px;\n  line-height: 26px;\n  color: #2b3141;\n"]))),S=Object(f.d)(R)(o||(o=Object(g.a)(["\n  font-size: 50px;\n  margin-bottom: 20px;\n"]))),z=f.d.div(c||(c=Object(g.a)(["\n  font-size: 14px;\n  line-height: 26px;\n  color: #676767;\n"])));function C(){return Object(k.jsxs)(T,{children:[Object(k.jsx)(S,{children:"404"}),Object(k.jsx)(R,{children:"Page Not Found"}),Object(k.jsx)(z,{children:"The page you are looking for was moved, removed, renamed or might never existed"})]})}var E,L,F,N,P,_,A,I,D,B,U,G,M,K,H,J,Q,Y,W,q,V,X,Z,$,nn,en,tn,an,rn,on,cn,ln,sn,dn,bn,pn,un,xn,fn,gn,hn,mn,jn,On=f.d.div(l||(l=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  max-width: 1600px;\n  width: 100%;\n  margin: auto;\n  min-height: 90vh;\n"]))),wn=(f.d.main(s||(s=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  position: relative;\n"]))),f.d.div(d||(d=Object(g.a)([""]))),t(8)),vn=t(10),yn=t(13),kn=t.n(yn),Tn=t(14),Rn=t(17),Sn=t.n(Rn),zn=t(48),Cn=t(19),En=t(44),Ln=t(7),Fn="FEEDBACK_POST_REQUEST",Nn="FEEDBACK_POST_SUCCESS",Pn="FEEDBACK_POST_FAIL",_n="GET_FEEDBACKS_REQUEST",An="GET_FEEDBACKS_SUCCESS",In="GET_FEEDBACKS_FAIL",Dn={feedbackPostLoading:!1,feedbackPostSuccess:"",feedbackPostFail:"",feedbacksLoading:!1,allFeedbacks:[],feedbacksFail:""},Bn="LOGIN_REQUEST",Un="LOGIN_SUCCESS",Gn="LOGIN_FAIL",Mn="SIGNUP_REQUEST",Kn="SIGNUP_SUCCESS",Hn="SIGNUP_FAIL",Jn="LOGOUT",Qn={loginLoading:!1,loginSuccess:sessionStorage.getItem("loginSuccess")||"",loginFail:"",signupLoading:!1,signupSuccess:"",signupFail:""},Yn=Object(Cn.b)({user:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Bn:return Object(Ln.a)(Object(Ln.a)({},n),{},{loginLoading:!0,loginFail:"",loginSuccess:""});case Un:return Object(Ln.a)(Object(Ln.a)({},n),{},{loginSuccess:e.payload,loginLoading:!1});case Gn:return Object(Ln.a)(Object(Ln.a)({},n),{},{loginLoading:!1,loginFail:e.payload});case Mn:return Object(Ln.a)(Object(Ln.a)({},n),{},{signupLoading:!0,signupFail:""});case Kn:return Object(Ln.a)(Object(Ln.a)({},n),{},{signupSuccess:e.payload,signupLoading:!1});case Hn:return Object(Ln.a)(Object(Ln.a)({},n),{},{signupLoading:!1,signupFail:e.payload});case Jn:return Object(Ln.a)(Object(Ln.a)({},n),{},{loginSuccess:""});default:return n}},feedback:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Fn:return Object(Ln.a)(Object(Ln.a)({},n),{},{feedbackPostLoading:!0,feedbackPostFail:"",feedbackPostSuccess:""});case Nn:return Object(Ln.a)(Object(Ln.a)({},n),{},{feedbackPostLoading:!1,feedbackPostSuccess:e.payload});case Pn:return Object(Ln.a)(Object(Ln.a)({},n),{},{feedbackPostLoading:!1,feedbackPostFail:e.payload});case _n:return Object(Ln.a)(Object(Ln.a)({},n),{},{feedbacksLoading:!0,feedbacksFail:""});case An:return Object(Ln.a)(Object(Ln.a)({},n),{},{feedbacksLoading:!1,allFeedbacks:e.payload});case In:return Object(Ln.a)(Object(Ln.a)({},n),{},{feedbacksLoading:!1,feedbacksFail:e.payload});default:return n}}}),Wn=Yn,qn=[En.a],Vn=Object(Cn.c)(Wn,(E=qn,Cn.a.apply(void 0,Object(zn.a)(E)))),Xn="https://feedback-rapid.herokuapp.com",Zn=t(11),$n=f.d.div(L||(L=Object(g.a)(["\n  margin-left: 15px;\n  margin-right: 15px;\n  @media only screen and (min-width: 640px) {\n    margin-left: 20%;\n    margin-right: 20%;\n  }\n"]))),ne=f.d.div(F||(F=Object(g.a)(["\n  max-width: 450px;\n  background: #fff;\n  padding: 50px;\n  margin: 75px auto;\n  border-radius: 30px;\n  position: relative;\n"]))),ee=f.d.h1(N||(N=Object(g.a)(["\n  color: #535274;\n  font-weight: bold !important;\n  letter-spacing: 3px;\n  margin-bottom: 25px;\n  text-align: center;\n  font-size: 22px;\n"]))),te=f.d.div(P||(P=Object(g.a)(["\n  width: 100%;\n"]))),ae=f.d.input(_||(_=Object(g.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px 40px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  font-size: 14px;\n  color: #535274;\n  &::placeholder {\n    opacity: 1;\n    font-size: 14px;\n  }\n"]))),ie=f.d.select(A||(A=Object(g.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  cursor: pointer;\n  font-size: 14px;\n  color: #535274;\n"]))),re=f.d.textarea(I||(I=Object(g.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px 40px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  height: 125px;\n  border-radius: 15px;\n  margin-bottom: 30px;\n  padding: 15px 15px;\n  resize: none;\n  font-size: 14px;\n  color: #535274;\n  &::placeholder {\n    opacity: 1;\n  }\n"]))),oe=f.d.i(D||(D=Object(g.a)(["\n  position: absolute;\n  left: 65px;\n  margin-top: 17px;\n  color: #535274;\n"]))),ce=f.d.button(B||(B=Object(g.a)(["\n  background: #827ffe;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 12px;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n"]))),le=f.d.i(U||(U=Object(g.a)(["\n  margin-left: 10px;\n  font-size: 12px;\n"]))),se=f.d.thead(G||(G=Object(g.a)(["\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 20px;\n  color: #212241;\n"]))),de=f.d.div(M||(M=Object(g.a)(["\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: #a09fa2;\n"]))),be=f.d.div(K||(K=Object(g.a)(["\n  color: #212241;\n  @media only screen and (min-width: 640px) {\n    margin-left: 10%;\n    margin-right: 10%;\n  }\n"]))),pe=t(47),ue=t(46),xe="50px",fe=function(n){return Object(ue.a)(255,255,255,n)},ge=f.d.div(H||(H=Object(g.a)(["\n  transition: width 600ms ease-out, height 600ms ease-out;\n  padding-top: 24px;\n  color: #212241;\n\n  .ReactTable {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n\n    flex-direction: column;\n    color: #212241;\n\n    clear: both;\n    border: none;\n  }\n  .ReactTable * {\n    box-sizing: border-box;\n  }\n  .ReactTable .rt-table {\n    -webkit-box-flex: 1;\n    -ms-flex: auto 1;\n    flex: auto 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    width: 100%;\n    border-collapse: collapse;\n    overflow-x: hidden;\n  }\n  .ReactTable .rt-thead {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: ",";\n    -webkit-box-orient: horizontal;\n    flex-direction: row;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    background: rgba(186, 169, 255, 0.07);\n  }\n  .ReactTable .rt-thead.-headerGroups {\n    background: '#6B00D7';\n  }\n  .ReactTable .rt-thead.-filters {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .ReactTable .rt-thead.-filters input,\n  .ReactTable .rt-thead.-filters select {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    background: #fff;\n    padding: 15px 7px;\n    font-size: inherit;\n    border-radius: 3px;\n    font-weight: normal;\n    outline: none;\n  }\n  .ReactTable .rt-thead.-filters .rt-th {\n    border-right: 1px solid rgba(0, 0, 0, 0.02);\n    text-align: start;\n  }\n  .ReactTable .rt-thead.-header {\n    // border-bottom: 1px solid ",";\n  }\n  .ReactTable .rt-thead .rt-tr {\n    text-align: center;\n  }\n\n  .ReactTable .rt-thead .rt-th.-sort-asc {\n    box-shadow: none;\n  }\n  .ReactTable .rt-tbody .rt-tr-group {\n  }\n  .ReactTable .rt-thead .rt-th,\n  .rt-tr.-odd .ReactTable .rt-thead .rt-td {\n    padding: 5px 5px;\n    line-height: normal;\n    position: relative;\n    text-align: right;\n  }\n  .ReactTable .rt-thead .rt-th.-cursor-pointer,\n  .ReactTable .rt-thead .rt-td.-cursor-pointer {\n    cursor: pointer;\n  }\n  .ReactTable .rt-thead .rt-th:last-child,\n  .ReactTable .rt-thead .rt-td:last-child {\n    border-right: 0;\n  }\n  .ReactTable .rt-thead .rt-th:focus {\n    outline: none;\n  }\n  .ReactTable .rt-thead .rt-resizable-header {\n    text-align: start;\n    overflow: visible;\n  }\n  .ReactTable .rt-thead .rt-resizable-header:last-child {\n    overflow: hidden;\n  }\n  .ReactTable .rt-thead .rt-resizable-header-content {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .ReactTable .rt-thead .rt-header-pivot {\n    border-right-color: #f7f7f7;\n  }\n  .ReactTable .rt-thead .rt-header-pivot:after,\n  .ReactTable .rt-thead .rt-header-pivot:before {\n    left: 100%;\n    top: 50%;\n    border: solid transparent;\n    content: ' ';\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n  }\n  .ReactTable .rt-thead .rt-header-pivot:after {\n    border-color: rgba(255, 255, 255, 0);\n    border-left-color: #fff;\n    border-width: 8px;\n    margin-top: -8px;\n  }\n  .ReactTable .rt-thead .rt-header-pivot:before {\n    border-color: rgba(102, 102, 102, 0);\n    border-left-color: #f7f7f7;\n    border-width: 10px;\n    margin-top: -10px;\n  }\n  .ReactTable .rt-tbody {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 1 auto;\n    flex: 1 1 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    background: #212241;\n  }\n  .ReactTable .rt-tbody .rt-tr-group:last-child {\n    border-bottom: 0;\n  }\n  .ReactTable .rt-tbody .rt-tr.-odd {\n    background: #2b2b4d;\n    border-radius: 3px;\n  }\n  .ReactTable .rt-tbody .rt-td {\n    display: flex;\n    align-items: right;\n    height: ",";\n    border-right: 1px solid rgba(0, 0, 0, 0.02);\n  }\n  .ReactTable .rt-tbody .rt-td:last-child {\n    border-right: 0;\n    width: auto;\n  }\n  .ReactTable .rt-tbody .rt-expandable {\n    cursor: auto !important;\n    text-overflow: clip;\n    overflow: visible;\n    > div {\n      overflow-x: visible;\n    }\n  }\n  .ReactTable .rt-tr-group {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    border-bottom: 2px solid #413764;\n    border-bottom: 1px solid #232222;\n  }\n  .ReactTable .rt-tr {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n    flex: 1 0 auto;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    align-items: center;\n    justify-content: space-around;\n  }\n  .ReactTable .rt-th,\n  .ReactTable .rt-td {\n    flex: 1;\n    align-items: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow-x: hidden;\n    padding: 5px;\n    overflow: hidden;\n    transition: 0.3s ease;\n    transition-property: width, min-width, padding, opacity;\n    > div,\n    > div span {\n      text-overflow: ellipsis;\n      overflow-x: hidden;\n    }\n  }\n  .ReactTable .rt-th.-hidden,\n  .ReactTable .rt-td.-hidden {\n    width: 0 !important;\n    min-width: 0 !important;\n    padding: 0 !important;\n    border: 0 !important;\n    opacity: 0 !important;\n  }\n  .ReactTable .rt-expander {\n    display: inline-block;\n    position: relative;\n    margin: 0;\n    color: transparent;\n    margin: 0 10px;\n  }\n  .ReactTable .rt-expander:after {\n    content: '';\n    position: absolute;\n    width: 0;\n    height: 0;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%) rotate(-90deg);\n    transform: translate(-50%, -50%) rotate(-90deg);\n    border-left: 5.04px solid transparent;\n    border-right: 5.04px solid transparent;\n    border-top: 7px solid rgba(0, 0, 0, 0.8);\n    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    cursor: pointer;\n  }\n  .ReactTable .rt-expander.-open:after {\n    -webkit-transform: translate(-50%, -50%) rotate(0);\n    transform: translate(-50%, -50%) rotate(0);\n  }\n  .ReactTable .rt-resizer {\n    display: inline-block;\n    position: absolute;\n    width: 36px;\n    top: 0;\n    bottom: 0;\n    right: -18px;\n    cursor: col-resize;\n    z-index: 10;\n  }\n  .ReactTable .rt-tfoot {\n    -webkit-box-flex: 1;\n    -ms-flex: 1 0 auto;\n    border-bottom: 1px solid ",";\n    border-top: 1px solid ",";\n    height: ",";\n    flex: 1 0 auto;\n    flex-direction: row;\n    align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    color: #212241;\n  }\n  .ReactTable .rt-tfoot .rt-td {\n    border-right: 1px solid rgba(0, 0, 0, 0.05);\n  }\n  .ReactTable .rt-tfoot .rt-td:last-child {\n    border-right: 0;\n  }\n  .ReactTable.-highlight .rt-tbody .rt-tr:not(.-padRow):hover {\n    background: '#6B00D7';\n  }\n  .ReactTable .-pagination {\n    z-index: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    padding: 3px;\n    border-top: 2px solid rgba(0, 0, 0, 0.1);\n    color: #212241;\n  }\n  .ReactTable .-pagination input,\n  .ReactTable .-pagination select {\n    background: inherit;\n    height: 30px;\n    padding: 5px 7px;\n    font-size: inherit;\n    border-radius: 3px;\n    font-weight: normal;\n    outline: none;\n    border: 0;\n  }\n  .ReactTable .-pagination .-btn {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    display: block;\n    width: 100%;\n    border: 0;\n    border-radius: 3px;\n    padding: 6px;\n    font-size: 1em;\n    background: inherit;\n    transition: all 0.1s ease;\n    cursor: pointer;\n    outline: none;\n  }\n  .ReactTable .-pagination .-btn[disabled] {\n    opacity: 0.5;\n    cursor: default;\n  }\n  .-next > button {\n    text-align: right;\n  }\n  .-previous > button {\n    text-align: left;\n  }\n  .ReactTable .-pagination .-previous,\n  .ReactTable .-pagination .-next {\n    text-align: center;\n  }\n  .ReactTable .-pagination .-center {\n    -webkit-box-flex: 1.5;\n    -ms-flex: 1.5;\n    flex: 1.5;\n    text-align: center;\n    margin-bottom: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    justify-content: space-around;\n  }\n  .ReactTable .-pagination .-pageInfo {\n    display: inline-block;\n    margin: 3px 10px;\n    white-space: nowrap;\n    color: #212241;\n\n    input {\n      margin-bottom: 0 !important;\n    }\n  }\n  .ReactTable .-pagination .-pageJump {\n    width: 18px;\n    display: inline-block;\n  }\n  .ReactTable .-pagination .-pageJump input {\n    width: 70px;\n    text-align: start;\n    color: #212241;\n    font-weight: 700;\n    -moz-appearance: textfield;\n    ::-webkit-outer-spin-button,\n    ::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  }\n  .ReactTable .-pagination .-pageSizeOptions {\n    margin: 3px 10px;\n    position: absolute;\n    left: 0;\n    bottom: -20px;\n    color: #212241;\n\n    :before {\n      cursor: initial;\n      content: 'showing:';\n    }\n    select {\n      margin-bottom: 0;\n      color: white;\n      background-color: #312964;\n    }\n  }\n  .ReactTable .rt-noData {\n    width: 100%;\n    text-align: center;\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: 100%;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    background: rgba(255, 255, 255, 0.8);\n    transition: all 0.3s ease;\n    z-index: 1;\n    pointer-events: none;\n    padding: 20px;\n    color: rgba(0, 0, 0, 0.5);\n  }\n  .ReactTable .-loading {\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background: rgba(255, 255, 255, 0.8);\n    transition: all 0.3s ease;\n    z-index: -1;\n    opacity: 0;\n    pointer-events: none;\n  }\n  .ReactTable .-loading > div {\n    position: absolute;\n    display: block;\n    text-align: center;\n    width: 100%;\n    top: 50%;\n    left: 0;\n    font-size: 15px;\n    color: rgba(0, 0, 0, 0.6);\n    -webkit-transform: translateY(-52%);\n    transform: translateY(-52%);\n    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  }\n  .ReactTable .-loading.-active {\n    opacity: 1;\n    z-index: 2;\n    pointer-events: all;\n  }\n  .ReactTable .-loading.-active > div {\n    -webkit-transform: translateY(50%);\n    transform: translateY(50%);\n  }\n  .ReactTable .rt-resizing .rt-th,\n  .ReactTable .rt-resizing .rt-td {\n    transition: none !important;\n    cursor: col-resize;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n"])),xe,fe(.1),xe,fe(.1),fe(.1),xe),he=t(45),me=t.n(he),je=function(){var n=Object(vn.b)(),e=Object(vn.c)((function(n){return n.feedback})),t=e.allFeedbacks,a=e.feedbacksLoading,i=p.a.useState([]),r=Object(wn.a)(i,2),o=r[0],c=r[1],l=p.a.useState(!1),s=Object(wn.a)(l,2),d=s[0];s[1];Object(b.useEffect)((function(){n(function(){var n=Object(Tn.a)(kn.a.mark((function n(e,t){var a;return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:_n}),n.next=4,Sn.a.get("".concat(Xn,"/all-feedbacks"));case 4:a=n.sent,e({type:An,payload:a.data}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),e({type:In,payload:null===n.t0||void 0===n.t0?void 0:n.t0.message});case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}())}),[]),Object(b.useEffect)((function(){t&&c(t)}),[t]),Object(b.useEffect)((function(){a?Zn.b.loading("Loading..."):Zn.b.dismiss()}),[a]);var u=function(n){return Object(k.jsx)(se,{style:{fontFamily:"Regular"},children:n})},x=p.a.useState(!0),f=Object(wn.a)(x,2);f[0],f[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(be,{children:Object(k.jsx)(ge,{children:Object(k.jsx)(pe.a,{data:o,columns:[{Header:Object(k.jsx)("div",{children:u("Name")}),accessor:"date",Cell:function(n){return Object(k.jsx)(de,{children:Object(k.jsx)("div",{children:n.original.name})})},sortMethod:function(n,e){return Number(e)-Number(n)},width:d?130:140},{Header:Object(k.jsx)("div",{children:u("Email")}),accessor:"pair",Cell:function(n){return Object(k.jsx)(de,{children:Object(k.jsx)("div",{children:n.original.email})})},sortMethod:function(n,e){return Number(e)-Number(n)},width:d?90:140},{Header:u("Category"),accessor:"side",Cell:function(n){return Object(k.jsx)(de,{children:Object(k.jsx)("div",{children:n.original.category})})},sortMethod:function(n,e){return Number(e)-Number(n)},width:d?90:120},{Header:u("Message"),accessor:"side",Cell:function(n){return Object(k.jsx)(de,{onClick:function(){var e;e=n.original.feedback,me()(e)},children:Object(k.jsx)("div",{children:n.original.feedback})})},sortMethod:function(n,e){return Number(e)-Number(n)},width:d?90:120}],showPagination:!0,defaultPageSize:10,minRows:0,resizable:!1,showFilters:!0})})})})},Oe=function(n){var e=Object(vn.b)(),t=Object(vn.c)((function(n){return n.feedback})),a=t.feedbackPostSuccess,i=t.feedbackPostLoading,r=Object(vn.c)((function(n){return n.user})).loginSuccess,o=Object(b.useState)(""),c=Object(wn.a)(o,2),l=c[0],s=c[1],d=Object(b.useState)(""),p=Object(wn.a)(d,2),u=p[0],x=p[1],f=Object(b.useState)(""),g=Object(wn.a)(f,2),h=g[0],m=g[1],j=Object(b.useState)(""),O=Object(wn.a)(j,2),w=O[0],v=O[1],y=function(n,e){var t=n.target.value;"name"===e?s(t):"email"===e?x(t):"category"===e?v(t):m(t)};return Object(b.useEffect)((function(){"success"===a?(Zn.b.success("Successfully Submitted!"),s(""),x(""),m(""),v("")):Zn.b.dismiss()}),[a]),Object(b.useEffect)((function(){""!==r?(s(r.name),x(r.email)):(s(""),x(""))}),[r]),Object(k.jsx)(k.Fragment,{children:r.isAdmin?Object(k.jsx)(je,{}):Object(k.jsx)($n,{children:Object(k.jsxs)(ne,{children:[Object(k.jsx)(ee,{children:"We value your feedback"}),Object(k.jsxs)(te,{children:[Object(k.jsx)(ae,{type:"text",placeholder:"Name",value:l,onChange:function(n){return y(n,"name")},readOnly:!0}),Object(k.jsx)(oe,{className:"fas fa-user"}),Object(k.jsx)(ae,{type:"email",placeholder:"Email",value:u,onChange:function(n){return y(n,"email")},readOnly:!0}),Object(k.jsx)(oe,{className:"fas fa-envelope"}),Object(k.jsxs)(ie,{value:w,onChange:function(n){return y(n,"category")},children:[Object(k.jsx)("option",{hidden:!0,children:"Select Category"}),Object(k.jsx)("option",{value:"blockchain",children:"Blockchain"}),Object(k.jsx)("option",{value:"frontend",children:"Frontend"}),Object(k.jsx)("option",{value:"styled_components",children:"Styled Components"}),Object(k.jsx)("option",{value:"others",children:"Others"})]}),Object(k.jsx)(re,{placeholder:"Message.....",cols:30,rows:10,value:h,onChange:function(n){return y(n,"message")}}),Object(k.jsxs)(ce,{onClick:function(){""===l||""===u||""===h?(s(""),x(""),m(""),alert("All fields are mandatory!")):e(function(n){return function(){var e=Object(Tn.a)(kn.a.mark((function e(t,a){return kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Fn}),e.next=4,Sn.a.post("".concat(Xn,"/add-feedbacks"),n);case 4:t({type:Nn,payload:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:Pn,payload:null===e.t0||void 0===e.t0?void 0:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()}({name:l,email:u,feedback:h,category:w}))},disabled:i,children:[i?"Submitting...":"Submit",Object(k.jsx)(le,{className:i?"fas fa-spinner":"fas fa-arrow-right"})]})]})]})})})},we=Oe,ve=f.d.p(J||(J=Object(g.a)(["\n  /* margin-top: 20px; */\n  margin-bottom: 20px;\n  color: #535274;\n  letter-spacing: 3px;\n  text-align: center;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n"]))),ye=function(n){return Object(k.jsx)(ve,{children:"Copyright @ Rapid Innovation Rights Reserved"})},ke=f.d.img(Q||(Q=Object(g.a)(["\n  width: 186px;\n  height: 86px;\n  @media only screen and (max-width: 600px) {\n    margin-left: auto;\n    margin-right: auto;\n  }\n"]))),Te=f.d.div(Y||(Y=Object(g.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 25px;\n  margin: 20px 15px 15px 15px;\n"]))),Re=f.d.div(W||(W=Object(g.a)(["\n  display: ",";\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: rgba(15, 16, 23, 0.9);\n"])),(function(n){return n.show?"block":"none"})),Se=f.d.div(q||(q=Object(g.a)(["\n  padding: 20px;\n  background-color: white;\n  display: inline-block;\n  border-radius: 8px;\n  margin: 0 auto;\n  border: none;\n  border-radius: 4px;\n  overflow: visible;\n  // min-width: 280px;\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  top: 35%;\n  transform: translate(-50%, -50%);\n  max-height: 100%;\n  // overflow-y: auto;\n  ::-webkit-scrollbar {\n    width: 0 !important;\n  }\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n  width: 80%;\n  @media (min-width: 426px) {\n    width: 450px;\n  }\n  h5 {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 25px;\n    color: #8499ae;\n    margin: 0;\n    @media (min-width: 300px) {\n      font-size: 20px;\n      line-height: 30px;\n    }\n  }\n"]))),ze=f.d.div(V||(V=Object(g.a)(["\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 25px;\n    color: #8499ae;\n    margin: 0;\n    @media (min-width: 300px) {\n      font-size: 20px;\n      line-height: 30px;\n    }\n  }\n"]))),Ce=f.d.img(X||(X=Object(g.a)(["\n  cursor: pointer;\n  width: 20px;\n  :hover {\n    width: 25px;\n  }\n"]))),Ee=f.d.form(Z||(Z=Object(g.a)(["\n  width: 100%;\n"]))),Le=f.d.input($||($=Object(g.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px 40px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  font-size: 14px;\n"]))),Fe=f.d.button(nn||(nn=Object(g.a)(["\n  background: #827ffe;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 12px;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n"]))),Ne=f.d.i(en||(en=Object(g.a)(["\n  margin-left: 10px;\n  font-size: 12px;\n"]))),Pe=f.d.i(tn||(tn=Object(g.a)(["\n  position: absolute;\n  margin-top: 17px;\n  left: 35px;\n  color: #9a99aa;\n"]))),_e=function(n){var e=Object(vn.b)(),a=Object(vn.c)((function(n){return n.user})),i=a.loginSuccess,r=a.loginLoading,o=a.loginFail,c=Object(b.useState)(""),l=Object(wn.a)(c,2),s=l[0],d=l[1],p=Object(b.useState)(""),u=Object(wn.a)(p,2),x=u[0],f=u[1];return Object(b.useEffect)((function(){""!==i?(n.Close(),Zn.b.success("Successfully Logged In!"),d(""),f("")):"error"===o?(n.Close(),Zn.b.error("Error Logging In!")):Zn.b.dismiss()}),[i,o]),Object(k.jsx)("div",{children:Object(k.jsx)(Re,{show:n.show,children:Object(k.jsxs)(Se,{children:[Object(k.jsxs)(ze,{children:[Object(k.jsx)("h2",{children:"Login"}),Object(k.jsx)(Ce,{onClick:n.Close,src:t(39).default})]}),Object(k.jsx)("h5",{style:{textAlign:"center"},children:"Log in to exsisting account "}),Object(k.jsx)("br",{}),Object(k.jsxs)(Ee,{onSubmit:function(n){(n.preventDefault(),""===s||""===x)?alert("All fields are mandatory!"):e(function(n){return function(){var e=Object(Tn.a)(kn.a.mark((function e(t,a){return kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Bn}),e.next=4,Sn.a.post("".concat(Xn,"/userlogin"),n).then((function(n){console.log(n.data),"success"===n.data.login?t({type:Un,payload:n.data}):t({type:Gn,payload:"error"})}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:Gn,payload:null===e.t0||void 0===e.t0?void 0:e.t0.message});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t){return e.apply(this,arguments)}}()}({email:s,password:x}))},children:[Object(k.jsx)(Le,{placeholder:"Email",type:"email",value:s,onChange:function(n){return d(n.target.value)}}),Object(k.jsx)(Pe,{className:"fas fa-envelope"}),Object(k.jsx)(Le,{placeholder:"Password",type:"password",value:x,onChange:function(n){return f(n.target.value)}}),Object(k.jsx)(Pe,{className:"fas fa-lock-open"}),Object(k.jsxs)(Fe,{type:"submit",disabled:r,children:[r?"Logging In...":"Login",Object(k.jsx)(Ne,{className:r?"fas fa-spinner":"fas fa-arrow-right"})]})]})]})})})},Ae=_e,Ie=f.d.div(an||(an=Object(g.a)(["\n  display: ",";\n  position: fixed;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background: rgba(15, 16, 23, 0.9);\n"])),(function(n){return n.show?"block":"none"})),De=f.d.div(rn||(rn=Object(g.a)(["\n  padding: 20px;\n  background-color: white;\n  display: inline-block;\n  border-radius: 8px;\n  margin: 0 auto;\n  border: none;\n  border-radius: 4px;\n  overflow: visible;\n  // min-width: 280px;\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  top: 35%;\n  transform: translate(-50%, -50%);\n  max-height: 100%;\n  // overflow-y: auto;\n  ::-webkit-scrollbar {\n    width: 0 !important;\n  }\n  overflow: -moz-scrollbars-none;\n  -ms-overflow-style: none;\n  width: 80%;\n  @media (min-width: 425px) {\n    width: 450px;\n  }\n  h5 {\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 25px;\n    color: #8499ae;\n    margin: 0;\n    @media (min-width: 300px) {\n      font-size: 20px;\n      line-height: 30px;\n    }\n  }\n"]))),Be=f.d.div(on||(on=Object(g.a)(["\n  color: black;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  h2 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 25px;\n    color: #8499ae;\n    margin: 0;\n    @media (min-width: 300px) {\n      font-size: 20px;\n      line-height: 30px;\n    }\n  }\n"]))),Ue=f.d.img(cn||(cn=Object(g.a)(["\n  cursor: pointer;\n  width: 20px;\n  :hover {\n    width: 25px;\n  }\n"]))),Ge=f.d.form(ln||(ln=Object(g.a)(["\n  width: 100%;\n"]))),Me=f.d.input(sn||(sn=Object(g.a)(["\n  width: 100%;\n  margin-bottom: 12px;\n  padding: 15px 40px;\n  box-sizing: border-box;\n  background: #ebeef1;\n  border: 0px;\n  outline: none;\n  border-radius: 30px;\n  font-size: 14px;\n"]))),Ke=f.d.button(dn||(dn=Object(g.a)(["\n  background: #827ffe;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n  padding: 12px;\n  border: none;\n  border-radius: 25px;\n  cursor: pointer;\n"]))),He=f.d.i(bn||(bn=Object(g.a)(["\n  margin-left: 10px;\n  font-size: 12px;\n"]))),Je=f.d.i(pn||(pn=Object(g.a)(["\n  position: absolute;\n  margin-top: 17px;\n  left: 35px;\n  color: #9a99aa;\n"]))),Qe=function(n){var e=Object(vn.b)(),a=Object(vn.c)((function(n){return n.user})),i=a.signupSuccess,r=a.signupLoading,o=Object(b.useState)(""),c=Object(wn.a)(o,2),l=c[0],s=c[1],d=Object(b.useState)(""),p=Object(wn.a)(d,2),u=p[0],x=p[1],f=Object(b.useState)(""),g=Object(wn.a)(f,2),h=g[0],m=g[1];return Object(b.useEffect)((function(){"success"===i?(n.Close(),Zn.b.success("Acount Created Successfully!"),s(""),x(""),m("")):Zn.b.dismiss()}),[i]),Object(k.jsx)("div",{children:Object(k.jsx)(Ie,{show:n.show,children:Object(k.jsxs)(De,{children:[Object(k.jsxs)(Be,{children:[Object(k.jsx)("h2",{children:"Signup"}),Object(k.jsx)(Ue,{onClick:n.Close,src:t(39).default})]}),Object(k.jsx)("h5",{style:{textAlign:"center"},children:"Create a new account "}),Object(k.jsx)("br",{}),Object(k.jsxs)(Ge,{children:[Object(k.jsx)(Me,{placeholder:"Full Name",type:"text",value:l,onChange:function(n){return s(n.target.value)}}),Object(k.jsx)(Je,{className:"fas fa-user"}),Object(k.jsx)(Me,{placeholder:"Email",type:"email",value:u,onChange:function(n){return x(n.target.value)}}),Object(k.jsx)(Je,{className:"fas fa-envelope"}),Object(k.jsx)(Me,{placeholder:"Password",type:"password",value:h,onChange:function(n){return m(n.target.value)}}),Object(k.jsx)(Je,{className:"fas fa-lock-open"}),Object(k.jsxs)(Ke,{onClick:function(n){""===l||""===u||""===h?alert("All fields are mandatory!"):e(function(n){return function(){var e=Object(Tn.a)(kn.a.mark((function e(t,a){return kn.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:Mn}),e.next=4,Sn.a.post("".concat(Xn,"/add-user"),n).then((function(n){console.log(n)}));case 4:t({type:Kn,payload:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:Hn,payload:null===e.t0||void 0===e.t0?void 0:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}()}({name:l,email:u,password:h}))},disabled:r,children:[r?"Submitting...":"Submit",Object(k.jsx)(He,{className:r?"fas fa-spinner":"fas fa-arrow-right"})]})]})]})})})},Ye=Qe,We=(f.d.div(un||(un=Object(g.a)(["\n  width: 85%;\n  margin: 0 auto;\n  @media (min-width: ","px) {\n    width: 70%;\n    margin: 0 auto;\n  }\n"])),O),f.d.div(xn||(xn=Object(g.a)(["\n  display: grid;\n  grid-gap: 0px;\n  /* grid-template-columns: repeat(1, 1fr); */\n  @media (min-width: ","px) {\n    grid-gap: 8px;\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media (min-width: ","px) {\n    grid-gap: 15px;\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media (min-width: ","px) {\n    grid-gap: 195px;\n    grid-template-columns: repeat(3, 1fr);\n  }\n"])),j,w,v)),qe=(f.d.div(fn||(fn=Object(g.a)(["\n  display: grid;\n  grid-gap: 0px;\n  padding-top: 24px;\n  grid-template-columns: repeat(1, 1fr);\n  @media (min-width: ","px) {\n    grid-gap: 25px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (min-width: ","px) {\n    grid-gap: 25px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n  @media (min-width: ","px) {\n    grid-gap: 25px;\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])),j,w,v),f.d.div(gn||(gn=Object(g.a)(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: ","px) {\n    display: flex;\n    flex-direction: row;\n  }\n"])),w),f.d.div(hn||(hn=Object(g.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n"]))),Object(f.c)(mn||(mn=Object(g.a)(["\n  display: inline-block;\n  opacity: 0.8;\n  margin: ",";\n  background: ",";\n  color: ",";\n  font-size: 12px;\n  text-align: center;\n  cursor: pointer;\n\n  transition: all 0.1s;\n  padding: 12px 24px 12px;\n  height: 41px;\n  letter-spacing: 0.1em;\n  border: 1px solid #fff;\n  width: 95%;\n  border-radius: 4px;\n  text-transform: uppercase;\n  @media (min-width: ",'px) {\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 15px;\n  }\n\n  &:hover {\n    background: rgb(130, 127, 254);\n  }\n\n  &:active {\n    transform: translate(1px, -1px);\n    border: 1px solid #fff;\n  }\n\n  &:disabled {\n    cursor: no-drop;\n    background: #1d1b28;\n    opacity: 0.5;\n    color: white;\n    height: 44px;\n    &:hover {\n      box-shadow: none;\n    }\n    &:after {\n      content: "";\n      border: none;\n    }\n  }\n\n  + a {\n    margin-left: 10px;\n    cursor: initial;\n  }\n'])),(function(n){return n.margin}),(function(n){return n.background}),(function(n){return n.color}),v)),Ve=f.d.button(jn||(jn=Object(g.a)(["\n  ","\n"])),qe),Xe=function(n){var e=Object(vn.b)(),a=Object(vn.c)((function(n){return n.user})).loginSuccess,i=p.a.useState(""),r=Object(wn.a)(i,2),o=r[0],c=r[1],l=function(){c("")};return Object(k.jsxs)("div",{style:{marginTop:"20px"},children:[Object(k.jsxs)(We,{children:[Object(k.jsx)("div",{}),Object(k.jsx)(ke,{className:"header-logo",src:t(77).default,alt:"logo"}),Object(k.jsxs)(Te,{children:["success"===a.login?Object(k.jsx)(Ve,{background:"rgb(162,48,237)",color:"white",onClick:function(){return e(function(){var n=Object(Tn.a)(kn.a.mark((function n(e,t){return kn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:Jn});case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}())},children:"Logout"}):Object(k.jsx)(Ve,{background:"rgb(162,48,237)",color:"white",onClick:function(){return c("login")},children:"Login"}),a?"":Object(k.jsx)(Ve,{background:"rgb(110,71,255)",color:"white",onClick:function(){return c("signup")},children:"Signup"})]})]}),Object(k.jsx)(Ae,{show:"login"==o,Close:function(){return l()}}),Object(k.jsx)(Ye,{show:"signup"==o,Close:function(){return l()}})]})},Ze=Xe,$e=t(27),nt=t(5),et=function(){return Object(k.jsxs)($e.a,{children:[Object(k.jsx)(Ze,{}),Object(k.jsx)(On,{children:Object(k.jsxs)(nt.c,{children:[Object(k.jsx)(nt.a,{path:"/",element:Object(k.jsx)(we,{})}),Object(k.jsx)(nt.a,{path:"/feedback-portal",element:Object(k.jsx)(we,{})}),Object(k.jsx)(nt.a,{path:"*",element:Object(k.jsx)(C,{})})]})}),Object(k.jsx)(ye,{})]})};var tt=function(){return Object(k.jsxs)(f.a,{theme:m,children:[Object(k.jsx)(y,{}),Object(k.jsx)(et,{}),Object(k.jsx)(Zn.a,{toastOptions:{success:{border:"1px solid #A230ED",padding:"16px",color:"#A230ED"}}})]})},at=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),a(n),i(n),r(n),o(n)}))};x.a.render(Object(k.jsx)(p.a.StrictMode,{children:Object(k.jsx)(vn.a,{store:Vn,children:Object(k.jsx)(tt,{})})}),document.getElementById("root")),at()}},[[78,1,2]]]);
//# sourceMappingURL=main.6f008227.chunk.js.map