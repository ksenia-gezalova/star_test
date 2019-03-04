(function(t){function e(e){for(var i,r,c=e[0],o=e[1],p=e[2],l=0,h=[];l<c.length;l++)r=c[l],n[r]&&h.push(n[r][0]),n[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,p||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(i=!1)}i&&(a.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},a=[];function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/star_test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var u=o;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("64a9"),n=s.n(i);n.a},"075c":function(t,e,s){"use strict";var i=s("6ddc"),n=s.n(i);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ships"},[s("h1",{staticClass:"ships__title"},[t._v("galactic base")]),t.ships.length>0?s("div",[s("div",{staticClass:"ships__container"},[s("div",{staticClass:"ships__search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"Search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),0!==t.filteredList.length?s("ul",{staticClass:"ships__list"},t._l(t.filteredList,function(e,i){return s("li",{key:i,staticClass:"ships__item",class:{"ships__item--light":i%2!==0,"ships__item--dark":i%2===0}},[s("router-link",{attrs:{to:"/ship?url="+e.url}},[t._v(t._s(e.name))])],1)}),0):s("div",{staticClass:"ships__empty"},[t._v("ship not found")])])]):s("div",{staticClass:"ships__loader"},[t._v("Loading...")]),s("paginate",{attrs:{"page-count":Math.round(t.shipsCount/10),"click-handler":t.clickCallback,"prev-text":"Prev","next-text":"Next","container-class":"paginate"}})],1)},c=[],o=(s("7f7f"),s("6762"),s("2fdb"),s("386d"),s("bc3a")),p=s.n(o),u={name:"ships",data:function(){return{search:"",ships:[],shipsCount:null,pageNum:1}},methods:{getShipList:function(){var t=this;this.ships=[],p.a.get("https://swapi.co/api/starships/?page="+this.pageNum).then(function(e){t.ships=e.data.results,t.shipsCount=e.data.count}).catch(function(t){console.log(t)})},clickCallback:function(t){this.pageNum=t,this.getShipList()}},computed:{filteredList:function(){var t=this;return""===this.search?this.ships:this.ships.filter(function(e){return console.log(t.search),e.name.toLowerCase().includes(t.search.toLowerCase())})}},created:function(){this.getShipList()},beforeMount:function(){this.search=this.$route.query.search||""}},l=u,h=(s("e15a"),s("075c"),s("2877")),_=Object(h["a"])(l,r,c,!1,null,"6763d761",null),d=_.exports,f={name:"app",components:{Ships:d}},m=f,v=(s("034f"),Object(h["a"])(m,n,a,!1,null,null,null)),g=v.exports,b=s("8832"),y=s.n(b),w=s("8c4f"),C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ship"},[s("h1",{staticClass:"ship__title"},[t._v(t._s(t.item.name))]),s("div",{staticClass:"ship__container"},[s("p",[t._v("MGLT: "+t._s(t.item.MGLT))]),s("p",[t._v("cargo_capacity: "+t._s(t.item.cargo_capacity))]),s("p",[t._v("consumables: "+t._s(t.item.consumables))]),s("p",[t._v("cost_in_credits: "+t._s(t.item.cost_in_credits))]),s("p",[t._v("created: "+t._s(t.item.created.replace("T","").replace("Z"," ")||t.item.created))]),s("p",[t._v("crew: "+t._s(t.item.crew))]),s("p",[t._v("edited: "+t._s(t.item.edited.replace("T"," ").replace("Z"," ")||t.item.edited))]),0!==t.item.films.length?s("p",[t._v("films: "+t._s(t.item.films))]):t._e(),s("p",[t._v("hyperdrive_rating: "+t._s(t.item.hyperdrive_rating))]),s("p",[t._v("length: "+t._s(t.item.length))]),s("p",[t._v("manufacturer: "+t._s(t.item.manufacturer))]),s("p",[t._v("max_atmosphering_speed: "+t._s(t.item.max_atmosphering_speed))]),s("p",[t._v("model: "+t._s(t.item.model))]),s("p",[t._v("passengers: "+t._s(t.item.passengers))]),0!==t.item.pilots.length?s("p",[t._v("pilots: "+t._s(t.item.pilots))]):t._e(),s("p",[t._v("starship_class: "+t._s(t.item.starship_class))])])])},x=[],S={name:"Ship",data:function(){return{item:""}},methods:{getShip:function(){var t=this;p.a.get(this.$route.query.url).then(function(e){console.log(e.data),t.item=e.data}).catch(function(t){console.log(t)})}},created:function(){this.getShip()}},O=S,j=(s("ba85"),Object(h["a"])(O,C,x,!1,null,"1d37794a",null)),k=j.exports;i["a"].use(w["a"]);var L=new w["a"]({routes:[{path:"/",name:"ships",component:d},{path:"/ship",name:"ship",component:k}]});L.beforeEach(function(t,e,s){window.scrollTo(0,0),s()});var M=L;i["a"].component("paginate",y.a),i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(g)},router:M}).$mount("#app")},"64a9":function(t,e,s){},"6ddc":function(t,e,s){},ba85:function(t,e,s){"use strict";var i=s("e182"),n=s.n(i);n.a},d7f5:function(t,e,s){},e15a:function(t,e,s){"use strict";var i=s("d7f5"),n=s.n(i);n.a},e182:function(t,e,s){}});
//# sourceMappingURL=app.c2af7718.js.map