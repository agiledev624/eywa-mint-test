(this["webpackJsonpeywa-introductory-assignment"]=this["webpackJsonpeywa-introductory-assignment"]||[]).push([[0],{271:function(e,n,t){},291:function(e,n){},293:function(e,n){},297:function(e,n){},298:function(e,n){},325:function(e,n){},327:function(e,n){},338:function(e,n){},340:function(e,n){},350:function(e,n){},352:function(e,n){},369:function(e,n){},403:function(e,n){},404:function(e,n){},474:function(e,n){},476:function(e,n){},481:function(e,n){},483:function(e,n){},490:function(e,n){},502:function(e,n){},505:function(e,n){},510:function(e,n){},583:function(e,n,t){"use strict";t.r(n),t.d(n,"StoreProvider",(function(){return ke})),t.d(n,"useStore",(function(){return Ae}));var a,i,r,s,o,c,u,p,d=t(0),l=t.n(d),y=t(19),b=t.n(y),m=(t(270),t(271),t(67)),f=t(27),v=t.p+"static/media/bg.a050a836.svg",j=t(23),x=t(24),T=t(610),g=t(615),h=t(617),O=t(616),w=t(11),k=x.a.img(a||(a=Object(j.a)(["\n  width: 32px;\n  height: 32px;\n"]))),A=x.a.div(i||(i=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: Rubik;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 19px;\n"]))),M=Object(T.a)({root:{height:32,color:"#fff",backgroundColor:"transparent","& .MuiOutlinedInput-notchedOutline":{border:"none"},"& .MuiSelect-selectMenu":{fontSize:14},"& .MuiSelect-select:focus":{backgroundColor:"unset"},"& .MuiSelect-icon":{color:"white"}}}),C=Object(f.a)((function(){var e=M(),n=Ae(),t=Object(d.useCallback)((function(e){n.setCurrentToken(e.target.value)}),[]);return Object(w.jsx)(g.a,{variant:"outlined",displayEmpty:!0,className:e.root,value:n.currentToken,onChange:t,children:n.tokens.map((function(e){return Object(w.jsx)(h.a,{value:e,children:Object(w.jsxs)(A,{children:[Object(w.jsx)(k,{src:"./images/".concat(e,".svg"),alt:e}),Object(w.jsx)(O.a,{ml:1,children:e})]})},e)}))})})),S=t(34),E=t.n(S),D=t(115),F=t(54),U=t(96),P=t.n(U),z=t(257),B=t.n(z),I=t.p+"static/media/close.bd3ff085.svg",W=t.p+"static/media/metamask.bf5a7a37.svg",Y=x.a.div(r||(r=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n"]))),N=x.a.span(s||(s=Object(j.a)(["\n  margin-left: 2px;\n  font-size: 18px;\n"]))),V=x.a.img(o||(o=Object(j.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]))),R=Object(f.a)((function(){var e=Ae(),n=function(){var n=Object(D.a)(E.a.mark((function n(){return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.web3Modal.clearCachedProvider();case 2:e.setActiveAccount("");case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(w.jsxs)(Y,{children:[Object(w.jsx)("img",{src:W,alt:"metamask"}),Object(w.jsxs)(N,{children:[e.activeAccount.slice(0,5),"...",e.activeAccount.slice(-4)]}),Object(w.jsx)(V,{src:I,alt:"close",onClick:n})]})})),J=x.a.div(c||(c=Object(j.a)(["\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n"]))),L=x.a.div(u||(u=Object(j.a)(["\n  padding: 8px;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%;\n  text-align: center;\n  border-radius: 5px;\n  outline: none;\n  border: 1px solid transparent;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: nowrap;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  z-index: 1;\n  background-color: #0ccfac;\n  color: rgb(255, 255, 255);\n  font-size: 16px;\n  font-weight: 500;\n    &:active {\n      box-shadow: #0aac8e 0px 0px 0px 1pt;\n      background-color: #0aac8e;\n    }\n    &:hover {\n      background-color: #19f1ca;\n    }\n  }\n"]))),G=new B.a({network:"rinkeby",cacheProvider:!0}),H=Object(f.a)((function(){var e=Ae(),n=Object(d.useState)(!1),t=Object(F.a)(n,2),a=(t[0],t[1]),i=function(){var n=Object(D.a)(E.a.mark((function n(){var t,i,r;return E.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,G.connect();case 3:return t=n.sent,i=new P.a(t),n.next=7,i.eth.getAccounts();case 7:r=n.sent,e.setActiveAccount(null===r||void 0===r?void 0:r[0]),window.web3=i,window.web3Modal=G,window.web3Provider=t,n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),a(!0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();return Object(w.jsx)(J,{children:e.activeAccount?Object(w.jsx)(R,{}):Object(w.jsx)(L,{onClick:i,children:"Connect Wallet"})})}));!function(e){e.USDT="USDT",e.EYWA="EYWA"}(p||(p={}));var K,q,Q,X,Z,$,_,ee=function(){var e=Ae(),n=e.tokenAddresses,t=e.activeAccount;return function(a){var i=n[a];new(new P.a(P.a.givenProvider).eth.Contract)(e.tokenABIs[e.currentToken],i).methods.balanceOf(t).call().then((function(n){e.setBalance(a,n)}))}},ne=x.a.p(K||(K=Object(j.a)(["\n  padding-top: 10px;\n  font-size: 14px;\n  text-align: right;\n  color: #959ebd;\n"]))),te=Object(f.a)((function(){var e=Ae().balances,n=ee();return Object(d.useEffect)((function(){var e=setInterval((function(){n(p.USDT),n(p.USDT)}),5e3);return function(){clearInterval(e)}})),Object(w.jsxs)(ne,{children:["EYWA balance: ",parseFloat(e[p.EYWA]).toPrecision(4),"; USDT balance:",parseFloat(e[p.USDT]).toPrecision(4)]})})),ae=x.a.div(q||(q=Object(j.a)(["\n    height: 56px;\n    width: 100%;\n    margin-top: 10px;\n    border-radius: 8px;\n    background-color: #0CCFAC;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-size: 14px;\n    '&:hover': {\n      background-color: #0ACCA9;\n    },\n"]))),ie=Object(f.a)((function(){var e=Ae(),n=e.tokenAddresses,t=e.activeAccount,a=e.currentToken,i=ee(),r=Object(d.useCallback)((function(){var r=n[a];new window.web3.eth.Contract(e.tokenABIs[e.currentToken],r).methods.mint(t,1).send({from:t}).then((function(){i(a)}))}),[a,t]);return e.activeAccount?Object(w.jsx)(ae,{onClick:r,children:"GET TEST TOKENS"}):null})),re=x.a.div(Q||(Q=Object(j.a)(["\n  display: flex;\n"]))),se=x.a.div(X||(X=Object(j.a)(["\n  width: 30rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  background-color: #191332;\n  margin-top: 100px;\n  border-radius: 10px;\n"]))),oe=x.a.h5(Z||(Z=Object(j.a)(["\n  text-align: center;\n  padding: 5px;\n  padding-top: 15px;\n"]))),ce=x.a.div($||($=Object(j.a)(["\n  margin: 20px;\n  margin-top: 0;\n  padding: 15px;\n  padding-top: 0px;\n\n  border: 1px solid #29294d;\n  border-radius: 5px;\n"]))),ue=x.a.p(_||(_=Object(j.a)(["\n  padding-top: 10px;\n  font-size: 18px;\n  text-align: left;\n  color: #959ebd;\n"]))),pe=Object(f.a)((function(){var e=Ae();return Object(w.jsxs)(se,{children:[Object(w.jsx)("div",{className:"card-head",children:Object(w.jsx)(oe,{children:"FAUCET"})}),Object(w.jsxs)(ce,{children:[Object(w.jsx)(ue,{children:"Ethereum Rinkeby"}),Object(w.jsxs)(re,{children:[Object(w.jsx)(C,{}),Object(w.jsx)(H,{})]}),e.activeAccount&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(te,{}),Object(w.jsx)(ie,{})]})]})]})})),de=Object(m.a)({background:"url(".concat(v,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"calc(10px + 2vmin)",color:"white"}),le=Object(f.a)((function(){return Object(m.b)("div",{className:"App"},Object(m.b)("header",{css:de},Object(m.b)(pe,null)))})),ye=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,620)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),a(e),i(e),r(e),s(e)}))},be=(t.p,t(151)),me=t(7),fe=t(22),ve=t(21),je="0xa9E233E2c06fbAFf7d1D913060d5F4e159092414",xe="0x08Ffcb0Ca216Bb3C12855910Ee4014191D81eeba",Te=[{inputs:[{internalType:"string",name:"n1",type:"string"},{internalType:"string",name:"n2",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"rec",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],ge=[{inputs:[{internalType:"string",name:"n1",type:"string"},{internalType:"string",name:"n2",type:"string"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"rec",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],he=new function e(){var n;Object(me.a)(this,e),this.balances=void 0,this.tokenAddresses=void 0,this.currentToken=void 0,this.activeAccount=void 0,this.tokens=void 0,this.tokenABIs=void 0,this.setCurrentToken=void 0,this.setActiveAccount=void 0,this.setBalance=void 0,Object(ve.d)(this,Object(be.a)(Object(be.a)({},function(){var e,n,t;return{tokens:[p.USDT,p.EYWA],balances:(e={},Object(fe.a)(e,p.USDT,"0"),Object(fe.a)(e,p.EYWA,"0"),e),tokenAddresses:(n={},Object(fe.a)(n,p.USDT,je),Object(fe.a)(n,p.EYWA,xe),n),tokenABIs:(t={},Object(fe.a)(t,p.USDT,ge),Object(fe.a)(t,p.EYWA,Te),t),currentToken:p.USDT,activeAccount:""}}()),(n=this,{setCurrentToken:Object(ve.b)((function(e){n.currentToken=e})),setActiveAccount:Object(ve.b)((function(e){n.activeAccount=e})),setBalance:Object(ve.b)((function(e,t){n.balances[e]=t}))})))};function Oe(){return he}var we=l.a.createContext(null),ke=function(e){var n=e.children,t=Object(f.b)(Oe);return Object(w.jsx)(we.Provider,{value:t,children:n})},Ae=function(){var e=l.a.useContext(we);if(!e)throw new Error("useStore must be used within a StoreProvider");return e};b.a.render(Object(w.jsx)(ke,{children:Object(w.jsx)(le,{})}),document.getElementById("root")),ye()}},[[583,1,2]]]);
//# sourceMappingURL=main.31a57c93.chunk.js.map