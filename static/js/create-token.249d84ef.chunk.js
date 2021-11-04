(this["webpackJsonppink-sale"]=this["webpackJsonppink-sale"]||[]).push([[9],{1264:function(e,a,t){"use strict";t.r(a);var s=t(897),n=t(879),r=t(2);a.default=function(){return Object(r.jsx)("div",{className:"container py-6",children:Object(r.jsx)(s.a,{children:Object(r.jsx)(n.a,{})})})}},833:function(e,a,t){"use strict";var s=t(90),n=t(2);a.a=function(e){var a=e.primary,t=void 0!==a&&a,r=e.loading,c=void 0!==r&&r,l=e.fullwidth,i=void 0!==l&&l,o=e.disabled,d=void 0!==o&&o,u=e.danger,m=void 0!==u&&u,h=e.type,b=void 0===h?"button":h,j=e.icon,p=e.children,x=e.onClick;return Object(n.jsx)(s.a,{type:t?"primary":"default",icon:j,htmlType:b,loading:c,block:i,disabled:d,danger:m,onClick:x,children:p})}},834:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var s=t(17),n=t(1),r=t(3),c=t(25);function l(){var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],l=a[1],i=Object(c.c)();return Object(n.useEffect)((function(){switch(i){case r.a.BSC_TESTNET:l("https://testnet.bscscan.com");break;case r.a.BSC_MAINNET:l("https://bscscan.com");break;case r.a.MATIC_TESTNET:l("https://mumbai.polygonscan.com");break;case r.a.MATIC_MAINNET:l("https://polygonscan.com");break;case r.a.ETH_MAINNET:l("https://etherscan.io");break;case r.a.KCC_MAINNET:l("https://explorer.kcc.io/en");break;case r.a.AVAX:l("https://cchain.explorer.avax.network");break;default:l("https://bscscan.com")}}),[i]),t}},879:function(e,a,t){"use strict";var s=t(7),n=t.n(s),r=t(45),c=t(17),l=t(11),i=t.n(l),o=t(837),d=t(1),u=t(454),m=t(957),h=t(838),b=t(56),j=t.n(b),p=t(864),x=t(55),O=t(50),v=t(48),k=t(833),N=t(4),y=t(19),f=t(25);var g=t(834),B=t(155);function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"standard",a=Object(f.i)(),t=Object(B.z)(a),s=Object(B.j)(a),l=Object(B.e)(a),i=Object(d.useState)(),o=Object(c.a)(i,2),u=o[0],m=o[1],h=Object(d.useState)(!1),b=Object(c.a)(h,2),j=b[0],p=b[1];return Object(d.useEffect)((function(){t&&Object(r.a)(n.a.mark((function a(){var r,c,i;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(p(!0),a.prev=1,"standard"!==e){a.next=9;break}return a.next=5,t.methods.flatFee().call();case 5:r=a.sent,m(r),a.next=20;break;case 9:if("liquidity"!==e){a.next=16;break}return a.next=12,s.methods.flatFee().call();case 12:c=a.sent,m(c),a.next=20;break;case 16:return a.next=18,l.methods.flatFee().call();case 18:i=a.sent,m(i);case 20:a.next=24;break;case 22:a.prev=22,a.t0=a.catch(1);case 24:return a.prev=24,p(!1),a.finish(24);case 27:case"end":return a.stop()}}),a,null,[[1,22,24,27]])})))()}),[t,e,l,s]),{fee:u,loading:j}}var F=t(283),w=t(12),S=t(285),C=t(30),q=t(133),E=t(2),D=t(284),A=h.d().shape({tokenName:h.f().required().min(2).max(255),tokenSymbol:h.f().required().min(2).max(255),tokenDecimals:h.c().positive().min(2).max(64).test({test:function(e,a){return"standard"!==a.parent.tokenType||e&&e>0},message:"Invalid decimals"}),totalSupply:h.f().required(),taxFeeBps:h.c().positive().max(100).min(.01),liquidityFeeBps:h.c().positive().max(100).min(.01),tokenType:h.f(),router:h.f().test({test:function(e,a){return"standard"===a.parent.tokenType||e&&""!==e},message:"Invalid router"}),maxTxBps:h.c().positive().max(100).min(.01).test({test:function(e,a){return"standard"===a.parent.tokenType||"baby"===a.parent.tokenType||e&&e>=.01},message:"Invalid max tx percent"}),charity:h.f().max(255).test({test:function(e,a){return"standard"===a.parent.tokenType||(!e||j.a.utils.isAddress(e)&&e!==N.a.ZERO_ADDRESS)},message:"Address is invalid"}),charityBps:h.c().positive().max(100).min(1).when("charity",(function(e){return e?h.c().positive().max(100).min(1).required():h.c().positive().max(100).min(1)})),rewardToken:h.f().test({test:function(e,a){return"standard"===a.parent.tokenType||"liquidity"===a.parent.tokenType||(!e||j.a.utils.isAddress(e)&&e!==N.a.ZERO_ADDRESS)},message:"Address is invalid"}),tokenRewardsFee:h.c().positive().max(100).min(.01).when("tokenType",(function(e){return"baby"===e?h.c().positive().max(100).min(.01).required("Token reward fee is a required field"):h.c().positive().max(100).min(.01)})),liquidityFee:h.c().positive().max(100).min(.01).when("tokenType",(function(e){return"baby"===e?h.c().positive().max(100).min(.01).required("Auto add liquidity is a required field"):h.c().positive().max(100).min(.01)})),marketingWallet:h.f().test({test:function(e,a){return"standard"===a.parent.tokenType||"liquidity"===a.parent.tokenType||(!e||j.a.utils.isAddress(e)&&e!==N.a.ZERO_ADDRESS)},message:"Address is invalid"}),marketingFee:h.c().positive().max(100).min(.01).when("tokenType",(function(e){return"baby"===e?h.c().positive().max(100).min(.01).required("Marketing fee is a required field"):h.c().positive().max(100).min(.01)})),minimumTokenBalanceForDividends:h.c().positive().min(1).when("tokenType",(function(e){return"baby"===e?h.c().positive().min(1).required("Minimum token balance for dividends is a required field"):h.c().positive().min(1)})),isImplementAntibot:h.a().defined("Using Anti-Bot system must be defined")});a.a=function(e){var a=e.onSuccess,t=Object(d.useState)(!1),s=Object(c.a)(t,2),l=s[0],h=s[1],b=Object(d.useState)(!1),R=Object(c.a)(b,2),_=R[0],I=R[1],M=Object(d.useState)(),P=Object(c.a)(M,2),W=P[0],H=P[1],K=Object(d.useState)(),z=Object(c.a)(K,2),Z=z[0],L=z[1],V=Object(d.useState)(),G=Object(c.a)(V,2),J=G[0],U=G[1],X=Object(d.useState)(),Y=Object(c.a)(X,2),$=Y[0],Q=Y[1],ee=Object(f.i)(),ae=Object(x.c)().account,te=Object(f.c)(),se=function(){var e=Object(f.c)();return Object(d.useMemo)((function(){return N.a.TOKEN_ROUTERS[e]||[]}),[e])}(),ne=Object(g.a)(),re=Object(S.a)(),ce=Object(q.a)(),le=Object(B.z)(ee),ie=Object(B.j)(ee),oe=Object(B.e)(ee),de=T("standard"),ue=de.fee,me=de.loading,he=T("liquidity"),be=he.fee,je=he.loading,pe=T("baby"),xe=pe.fee,Oe=pe.loading,ve=Object(d.useCallback)((function(e,a,t,s,c){Object(r.a)(n.a.mark((function r(){var l;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(le&&ae&&ue){n.next=3;break}return u.b.error("Connect web3 to continue."),n.abrupt("return");case 3:return h(!0),n.prev=4,n.next=7,le.methods.create(e,a,t,Object(v.d)(s,Number(t)).toString(),c).send({from:ae,value:ue});case 7:l=n.sent,u.b.success("Create token success"),I(!0),L(l.transactionHash),fe(le,l.transactionHash,l.blockNumber),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),n.t0&&n.t0.message&&u.b.error(n.t0.message);case 17:return n.prev=17,h(!1),n.finish(17);case 20:case"end":return n.stop()}}),r,null,[[4,14,17,20]])})))()}),[le,ae,ue]),ke=Object(d.useCallback)((function(e,a,t,s,c,l,i,o,d,m){Object(r.a)(n.a.mark((function r(){var b;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(ie&&ae&&be){n.next=3;break}return u.b.error("Connect web3 to continue."),n.abrupt("return");case 3:return h(!0),n.prev=4,n.next=7,ie.methods.create(e,a,Object(v.d)(t,9).toString(),s,o,c,l,d,i,m).send({from:ae,value:be});case 7:b=n.sent,u.b.success("Create token success"),I(!0),L(b.transactionHash),fe(ie,b.transactionHash,b.blockNumber),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),n.t0&&n.t0.message&&u.b.error(n.t0.message);case 17:return n.prev=17,h(!1),n.finish(17);case 20:case"end":return n.stop()}}),r,null,[[4,14,17,20]])})))()}),[ie,ae,be]),Ne=Object(d.useCallback)((function(e,a,t,s,c,l,i,o,d,m,b){Object(r.a)(n.a.mark((function r(){var j;return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(oe&&ae&&xe){n.next=3;break}return u.b.error("Connect web3 to continue."),n.abrupt("return");case 3:return h(!0),n.prev=4,n.next=7,oe.methods.create(e,a,Object(v.c)(t).toString(),s,c,l,i,o,d,Object(v.c)("".concat(m||0)).toString(),b).send({from:ae,value:xe});case 7:j=n.sent,u.b.success("Create token success"),I(!0),L(j.transactionHash),fe(oe,j.transactionHash,j.blockNumber),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(4),n.t0&&n.t0.message&&u.b.error(n.t0.message);case 17:return n.prev=17,h(!1),n.finish(17);case 20:case"end":return n.stop()}}),r,null,[[4,14,17,20]])})))()}),[oe,ae,xe]),ye=Object(o.a)({initialValues:{tokenName:"",tokenSymbol:"",router:"",tokenType:"standard",isImplementAntibot:!1},validateOnMount:!0,validationSchema:A,onSubmit:function(e){"standard"===e.tokenType?ve(e.tokenName,e.tokenSymbol,e.tokenDecimals||18,e.totalSupply||"0",e.isImplementAntibot?N.a.PINK_ANTI_BOT_ADDRESS[te]:N.a.ZERO_ADDRESS):"liquidity"===e.tokenType?ke(e.tokenName,e.tokenSymbol,e.totalSupply||"0",e.router||"",Math.floor(100*(Number(e.taxFeeBps)||0)),Math.floor(100*Number(e.liquidityFeeBps||0)),Math.floor(100*Number(e.maxTxBps||0)),e.charity||N.a.ZERO_ADDRESS,Math.floor(100*Number(e.charityBps||0)),e.isImplementAntibot?N.a.PINK_ANTI_BOT_ADDRESS[te]:N.a.ZERO_ADDRESS):Ne(e.tokenName,e.tokenSymbol,e.totalSupply||"0",e.rewardToken||"",e.router||"",e.marketingWallet||"",Number(e.tokenRewardsFee||0),Number(e.liquidityFee||0),Number(e.marketingFee||0),Number(e.minimumTokenBalanceForDividends||0),e.isImplementAntibot?N.a.PINK_ANTI_BOT_ADDRESS[te]:N.a.ZERO_ADDRESS)}}),fe=function(e,t,s){e&&Object(r.a)(n.a.mark((function r(){return n.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.events.TokenCreated({fromBlock:s-1}).on("data",(function(e){var s=e.returnValues;e.transactionHash===t&&(U(s.token),null===a||void 0===a||a(s.token))}));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),r,null,[[0,5]])})))()},ge=Object(d.useMemo)((function(){return!ye.values.charityBps||Number(ye.values.maxTxBps||0)+Number(ye.values.taxFeeBps||0)+Number(ye.values.charityBps)<=1e4}),[ye.values]),Be=function(e){/[a-z0-9]/i.test(e.key)||e.preventDefault()},Te=function(e){/[0-9]/i.test(e.key)||e.preventDefault()},Fe=function(e){e.preventDefault()};Object(d.useEffect)((function(){ye.values.marketingWallet&&ae&&ye.values.marketingWallet===ae&&ye.setFieldError("marketingWallet","Owner and marketing wallet cannot be the same")}),[ye.values.marketingWallet,ae]),Object(d.useEffect)((function(){ye.values.rewardToken&&j.a.utils.isAddress(ye.values.rewardToken)&&Object(r.a)(n.a.mark((function e(){var a,t,s,r,l,i,o,d,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=["name","symbol","decimals"].map((function(e){return{address:ye.values.rewardToken||"",name:e}})),e.next=4,Object(F.a)(D,a,{web3:ee},te);case 4:t=e.sent,s=Object(c.a)(t,3),r=Object(c.a)(s[0],1),l=r[0],i=Object(c.a)(s[1],1),o=i[0],d=Object(c.a)(s[2],1),u=d[0],H({name:l,symbol:o,decimals:u.toString()}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),H(void 0),ye.setFieldError("rewardToken","Cannot get token info");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()}),[ye.values.rewardToken,ee,te]),Object(d.useEffect)((function(){ye.values.rewardToken&&ye.values.router&&j.a.utils.isAddress(ye.values.rewardToken)&&Object(r.a)(n.a.mark((function e(){var a,t,s,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=Object(B.d)(ye.values.router,ee),e.next=4,a.methods.WETH().call();case 4:return t=e.sent,e.next=7,a.methods.factory().call();case 7:return s=e.sent,r=Object(B.b)(s,ee),e.next=11,r.methods.getPair(ye.values.rewardToken,t).call();case 11:e.sent!==N.a.ZERO_ADDRESS?Q(void 0):Q("Reward token invalid"),e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:case"end":return e.stop()}}),e,null,[[0,15]])})))()}),[ye.values.rewardToken,ee,te,ye.values.router]);var we=Object(C.b)(Object(y.b)(y.a.CreateLauchpad),ce),Se=Object(C.b)(Object(y.b)(y.a.CreateFairLaunchPool),ce);return _?Object(E.jsxs)("div",{children:[Object(E.jsx)("div",{className:"has-text-centered has-text-success is-size-5 my-4",children:"Your token was created!"}),Object(E.jsx)("div",{className:"table-container",children:Object(E.jsx)("table",{className:"table is-bordered is-fullwidth",children:Object(E.jsxs)("tbody",{children:[Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Name"}),Object(E.jsx)("td",{className:"has-text-primary",children:ye.values.tokenName})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Symbol"}),Object(E.jsx)("td",{className:"has-text-primary",children:ye.values.tokenSymbol})]}),Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Total supply"}),Object(E.jsx)("td",{className:"has-text-primary",children:Object(w.d)(ye.values.totalSupply||"0")})]}),J?Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"Address"}),Object(E.jsx)("td",{className:"has-text-primary",children:J})]}):null,ye.values.taxFeeBps?Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"taxFee percent"}),Object(E.jsxs)("td",{children:[Number(ye.values.taxFeeBps||0),"%"]})]}):null,ye.values.liquidityFeeBps?Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"liquidityFee percent"}),Object(E.jsxs)("td",{children:[Number(ye.values.liquidityFeeBps||0),"%"]})]}):null,ye.values.maxTxBps?Object(E.jsxs)("tr",{children:[Object(E.jsx)("td",{children:"maxTx percent"}),Object(E.jsxs)("td",{children:[Number(ye.values.maxTxBps||0),"%"]})]}):null]})})}),Object(E.jsxs)("div",{className:"has-text-centered mb-4 is-flex is-align-items-center is-flex-wrap-wrap",children:[Object(E.jsx)("a",{className:"button m-4 is-flex-grow-1",href:"".concat(ne,"/tx/").concat(Z),target:"_blank",rel:"nofollow noreferrer",children:"View transaction on BSCScan"}),J?Object(E.jsx)(p.CopyToClipboard,{text:J,onCopy:function(){return u.b.success("Copied!")},children:Object(E.jsx)("a",{className:"button m-4 is-flex-grow-1",children:"Copy address"})}):null,Object(E.jsx)(O.b,{className:"button is-primary m-4 is-flex-grow-1",to:"".concat(/\?/.test(we)?"".concat(we,"&"):"".concat(we,"?"),"token=").concat(J),children:"Create launchpad"}),Object(E.jsx)(O.b,{className:"button is-primary m-4 is-flex-grow-1",to:"".concat(/\?/.test(Se)?"".concat(Se,"&"):"".concat(Se,"?"),"token=").concat(J),children:"Create Fairlaunch"})]})]}):Object(E.jsxs)("form",{onSubmit:ye.handleSubmit,children:[Object(E.jsx)("p",{className:"has-text-primary is-size-7",children:"(*) is required field."}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenType",className:"label",children:["Token Type",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsxs)("select",{name:"tokenType",id:"tokenType",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.tokenType,className:"input",children:[Object(E.jsx)("option",{value:"standard",children:"Standard Token"}),Object(E.jsx)("option",{value:"liquidity",children:"Liquidity Generator Token"}),Object(E.jsx)("option",{value:"baby",children:"Baby Token"})]}),Boolean(ye.touched.tokenType&&ye.errors.tokenType)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.tokenType}),"standard"===ye.values.tokenType&&ue&&Object(E.jsxs)("p",{className:"help is-info",children:["Fee: ",Object(w.i)(ue,re.decimals)," ",re.symbol]}),"liquidity"===ye.values.tokenType&&be&&Object(E.jsxs)("p",{className:"help is-info",children:["Fee: ",Object(w.i)(be,re.decimals)," ",re.symbol]}),"baby"===ye.values.tokenType&&xe&&Object(E.jsxs)("p",{className:"help is-info",children:["Fee: ",Object(w.i)(xe,re.decimals)," ",re.symbol]})]})]}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenName",className:"label",children:["Name",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",ye.touched.tokenName&&ye.errors.tokenName?"is-danger":""),id:"tokenName",name:"tokenName",onChange:ye.handleChange,onBlur:ye.handleBlur,placeholder:"Ex: Ethereum",maxLength:255}),Boolean(ye.touched.tokenName&&ye.errors.tokenName)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.tokenName})]})]}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenSymbol",className:"label",children:["Symbol",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",ye.touched.tokenSymbol&&ye.errors.tokenSymbol?"is-danger":""),id:"tokenSymbol",name:"tokenSymbol",onChange:ye.handleChange,onBlur:ye.handleBlur,placeholder:"Ex: ETH",maxLength:255,onPaste:Fe}),Boolean(ye.touched.tokenSymbol&&ye.errors.tokenSymbol)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.tokenSymbol})]})]}),"standard"===ye.values.tokenType&&Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenDecimals",className:"label",children:["Decimals",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"number",className:i()("input",ye.touched.tokenDecimals&&ye.errors.tokenDecimals?"is-danger":""),id:"tokenDecimals",name:"tokenDecimals",onChange:ye.handleChange,onBlur:ye.handleBlur,placeholder:"Ex: 18",onKeyPress:Te,onPaste:Fe}),Boolean(ye.touched.tokenDecimals&&ye.errors.tokenDecimals)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.tokenDecimals})]})]}),Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"totalSupply",className:"label",children:["Total supply",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",ye.touched.totalSupply&&ye.errors.totalSupply?"is-danger":""),id:"totalSupply",name:"totalSupply",onChange:ye.handleChange,onBlur:ye.handleBlur,placeholder:"Ex: 100000000000",onKeyPress:Te,onPaste:Fe}),Boolean(ye.touched.totalSupply&&ye.errors.totalSupply)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.totalSupply})]})]}),"liquidity"===ye.values.tokenType&&Object(E.jsx)("div",{className:"field",children:Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("label",{htmlFor:"router",className:"label",children:"Router"}),Object(E.jsxs)("select",{name:"router",id:"router",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.router,className:"input",children:[Object(E.jsx)("option",{value:"",disabled:!0,children:"---Select Router Exchange---"}),se.map((function(e){var a=e.name,t=e.address;return Object(E.jsx)("option",{value:t,children:a},t)}))]}),Boolean(ye.touched.router&&ye.errors.router)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.router})]})}),"baby"===ye.values.tokenType&&Object(E.jsx)("div",{className:"field",children:Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("label",{htmlFor:"router",className:"label",children:"Router"}),Object(E.jsxs)("select",{name:"router",id:"router",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.router,className:"input",children:[Object(E.jsx)("option",{value:"",disabled:!0,children:"---Select Router Exchange---"}),se.map((function(e){var a=e.name,t=e.address;return Object(E.jsx)("option",{value:t,children:a},t)}))]}),Boolean(ye.touched.router&&ye.errors.router)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.router})]})}),"baby"===ye.values.tokenType&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"rewardToken",className:"label",children:["Reward token",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",ye.touched.rewardToken&&ye.errors.rewardToken||$?"is-danger":""),id:"rewardToken",name:"rewardToken",onChange:ye.handleChange,onBlur:ye.handleBlur,placeholder:"Ex: 0x....",maxLength:255,onKeyPress:Be,value:ye.values.rewardToken}),Object(E.jsx)("p",{className:"has-text-info mt-1 is-size-7",children:"If you want to reward DOGE, please enter 0xba2ae424d960c26247dd6c32edc70b295c744c43."}),$?Object(E.jsx)("p",{className:"help is-danger",children:$}):Object(E.jsx)(E.Fragment,{children:Boolean(ye.touched.rewardToken&&ye.errors.rewardToken)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.rewardToken})}),W?Object(E.jsxs)("div",{className:"mt-2 is-size-7",children:[Object(E.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(E.jsx)("div",{className:"is-flex-grow-1",children:"Name"}),Object(E.jsx)("div",{className:"has-text-info",children:W.name})]}),Object(E.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(E.jsx)("div",{className:"is-flex-grow-1",children:"Symbol"}),Object(E.jsx)("div",{className:"has-text-info",children:W.symbol})]}),Object(E.jsxs)("div",{className:"is-flex is-align-items-center",children:[Object(E.jsx)("div",{className:"is-flex-grow-1",children:"Decimals"}),Object(E.jsx)("div",{className:"has-text-info",children:W.decimals})]})]}):null]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"minimumTokenBalanceForDividends",className:"label",children:["Minimum token balance for dividends",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",ye.touched.minimumTokenBalanceForDividends&&ye.errors.minimumTokenBalanceForDividends?"is-danger":""),id:"minimumTokenBalanceForDividends",name:"minimumTokenBalanceForDividends",onChange:ye.handleChange,onBlur:ye.handleBlur,placeholder:"Ex: 100000000000",onKeyPress:Te,onPaste:Fe,value:ye.values.minimumTokenBalanceForDividends}),Object(E.jsx)("p",{className:"has-text-info mt-1 is-size-7",children:"Min hold each wallet must be over $50 to receive rewards."}),Boolean(ye.touched.minimumTokenBalanceForDividends&&ye.errors.minimumTokenBalanceForDividends)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.minimumTokenBalanceForDividends})]})]})})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"tokenRewardsFee",className:"label",children:["Token reward fee (%)",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",ye.touched.tokenRewardsFee&&ye.errors.tokenRewardsFee?"is-danger":""),type:"number",id:"tokenRewardsFee",name:"tokenRewardsFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.tokenRewardsFee||void 0}),Boolean(ye.touched.tokenRewardsFee&&ye.errors.tokenRewardsFee)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.tokenRewardsFee})]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"liquidityFee",className:"label",children:["Auto add liquidity (%)",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",ye.touched.liquidityFee&&ye.errors.liquidityFee?"is-danger":""),type:"number",id:"liquidityFee",name:"liquidityFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.liquidityFee||void 0}),Boolean(ye.touched.liquidityFee&&ye.errors.liquidityFee)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.liquidityFee})]})]})})]}),Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"marketingFee",className:"label",children:["Marketing fee (%)",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",ye.touched.marketingFee&&ye.errors.marketingFee?"is-danger":""),type:"number",id:"marketingFee",name:"marketingFee",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.marketingFee||void 0}),Boolean(ye.touched.marketingFee&&ye.errors.marketingFee)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.marketingFee})]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"marketingWallet",className:"label",children:["Marketing wallet",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",ye.errors.marketingWallet||ye.values.marketingWallet===ae?"is-danger":""),id:"marketingWallet",name:"marketingWallet",onChange:ye.handleChange,onBlur:ye.handleBlur,placeholder:"Ex: 0x....",maxLength:255,onKeyPress:Be,value:ye.values.marketingWallet}),ye.values.marketingWallet===ae?Object(E.jsx)("p",{className:"help is-danger",children:"Owner and marketing wallet cannot be the same"}):Object(E.jsx)(E.Fragment,{children:ye.errors.marketingWallet&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.marketingWallet})})]})]})})]})]}),"liquidity"===ye.values.tokenType&&Object(E.jsxs)("div",{className:"columns",children:[Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"taxFeeBps",className:"label",children:"Transaction fee to generate yield (%)"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",ye.touched.taxFeeBps&&ye.errors.taxFeeBps?"is-danger":""),type:"number",id:"taxFeeBps",name:"taxFeeBps",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.taxFeeBps||void 0}),Boolean(ye.touched.taxFeeBps&&ye.errors.taxFeeBps)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.taxFeeBps})]})]})}),Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"liquidityFeeBps",className:"label",children:"Transaction fee to generate liquidity (%)"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",ye.touched.liquidityFeeBps&&ye.errors.liquidityFeeBps?"is-danger":""),type:"number",id:"liquidityFeeBps",name:"liquidityFeeBps",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.liquidityFeeBps||void 0}),Boolean(ye.touched.liquidityFeeBps&&ye.errors.liquidityFeeBps)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.liquidityFeeBps})]})]})})]}),"liquidity"===ye.values.tokenType&&Object(E.jsx)("div",{className:"columns",children:Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsxs)("label",{htmlFor:"maxTxBps",className:"label",children:["Max transaction percent (%)",Object(E.jsx)("sup",{className:"has-text-danger",children:"*"})]}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",ye.touched.maxTxBps&&ye.errors.maxTxBps?"is-danger":""),type:"number",id:"maxTxBps",name:"maxTxBps",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.maxTxBps||void 0}),Boolean(ye.touched.maxTxBps&&ye.errors.maxTxBps)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.maxTxBps})]})]})})}),"liquidity"===ye.values.tokenType&&Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"charity",className:"label",children:"Charity address"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{type:"text",className:i()("input",ye.touched.charity&&ye.errors.charity?"is-danger":""),id:"charity",name:"charity",value:ye.values.charity,onChange:ye.handleChange,onBlur:ye.handleBlur,placeholder:"Ex: 0x....."}),Boolean(ye.touched.charity&&ye.errors.charity)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.charity})]})]}),"liquidity"===ye.values.tokenType&&Object(E.jsx)("div",{className:"columns",children:Object(E.jsx)("div",{className:"column",children:Object(E.jsxs)("div",{className:"field",children:[Object(E.jsx)("label",{htmlFor:"charityBps",className:"label",children:"Charity percent (%)"}),Object(E.jsxs)("div",{className:"control",children:[Object(E.jsx)("input",{className:i()("input",ye.touched.charityBps&&ye.errors.charityBps?"is-danger":""),type:"number",id:"charityBps",name:"charityBps",min:"0",max:"100",step:"0.01",placeholder:"0 - 100",onChange:ye.handleChange,onBlur:ye.handleBlur,value:ye.values.charityBps||void 0}),Boolean(ye.touched.charityBps&&ye.errors.charityBps)&&Object(E.jsx)("p",{className:"help is-danger",children:ye.errors.charityBps})]})]})})}),Object(E.jsx)("div",{className:"field",children:Object(E.jsx)(m.a,{checked:ye.values.isImplementAntibot,onChange:function(e){ye.setFieldValue("isImplementAntibot",e.target.checked)},children:"Implement Pink Anti-Bot System?"})}),ye.values.isImplementAntibot&&Object(E.jsxs)("div",{className:"px-2 has-text-info",children:["Please visit"," ",Object(E.jsx)("a",{href:"https://www.pinksale.finance/#/antibot",target:"_blank",rel:"noreferrer",children:"https://www.pinksale.finance/#/antibot"})," ","to active Pink Anti-Bot after creating the token. ",Object(E.jsx)("br",{}),"Check out the tutorial here:"," ",Object(E.jsx)("a",{href:"https://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guide",target:"_blank",rel:"noreferrer",children:"https://docs.pinksale.finance/pink-anti-bot/pink-anti-bot-guide"})]}),Object(E.jsxs)("div",{className:"has-text-centered mt-6 mb-4",children:[!ge&&Object(E.jsx)("div",{className:"px-2 has-text-danger",children:"taxFee percent + liquidityFee percent + charity percent must be less than or equal 100%"}),Object(E.jsx)(k.a,{primary:!0,type:"submit",loading:l||me||je||Oe,disabled:!ye.isValid||!!$,children:"Create token"})]})]})}}}]);