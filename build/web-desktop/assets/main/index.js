System.register("chunks:///main.js",["cc"],(function(){"use strict";var e,n,t,i,r,o,a,l,u,c,s,p,f,h,d,y,b;return{setters:[function(m){e=m.cclegacy,n=m.Color,t=m._decorator,i=m.resources,r=m.AudioClip,o=m.Label,a=m.Button,l=m.Node,u=m.Vec3,c=m.tween,s=m.Component,p=m.EventTarget,f=m.Sprite,h=m.director,d=m.AudioSource,y=m.ToggleComponent,b=m.game}],execute:function(){function m(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,v(e,n)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,n,t,i){t&&Object.defineProperty(e,n,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(i):void 0})}function I(e,n,t,i,r){var o={};return Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=t.slice().reverse().reduce((function(t,i){return i(e,n,t)||t}),o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,n,o),o=null),o}e._RF.push({},"3544egSkWdNupAIB2HTtIp3","constant",void 0);var O=function(){};w(O,"AUDIO_SOUND",{BACKGROUND:"background",BTN_CLICK:"click",BTN_CLICK_2:"click2",BTN_CLICK_OX:"oxClick",ROUNDDONE:"roundDone",WIN:"win"}),w(O,"COLOR",{O:new n(128,128,234,255),X:new n(70,40,40,255)}),e._RF.pop(),e._RF.push({},"0bb36naI2pAzL3EIKXteYt/","audioManager",void 0);t.ccclass,t.property;var D,N,x,R,S,z,T,k,A,P,L,E,U,G,B,F=function(){function e(){w(this,"soundVolume",1)}var n,t,o,a=e.prototype;return a.init=function(n){e._audioSource=n,i.preload("audio/"+O.AUDIO_SOUND.BACKGROUND)},a.playMusic=function(n){var t=e._audioSource;if(!t.clip||!t.playing){var o="audio/"+O.AUDIO_SOUND.BACKGROUND;i.load(o,r,(function(e,i){t.volume=.5,t.clip=i,t.loop=n,t.playOnAwake=!0,t.playing||t.play()}))}},a.playSound=function(n){var t=this,o=e._audioSource;i.load("audio/"+n,r,(function(e,n){e?console.error(e):o.playOneShot(n,o.volume?t.soundVolume/o.volume:0)}))},n=e,o=[{key:"instance",get:function(){return this._instance||(this._instance=new e),this._instance}}],(t=null)&&m(n.prototype,t),o&&m(n,o),e}();w(F,"_instance",void 0),w(F,"_audioSource",void 0),e._RF.pop(),e._RF.push({},"1e0acrlyBNJip4i/4ZTivPi","myDialog",void 0);var K=t.ccclass,W=t.property,j=(D=K("myDialog"),N=W(o),x=W(o),R=W(a),S=W(a),z=W(l),T=W(l),D((P=I((A=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return C(_(n=e.call.apply(e,[this].concat(i))||this),"titleTxt",P,_(n)),C(_(n),"bodyTxt",L,_(n)),C(_(n),"btnOk",E,_(n)),C(_(n),"btnCancel",U,_(n)),C(_(n),"mask",G,_(n)),C(_(n),"content",B,_(n)),w(_(n),"_callBack_OK",(function(){})),w(_(n),"_callBack_Cancel",(function(){})),w(_(n),"myTween",null),w(_(n),"_vec_hide",null),n}g(n,e);var t=n.prototype;return t.start=function(){var e=this;this._vec_hide=new u(.7,.7,1),this.node.active=!1,this.mask.on(l.EventType.TOUCH_START,(function(e){return e.propagationStopped=!0})),this.btnOk.node.on(l.EventType.TOUCH_END,(function(n){F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK_2),e._callBack_OK&&e._callBack_OK(),e.hide()})),this.btnCancel.node.on(l.EventType.TOUCH_END,(function(n){F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK_2),e._callBack_Cancel&&e._callBack_Cancel(),e.hide()}))},t.show=function(e){var n=this;e&&(this._callBack_OK=e.ok,this._callBack_Cancel=e.cancel,this.titleTxt.string=e.title||"提示訊息",this.bodyTxt.string=e.msg||"",this.myTween=c(this.content),this.myTween.call((function(){n.node.setScale(u.ONE),n.content.setScale(n._vec_hide),n.node.active=!0})).to(.2,{scale:u.ONE}).call((function(){})).start())},t.hide=function(){var e=this;this.myTween=c(this.content),this.myTween.to(.1,{scale:this._vec_hide}).call((function(){e.node.setScale(u.ZERO),e.node.active=!1})).start()},n}(s)).prototype,"titleTxt",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=I(A.prototype,"bodyTxt",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=I(A.prototype,"btnOk",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=I(A.prototype,"btnCancel",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=I(A.prototype,"mask",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),B=I(A.prototype,"content",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=A))||k);e._RF.pop(),e._RF.push({},"7738fXjRGpD2o4ubv6GnWv8","store",void 0);new p;var Z,H,V,J,X,M,Y,q,Q,$,ee,ne,te,ie,re,oe=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],ae=[{p:{x:0,y:200},r:{z:0}},{p:{x:0,y:0},r:{z:0}},{p:{x:0,y:-200},r:{z:0}},{p:{x:-200,y:0},r:{z:90}},{p:{x:0,y:0},r:{z:90}},{p:{x:200,y:0},r:{z:90}},{p:{x:0,y:0},r:{z:-45}},{p:{x:0,y:0},r:{z:45}}],le=new(function(e){function n(){var n;w(_(n=e.call(this)||this),"p1",void 0),w(_(n),"cb",void 0),w(_(n),"players",[]),w(_(n),"gameInfo",null),w(_(n),"nowPlayerIndex",-1),w(_(n),"roadData",[]),w(_(n),"winLineIndex",0),w(_(n),"isGaming",!1),w(_(n),"winPlayerIndex",-1),w(_(n),"roundStep",void 0);return n.gameInfo={round:0,drawCount:0,useAi:!1},n.players=[{id:1,name:"玩家1",type:!0,winCount:0,step:0},{id:2,name:"玩家2",type:!1,winCount:0,step:0}],n.resetData(),n}g(n,e);var t=n.prototype;return t.clearGame=function(){this.players.forEach((function(e){e.winCount=0,e.step=0})),this.gameInfo.round=0,this.gameInfo.drawCount=0,this.gameInfo.useAi=!1,this.resetData(),this.emit("updatePlayerInfo"),this.emit("updateRound"),this.emit("updateDrawCount"),this.emit("clearGame"),this.emit("roundDone")},t.resetData=function(){this.winPlayerIndex=-1,this.isGaming=!1,this.roundStep=0,this.nowPlayerIndex=-1,this.roadData=new Array(9).fill(void 0),this.emit("resetData")},t.init=function(){},t.startRound=function(){this.resetData(),this.isGaming=!0,this.gameInfo.round++,this.roundStep=0,this.emit("updateRound"),this.nowPlayerIndex=0,this.emit("updatePlayerInfo")},t.checkWinner=function(){var e=this,n=this.players[this.nowPlayerIndex].type,t=this.roadData.map((function(e,n){return{i:n,v:e}})).filter((function(e){return e.v===n})).map((function(e){return e.i}));return oe.some((function(n,i){var r=n.every((function(e){return t.indexOf(e)>=0}));return r&&(e.winLineIndex=i),r}))},t.getWinLineConfig=function(){return ae[this.winLineIndex]},t.checkDraw=function(){return this.roundStep>=9},t.next=function(e){var n=this.players[this.nowPlayerIndex];this.roadData[e]=n.type,n.step++,this.roundStep++,this.checkWinner()?(n.winCount++,this.winPlayerIndex=this.nowPlayerIndex,this.isGaming=!1,this.emit("hasWinner"),this.emit("roundDone")):this.checkDraw()?(this.isGaming=!1,this.gameInfo.drawCount++,this.nowPlayerIndex=-1,this.emit("updateDrawCount"),this.emit("roundDone"),this.emit("showDraw")):this.nowPlayerIndex=0===this.nowPlayerIndex?1:0,this.emit("updatePlayerInfo")},n}(p));e._RF.pop(),e._RF.push({},"2a8467AT+REOqUYvsYzDP+U","playerInfo",void 0);var ue,ce=t.ccclass,se=t.property,pe=(Z=ce("playerInfo"),H=se(o),V=se(o),J=se(o),X=se(o),M=se(o),Y=se(f),Z(($=I((Q=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),o=0;o<i;o++)r[o]=arguments[o];return w(_(t=e.call.apply(e,[this].concat(r))||this),"myPlayerIndex",void 0),C(_(t),"pName",$,_(t)),C(_(t),"winCount",ee,_(t)),C(_(t),"step",ne,_(t)),C(_(t),"winImg",te,_(t)),C(_(t),"useTypeStr",ie,_(t)),C(_(t),"bg",re,_(t)),w(_(t),"_color_nowStep",new n(100,200,100,220)),w(_(t),"_color_nextStep",new n(150,150,150,220)),t}g(t,e);var i=t.prototype;return i.start=function(){var e=this;this.winImg.node.active=!1,this.useTypeStr.color=0===this.myPlayerIndex?O.COLOR.O:O.COLOR.X,this.bg.color=this._color_nextStep,le.on("updatePlayerInfo",(function(){e.updateInfo()})),this.updateInfo()},i.updateInfo=function(){var e=le.players[this.myPlayerIndex];this.pName.getComponent(o).string=e.name,this.winCount.getComponent(o).string=""+e.winCount,this.step.getComponent(o).string=""+e.step,le.nowPlayerIndex===this.myPlayerIndex?this.bg.color=this._color_nowStep:this.bg.color=this._color_nextStep,le.winPlayerIndex===this.myPlayerIndex?this.winImg.node.active=!0:this.winImg.node.active=!1},t}(s)).prototype,"pName",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=I(Q.prototype,"winCount",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ne=I(Q.prototype,"step",[J],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=I(Q.prototype,"winImg",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ie=I(Q.prototype,"useTypeStr",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),re=I(Q.prototype,"bg",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=Q))||q);e._RF.pop(),e._RF.push({},"340a2TWMNBAJ6koVzoJ06Oz","btnStart",void 0);var fe,he,de,ye,be,me=t.ccclass;t.property,me("btnStart")(ue=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return w(_(n=e.call.apply(e,[this].concat(i))||this),"_canClick",!0),n}return g(n,e),n.prototype.start=function(){var e=this;this.node.on(l.EventType.TOUCH_END,(function(n){e._canClick&&(F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK_2),le.startRound(),e.getComponent(a).interactable=!1,e._canClick=!1,e.node.getChildByName("Label").getComponent(o).string="下局")})),le.on("roundDone",(function(){e.getComponent(a).interactable=!0,e._canClick=!0})),le.on("clearGame",(function(){e.node.getChildByName("Label").getComponent(o).string="開始"}))},n}(s));e._RF.pop(),e._RF.push({},"54e5cGDxBFKs6bMT74S4IS+","welcome",void 0);var we,ge,ve,_e,Ce,Ie=t.ccclass,Oe=t.property;fe=Ie("welcome"),he=Oe(a),fe((be=I((ye=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return C(_(n=e.call.apply(e,[this].concat(i))||this),"enterGame",be,_(n)),n}return g(n,e),n.prototype.start=function(){h.preloadScene("game",(function(){console.log("Game scene preloaded")})),this.enterGame.node.on(l.EventType.TOUCH_END,(function(){h.loadScene("game")}))},n}(s)).prototype,"enterGame",[he],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),de=ye));e._RF.pop(),e._RF.push({},"8c758NGRUJJ+YPpPzugWmmN","btnClear",void 0);var De,Ne,xe,Re,Se,ze=t.ccclass,Te=t.property;we=ze("btnClear"),ge=Te(l),we((Ce=I((_e=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return C(_(n=e.call.apply(e,[this].concat(i))||this),"myDialog",Ce,_(n)),n}return g(n,e),n.prototype.start=function(){var e=this;this.node.on(l.EventType.TOUCH_END,(function(n){F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK_2),e.myDialog.getComponent(j).show({title:"-訊息-",msg:"確定重置嗎？",ok:function(){le.clearGame()},cancel:function(){},autoClose:1e3})}))},n}(s)).prototype,"myDialog",[ge],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ve=_e));e._RF.pop(),e._RF.push({},"e0947nEYMhISokeBOL4Fqdv","oxItem",void 0);var ke,Ae,Pe,Le,Ee,Ue,Ge,Be,Fe,Ke,We,je,Ze,He,Ve,Je,Xe,Me,Ye,qe,Qe,$e,en,nn,tn,rn=t.ccclass,on=t.property,an=(De=rn("oxItem"),Ne=on(o),De((Se=I((Re=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return C(_(n=e.call.apply(e,[this].concat(i))||this),"label",Se,_(n)),w(_(n),"type",!1),w(_(n),"hasValue",!1),w(_(n),"index",0),n}return g(n,e),n.prototype.start=function(){var e=this;this.node.on(l.EventType.TOUCH_END,(function(){if(!e.hasValue&&le.isGaming){F.instance.playSound(O.AUDIO_SOUND.BTN_CLICK),e.hasValue=!0;var n=le.players[le.nowPlayerIndex],t=n.type?"O":"X";e.label.string=t,e.label.color=n.type?O.COLOR.O:O.COLOR.X,le.next(e.index)}}))},n}(s)).prototype,"label",[Ne],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),xe=Re))||xe);e._RF.pop(),e._RF.push({},"940d7nZmllLRrWvunPUBaWl","oxGroup",void 0);var ln,un,cn,sn,pn,fn,hn,dn,yn,bn,mn,wn,gn,vn,_n,Cn,In,On,Dn,Nn=t.ccclass,xn=t.property;ke=Nn("oxGroup"),Ae=xn(o),Pe=xn(o),Le=xn(o),Ee=xn(o),Ue=xn(o),Ge=xn(o),Be=xn(o),Fe=xn(o),Ke=xn(o),We=xn(f),je=xn(l),ke((Ve=I((He=function(e){function t(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return C(_(n=e.call.apply(e,[this].concat(i))||this),"label1",Ve,_(n)),C(_(n),"label2",Je,_(n)),C(_(n),"label3",Xe,_(n)),C(_(n),"label4",Me,_(n)),C(_(n),"label5",Ye,_(n)),C(_(n),"label6",qe,_(n)),C(_(n),"label7",Qe,_(n)),C(_(n),"label8",$e,_(n)),C(_(n),"label9",en,_(n)),C(_(n),"winLine",nn,_(n)),C(_(n),"drawNode",tn,_(n)),w(_(n),"oxs",[]),w(_(n),"myTween",null),n}g(t,e);var i=t.prototype;return i.start=function(){var e=this;this.oxs=[this.label1,this.label2,this.label3,this.label4,this.label5,this.label6,this.label7,this.label8,this.label9],this.resetData(),this.myTween=c(this.drawNode),this.drawNode.setScale(u.ZERO),le.on("hasWinner",(function(){e.showWinLine()})),le.on("resetData",(function(){e.resetData(),e.hideDraw()})),le.on("showDraw",(function(){e.showDraw()})),le.on("updateRound",(function(){e.hideDraw(),e.drawNode.active=!1}))},i.resetData=function(){this.winLine.enabled=!1,this.oxs.forEach((function(e,t){e.string="　",e.enabled=!0,e.color=new n(255,255,255,0);var i=e.getComponent(an);i.index=t,i.hasValue=!1}))},i.showWinLine=function(){var e=le.getWinLineConfig();this.winLine.node.setPosition(e.p.x,e.p.y,0),this.winLine.node.setRotationFromEuler(0,0,e.r.z),this.winLine.enabled=!0},i.hideDraw=function(){this.myTween&&(this.myTween.stop(),this.myTween=null,this.drawNode.setScale(u.ZERO),this.drawNode.active=!1)},i.showDraw=function(){var e=this;this.myTween=c(this.drawNode),this.myTween.call((function(){e.drawNode.setScale(u.ZERO),e.drawNode.active=!0})).to(0,{scale:u.ZERO}).to(.3,{scale:u.ONE}).delay(1.5).to(.2,{scale:u.ZERO}).call((function(){e.drawNode.active=!1})).start()},t}(s)).prototype,"label1",[Ae],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Je=I(He.prototype,"label2",[Pe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Xe=I(He.prototype,"label3",[Le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Me=I(He.prototype,"label4",[Ee],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ye=I(He.prototype,"label5",[Ue],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),qe=I(He.prototype,"label6",[Ge],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Qe=I(He.prototype,"label7",[Be],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),$e=I(He.prototype,"label8",[Fe],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),en=I(He.prototype,"label9",[Ke],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),nn=I(He.prototype,"winLine",[We],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),tn=I(He.prototype,"drawNode",[je],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Ze=He));e._RF.pop(),e._RF.push({},"df1cfJ3rVxOb6qICijSYOeP","game",void 0);var Rn,Sn,zn,Tn,kn,An=t.ccclass,Pn=t.property;ln=An("game"),un=Pn(l),cn=Pn(l),sn=Pn(l),pn=Pn(o),fn=Pn(o),hn=Pn(d),dn=Pn(l),yn=Pn(y),ln((wn=I((mn=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return C(_(n=e.call.apply(e,[this].concat(i))||this),"oxGroup",wn,_(n)),C(_(n),"playerInfo1",gn,_(n)),C(_(n),"playerInfo2",vn,_(n)),C(_(n),"nowRundNode",_n,_(n)),C(_(n),"drawRundNode",Cn,_(n)),C(_(n),"_audioSource",In,_(n)),C(_(n),"myDialog",On,_(n)),C(_(n),"useAiChk",Dn,_(n)),n}g(n,e);var t=n.prototype;return t.onLoad=function(){var e=this,n=this.getComponent(d);this._audioSource=n,b.addPersistRootNode(this.node),b.addPersistRootNode(this.myDialog),F.instance.init(this._audioSource),this.useAiChk.interactable=!0,this.useAiChk.isChecked=!1,this.useAiChk.node.on("toggle",(function(){var n=e.useAiChk.isChecked;le.gameInfo.useAi=n}))},t.start=function(){var e=this;le.on("updateRound",(function(){e.useAiChk.interactable=!1,e.nowRundNode.getComponent(o).string=""+le.gameInfo.round})),le.on("updateDrawCount",(function(){e.drawRundNode.getComponent(o).string=""+le.gameInfo.drawCount})),le.on("hasWinner",(function(){F.instance.playSound(O.AUDIO_SOUND.WIN)})),le.on("clearGame",(function(){e.useAiChk.interactable=!0,le.gameInfo.useAi=e.useAiChk.isChecked})),this.playerInfo1.getComponent(pe).myPlayerIndex=0,this.playerInfo2.getComponent(pe).myPlayerIndex=1,F.instance.playMusic(!0)},n}(s)).prototype,"oxGroup",[un],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),gn=I(mn.prototype,"playerInfo1",[cn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),vn=I(mn.prototype,"playerInfo2",[sn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_n=I(mn.prototype,"nowRundNode",[pn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Cn=I(mn.prototype,"drawRundNode",[fn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),In=I(mn.prototype,"_audioSource",[hn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),On=I(mn.prototype,"myDialog",[dn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Dn=I(mn.prototype,"useAiChk",[yn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),bn=mn));e._RF.pop(),e._RF.push({},"fbb22HZTw9OOJZLlfLRri9v","test",void 0);var Ln=t.ccclass,En=t.property;Rn=Ln("test"),Sn=En(a),Rn((kn=I((Tn=function(e){function n(){for(var n,t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return C(_(n=e.call.apply(e,[this].concat(i))||this),"enterGame",kn,_(n)),n}return g(n,e),n.prototype.start=function(){h.preloadScene("test2",(function(e,n){console.log("test2 scene preloaded")})),this.enterGame.node.on(a.EventType.CLICK,(function(){h.loadScene("test2")}))},n}(s)).prototype,"enterGame",[Sn],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),zn=Tn));e._RF.pop()}}}));

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