(this["webpackJsonpassessment-landing"]=this["webpackJsonpassessment-landing"]||[]).push([[0],{281:function(e,t,a){"use strict";(function(e){var n=a(26),i=a.n(n),r=a(45),c=a(80),s=a(81),o=a(604),l=a(605),d={region:"us-east-1",credentials:{accessKeyId:"AKIAQVPSLVVLDPLC3S4O",secretAccessKey:"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"}},u=new(function(){function t(){Object(c.a)(this,t);try{this.lambda=new o.a(d),console.debug("Constructed aws")}catch(e){}}return Object(s.a)(t,[{key:"signUp",value:function(){var t=Object(r.a)(i.a.mark((function t(a){var n,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={FunctionName:"arn:aws:lambda:us-east-1:046142303574:function:signUpNewsletter",InvocationType:"RequestResponse",LogType:"None",Payload:e.from(JSON.stringify({email:a}),"utf8")},t.prev=1,t.next=4,this.lambda.send(new l.a(n));case 4:return r=t.sent,c=JSON.parse(JSON.parse(e.from(r.Payload).toString())),console.debug("Get response ".concat(c)),t.abrupt("return",c);case 10:return t.prev=10,t.t0=t.catch(1),console.debug("Get error ".concat(t.t0)),t.abrupt("return",{response:"failure",failureMessage:"Service error. Please try again later."});case 14:case"end":return t.stop()}}),t,this,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}]),t}());t.a=u}).call(this,a(23).Buffer)},295:function(e){e.exports=JSON.parse('{"General":[{"title":"How do I report an error?","content":"From the application menu select Help > Report Issue"},{"title":"How do I submit feedback?","content":"From the application menu select Help > Submit Feedback"},{"title":"Who views my data?","content":"The data is used in automated systems to improve our models, and the application\'s ability to detect cheating as well as AI features.\\nYour data is handled in accordance with ethical research best practices and AUC\'s rules and regulations.\\nIn instances when necessary, data may be viewed by members of our team with due care and in accordance with research rules."},{"title":"Can I try out the application without participating in research?","content":"Yes! From the application menu select Research > Start Demo and choose either \'Research - Offline\' or \'Showcase - Offline\' option for a disconnected demo.\\nPlease be aware that automatic error reporting remains active. The only data that will be communicated to us is diagnostic error data in case you encounter any."}],"MacOS":[{"title":"Application cannot be opened because the developer cannot be verified","content":"This warning appears as our Mac client is not yet signed and certified by Apple as it is experimental software.\\nTo allow running on your device go to System Preferences > Security & Privacy > Click \'Open Anyway\'.\\nFor more information about this warning see [Apple Support](https://support.apple.com/en-us/HT202491)","attachments":["macUnverifiedWarning","macOpenAnyway"]}],"Windows":[{"title":"Windows protected your PC error when installing","content":"This warning is due to the fact that our application has not yet been certified by Microsoft as it is still experimental.\\nTo allow the application to install, click the \'More Info\' link in the dialog then click the \'Run Anyway\' button","attachments":["smartscreenBase","smartscreenRun"]}],"Linux":[{"title":"Is my distro supported","content":"The application is distributed as a portable and self-contained AppImage and should run on most major distributions.\\nIt has been tested and is known to work on Debian, Fedora, Arch, Slack and their derivatives.\\nCheck [AppImage FAQ](https://docs.appimage.org/user-guide/faq.html) for more information."},{"title":"Application won\'t start","content":"Please make sure to make the AppImage executable using GUI properties or \'chmod a+x <filename>\' from terminal."}]}')},311:function(e,t,a){},350:function(e,t){},352:function(e,t){},388:function(e,t){},390:function(e,t){},600:function(e,t,a){"use strict";a.r(t);var n=a(15),i=a.n(n),r=a(1),c=a.n(r),s=a(641),o=(a(311),a(312),a(16)),l=a(628),d=a(185),u=a(14),h=a(630),p=(a(631),a(632),a(96),a(3));Object(l.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function b(e){var t=e.children,a=e.window,n=Object(h.a)({disableHysteresis:!0,threshold:0,target:a?a():void 0});return c.a.cloneElement(t,{elevation:n?4:0})}var m=a(633),g=a(634),j=a(637),A=a(635),x=a(636),f=Object(l.a)((function(e){return{grow:{flexGrow:1},appBar:{marginTop:0,backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},row:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},button:{height:80,textTransform:"none"}}}));var O=function(){var e=f(),t=Object(u.f)();return Object(p.jsx)("div",{className:e.grow,children:Object(p.jsx)(m.a,{position:"static",className:e.appBar,elevation:0,children:Object(p.jsx)(g.a,{children:Object(p.jsxs)(A.a,{container:!0,direction:"row",alignItems:"center",justify:"flex-start",spacing:2,children:[Object(p.jsx)(A.a,{item:!0,children:Object(p.jsx)(x.a,{className:e.button,variant:"text",startIcon:Object(p.jsx)("img",{onClick:function(){t.push("/assessment")},src:"data:image/png;base64,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",width:60}),children:Object(p.jsx)(j.a,{variant:"h5",onClick:function(){t.push("/assessment")},children:"Dr. Proctor"})})}),Object(p.jsx)(A.a,{item:!0,children:Object(p.jsx)(x.a,{variant:"text",style:{height:65},onClick:function(){return t.push("/instructor")},children:"Instructors"})})]})})})})},w=a(26),v=a.n(w),y=a(45),I=a(42),k=a(642),C=a(184),E=a(603),S=a(285),D=a.n(S),Q=a(654),B=a(281),L=a(141),W=Object(l.a)((function(e){return{root:{overflowX:"hidden",paddingBottom:e.spacing(10),display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",width:"100%"},form:{marginTop:e.spacing(1),padding:"2px 4px",width:300},input:{marginLeft:e.spacing(1),width:240},iconButton:{marginRight:0,paddingRight:0}}}));function N(e){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(e)}var Y=function(){var e,t=W(),a=Object(r.useState)(""),n=Object(I.a)(a,2),i=n[0],o=n[1],l=Object(r.useState)(""),d=Object(I.a)(l,2),u=d[0],h=d[1],b=Object(r.useState)(!1),m=Object(I.a)(b,2),g=m[0],A=m[1],x=Object(L.b)().enqueueSnackbar,f=function(){var e=Object(y.a)(v.a.mark((function e(t){var a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),A(!0),!N(i)){e.next=17;break}return e.prev=3,e.next=6,B.a.signUp(i);case 6:a=e.sent,A(!1),"success"===a.response?x("Successfully signed up",{variant:"success"}):"failure"===a.response&&a.failureMessage&&x("Failed to signed up. ".concat(a.failureMessage),{variant:"error"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),A(!1),x("Service error. Please try again later.",{variant:"error"});case 15:e.next=19;break;case 17:A(!1),x("Incorrect email address",{variant:"error"});case 19:console.debug("Submitting with email ".concat(i));case 20:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(s.a,{}),Object(p.jsxs)(k.a,{disableGutters:!0,className:t.root,maxWidth:"xl",children:[Object(p.jsx)(j.a,{variant:"h3",children:"Live Soon!"}),Object(p.jsx)(j.a,{variant:"h6",children:"Instructor application will be live and available for testing very soon"}),Object(p.jsx)(j.a,{variant:"h6",children:"Sign up to be notified"}),Object(p.jsx)(C.a,{className:t.form,children:Object(p.jsxs)("form",{noValidate:!0,onSubmit:f,children:[Object(p.jsx)(Q.a,{required:!0,variant:"outlined",name:"email",id:"email",label:"Your Email",type:"email",autoComplete:"email",placeholder:"Your Email",error:""!==u,onChange:(e="email",function(t){switch(e){case"email":o(t.target.value),h("");break;default:console.debug("Newsletter signup unknown handle")}}),className:t.input}),Object(p.jsx)(E.a,{type:"submit",color:"primary",disabled:g,className:t.iconButton,children:Object(p.jsx)(D.a,{})})]})})]})]})},U=a(651),Z=a(145),R=a(650),M=a(9),H=a(655),P=a(286),F=Object(M.a)((function(e){return{root:{width:e.spacing(25),height:e.spacing(25)}}}))(E.a),G=Object(l.a)((function(e){return{column:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}}));var T=function(e){var t=e.downloadInfo,a=e.title,n=e.icon,i=G();return Object(p.jsx)(c.a.Fragment,{children:Object(p.jsxs)(k.a,{className:i.column,children:[Object(p.jsx)(H.a,{placement:"top",title:a,children:Object(p.jsx)(F,{disableFocusRipple:!0,disableRipple:!0,size:"medium",href:t.url,children:Object(p.jsx)(P.a,{icon:n,size:"6x"})})}),Object(p.jsxs)(j.a,{variant:"caption",children:["Version ",t.version]}),Object(p.jsxs)(j.a,{variant:"caption",children:["Released ",t.date]})]})})},z=a(138),J=a.n(z),V=a.p+"static/media/disclaimer.73eb6ac7.md";var K=function(e){var t=Object.assign({},e),a=Object(r.useState)(),n=Object(I.a)(a,2),i=n[0],s=n[1];return Object(r.useEffect)((function(){fetch(V).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[]),Object(p.jsx)(c.a.Fragment,{children:Object(p.jsx)(k.a,Object(o.a)(Object(o.a)({disableGutters:!0},t),{},{children:Object(p.jsx)(J.a,{children:i})}))})},q=a(144),X=a(29),$=a(80),_=a(81),ee=a(299),te=a(298),ae=a(143),ne=a(52),ie=a.n(ne),re=a(139),ce=a(646),se=a(293),oe=a.n(se),le=a(294),de=a.n(le),ue=a(645),he=a(288),pe=a.n(he),be=a(46),me=a.n(be),ge=a(142),je=a(289),Ae=a.n(je),xe=a(290),fe=a.n(xe),Oe=a(291),we=a.n(Oe),ve=a(292),ye=a.n(ve),Ie=function(e,t){return(e%t+t)%t},ke=we()(fe()(ye.a)),Ce=Ae()(ke);function Ee(e){var t=e.children,a=e.autoplay,n=Object(ge.a)(e,["children","autoplay"]),i=function(e){return function(t){var a=t.index,n=t.key;return c.a.cloneElement(e[Ie(a,e.length)],{key:n})}}(t);return a?Object(p.jsx)(Ce,Object(o.a)(Object(o.a)({},n),{},{slideRenderer:i})):Object(p.jsx)(ke,Object(o.a)(Object(o.a)({},n),{},{slideRenderer:i}))}var Se={root:{"& > *:focus":{outline:"none"}},content:{width:"100%",height:"100%",position:"relative"},contentMobile:{width:"100%",height:"100%",maxWidth:"initial",maxHeight:"initial",margin:0,top:0,transform:"none","& > $carouselWrapper":{borderRadius:0}},arrow:{width:48,height:48,position:"absolute",top:"calc((100% - 96px) / 2 + 24px)"},arrowLeft:{left:25},arrowRight:{right:25},arrowIcon:{color:ae.a[700]},carouselWrapper:{overflow:"hidden",background:"transparent",height:"100%"},dots:{paddingTop:0,marginTop:-60,margin:"0 auto"},dotsMobile:{paddingTop:0},dotsMobileLandscape:{paddingTop:20},footer:{marginTop:0,width:"100%",position:"relative",textAlign:"center"},footerMobile:{marginTop:-92},footerMobileLandscape:{marginTop:-3,transform:"translateY(-50vh)",display:"inline-block",width:"auto"},slide:{width:"100%",height:"100%"},slideMobile:{width:"100%",height:"100%"},carousel:{height:"100%"},carouselContainer:{height:"100%"}},De=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){var e;Object($.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={slideIndex:0},e.handleContentClick=function(e){return e.stopPropagation()||e.preventDefault()},e.handleChange=function(t){e.setState({slideIndex:t},e.onChange(t))},e}return Object(_.a)(a,[{key:"decreaseIndex",value:function(){var e=this.state.slideIndex-1;this.setState({slideIndex:e},this.onChange(e))}},{key:"increaseIndex",value:function(){var e=this.state.slideIndex+1;this.setState({slideIndex:e},this.onChange(e))}},{key:"onChange",value:function(e){this.props.onChange&&this.props.onChange(Ie(e,this.props.children.length))}},{key:"render",value:function(){var e,t,a=this,n=this.props,i=n.autoplay,r=n.ButtonProps,s=n.children,l=n.classes,d=n.containerStyle,u=n.hideArrows,h=n.interval,b=n.label,m=n.landscape,g=n.mobile,j=n.onStart,A=n.open,f=g&&m,O={enter:re.duration.enteringScreen,exit:re.duration.leavingScreen},w=null!=s.length,v=Object(p.jsx)(Ee,{autoplay:A&&i&&w,className:l.carousel,containerStyle:Object(o.a)({height:"100%"},d),index:this.state.slideIndex,interval:h,onChangeIndex:this.handleChange,slideClassName:l.slide,children:c.a.Children.map(s,(function(e){return c.a.cloneElement(e,{mobile:g,landscape:f})}))});return Object(p.jsx)(ue.a,{appear:!0,in:A,timeout:O,children:Object(p.jsxs)("div",{className:me()(l.content,Object(X.a)({},l.contentMobile,g)),onClick:this.handleContentClick,children:[Object(p.jsx)(C.a,{elevation:g?0:1,className:l.carouselWrapper,children:v}),Object(p.jsx)("div",{style:f?{minWidth:300,maxWidth:"calc(50% - 48px)",float:"right"}:null,children:Object(p.jsxs)("div",{className:me()(l.footer,(e={},Object(X.a)(e,l.footerMobile,g),Object(X.a)(e,l.footerMobileLandscape,f),e)),children:[b&&Object(p.jsx)(x.a,Object(o.a)(Object(o.a)({variant:"contained",onClick:j},r),{},{children:b})),w&&Object(p.jsx)(pe.a,{count:s.length,index:Ie(this.state.slideIndex,s.length),className:me()(l.dots,(t={},Object(X.a)(t,l.dotsMobile,g),Object(X.a)(t,l.dotsMobileLandscape,f),t)),onDotClick:this.handleChange})]})}),!g&&!u&&w&&Object(p.jsxs)("div",{children:[Object(p.jsx)(ce.a,{className:me()(l.arrow,l.arrowLeft),onClick:function(){return a.decreaseIndex()},children:Object(p.jsx)(oe.a,{className:l.arrowIcon})}),Object(p.jsx)(ce.a,{className:me()(l.arrow,l.arrowRight),onClick:function(){return a.increaseIndex()},children:Object(p.jsx)(de.a,{className:l.arrowIcon})})]})]})})}}]),a}(r.Component);De.defaultProps={autoplay:!0,interval:3e3,mobile:!1,open:!0,hideArrows:!1};var Qe=ie()(Se)(De),Be=a(82),Le=a.n(Be),We={root:{backgroundColor:Le.a[500],height:"100%"},rootMobileLandscape:{width:"100%",display:"flex",flexDirection:"row"},media:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center","& > *":{maxHeight:"100%"}},mediaMobile:{position:"relative",top:"50%",transform:"translateY(-50%)"},mediaMobileLandscape:{},mediaBackground:{backgroundColor:Le.a[700],height:"calc(100% - 216px)",textAlign:"center"},mediaBackgroundMobile:{height:"calc(100% - 241px)"},mediaBackgroundMobileLandscape:{height:"100%",flex:"1 1",alignSelf:"stretch"},text:{textAlign:"center",maxWidth:"80%",margin:"0 auto",paddingTop:32},textMobile:{paddingTop:30,"& $title":{marginBottom:8}},textMobileLandscape:{minWidth:300,maxWidth:"calc(50% - 48px)",padding:"24px 24px 128px",flex:"0 1",alignSelf:"center",textAlign:"left",margin:0},title:{fontSize:"24px",fontWeight:700,lineHeight:"32px",marginBottom:12,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",color:"#fff"},subtitle:{fontSize:"15px",fontWeight:400,lineHeight:"18px",margin:0,color:"#fff"}};var Ne=ie()(We)((function(e){var t,a,n,i,r=e.classes,c=e.media,s=e.mediaBackgroundStyle,l=e.subtitle,d=e.title,u=e.mobile,h=e.landscape,b=Object(ge.a)(e,["classes","media","mediaBackgroundStyle","subtitle","title","mobile","landscape"]),m=u&&h;return Object(p.jsxs)("div",Object(o.a)(Object(o.a)({className:me()(r.root,(t={},Object(X.a)(t,r.rootMobile,u),Object(X.a)(t,r.rootMobileLandscape,m),t))},b),{},{children:[Object(p.jsx)("div",{className:me()(r.mediaBackground,(a={},Object(X.a)(a,r.mediaBackgroundMobile,u),Object(X.a)(a,r.mediaBackgroundMobileLandscape,m),a)),style:s,children:Object(p.jsx)("div",{className:me()(r.media,(n={},Object(X.a)(n,r.mediaMobile,u),Object(X.a)(n,r.mediaMobileLandscape,m),n)),children:c})}),Object(p.jsxs)("div",{className:me()(r.text,(i={},Object(X.a)(i,r.textMobile,u),Object(X.a)(i,r.textMobileLandscape,m),i)),children:[Object(p.jsx)(j.a,{className:r.title,children:d}),Object(p.jsx)(j.a,{className:r.subtitle,children:l})]})]}))})),Ye=a(656),Ue=a.p+"static/media/sleek.befc3a0e.png",Ze=a.p+"static/media/track.55d7b0f4.png",Re=a.p+"static/media/customize.5388cbbc.png",Me=a.p+"static/media/code.e8a04b13.png",He=a.p+"static/media/privacy.21c4dcb0.png",Pe=Object(l.a)((function(e){return{image:{objectFit:"contain"}}})),Fe=function(e){var t=e.isMobile,a=e.width,n=e.height,i=Pe();return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(s.a,{}),Object(p.jsx)(Ye.a,{width:a,height:n,children:Object(p.jsxs)(Qe,{open:!0,interval:7e3,autoplay:!0,mobile:t,style:{position:"absolute"},children:[Object(p.jsx)(Ne,{media:Object(p.jsx)("img",{src:Ue,className:i.image}),mediaBackgroundStyle:{backgroundColor:q.a[400]},style:{backgroundColor:q.a[600]},title:"Simple And Sleek",subtitle:"All your exam questions and answers in one screen with with no distractions and no unnecessary navigation"}),Object(p.jsx)(Ne,{media:Object(p.jsx)("img",{src:Ze,className:i.image}),mediaBackgroundStyle:{backgroundColor:q.a[400]},style:{backgroundColor:q.a[600]},title:"Keep Track Of Everything",subtitle:"Never miss a question again. Mark answers you want to go back to and get those finished ones out of the way to focus on what matters. Keep track of all your answers in one place and rest assured you'll be reminded of anything you may miss before submitting."}),Object(p.jsx)(Ne,{media:Object(p.jsx)("img",{src:Re,className:i.image}),mediaBackgroundStyle:{backgroundColor:q.a[400]},style:{backgroundColor:q.a[600]},title:"Your Exams, Your Way",subtitle:"Highly customizable with an expanding range of options to tailor your exam experience to what makes you comfortable and in the zone."}),Object(p.jsx)(Ne,{media:Object(p.jsx)("img",{src:Me,className:i.image}),mediaBackgroundStyle:{backgroundColor:q.a[400]},style:{backgroundColor:q.a[600]},title:"Integrated Code Editor",subtitle:"Coding exams have never been easier with a fully-featured integrated code editor that offers all the functionality you're used to in an IDE editor."}),Object(p.jsx)(Ne,{media:Object(p.jsx)("img",{src:He,className:i.image}),mediaBackgroundStyle:{backgroundColor:q.a[400]},style:{backgroundColor:q.a[600]},title:"Your Privacy Matters",subtitle:"Clear and transparent research participation rules. Your rights are protected and your data is stored securely, anonymously and with several facilities in place to protect your privacy."})]})})]})};function Ge(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var Te=a(598),ze=a(96).logger,Je="https://datasciencehub.s3.amazonaws.com/",Ve=new(function(){function e(){Object($.a)(this,e),this.windowsYamlObject="latest.yml",this.linuxYamlObject="latest-linux.yml",this.macYamlObject="latest-mac.yml"}return Object(_.a)(e,[{key:"getSystemDetails",value:function(){var e=navigator.appVersion;return e.includes("Macintosh")?"macOS":e.includes("Windows")?"windows":e.includes("Linux")?"linux":void 0}},{key:"getLatestVersion",value:function(){var e=Object(y.a)(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(!(a=e.sent).ok){e.next=21;break}return ze.info("Received response OK for yaml fetch"),e.prev=5,e.t0=Te,e.next=9,a.text();case 9:return e.t1=e.sent,e.next=12,e.t0.load.call(e.t0,e.t1);case 12:return n=e.sent,e.abrupt("return",{url:Je+n.files[0].url.replace(/\s/g,"+"),version:n.version,date:n.releaseDate.split("T")[0]});case 16:e.prev=16,e.t2=e.catch(5),ze.warn("Error getting the download file name ".concat(e.t2));case 19:e.next=23;break;case 21:return ze.warn("Received BAD response for yaml fetch ".concat(a)),e.abrupt("return",{url:"",version:"",date:""});case 23:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getLatestWindowsVersion",value:function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLatestVersion(Je+this.windowsYamlObject);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getLatestMacVersion",value:function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLatestVersion(Je+this.macYamlObject);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getLatestLinuxVersion",value:function(){var e=Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLatestVersion(Je+this.linuxYamlObject);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}()),Ke=a(649),qe=a(296),Xe=a.n(qe),$e=a(657),_e=a(647),et=a(648),tt=a(295),at={smartscreenBase:a.p+"static/media/smartscreenBase.060ac080.png",smartscreenRun:a.p+"static/media/smartscreenRun.5f410e76.png",macUnverifiedWarning:a.p+"static/media/macUnverifiedWarning.6be45801.png",macOpenAnyway:a.p+"static/media/macOpenAnyway.367e591b.png"},nt=ie()({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})($e.a),it=ie()({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(_e.a),rt=ie()((function(e){return{root:{padding:e.spacing(2)}}}))(et.a),ct=Object(l.a)((function(e){return{header:{marginLeft:15,marginBottom:15,marginTop:15},justifyLeft:{display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"flex-start"},span:{whiteSpace:"pre-wrap"}}}));function st(e){var t=e.entry,a=ct();return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(j.a,{className:a.header,variant:"h5",children:t}),tt[t].map((function(e,t){return Object(p.jsxs)(nt,{children:[Object(p.jsx)(it,{expandIcon:Object(p.jsx)(Xe.a,{}),children:Object(p.jsx)(j.a,{variant:"h6",children:e.title})}),Object(p.jsx)(rt,{className:a.justifyLeft,children:Object(p.jsx)(j.a,{variant:"body1",component:"span",className:a.span,children:Object(p.jsx)(J.a,{children:e.content})})}),Object(p.jsx)(Ke.a,{className:a.justifyLeft,children:"attachments"in e?e.attachments.map((function(e,t){return Object(p.jsx)("img",{alt:e,height:400,src:at[e]},t)})):null})]},t)}))]})}var ot=function(e){var t=Object.assign({},e);return Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(s.a,{}),Object(p.jsxs)(k.a,Object(o.a)(Object(o.a)({disableGutters:!0},t),{},{children:[Object(p.jsx)(st,{entry:"General"}),Object(p.jsx)(st,{entry:"MacOS"}),Object(p.jsx)(st,{entry:"Windows"}),Object(p.jsx)(st,{entry:"Linux"})]}))]})},lt=Object(l.a)((function(e){return{root:{overflowX:"hidden",paddingBottom:e.spacing(10)},header:{marginTop:e.spacing(5),marginBottom:e.spacing(5),width:"100%",textAlign:"center"},column:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},divider:{marginTop:e.spacing(2)}}}));var dt=function(){var e=lt(),t={url:"",version:"",date:""},a=function(){var e=Object(r.useState)(Ge()),t=Object(I.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){function e(){n(Ge())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}(),n=a.width,i=a.height,o=Object(r.useState)(t),l=Object(I.a)(o,2),d=l[0],u=l[1],h=Object(r.useState)(t),b=Object(I.a)(h,2),m=b[0],g=b[1],x=Object(r.useState)(t),f=Object(I.a)(x,2),O=f[0],w=f[1],C=Object(R.a)("(max-width:600px)");return Object(r.useEffect)((function(){Object(y.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,Ve.getLatestWindowsVersion();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=w,e.next=8,Ve.getLatestLinuxVersion();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=g,e.next=13,Ve.getLatestMacVersion();case 13:e.t5=e.sent,(0,e.t4)(e.t5);case 15:case"end":return e.stop()}}),e)})))()}),[]),Object(p.jsxs)(c.a.Fragment,{children:[Object(p.jsx)(s.a,{}),Object(p.jsxs)(k.a,{className:e.root,maxWidth:"xl",disableGutters:!0,children:[Object(p.jsx)(Fe,{width:n,height:i-68,isMobile:C}),Object(p.jsx)(j.a,{variant:"h4",className:e.header,children:"Download"}),Object(p.jsxs)(A.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(p.jsx)(A.a,{item:!0,children:Object(p.jsx)(T,{title:"Download Windows .exe",icon:Z.c,downloadInfo:d})}),Object(p.jsx)(A.a,{item:!0,children:Object(p.jsx)(T,{title:"Download MacOS .dmg",icon:Z.a,downloadInfo:m})}),Object(p.jsx)(A.a,{item:!0,children:Object(p.jsx)(T,{title:"Download Linux .AppImage",icon:Z.b,downloadInfo:O})})]}),Object(p.jsx)(U.a,{className:e.divider}),Object(p.jsx)(j.a,{className:e.header,variant:"h4",children:"Frequently Asked Questions"}),Object(p.jsx)(ot,{style:{width:.75*n,height:.5*i,overflow:"auto"}}),Object(p.jsx)(U.a,{}),Object(p.jsx)(j.a,{variant:"h4",className:e.header,children:"Important Information"}),Object(p.jsx)(K,{style:{width:.85*n}})]})]})};a(652),a(653),Object(l.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{width:"100%",height:"1000"}}}));var ut=Object(l.a)((function(e){return{root:{overflowX:"hidden",paddingBottom:e.spacing(10)},header:{marginTop:e.spacing(5),marginBottom:e.spacing(5),width:"100%",textAlign:"center"},column:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},divider:{marginTop:e.spacing(2)}}}));var ht=function(){return ut(),Object(p.jsxs)(d.a,{children:[Object(p.jsx)(b,{children:Object(p.jsx)(O,{})}),Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/instructor",render:function(e){return Object(p.jsx)(Y,Object(o.a)({},e))}}),Object(p.jsx)(u.a,{exact:!0,path:"/assessment",render:function(e){return Object(p.jsx)(dt,Object(o.a)({},e))}})]})]})},pt=a(297),bt=a(644);function mt(){var e=Object(pt.a)({palette:{primary:Le.a,type:"light",background:{default:"#E0E0E0"}},overrides:{MuiCssBaseline:{"@global":{html:{WebkitFontSmoothing:"auto"}}}}});return Object(p.jsxs)(c.a.StrictMode,{children:[Object(p.jsx)(s.a,{}),Object(p.jsx)(bt.a,{theme:e,children:Object(p.jsx)(L.a,{maxSnack:5,preventDuplicate:!0,anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(p.jsx)(ht,{})})})]})}i.a.render(Object(p.jsx)(mt,{}),document.getElementById("root"))},96:function(e,t,a){"use strict";a.r(t),a.d(t,"logger",(function(){return s})),a.d(t,"history",(function(){return c}));var n=a(100),i=a.n(n),r=a(33),c=Object(r.a)(),s=i.a.createLogger({level:"info",format:i.a.format.json(),defaultMeta:{service:"AssessmentClientPage"},transports:[new i.a.transports.Console({format:i.a.format.simple()})]})}},[[600,1,2]]]);
//# sourceMappingURL=main.32adfe81.chunk.js.map