System.register("chunks:///main.js",["cc"],(function(){"use strict";var e,n,t,i,o,r,a,l,u,c,s,p,d,f,h,y,b;return{setters:[function(m){e=m.cclegacy,n=m.Color,t=m._decorator,i=m.resources,o=m.AudioClip,r=m.Label,a=m.Button,l=m.Node,u=m.Vec3,c=m.tween,s=m.Component,p=m.EventTarget,d=m.Sprite,f=m.AudioSource,h=m.director,y=m.ToggleComponent,b=m.game}],execute:function(){function m(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,v(e,n)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,n,t,i){t&&Object.defineProperty(e,n,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(i):void 0})}function I(e,n,t,i,o){var r={};return Object.keys(i).forEach((function(e){r[e]=i[e]})),r.enumerable=!!r.enumerable,r.configurable=!!r.configurable,("value"in r||r.initializer)&&(r.writable=!0),r=t.slice().reverse().reduce((function(t,i){return i(e,n,t)||t}),r),o&&void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(o):void 0,r.initializer=void 0),void 0===r.initializer&&(Object.defineProperty(e,n,r),r=null),r}e._RF.push({},"3544egSkWdNupAIB2HTtIp3","constant",void 0);var O=function(){};w(O,"AUDIO_SOUND",{BACKGROUND:"background",BTN_CLICK:"click",BTN_CLICK_2:"click2",BTN_CLICK_OX:"oxClick",ROUNDDONE:"roundDone",WIN:"win"}),w(O,"COLOR",{O:new n(128,128,234,255),X:new n(70,40,40,255)}),e._RF.pop(),e._RF.push({},"0bb36naI2pAzL3EIKXteYt/","audioManager",void 0);t.ccclass,t.property;var D,x,R,S,N,z,T,A,k,L,P,E,U,G,B,F=function(){function e(){w(this,"soundVolume",1)}var n,t,r,a=e.prototype;return a.init=function(n){e._audioSource=n,this.preLoadAll()},a.preLoadAll=function(){i.preloadDir("audio")},a.playMusic=function(n){var t=e._audioSource;if(!t.clip||!t.playing){var r="audio/"+O.AUDIO_SOUND.BACKGROUND;i.load(r,o,(function(e,i){t.volume=.5,t.clip=i,t.loop=n,t.playOnAwake=!0,t.playing||t.play()}))}},a.playSound=function(n){var t=this,r=e._audioSource;i.load("audio/"+n,o,(function(e,n){e?console.error(e):r.playOneShot(n,r.volume?t.soundVolume/r.volume:0)}))},n=e,r=[{key:"instance",get:function(){return this._instance||(this._instance=new e),this._instance}}],(t=null)&&m(n.prototype,t),r&&m(n,r),e}();w(F,"_instance",void 0),w(F,"_audioSource",void 0),e._RF.pop(),e._RF.push({},"1e0acrlyBNJip4i/4ZTivPi","myDialog",void 0);var K=t.ccclass,W=t.property,V=(D=K("myDialog"),x=W(r),R=W(r),S=W(a),N=W(a),z=W(l),T=W(l),D((L=I((k=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return C(_(n=e.call.apply(e,[this].concat(i))||this),"titleTxt",L,_(n)),C(_(n),"bodyTxt",P,_(n)),C(_(n),"btnOk",E,_(n)),C(_(n),"btnCancel",U,_(n)),C(_(n),"mask",G,_(n)),C(_(n),"content",B,_(n)),w(_(n),"_callBack_OK",(function(){})),w(_(n),"_callBack_Cancel",(function(){})),w(_(n),"myTween",null),w(_(n),"_vec_hide",null),n}g(n,e);var t=n.prototype;return t.start=function(){var e=this;this._vec_hide=new u(.7,.7,1),this.node.active=!1,this.mask.on(l.EventType.TOUCH_START,(function(e){return e.propagationStopped=!0})),this.btnOk.node.on(l.EventType.TOUCH_END,(function(n){F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK_2),e._callBack_OK&&e._callBack_OK(),e.hide()})),this.btnCancel.node.on(l.EventType.TOUCH_END,(function(n){F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK_2),e._callBack_Cancel&&e._callBack_Cancel(),e.hide()}))},t.show=function(e){var n=this;e&&(this._callBack_OK=e.ok,this._callBack_Cancel=e.cancel,this.titleTxt.string=e.title||"提示訊息",this.bodyTxt.string=e.msg||"",this.myTween=c(this.content),this.myTween.call((function(){n.node.setScale(u.ONE),n.content.setScale(n._vec_hide),n.node.active=!0})).to(.2,{scale:u.ONE}).call((function(){})).start())},t.hide=function(){var e=this;this.myTween=c(this.content),this.myTween.to(.1,{scale:this._vec_hide}).call((function(){e.node.setScale(u.ZERO),e.node.active=!1})).start()},n}(s)).prototype,"titleTxt",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=I(k.prototype,"bodyTxt",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=I(k.prototype,"btnOk",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=I(k.prototype,"btnCancel",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=I(k.prototype,"mask",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=I(k.prototype,"content",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=k))||A);e._RF.pop(),e._RF.push({},"7738fXjRGpD2o4ubv6GnWv8","store",void 0);new p;var j,Z,H,X,M,J,Y,q,Q,$,ee,ne,te,ie,oe,re=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],ae=[{p:{x:0,y:200},r:{z:0}},{p:{x:0,y:0},r:{z:0}},{p:{x:0,y:-200},r:{z:0}},{p:{x:-200,y:0},r:{z:90}},{p:{x:0,y:0},r:{z:90}},{p:{x:200,y:0},r:{z:90}},{p:{x:0,y:0},r:{z:-45}},{p:{x:0,y:0},r:{z:45}}],le=new(function(e){function n(){var n;w(_(n=e.call(this)||this),"p1",void 0),w(_(n),"cb",void 0),w(_(n),"players",[]),w(_(n),"gameInfo",null),w(_(n),"nowPlayerIndex",-1),w(_(n),"roadData",[]),w(_(n),"winLineIndex",0),w(_(n),"isGaming",!1),w(_(n),"winPlayerIndex",-1),w(_(n),"roundStep",void 0);return n.gameInfo={round:0,drawCount:0,useAi:!1},n.players=[{id:1,name:"玩家1",type:!0,winCount:0,step:0},{id:2,name:"玩家2",type:!1,winCount:0,step:0}],n.resetData(),n}g(n,e);var t=n.prototype;return t.clearGame=function(){this.players.forEach((function(e){e.winCount=0,e.step=0})),this.gameInfo.round=0,this.gameInfo.drawCount=0,this.gameInfo.useAi=!1,this.resetData(),this.emit("updatePlayerInfo"),this.emit("updateRound"),this.emit("updateDrawCount"),this.emit("clearGame"),this.emit("roundDone")},t.resetData=function(){this.winPlayerIndex=-1,this.isGaming=!1,this.roundStep=0,this.nowPlayerIndex=-1,this.roadData=new Array(9).fill(void 0),this.emit("resetData")},t.init=function(){},t.startRound=function(){this.resetData(),this.isGaming=!0,this.gameInfo.round++,this.roundStep=0,this.emit("updateRound"),this.nowPlayerIndex=0,this.emit("updatePlayerInfo")},t.checkWinner=function(){var e=this,n=this.players[this.nowPlayerIndex].type,t=this.roadData.map((function(e,n){return{i:n,v:e}})).filter((function(e){return e.v===n})).map((function(e){return e.i}));return re.some((function(n,i){var o=n.every((function(e){return t.indexOf(e)>=0}));return o&&(e.winLineIndex=i),o}))},t.getWinLineConfig=function(){return ae[this.winLineIndex]},t.checkDraw=function(){return this.roundStep>=9},t.next=function(e){var n=this.players[this.nowPlayerIndex];this.roadData[e]=n.type,this.emit("updateRoad"),n.step++,this.roundStep++,this.checkWinner()?(n.winCount++,this.winPlayerIndex=this.nowPlayerIndex,this.isGaming=!1,this.emit("hasWinner"),this.emit("roundDone")):this.checkDraw()?(this.isGaming=!1,this.gameInfo.drawCount++,this.nowPlayerIndex=-1,this.emit("updateDrawCount"),this.emit("roundDone"),this.emit("showDraw"),console.log("roadData",this.roadData)):(this.nowPlayerIndex=0===this.nowPlayerIndex?1:0,1===this.nowPlayerIndex&&this.gameInfo.useAi&&this.startAi()),this.emit("updatePlayerInfo")},t.startAi=function(){console.log(this.roadData);var e=this.roadData.map((function(e,n){return{i:n,v:e}})).filter((function(e){return void 0===e.v}));console.log(e);var n=e[Math.floor(Math.random()*e.length)].i;console.log("AI隨機取索引: "+n),this.next(n)},n}(p));e._RF.pop(),e._RF.push({},"2a8467AT+REOqUYvsYzDP+U","playerInfo",void 0);var ue,ce=t.ccclass,se=t.property,pe=(j=ce("playerInfo"),Z=se(r),H=se(r),X=se(r),M=se(r),J=se(r),Y=se(d),j(($=I((Q=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return w(_(t=e.call.apply(e,[this].concat(o))||this),"myPlayerIndex",void 0),C(_(t),"pName",$,_(t)),C(_(t),"winCount",ee,_(t)),C(_(t),"step",ne,_(t)),C(_(t),"winImg",te,_(t)),C(_(t),"useTypeStr",ie,_(t)),C(_(t),"bg",oe,_(t)),w(_(t),"_color_nowStep",new n(100,200,100,220)),w(_(t),"_color_nextStep",new n(150,150,150,220)),t}g(t,e);var i=t.prototype;return i.start=function(){var e=this;this.winImg.node.active=!1,this.useTypeStr.color=0===this.myPlayerIndex?O.COLOR.O:O.COLOR.X,this.bg.color=this._color_nextStep,le.on("updatePlayerInfo",(function(){e.updateInfo()})),this.updateInfo()},i.updateInfo=function(){var e=le.players[this.myPlayerIndex];this.pName.getComponent(r).string=e.name,this.winCount.getComponent(r).string=""+e.winCount,this.step.getComponent(r).string=""+e.step,le.nowPlayerIndex===this.myPlayerIndex?this.bg.color=this._color_nowStep:this.bg.color=this._color_nextStep,le.winPlayerIndex===this.myPlayerIndex?this.winImg.node.active=!0:this.winImg.node.active=!1},t}(s)).prototype,"pName",[Z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=I(Q.prototype,"winCount",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ne=I(Q.prototype,"step",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=I(Q.prototype,"winImg",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ie=I(Q.prototype,"useTypeStr",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),oe=I(Q.prototype,"bg",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=Q))||q);e._RF.pop(),e._RF.push({},"340a2TWMNBAJ6koVzoJ06Oz","btnStart",void 0);var de,fe,he,ye,be,me,we,ge=t.ccclass;t.property,ge("btnStart")(ue=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return w(_(n=e.call.apply(e,[this].concat(i))||this),"_canClick",!0),n}return g(n,e),n.prototype.start=function(){var e=this;this.node.on(l.EventType.TOUCH_END,(function(n){e._canClick&&(F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK_2),le.startRound(),e.getComponent(a).interactable=!1,e._canClick=!1,e.node.getChildByName("Label").getComponent(r).string="下局")})),le.on("roundDone",(function(){e.getComponent(a).interactable=!0,e._canClick=!0})),le.on("clearGame",(function(){e.node.getChildByName("Label").getComponent(r).string="開始"}))},n}(s));e._RF.pop(),e._RF.push({},"54e5cGDxBFKs6bMT74S4IS+","welcome",void 0);var ve,_e,Ce,Ie,Oe,De=t.ccclass,xe=t.property;de=De("welcome"),fe=xe(a),he=xe(f),de((me=I((be=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return C(_(n=e.call.apply(e,[this].concat(i))||this),"enterGame",me,_(n)),C(_(n),"_audioSource",we,_(n)),n}g(n,e);var t=n.prototype;return t.onLoad=function(){F.instance.preLoadAll()},t.start=function(){h.preloadScene("game",(function(){console.log("Game scene preloaded")})),this.enterGame.node.on(l.EventType.TOUCH_END,(function(){h.loadScene("game")}))},n}(s)).prototype,"enterGame",[fe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),we=I(be.prototype,"_audioSource",[he],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ye=be));e._RF.pop(),e._RF.push({},"8c758NGRUJJ+YPpPzugWmmN","btnClear",void 0);var Re,Se,Ne,ze,Te,Ae=t.ccclass,ke=t.property;ve=Ae("btnClear"),_e=ke(l),ve((Oe=I((Ie=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return C(_(n=e.call.apply(e,[this].concat(i))||this),"myDialog",Oe,_(n)),n}return g(n,e),n.prototype.start=function(){var e=this;this.node.on(l.EventType.TOUCH_END,(function(n){F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK_2),e.myDialog.getComponent(V).show({title:"-訊息-",msg:"確定重置嗎？",ok:function(){le.clearGame()},cancel:function(){},autoClose:1e3})}))},n}(s)).prototype,"myDialog",[_e],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ce=Ie));e._RF.pop(),e._RF.push({},"e0947nEYMhISokeBOL4Fqdv","oxItem",void 0);var Le,Pe,Ee,Ue,Ge,Be,Fe,Ke,We,Ve,je,Ze,He,Xe,Me,Je,Ye,qe,Qe,$e,en,nn,tn,on,rn,an=t.ccclass,ln=t.property,un=(Re=an("oxItem"),Se=ln(r),Re((Te=I((ze=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return C(_(n=e.call.apply(e,[this].concat(i))||this),"label",Te,_(n)),w(_(n),"type",!1),w(_(n),"hasValue",!1),w(_(n),"index",0),n}return g(n,e),n.prototype.start=function(){var e=this;this.node.on(l.EventType.TOUCH_END,(function(){if(!e.hasValue&&le.isGaming){F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK),e.hasValue=!0;var n=le.players[le.nowPlayerIndex],t=n.type?"O":"X";e.label.string=t,e.label.color=n.type?O.COLOR.O:O.COLOR.X,le.next(e.index)}})),le.on("updateRoad",(function(){var n=le.roadData[e.index];if(console.log("[updateRoad] "+e.index+" myRoad: ",n),!e.hasValue&&le.isGaming&&void 0!==n){var t=le.players[le.nowPlayerIndex],i=t.type?"O":"X";e.label.string=i,e.label.color=t.type?O.COLOR.O:O.COLOR.X,e.hasValue=!0}}))},n}(s)).prototype,"label",[Se],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ne=ze))||Ne);e._RF.pop(),e._RF.push({},"940d7nZmllLRrWvunPUBaWl","oxGroup",void 0);var cn,sn,pn,dn,fn,hn,yn,bn,mn,wn,gn,vn,_n,Cn,In,On,Dn,xn,Rn,Sn=t.ccclass,Nn=t.property;Le=Sn("oxGroup"),Pe=Nn(r),Ee=Nn(r),Ue=Nn(r),Ge=Nn(r),Be=Nn(r),Fe=Nn(r),Ke=Nn(r),We=Nn(r),Ve=Nn(r),je=Nn(d),Ze=Nn(l),Le((Me=I((Xe=function(e){function t(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return C(_(n=e.call.apply(e,[this].concat(i))||this),"label1",Me,_(n)),C(_(n),"label2",Je,_(n)),C(_(n),"label3",Ye,_(n)),C(_(n),"label4",qe,_(n)),C(_(n),"label5",Qe,_(n)),C(_(n),"label6",$e,_(n)),C(_(n),"label7",en,_(n)),C(_(n),"label8",nn,_(n)),C(_(n),"label9",tn,_(n)),C(_(n),"winLine",on,_(n)),C(_(n),"drawNode",rn,_(n)),w(_(n),"oxs",[]),w(_(n),"myTween",null),n}g(t,e);var i=t.prototype;return i.start=function(){var e=this;this.oxs=[this.label1,this.label2,this.label3,this.label4,this.label5,this.label6,this.label7,this.label8,this.label9],this.resetData(),this.myTween=c(this.drawNode),this.drawNode.setScale(u.ZERO),le.on("hasWinner",(function(){e.showWinLine()})),le.on("resetData",(function(){e.resetData(),e.hideDraw()})),le.on("showDraw",(function(){e.showDraw()})),le.on("updateRound",(function(){e.hideDraw(),e.drawNode.active=!1}))},i.resetData=function(){this.winLine.enabled=!1,this.oxs.forEach((function(e,t){e.string="　",e.enabled=!0,e.color=new n(255,255,255,0);var i=e.getComponent(un);i.index=t,i.hasValue=!1}))},i.showWinLine=function(){var e=le.getWinLineConfig();this.winLine.node.setPosition(e.p.x,e.p.y,0),this.winLine.node.setRotationFromEuler(0,0,e.r.z),this.winLine.enabled=!0},i.hideDraw=function(){this.myTween&&(this.myTween.stop(),this.myTween=null,this.drawNode.setScale(u.ZERO),this.drawNode.active=!1)},i.showDraw=function(){var e=this;this.myTween=c(this.drawNode),this.myTween.call((function(){e.drawNode.setScale(u.ZERO),e.drawNode.active=!0})).to(0,{scale:u.ZERO}).to(.3,{scale:u.ONE}).delay(1.5).to(.2,{scale:u.ZERO}).call((function(){e.drawNode.active=!1})).start()},t}(s)).prototype,"label1",[Pe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Je=I(Xe.prototype,"label2",[Ee],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ye=I(Xe.prototype,"label3",[Ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),qe=I(Xe.prototype,"label4",[Ge],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Qe=I(Xe.prototype,"label5",[Be],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$e=I(Xe.prototype,"label6",[Fe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),en=I(Xe.prototype,"label7",[Ke],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),nn=I(Xe.prototype,"label8",[We],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),tn=I(Xe.prototype,"label9",[Ve],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),on=I(Xe.prototype,"winLine",[je],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),rn=I(Xe.prototype,"drawNode",[Ze],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),He=Xe));e._RF.pop(),e._RF.push({},"df1cfJ3rVxOb6qICijSYOeP","game",void 0);var zn,Tn,An,kn,Ln,Pn=t.ccclass,En=t.property;cn=Pn("game"),sn=En(l),pn=En(l),dn=En(l),fn=En(r),hn=En(r),yn=En(f),bn=En(l),mn=En(y),cn((vn=I((gn=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return C(_(n=e.call.apply(e,[this].concat(i))||this),"oxGroup",vn,_(n)),C(_(n),"playerInfo1",_n,_(n)),C(_(n),"playerInfo2",Cn,_(n)),C(_(n),"nowRundNode",In,_(n)),C(_(n),"drawRundNode",On,_(n)),C(_(n),"_audioSource",Dn,_(n)),C(_(n),"myDialog",xn,_(n)),C(_(n),"useAiChk",Rn,_(n)),n}g(n,e);var t=n.prototype;return t.onLoad=function(){var e=this,n=this.getComponent(f);this._audioSource=n,b.addPersistRootNode(this.myDialog),F.instance.init(this._audioSource),le.gameInfo.useAi=!0,this.useAiChk.interactable=!0,this.useAiChk.isChecked=le.gameInfo.useAi,this.useAiChk.node.on("toggle",(function(){var n=e.useAiChk.isChecked;le.gameInfo.useAi=n}))},t.start=function(){var e=this;le.on("updateRound",(function(){e.useAiChk.interactable=!1,e.nowRundNode.getComponent(r).string=""+le.gameInfo.round})),le.on("updateDrawCount",(function(){e.drawRundNode.getComponent(r).string=""+le.gameInfo.drawCount})),le.on("hasWinner",(function(){F.instance.playSound(O.AUDIO_SOUND.WIN)})),le.on("clearGame",(function(){e.useAiChk.interactable=!0,le.gameInfo.useAi=e.useAiChk.isChecked})),this.playerInfo1.getComponent(pe).myPlayerIndex=0,this.playerInfo2.getComponent(pe).myPlayerIndex=1,F.instance.preLoadAll(),F.instance.playMusic(!0)},n}(s)).prototype,"oxGroup",[sn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_n=I(gn.prototype,"playerInfo1",[pn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Cn=I(gn.prototype,"playerInfo2",[dn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),In=I(gn.prototype,"nowRundNode",[fn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),On=I(gn.prototype,"drawRundNode",[hn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Dn=I(gn.prototype,"_audioSource",[yn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),xn=I(gn.prototype,"myDialog",[bn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Rn=I(gn.prototype,"useAiChk",[mn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),wn=gn));e._RF.pop(),e._RF.push({},"fbb22HZTw9OOJZLlfLRri9v","test",void 0);var Un=t.ccclass,Gn=t.property;zn=Un("test"),Tn=Gn(a),zn((Ln=I((kn=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return C(_(n=e.call.apply(e,[this].concat(i))||this),"enterGame",Ln,_(n)),n}return g(n,e),n.prototype.start=function(){h.preloadScene("test2",(function(e,n){console.log("test2 scene preloaded")})),this.enterGame.node.on(a.EventType.CLICK,(function(){h.loadScene("test2")}))},n}(s)).prototype,"enterGame",[Tn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),An=kn));e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///main.js'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});