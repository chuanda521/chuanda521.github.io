(function(t){function a(a){for(var s,r,c=a[0],l=a[1],o=a[2],u=0,d=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);m&&m(a);while(d.length)d.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(s=!1)}s&&(n.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},i={app:0},n=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"e08c86cf"}[t]+".js"}function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.e=function(t){var a=[],e=i[t];if(0!==e)if(e)a.push(e[2]);else{var s=new Promise((function(a,s){e=i[t]=[a,s]}));a.push(e[2]=s);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=r(t);var o=new Error;n=function(a){l.onerror=l.onload=null,clearTimeout(u);var e=i[t];if(0!==e){if(e){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",o.name="ChunkLoadError",o.type=s,o.request=n,e[1](o)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(a)},c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"0f81":function(t,a,e){},1251:function(t,a,e){},"1d52":function(t,a,e){},2134:function(t,a,e){},2154:function(t,a,e){},"2cb6":function(t,a,e){"use strict";var s=e("2d5a"),i=e.n(s);i.a},"2d5a":function(t,a,e){},"2f70":function(t,a,e){"use strict";var s=e("4314"),i=e.n(s);i.a},4314:function(t,a,e){},4419:function(t,a,e){"use strict";var s=e("5b1b"),i=e.n(s);i.a},"4bbf":function(t,a,e){"use strict";var s=e("a7a7"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);var s={};e.r(s),e.d(s,"formatDate",(function(){return ka})),e.d(s,"createSong",(function(){return ja}));var i=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Head",{attrs:{id:"head"}}),e("RealPlayer",{attrs:{id:"player"}}),e("router-view",{attrs:{id:"router"}})],1)},r=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"head"},[t._m(0),e("div",{staticClass:"head-right"},[e("el-input",{attrs:{size:"medium",placeholder:"请输入内容"},on:{change:t.changeEvent},model:{value:t.inputContent,callback:function(a){t.inputContent=a},expression:"inputContent"}},[e("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1)])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"head-left"},[e("span"),e("span"),e("span")])}],o={name:"Head",data(){return{inputContent:"",songs:[]}},methods:{changeEvent(t){this.$router.push("/search?q="+t)}}},u=o,m=(e("4419"),e("2877")),d=Object(m["a"])(u,c,l,!1,null,"4bc557ab",null),v=d.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"player"},[e("audio",{attrs:{id:"music",src:t.currentSong.url,autoplay:"",controls:"",loop:"",preload:""}})])},h=[],g=e("2f62"),f={name:"RealPlayer",computed:{...Object(g["c"])({playstate:t=>t.musicModule.playstate,currentSong:t=>t.musicModule.currentSong})}},_=f,b=(e("f2a7"),Object(m["a"])(_,p,h,!1,null,"55a86c76",null)),C=b.exports,w={components:{Head:v,RealPlayer:C}},y=w,k=(e("5c0b"),Object(m["a"])(y,n,r,!1,null,null,null)),j=k.exports,x=e("8c4f"),$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"nav"},[e("ul",t._l(t.routerList,(function(a,s){return e("li",{key:s,staticClass:"nav-item-wrap"},[e("router-link",{staticClass:"nav-item",attrs:{to:a.to}},[e("i",{staticClass:"icon",class:a.icon}),t._v(" "+t._s(a.name)+" ")])],1)})),0)]),e("router-view",{attrs:{id:"main"}})],1)},L=[],T={name:"Home",data(){return{routerList:[{name:"发现歌单",to:"/find",icon:"el-icon-orange"},{name:"推荐歌单",to:"/recom",icon:"el-icon-s-unfold"},{name:"最新音乐",to:"/newlist",icon:"el-icon-service"},{name:"最新MV",to:"/newmy",icon:"el-icon-film"}]}},components:{},watch:{$route(t,a){}}},E=T,M=(e("d263"),Object(m["a"])(E,$,L,!1,null,"139958ff",null)),O=M.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-carousel",{attrs:{interval:4e3,type:"card",height:"11rem",autoplay:"",loop:""}},t._l(t.banners,(function(t,a){return e("el-carousel-item",{key:a},[e("img",{attrs:{src:t.imageUrl}})])})),1),e("FindTjgd"),e("FindZxyy"),e("FindMv")],1)},S=[],R=e("bc3a"),N=e.n(R);const D="https://autumnfish.cn/",A=I();function I(){const t=N.a.create({baseURL:D});return t.interceptors.response.use(J,z),t}function J(t){if(console.log(t.data),200!=t.status)throw new Error("发生网络异常，数据请求失败");return t.data}function z(t){throw t}const U=t=>A.get("/banner?type="+t),q=(t=10)=>A.get("/personalized?limit="+t),F=()=>A.get("/personalized/newsong"),H=t=>A.get("/song/url?id="+t),V=()=>A.get("/personalized/mv"),Z=()=>A.get("/playlist/hot"),X=(t="全部")=>A.get("/top/playlist/highquality?cat="+t),Y=(t="全部",a=0,e,s=10)=>(a=(a-1)*s,A.get(`/top/playlist?cat=${t}&limit=${s}&order=${e}&offset=${a}`)),B=(t=0)=>A.get("/top/song?type="+t),G=(t,a,e,s=0,i=8)=>(s=(s-1)*i,console.log(t,a,e,s),A.get(`/mv/all?area=${t}&type=${a}&order=${e}&limit=${i}&offset=${s}`)),K=t=>A.get("playlist/detail?id="+t),Q=t=>A.get("/song/detail?ids="+t),W=(t,a=1,e=20)=>(a=20*(a-1),A.get(`/comment/playlist?id=${t}&limit=${e}&offset=${a}`)),tt=t=>A.get("/mv/detail?mvid="+t),at=t=>A.get("/mv/url?id="+t),et=(t,a=1,e=10)=>(a=(a-1)*e,A.get(`/comment/mv?id=${t}&offset=${a}&limit=${e}`)),st=t=>A.get("/simi/mv?mvid="+t),it=(t,a=1,e=1,s=10)=>(e=(e-1)*s,A.get(`/search?keywords= ${t}&type=${a}&offset=${e}&limit=${s}`));var nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.gedanList?e("div",{staticClass:"tjgd"},[e("h3",[t._v("推荐歌单")]),e("div",{staticClass:"grow-list"},t._l(t.gedanList,(function(a){return e("a",{key:a.id,staticClass:"grow-item",on:{click:function(e){return t.clickTjgditemEvent(a.id)}}},[e("div",{staticClass:"item-imgwrap"},[e("img",{attrs:{src:a.picUrl,alt:""}}),e("span",{staticClass:"wrap-btn el-icon-caret-right"}),e("div",{staticClass:"wrap-text"},[t._v(t._s(a.copywriter))])]),e("p",{staticClass:"item-textwrap"},[t._v(t._s(a.name))])])})),0)]):t._e()},rt=[],ct={name:"findTjgd",data(){return{gedanList:[]}},async created(){const{result:t}=await q();this.gedanList=t},methods:{clickTjgditemEvent(t){console.log(t),this.$router.push("/tjgdinfo?id="+t)}}},lt=ct,ot=(e("fcef"),Object(m["a"])(lt,nt,rt,!1,null,"2993ccaa",null)),ut=ot.exports,mt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.newList?e("div",{staticClass:"zxyy"},[e("h3",[t._v("最新音乐")]),e("div",{staticClass:"zxyy-row"},t._l(t.newList,(function(a){return e("a",{key:a.id,staticClass:"zxyy-row-item",on:{click:function(e){return t.swichmusiChange(a.id)}}},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:a.picUrl,alt:""}}),e("span",{staticClass:"wrap-btn el-icon-caret-right"})]),e("div",{staticClass:"text-wrap"},[e("h6",[t._v(t._s(a.name))]),e("span",[t._v(t._s(a.song.artists[0].name))])])])})),0)]):t._e()},dt=[],vt={name:"findZxyy",data(){return{newList:[]}},async created(){const{result:t}=await F();this.newList=t},methods:{...Object(g["b"])(["setcurrentSongA"]),async swichmusiChange(t){let a=await H(t);a=a&&a.data[0],this.$store.dispatch("setcurrentSongA",a)}}},pt=vt,ht=(e("2f70"),Object(m["a"])(pt,mt,dt,!1,null,"38d2f47b",null)),gt=ht.exports,ft=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.mvList?e("div",{staticClass:"findmv"},[e("h3",[t._v("推荐MV")]),e("div",{staticClass:"findmv-row"},[t._l(t.mvList,(function(a){return e("div",{key:a.id,staticClass:"findmv-row-item",on:{click:function(e){return t.clickToRouter(a.id)}}},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:a.picUrl,alt:""}}),e("div",{staticClass:"img-number"},[e("i",{staticClass:"el-icon-caret-right"}),t._v(" "+t._s(a.playCount)+" ")]),t._m(0,!0)]),e("div",{staticClass:"text-wrap"},[e("div",{staticClass:"text-name"},[t._v(t._s(a.name))]),e("div",{staticClass:"text-zuoz"},[t._v(t._s(a.artistName))])])])})),t.len>4&t.len%4>0?e("div",{staticClass:"findmv-row-item-bw"}):t._e()],2)]):t._e()},_t=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"wrap-btn"},[e("i",{staticClass:"el-icon-caret-right"})])}],bt={name:"findMv",data(){return{len:4,mvList:[]}},async created(){const{result:t}=await V();this.mvList=t,this.len=t.length},methods:{clickToRouter(t){this.$router.push("/tjmvinfo?id="+t)}}},Ct=bt,wt=(e("87a3"),Object(m["a"])(Ct,ft,_t,!1,null,"eddfa938",null)),yt=wt.exports,kt={name:"FindPage",data(){return{banners:[]}},components:{FindTjgd:ut,FindZxyy:gt,FindMv:yt},async created(){const{banners:t}=await U();this.banners=t}},jt=kt,xt=(e("8fbb"),Object(m["a"])(jt,P,S,!1,null,null,null)),$t=xt.exports,Lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"recom"},[e("RecomTop",{attrs:{playJpgd:t.playJpgd}}),e("RecomTjgd")],1)},Tt=[],Et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.playJpgd?e("div",{staticClass:"recomtop"},[e("div",{staticClass:"recomtop-box"},[e("img",{staticClass:"recom-top-left",attrs:{src:t.playJpgd.coverImgUrl}}),e("div",{staticClass:"recom-top-right"},[e("a",{staticClass:"right-btn",attrs:{href:""}},[t._v("精品歌单")]),e("div",{staticClass:"right-text"},[t._v(t._s(t.playJpgd.description))])])]),e("img",{staticClass:"recomtop-bg",attrs:{src:t.playJpgd.coverImgUrl,alt:""}}),e("div",{staticClass:"recomtop-mask"})]):t._e()},Mt=[],Ot={name:"recomTop",props:{playJpgd:{type:Object,default:{}}}},Pt=Ot,St=(e("7e04"),Object(m["a"])(Pt,Et,Mt,!1,null,"2681bfd0",null)),Rt=St.exports,Nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"recomTjgd"},[t.tagsList?e("div",{staticClass:"recomtjgd-tab"},[e("span",{staticClass:"tab-item",class:0===t.tabActive?"active":"",on:{click:function(a){return t.swichTabChange(0)}}},[t._v("全部")]),t._l(t.tagsList,(function(a,s){return e("span",{key:a.id,staticClass:"tab-item",class:s+1===t.tabActive?"active":"",on:{click:function(e){return t.swichTabChange(s+1,a.name)}}},[t._v(t._s(a.name))])}))],2):t._e(),t.playList?e("div",{staticClass:"recomtjgd-list"},[e("div",{staticClass:"grow-list"},t._l(t.playList,(function(a,s){return e("a",{key:s,staticClass:"grow-item",on:{click:function(e){return t.clickSongItem(a.id)}}},[e("div",{staticClass:"item-imgwrap"},[e("img",{attrs:{src:a.coverImgUrl,alt:""}}),e("span",{staticClass:"wrap-btn el-icon-caret-right"}),e("div",{staticClass:"wrap-text"},[t._v("播放量："+t._s(a.playCount))])]),e("div",{staticClass:"item-textwrap"},[t._v(t._s(a.name))])])})),0)]):t._e(),e("div",{staticClass:"recomtjgd-pagina"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.currpage},on:{"current-change":t.currentChange}})],1)])},Dt=[],At={name:"recomTjgd",data(){return{tagsList:[],tabActive:0,playList:[],total:0,currpage:1}},async created(){const{tags:t}=await Z();this.tagsList=t,this.getRecomPlayData()},methods:{swichTabChange(t=0,a="全部"){this.tabActive=t,this.$parent.$data.activeTab=a,this.currentChange(1,a)},async getRecomPlayData(t,a){const{playlists:e,total:s}=await Y(t,a);this.playList=e,this.total=s},currentChange(t,a){this.currpage=t,a=a||this.$parent.$data.activeTab,this.getRecomPlayData(a,t)},clickSongItem(t){this.$router.push("/tjgdinfo?id="+t)}}},It=At,Jt=(e("d95f"),Object(m["a"])(It,Nt,Dt,!1,null,"eaa85e76",null)),zt=Jt.exports,Ut={name:"RecomPage",components:{RecomTop:Rt,RecomTjgd:zt},data(){return{activeTab:"全部",playJpgd:{}}},watch:{activeTab(t,a){this.requetRecomJpgd(t)}},created(){this.requetRecomJpgd()},methods:{async requetRecomJpgd(t){const{playlists:a}=await X(t);this.playJpgd=a[0]||{}}}},qt=Ut,Ft=(e("984a"),Object(m["a"])(qt,Lt,Tt,!1,null,"231c2c4a",null)),Ht=Ft.exports,Vt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"newlist"},[e("div",{staticClass:"newlist-tab"},t._l(t.tagsList,(function(a,s){return e("span",{key:s,staticClass:"tab-item",class:s+1===t.tabActive?"active":"",on:{click:function(e){return t.swichTabChange(s+1,a)}}},[t._v(t._s(a.name))])})),0),e("div",{staticClass:"newlist-row"},[e("NewRow",{attrs:{tableData:t.newList}})],1)])},Zt=[],Xt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.tableData?e("div",{staticClass:"newlistrow"},[e("table",[t._m(0),e("tbody",t._l(t.tableData,(function(a,s){return e("tr",{key:s,on:{click:function(e){return t.lickChange(a.id)}}},[e("td",{attrs:{width:"20"}},[t._v(t._s(s+1))]),e("td",{attrs:{width:"50"}},[e("div",{staticClass:"tab-item"},[e("img",{staticStyle:{"border-radius":".3rem"},attrs:{src:a.album.picUrl,width:"75",height:"75"}}),e("span",{staticClass:"el-btn el-icon-caret-right"})])]),e("td",{attrs:{width:"100"}},[e("span",[t._v(" "+t._s(a.name)+" "),a.mvid?e("a",{staticClass:"el-icon-video-camera-solid",staticStyle:{color:"#dd6d60","padding-left":".1rem","font-size":".7rem"},on:{click:function(e){return e.stopPropagation(),t.clickMvEvent(a.mvid)}}}):t._e()])]),e("td",{attrs:{width:"80"}},[t._v(t._s(a.artists[0].name))]),e("td",{attrs:{width:"100"}},[t._v(t._s(a.album.name))]),e("td",{attrs:{align:"right",width:"20"}},[t._v(t._s(t.myformatDate(a.duration)))])])})),0)])]):t._e()},Yt=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{attrs:{width:"20"}}),e("th",{attrs:{width:"50"}}),e("th",{attrs:{width:"100"}},[t._v("音乐标题")]),e("th",{attrs:{width:"80"}},[t._v("歌手")]),e("th",{attrs:{width:"100"}},[t._v("专辑")]),e("th",{attrs:{align:"right",width:"20"}},[t._v("时长")])])])}],Bt={name:"newRow",props:{tableData:{type:Array,default:[]}},methods:{...g["b"]["setcurrentSongA"],async lickChange(t){let{data:a}=await H(t),e=a&&a[0];this.$store.dispatch("setcurrentSongA",e)},myformatDate:function(t){let a=t/1e3,e=Math.floor(a/60);return a=Math.floor(a%60),e=e<10?"0"+e:e,a=a<10?"0"+a:a,e+":"+a},clickMvEvent(t){this.$router.push("/tjmvinfo?id="+t)}}},Gt=Bt,Kt=(e("2cb6"),Object(m["a"])(Gt,Xt,Yt,!1,null,"99a1ee50",null)),Qt=Kt.exports,Wt={name:"NewlistPage",data(){return{tagsList:[{name:"全部",number:0},{name:"华语",number:7},{name:"欧美",number:96},{name:"日本",number:8},{name:"韩国",number:16}],tabActive:1,newList:[]}},components:{NewRow:Qt},created(){this.getNewList()},methods:{swichTabChange(t,a){this.tabActive=t,this.getNewList(a.number)},async getNewList(t=0){const{data:a}=await B(t);this.newList=a.slice(0,50)}}},ta=Wt,aa=(e("c77e"),Object(m["a"])(ta,Vt,Zt,!1,null,"22538336",null)),ea=aa.exports,sa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"newmv"},[e("newmvTabr",{attrs:{currConfig:t.currConfig}}),t.mvList?e("div",{staticClass:"findmv-row"},[t._l(t.mvList,(function(a){return e("a",{key:a.id,staticClass:"findmv-row-item",on:{click:function(e){return t.clickmvItem(a.id)}}},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:a.cover,alt:""}}),e("div",{staticClass:"img-number"},[e("i",{staticClass:"el-icon-caret-right"}),t._v(" "+t._s(parseInt(a.playCount)>1e4?Math.trunc(parseInt(a.playCount)/1e4)+"万":parseInt(a.playCount))+" ")]),t._m(0,!0)]),e("div",{staticClass:"text-wrap"},[e("div",{staticClass:"text-name"},[t._v(t._s(a.name))]),e("div",{staticClass:"text-zuoz"},[t._v(t._s(a.artistName))])])])})),t.mvList.length>4&t.mvList.length%4>0?e("div",{staticClass:"findmv-row-item-bw"}):t._e()],2):t._e(),e("div",{staticClass:"newmv-pagin"},[e("el-pagination",{attrs:{background:"","page-count":t.total,"current-page":t.currPage,layout:"prev, pager, next"},on:{"current-change":t.currentChange}})],1)],1)},ia=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("span",{staticClass:"wrap-btn"},[e("i",{staticClass:"el-icon-caret-right"})])}],na=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.currConfig?e("div",{staticClass:"newmvtbar"},t._l(t.currConfig,(function(a,s){return e("newmvTabritem",{key:s,attrs:{tabrList:a.list,names:a.name},on:{swichTabrEvent:t.swichTabrEvent}})})),1):t._e()},ra=[],ca=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"newmvbar-row"},[t.names?e("span",{staticClass:"bar-name"},[t._v(t._s(t.names)+":")]):t._e(),t.tabrList?e("ul",{staticClass:"bar-cont"},t._l(t.tabrList,(function(a,s){return e("li",{key:s,staticClass:"barcont-item",class:t.activeIndex==s+1?"active":"",on:{click:function(e){return t.swichMvtabrChange(a,s+1)}}},[e("span",[t._v(t._s(a))])])})),0):t._e()])},la=[],oa={name:"newmvTabritem",props:{tabrList:{type:Array,default:[]},names:{type:String,default:""}},data(){return{activeIndex:1}},methods:{swichMvtabrChange(t,a){this.activeIndex=a,this.$emit("swichTabrEvent",{item:t,name:this.names})}}},ua=oa,ma=(e("af36"),Object(m["a"])(ua,ca,la,!1,null,"57e0b924",null)),da=ma.exports,va={name:"newmvTabr",props:{currConfig:{type:Array,default:[]}},components:{newmvTabritem:da},methods:{swichTabrEvent(t){let a=0;switch(t.name){case"地区":a=0;break;case"类型":a=1;break;case"排序":a=2;break}this.$parent.$data.currConfig[a].value=t.item}}},pa=va,ha=(e("f9e1"),Object(m["a"])(pa,na,ra,!1,null,"19ff21de",null)),ga=ha.exports,fa={name:"NewmyPage",components:{newmvTabr:ga},data(){return{currConfig:[{name:"地区",value:"全部",list:["全部","内地","港台","欧美","日本","韩国"]},{name:"类型",value:"全部",list:["全部","官方版","原生","现场版","网易出品"]},{name:"排序",value:"上升最快",list:["上升最快","最热","最新"]}],mvList:[],total:0,currPage:1}},watch:{currConfig:{handler(t,a){this.currPage=1,this.getMyList()},deep:!0}},created(){this.currPage=1,this.getMyList()},methods:{async getMyList(){let{count:t,data:a}=await G(this.currConfig[0].value,this.currConfig[1].value,this.currConfig[2].value,this.currPage);1==this.currPage&&(this.total=t/8),this.mvList=a},currentChange(t){this.currPage=t,console.log(t),this.getMyList()},clickmvItem(t){this.$router.push("/tjmvinfo?id="+t)}}},_a=fa,ba=(e("7b01"),Object(m["a"])(_a,sa,ia,!1,null,"48b7ea90",null)),Ca=ba.exports,wa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.id?e("div",{staticClass:"tjgdinfo"},[t.playlist?e("div",{staticClass:"top-wrap"},[e("div",{staticClass:"left-wrap"},[e("img",{attrs:{src:t.playlist.coverImgUrl,alt:""}})]),e("div",{staticClass:"right-wrap"},[e("p",[t._v(t._s(t.playlist.name))]),e("div",{staticClass:"right-info"},[e("img",{attrs:{src:t.playlist.creator&&t.playlist.creator.avatarUrl}}),e("span",{staticClass:"info-name"},[t._v(t._s(t.playlist.creator&&t.playlist.creator.nickname))]),e("span",{staticClass:"info-date"},[t._v(t._s(t.$utils.formatDate(t.playlist.createTime)))])]),t._m(0),e("div",{staticClass:"right-item"},[e("span",{staticClass:"item-name"},[t._v("标签：")]),e("ul",{staticClass:"item-list"},t._l(t.tags,(function(a,s){return e("li",{key:s},[t._v(t._s(a))])})),0)]),e("div",{staticClass:"right-item"},[e("span",{staticClass:"item-name"},[t._v("简介：")]),e("span",{staticClass:"item-info"},[t._v(t._s(t.playlist.description))])])])]):t._e(),e("div",{staticClass:"main-wrap"},[e("el-tabs",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"歌曲列表",name:"song"}},[e("newRow",{attrs:{tableData:t.tableData}})],1),e("el-tab-pane",{attrs:{label:"评论",name:"comment"}},[t.isCommenlength?e("comments",{attrs:{dataList:t.hotComments}},[t._v(t._s("精彩评论("+t.isCommenlength+")"))]):t._e(),e("comments",{attrs:{dataList:t.comments}},[t._v(t._s("最新评论("+t.total+")"))]),e("div",{staticClass:"wrap-pagination"},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-count":t.totalnumber},on:{"current-change":t.currentchange}})],1)],1)],1)],1)]):t._e()},ya=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"right-btn"},[e("i",{staticClass:"el-icon-video-play"}),e("span",[t._v("播放全部")])])}];function ka(t){let a=new Date(t),e=a.getFullYear();e=e<10?"0"+e:e;let s=a.getMonth()+1;s=s<10?"0"+s:s;let i=a.getDate();i=i<10?"0"+i:i;let n=a.getHours();n=n<10?"0"+n:n;let r=a.getMinutes();r=r<10?"0"+r:r;let c=a.getSeconds();return c=c<10?"0"+c:c,e+"-"+s+"-"+i+"  "+n+":"+r+":"+c}function ja(t){const{id:a,name:e,artists:s,duration:i,mvId:n,album:r,...c}=t;return{id:a,name:e,artists:s,album:r,duration:i,...c}}var xa=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.dataList.length?e("div",{staticClass:"comments"},[e("div",[e("h3",[t._t("default")],2)]),e("div",{staticClass:"comment-ul"},t._l(t.dataList,(function(a,s){return e("div",{key:s,staticClass:"comment-item"},[e("img",{staticClass:"item-img",attrs:{src:a.user.avatarUrl,alt:""}}),e("div",{staticClass:"item-text"},[e("div",{staticClass:"text-info"},[e("a",{staticClass:"info-name"},[t._v(t._s(a.user.nickname)+":")]),e("span",{staticClass:"info-text"},[t._v(t._s(a.content))])]),a.beReplied[0]?e("div",{staticClass:"text-info huifu"},[e("a",{staticClass:"info-name"},[t._v(t._s(a.beReplied[0].user.nickname)+":")]),e("span",{staticClass:"info-text"},[t._v(t._s(a.beReplied[0].content))])]):t._e(),e("p",{staticClass:"text-date"},[t._v(t._s(t.$utils.formatDate(a.time)))])])])})),0)]):t._e()},$a=[],La={name:"comments",props:{dataList:{type:Array,default:[]}},data(){return{}}},Ta=La,Ea=(e("4bbf"),Object(m["a"])(Ta,xa,$a,!1,null,"5926f418",null)),Ma=Ea.exports,Oa={name:"TjgdInfo",components:{newRow:Qt,comments:Ma},data(){return{playlist:{},activeName:"song",tableData:[],comments:[],hotComments:[],total:0,currpage:1,totalnumber:0}},computed:{id(){return this.$route.query&&this.$route.query.id},tags(){return this.playlist.tags},isCommenlength(){return this.hotComments.length}},watch:{id:{handler(){this.initTable(),this.initCommentList()},immediate:!0},currpage:{handler(){this.initCommentList()},immediate:!0}},created(){},methods:{async initTable(){const{playlist:t}=await K(this.id);this.playlist=t;let a=t.trackIds.map(({id:t})=>t),{songs:e}=await Q(a.slice(0,50));const s=e.map(({al:t,ar:a,name:e,id:s,dt:i,mv:n})=>ja({id:s,name:e,artists:a,duration:i,mvId:n,album:t}));this.tableData=s},async initCommentList(){const{comments:t,hotComments:a,total:e}=await W(this.id,this.currpage);this.comments=t,this.hotComments=a||[],this.total=e,this.totalnumber=Math.ceil((e-this.isCommenlength)/20)},currentchange(t){this.currpage=t}}},Pa=Oa,Sa=(e("d3e3"),Object(m["a"])(Pa,wa,ya,!1,null,"be70c9e2",null)),Ra=Sa.exports,Na=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tjmvinfo"},[e("div",{staticClass:"tjmvinfo-row"},[t.data?e("div",{staticClass:"tjmv-left"},[e("div",{staticClass:"tjmv-info"},[e("h3",[t._v("MV详情")]),e("div",{staticClass:"video-wrap"},[e("video",{attrs:{controls:"controls",src:t.urlobj.url}})]),e("div",{staticClass:"info-wrap"},[e("div",{staticClass:"info-user"},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:t.data.cover,alt:""}})]),e("span",[t._v(t._s(t.data.artistName))])]),e("div",{staticClass:"info-text"},[e("h2",[t._v(t._s(t.data.name))]),e("span",[t._v("发布："+t._s(t.data.publishTime))]),e("span",[t._v("播放:"+t._s(t.data.playCount)+"次")]),e("p",[t._v(t._s(t.data.desc))])])])]),e("div",{staticClass:"tjmv-comment"},[t.iscomm?e("comments",{attrs:{dataList:t.hotcommentList}},[t._v(t._s("精彩评论("+t.iscomm+")"))]):t._e(),e("comments",{attrs:{dataList:t.commentList}},[t._v(t._s("最新评论("+t.totals+")"))]),e("el-pagination",{attrs:{background:"",layout:"prev, pager, next","page-count":t.total},on:{"current-change":t.currentchange}})],1)]):t._e(),e("div",{staticClass:"tjmv-right"},[e("h3",[t._v("相关推荐")]),e("div",{staticClass:"xgtj-wrap"},t._l(t.mvs,(function(a){return e("div",{key:a.id,staticClass:"xgtj-item",on:{click:function(e){return t.clickXgtjitem(a.id)}}},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:a.cover,alt:""}}),e("span",{staticClass:"wrap-btn el-icon-caret-right"})]),e("div",{staticClass:"item-text"},[e("span",[t._v(t._s(a.name))]),e("p",[t._v(t._s(a.artistName))])])])})),0)])])])},Da=[],Aa={name:"Tjmvinfo",data(){return{urlobj:{},data:{},commentList:[],hotcommentList:[],currpage:1,total:0,totals:0,mvs:[]}},components:{comments:Ma},computed:{id(){return this.$route.query.id},iscomm(){return this.hotcommentList&&this.hotcommentList.length}},watch:{id:{handler(){this.initData(),console.log("重新获取id数据")},immediate:!0},currpage:{handler(){this.initData()},immediate:!0}},methods:{async initData(){const{data:t}=await tt(this.id),a=await at(this.id),{mvs:e}=await st(this.id);this.mvs=e,this.data=t,this.urlobj=a.data,this.initComment()},async initComment(){const{comments:t,hotComments:a,total:e}=await et(this.id,this.currpage);this.commentList=t,this.totals=e,this.total=Math.ceil(e/10),this.hotcommentList=a||[]},currentchange(t){this.currpage=t},clickXgtjitem(t){this.$router.replace("/tjmvinfo?id="+t)}}},Ia=Aa,Ja=(e("8e83"),Object(m["a"])(Ia,Na,Da,!1,null,"51d88323",null)),za=Ja.exports,Ua=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.value?e("div",{staticClass:"searchinfo"},[e("div",{staticClass:"search-head"},[t._v(" "+t._s(t.value)+" "),e("span",[t._v(t._s(t.len))])]),e("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{label:"歌曲",name:"song"}},[e("table",{attrs:{align:"left"}},[e("thead",[e("tr",[e("th",{attrs:{width:"10"}}),e("th",{attrs:{width:"50"}},[t._v("音乐标题")]),e("th",{attrs:{width:"30"}},[t._v("歌手")]),e("th",{attrs:{width:"40"}},[t._v("专辑")]),e("th",{attrs:{width:"25"}},[t._v("时长")])])]),e("tbody",t._l(t.songs,(function(a,s){return e("tr",{key:a.id,on:{click:function(e){return t.clickitem(a.id)}}},[e("td",{attrs:{width:"10"}},[t._v(t._s(s+1))]),e("td",{attrs:{width:"50"}},[t._v(" "+t._s(a.name)+" "),a.alias.length?e("div",{staticClass:"item-names"},[t._v(t._s(a.alias&&a.alias[0]))]):t._e()]),e("td",{attrs:{width:"30"}},[t._v(t._s(a.artists&&a.artists[0].name))]),e("td",{attrs:{width:"40"}},[t._v(t._s(a.album.name))]),e("td",{attrs:{width:"25"}},[t._v(t._s(a.duration))])])})),0)])]),e("el-tab-pane",{attrs:{label:"歌单",name:"songs"}},[e("div",{staticClass:"grow-list"},t._l(t.playlists,(function(a){return e("a",{key:a.id,staticClass:"grow-item",on:{click:function(e){return t.clickTjgditemEvent(a.id)}}},[e("div",{staticClass:"item-imgwrap"},[e("img",{attrs:{src:a.coverImgUrl,alt:""}}),e("span",{staticClass:"wrap-btn el-icon-caret-right"}),e("div",{staticClass:"wrap-text"},[t._v("播放量："+t._s(a.playCount))])]),e("p",{staticClass:"item-textwrap"},[t._v(t._s(a.name))])])})),0)]),e("el-tab-pane",{attrs:{label:"MV",name:"mvs"}},[e("div",{staticClass:"findmv-row"},[t._l(t.mvs,(function(a){return e("div",{key:a.id,staticClass:"findmv-row-item",on:{click:function(e){return t.clickToRouter(a.id)}}},[e("div",{staticClass:"img-wrap"},[e("img",{attrs:{src:a.cover,alt:""}}),e("div",{staticClass:"img-number"},[e("i",{staticClass:"el-icon-caret-right"}),t._v(" "+t._s(a.playCount)+" ")]),e("span",{staticClass:"wrap-btn"},[e("i",{staticClass:"el-icon-caret-right"})])]),e("div",{staticClass:"text-wrap"},[e("div",{staticClass:"text-name"},[t._v(t._s(a.name))]),e("div",{staticClass:"text-zuoz"},[t._v(t._s(a.artistName))])])])})),t.len>4&t.len%4>0?e("div",{staticClass:"findmv-row-item-bw"}):t._e()],2)])],1),e("div",{staticClass:"search-pagina"},[e("el-pagination",{staticStyle:{"text-align":"center"},attrs:{background:"",layout:"prev, pager, next","current-page":t.currpage,"page-count":t.pagecount},on:{"current-change":t.clickPagi}})],1)],1):t._e()},qa=[],Fa={name:"searchinfo",data(){return{activeName:"song",songs:[],len:0,currpage:1,pagecount:0,playlists:[],mvs:[]}},computed:{value(){return this.$route.query&&this.$route.query.q},type(){let t=1;switch(this.activeName){case"song":t=1;break;case"songs":t=1e3;break;case"mvs":t=1004;break}return t}},watch:{value:{handler(){this.initData()},immediate:!0},activeName(){this.initData()},currpage(){this.initData()}},methods:{...g["b"]["setcurrentSongA"],async initData(){const{result:t}=await it(this.value,this.type,this.currpage);switch(this.type){case 1:this.len=t.songCount,this.pagecount=Math.ceil(t.songCount/10),this.songs=t.songs.map(t=>(t.duration=this.fordate(t.duration),t));break;case 1e3:this.len=t.playlistCount,this.playlists=t.playlists,this.pagecount=Math.ceil(t.playlistCount/10),this.playlists=t.playlists.map(t=>(t.playCount=Number(t.playCount)>1e4?Math.floor(t.playCount/1e4)+"万":t.playCount,t));break;case 1004:this.len=t.mvCount,this.mvs=t.mvs,this.pagecount=Math.ceil(t.mvCount/10);break}},fordate(t){let a=t/1e3,e=Math.floor(a/60);return a=Math.floor(a%60),e=e<10?"0"+e:e,a=a<10?"0"+a:a,e+":"+a},clickPagi(t){this.currpage=t},async clickitem(t){let{data:a}=await H(t),e=a&&a[0];this.$store.dispatch("setcurrentSongA",e)},handleClick(){this.currpage=1},clickTjgditemEvent(t){this.$router.push("/tjgdinfo?id="+t)},clickToRouter(t){this.$router.push("/tjmvinfo?id="+t)}}},Ha=Fa,Va=(e("91f6"),Object(m["a"])(Ha,Ua,qa,!1,null,"0363de2c",null)),Za=Va.exports;i["default"].use(x["a"]);const Xa=[{path:"/",name:"Home",component:O,redirect:"/find",children:[{path:"/find",name:"FindPage",component:$t},{path:"/recom",name:"RecomPage",component:Ht},{path:"/newlist",name:"NewlistPage",component:ea},{path:"/newmy",name:"NewmyPage",component:Ca},{path:"/tjgdinfo",name:"TjgdInfo",component:Ra},{path:"/tjmvinfo",name:"Tjmvinfo",component:za},{path:"/search",name:"Search",component:Za}]},{path:"/about",name:"About",component:function(){return e.e("about").then(e.bind(null,"f820"))}}],Ya=new x["a"]({base:"",routes:Xa});var Ba=Ya,Ga={state:{currentSong:{},playstate:!1},getters:{},mutations:{setcurrentSongM(t,a){t.currentSong=a,console.log("----当前歌曲------"+JSON.stringify(t.currentSong))},setplaystateM(t,a){t.playstate=a,console.log("-----当前状态-----"+JSON.stringify(t.playstate))}},actions:{setcurrentSongA({state:t,commit:a},e){a("setcurrentSongM",e),a("setplaystateM",!0)}}};i["default"].use(g["a"]);var Ka=new g["a"].Store({state:{},mutations:{},actions:{},modules:{musicModule:Ga}}),Qa=e("5c96"),Wa=e.n(Qa),te=(e("0fae"),{install(t){t.prototype.$utils=s}});i["default"].use(Wa.a),i["default"].config.productionTip=!1,i["default"].use(te),new i["default"]({router:Ba,store:Ka,render:function(t){return t(j)}}).$mount("#app")},5752:function(t,a,e){},"5b1b":function(t,a,e){},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),i=e.n(s);i.a},7361:function(t,a,e){},"7b01":function(t,a,e){"use strict";var s=e("1d52"),i=e.n(s);i.a},"7e04":function(t,a,e){"use strict";var s=e("c323"),i=e.n(s);i.a},"87a3":function(t,a,e){"use strict";var s=e("7361"),i=e.n(s);i.a},8836:function(t,a,e){},"8b95":function(t,a,e){},"8e83":function(t,a,e){"use strict";var s=e("2154"),i=e.n(s);i.a},"8fbb":function(t,a,e){"use strict";var s=e("2134"),i=e.n(s);i.a},"91e5":function(t,a,e){},"91f6":function(t,a,e){"use strict";var s=e("8836"),i=e.n(s);i.a},"984a":function(t,a,e){"use strict";var s=e("cad1"),i=e.n(s);i.a},"9c0c":function(t,a,e){},a7a7:function(t,a,e){},a84f:function(t,a,e){},ab86:function(t,a,e){},af36:function(t,a,e){"use strict";var s=e("1251"),i=e.n(s);i.a},c323:function(t,a,e){},c77e:function(t,a,e){"use strict";var s=e("91e5"),i=e.n(s);i.a},cad1:function(t,a,e){},d263:function(t,a,e){"use strict";var s=e("ab86"),i=e.n(s);i.a},d3e3:function(t,a,e){"use strict";var s=e("a84f"),i=e.n(s);i.a},d439:function(t,a,e){},d95f:function(t,a,e){"use strict";var s=e("8b95"),i=e.n(s);i.a},f2a7:function(t,a,e){"use strict";var s=e("5752"),i=e.n(s);i.a},f9e1:function(t,a,e){"use strict";var s=e("d439"),i=e.n(s);i.a},fcef:function(t,a,e){"use strict";var s=e("0f81"),i=e.n(s);i.a}});
//# sourceMappingURL=app.ff603267.js.map