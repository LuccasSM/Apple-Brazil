(function(g){var window=this;var h4=function(a,b){var c="ytp-miniplayer-button-bottom-right",d={D:"svg",U:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(-1.000000, -3.000000)"},S:[{D:"polygon",U:{points:"0 0 24 0 24 24 0 24"}},{D:"path",U:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Abrir p\u00e1gina do v\u00eddeo";a.T().Z("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d={D:"svg",U:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},S:[{D:"g",U:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},S:[{D:"g",U:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},S:[{D:"path",U:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expandir");g.W.call(this,{D:"button",ka:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],U:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},S:[d]});this.G=a;this.ya("click",this.onClick,this);this.Aa("title",g.cO(a,e,"i"));g.Pi(this,g.AO(b.Nb(),this.element))},i4=function(a){g.W.call(this,{D:"div",
K:"ytp-miniplayer-ui"});this.ci=!1;this.player=a;this.N(a,"minimized",this.yh);this.N(a,"onStateChange",this.xQ)},j4=function(a){g.GN.call(this,a);
this.i=new i4(this.player);this.i.hide();g.wN(this.player,this.i.element,4);a.oe()&&(this.load(),g.N(a.getRootNode(),"ytp-player-minimized",!0))};
g.u(h4,g.W);h4.prototype.onClick=function(){this.G.xa("onExpandMiniplayer")};g.u(i4,g.W);g.k=i4.prototype;
g.k.show=function(){this.ce=new g.gn(this.Cr,null,this);this.ce.start();if(!this.ci){this.tooltip=new g.AR(this.player,this);g.K(this,this.tooltip);g.wN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Pb=new g.vO(this.player);g.K(this,this.Pb);this.Cj=new g.W({D:"div",K:"ytp-miniplayer-scrim"});g.K(this,this.Cj);this.Cj.fa(this.element);this.N(this.Cj.element,"click",this.LF);var a=new g.W({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fechar"},S:[g.xL()]});
g.K(this,a);a.fa(this.Cj.element);this.N(a.element,"click",this.rj);a=new h4(this.player,this);g.K(this,a);a.fa(this.Cj.element);g.S(this.player.T().experiments,"web_inline_player_enabled")&&(a=new g.mR(this.player,this),g.K(this,a),a.fa(this.Cj.element),a=new g.RP(this.player,this),g.K(this,a),a.fa(this.Cj.element));this.Pm=new g.W({D:"div",K:"ytp-miniplayer-controls"});g.K(this,this.Pm);this.Pm.fa(this.Cj.element);this.N(this.Pm.element,"click",this.LF);var b=new g.W({D:"div",K:"ytp-miniplayer-button-container"});
g.K(this,b);b.fa(this.Pm.element);a=new g.W({D:"div",K:"ytp-miniplayer-play-button-container"});g.K(this,a);a.fa(this.Pm.element);var c=new g.W({D:"div",K:"ytp-miniplayer-button-container"});g.K(this,c);c.fa(this.Pm.element);this.fG=new g.WP(this.player,this,!1);g.K(this,this.fG);this.fG.fa(b.element);b=new g.TP(this.player,this);g.K(this,b);b.fa(a.element);this.nextButton=new g.WP(this.player,this,!0);g.K(this,this.nextButton);this.nextButton.fa(c.element);this.Bi=new g.nR(this.player,this);g.K(this,
this.Bi);this.Bi.fa(this.Cj.element);this.Yc=new g.aQ(this.player,this);g.K(this,this.Yc);g.wN(this.player,this.Yc.element,4);this.uu=new g.W({D:"div",K:"ytp-miniplayer-buttons"});g.K(this,this.uu);g.wN(this.player,this.uu.element,4);a=new g.W({D:"button",ka:["ytp-miniplayer-close-button","ytp-button"],U:{"aria-label":"Fechar"},S:[g.xL()]});g.K(this,a);a.fa(this.uu.element);this.N(a.element,"click",this.rj);a=new g.W({D:"button",ka:["ytp-miniplayer-replay-button","ytp-button"],U:{"aria-label":"Fechar"},
S:[g.CL()]});g.K(this,a);a.fa(this.uu.element);this.N(a.element,"click",this.HO);this.N(this.player,"presentingplayerstatechange",this.Xb);this.N(this.player,"appresize",this.Sa);this.N(this.player,"fullscreentoggled",this.Sa);this.Sa();this.ci=!0}0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.Yc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.ce&&(this.ce.dispose(),this.ce=void 0);g.W.prototype.hide.call(this);this.player.oe()||(this.ci&&this.Yc.hide(),this.player.loadModule("annotations_module"))};
g.k.da=function(){this.ce&&(this.ce.dispose(),this.ce=void 0);g.W.prototype.da.call(this)};
g.k.rj=function(){this.player.stopVideo();this.player.xa("onCloseMiniplayer")};
g.k.HO=function(){this.player.playVideo()};
g.k.LF=function(a){if(a.target===this.Cj.element||a.target===this.Pm.element)g.S(this.player.T().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.AK(this.player.Va())?this.player.pauseVideo():this.player.playVideo():this.player.xa("onExpandMiniplayer")};
g.k.yh=function(){g.N(this.player.getRootNode(),"ytp-player-minimized",this.player.oe())};
g.k.re=function(){this.Yc.Bb();this.Bi.Bb()};
g.k.Cr=function(){this.re();this.ce&&this.ce.start()};
g.k.Xb=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.k.Sa=function(){g.DQ(this.Yc,0,this.player.Ka().getPlayerSize().width,!1);g.cQ(this.Yc)};
g.k.xQ=function(a){this.player.oe()&&(0===a?this.hide():this.show())};
g.k.Nb=function(){return this.tooltip};
g.k.ye=function(){return!1};
g.k.Me=function(){return!1};
g.k.di=function(){return!1};
g.k.Tz=function(){};
g.k.Sm=function(){};
g.k.Cq=function(){};
g.k.an=function(){return null};
g.k.bj=function(){return new g.$f(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.kp=function(a,b,c,d,e){var f=0,h=d=0,l=g.Hg(a);if(b){c=g.pn(b,"ytp-prev-button")||g.pn(b,"ytp-next-button");var m=g.pn(b,"ytp-play-button"),n=g.pn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Fg(b,this.element),h=b.x,f=b.y-12):n&&(h=g.pn(b,"ytp-miniplayer-button-top-left"),f=g.Fg(b,this.element),b=g.Hg(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.Ka().getPlayerSize().width;e=f+(e||0);l=g.Zd(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Ak=function(){};
g.k.ak=function(){return!1};g.u(j4,g.GN);j4.prototype.create=function(){};
j4.prototype.xi=function(){return!1};
j4.prototype.load=function(){this.player.hideControls();this.i.show()};
j4.prototype.unload=function(){this.player.showControls();this.i.hide()};g.MN.miniplayer=j4;})(_yt_player);
