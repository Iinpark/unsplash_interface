(this.webpackJsonpresplash=this.webpackJsonpresplash||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"preloader_wrapper__1l-Ra",loader:"preloader_loader__2o4hz",loader__bar:"preloader_loader__bar__3havf",barUp1:"preloader_barUp1__225xD",barUp2:"preloader_barUp2__1l-ne",barUp3:"preloader_barUp3__mm6cD",barUp4:"preloader_barUp4__1hzwd",barUp5:"preloader_barUp5__kMDjJ",loader__ball:"preloader_loader__ball__dmJs1",ball:"preloader_ball__QJqXS"}},105:function(e,t,a){e.exports=a(258)},110:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},25:function(e,t,a){e.exports={mainWrapper:"AppHeader_mainWrapper__3Q9Kk",logoWrapper:"AppHeader_logoWrapper__fa2m8",logo:"AppHeader_logo__MYDYr",logoText:"AppHeader_logoText__3mSMA",navigation:"AppHeader_navigation__uD7xY",navigationButton:"AppHeader_navigationButton__2peAD"}},254:function(e,t,a){},256:function(e,t,a){},258:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(41),c=a.n(o),s=(a(110),a(11)),i=a(8),l=(a(115),a(25)),u=a.n(l),d=(a(116),a(19)),h=a(20),p=function(){return r.a.createElement("div",{className:u.a.mainWrapper},r.a.createElement(i.c,{exact:!0,to:"/",className:u.a.logoWrapper,activeClassName:"active"},r.a.createElement(d.a,{icon:h.c}),r.a.createElement("span",{className:u.a.logoText},"Resplash")),r.a.createElement("div",{className:u.a.navigation},r.a.createElement(i.c,{to:"/search",className:u.a.navigationButton,activeClassName:"active"},r.a.createElement(d.a,{color:"white",icon:h.e}),r.a.createElement("span",null,"\u041f\u043e\u0438\u0441\u043a")),r.a.createElement(i.c,{to:"/favorites",className:u.a.navigationButton,activeClassName:"active"},r.a.createElement(d.a,{color:"white",icon:h.d}),r.a.createElement("span",null,"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"))))},f=a(6),m=a(100),v=a(69),b=a(42),_=a(30),E=a(66),g=a(101),O=a.n(g),y=a(43),P={key:"root",storage:O.a,blacklist:["photos"]},j=Object(f.c)({search:v.b,favorites:b.b,photos:_.b,photosScreen:y.b}),w=Object(E.a)(P,j),S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||f.d,N=a(102),C=a(21),k=a(67),L=a(12),R=a(13),A=a(15),T=a(14),D=a(16),I=a(68),U=function(e){function t(){var e,a;Object(L.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(A.a)(this,(e=Object(T.a)(t)).call.apply(e,[this].concat(o)))).observer=r.a.createRef(),a.setLastCardRef=function(e){null!==e&&(a.observer.current&&a.observer.current.disconnect(),a.observer.current=new IntersectionObserver((function(e){e[0].isIntersecting&&a.props.increasePage()})),e&&a.observer.current.observe(e))},a}return Object(D.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.allPhotos&&this.props.fetchAllPhotos()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I.a,{data:this.props.allPhotos,setLastCardRef:this.setLastCardRef})||"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442")}}]),t}(r.a.Component),x=Object(s.b)((function(e){return console.log("STATE",e),{allPhotos:e.photos.allPhotos}}),(function(e){return{fetchAllPhotos:function(){e(_.a.fetchAllPhotos())},increasePage:function(){e(_.a.increasePage())}}}))(U),H=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,272))})),F=Object(n.lazy)((function(){return a.e(4).then(a.bind(null,273))})),J=Object(n.lazy)((function(){return a.e(5).then(a.bind(null,270))})),W=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,271))})),G=function(){return r.a.createElement(C.c,null,r.a.createElement(n.Suspense,{fallback:r.a.createElement(k.a,null)},r.a.createElement(C.a,{path:"/search",component:H}),r.a.createElement(C.a,{path:"/history",component:F}),r.a.createElement(C.a,{path:"/favorites",component:J}),r.a.createElement(C.a,{exact:!0,path:"/",component:x}),r.a.createElement(C.a,{path:"/photo",component:W})))},z=function(){var e=Object(f.e)(w,S(Object(f.a)(m.a)));return{store:e,persistor:Object(E.b)(e)}}(),B=z.store,M=z.persistor;var V=function(){return r.a.createElement(s.a,{store:B},r.a.createElement(N.a,{loading:null,persistor:M},r.a.createElement(i.a,null,r.a.createElement("div",{className:"MainWrapper"},r.a.createElement("div",{className:"header"},r.a.createElement(p,null)),r.a.createElement("div",{className:"content"},r.a.createElement(G,null),r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"Developed by"," ",r.a.createElement("a",{href:"https://t.me/sultanesbolatov",target:"blank",className:"SultanEsbolatov"},"Sultan Esbolatov")),r.a.createElement("span",null,"\u2055Made on Earth for Humans\u2055")))))))};a(257),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},30:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(9),r=a(2),o=a(7),c=1,s="FETCH_SUCCESS",i="INCREASE_PAGE",l={fetchSuccess:function(e){return{type:s,photos:e}},fetchAllPhotos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(t){o.a.photos(e).then((function(e){t(l.fetchSuccess(e))})).catch((function(t){alert("\n          \u0415\u0441\u043b\u0438 \u0432\u044b \u0432\u0438\u0434\u0438\u0442\u0435 \u044d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435, \u0437\u043d\u0430\u0447\u0438\u0442 \u043c\u044b \u0438\u0441\u0447\u0435\u0440\u043f\u0430\u043b\u0438 \u043b\u0438\u043c\u0438\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432. \n          Unsplash \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0434\u0435\u043b\u0430\u0442\u044c \u0431\u043e\u043b\u0435\u0435 50 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440 \u0432 \u0447\u0430\u0441.\n          \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b\u0445 \u0441 \u044d\u0442\u043e\u0433\u043e  \u043a\u043b\u0438\u0435\u043d\u0442\u0430: ".concat(e,"\n      "))}))}},increasePage:function(){return c+=1,function(e){e(l.fetchAllPhotos(c))}}},u={allPhotos:void 0,currentPage:1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(r.a)({},e,{allPhotos:Object(n.a)(new Set([].concat(Object(n.a)(e.allPhotos||[]),Object(n.a)(t.photos))))});case i:return Object(r.a)({},e,{currentPage:null===t||void 0===t?void 0:t._cp});default:return e}}},32:function(e,t,a){e.exports={wrapper:"cardStyle_wrapper__3wLqN",card:"cardStyle_card__3Ox3Q",informationOverlay:"cardStyle_informationOverlay__hwRyk",image:"cardStyle_image__JVuE5"}},42:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return i}));var n=a(9),r="TOGGLE_FAVORITE",o="DELETE_FAVORITE",c={toggleFavorite:function(e){return{type:r,photoJson:e}},deleteFavorite:function(e){return{type:o,photoID:e}}},s={favoritesList:[],total:0},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:var a=e.favoritesList.some((function(e){return l(e,t)})),o=t.photoJson;return a?(delete o.isLiked,Object.assign({},e,{favoritesList:e.favoritesList.filter((function(e){return!l(e,t)}))})):(o.isLiked=!0,Object.assign({},e,{favoritesList:[].concat(Object(n.a)(e.favoritesList),[o])}));default:return e}},l=function(e,t){return(null===e||void 0===e?void 0:e.id)===t.photoJson.id}},43:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(2),r=a(7),o="SET_CURRENT_PHOTO_SUCCESS",c="SET_CURRENT_PHOTO_PENDING",s="GET_RELATED_PHOTOS_PENDING",i="GET_RELATED_PHOTOS_SUCCESS",l={setCurrentPhoto:function(e){return function(t){t(l.setCurrentPhotoPending()),r.a.getPhoto(e).then((function(e){t(l.setCurrentPhotoSuccess(e),t(l.getRelatedPhotos(e.alt_description)))}))}},setCurrentPhotoPending:function(){return{type:c}},setCurrentPhotoSuccess:function(e){return{type:o,currentPhoto:e}},getRelatedPhotos:function(e){return function(t){t(l.getRelatedPhotosPending()),r.a.searchPhotos(e).then((function(e){t(l.getRelatedPhotosSuccess(e.results))}))}},getRelatedPhotosSuccess:function(e){return{type:i,relatedPhotos:e}},getRelatedPhotosPending:function(){return{type:s}}},u={currentPhoto:void 0,relatedPhotos:void 0,isRelatedPhotosPending:!0,isCurrentPhotoPending:!0},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(n.a)({},e,{currentPhoto:t.currentPhoto,isCurrentPhotoPending:!1});case i:return Object(n.a)({},e,{relatedPhotos:t.relatedPhotos,isRelatedPhotosPending:!1});case c:return Object(n.a)({},e,{isCurrentPhotoPending:!0});default:return Object(n.a)({},e)}}},65:function(e,t,a){e.exports={svg:"Instagram_svg__1I4sW"}},67:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(10),c=a.n(o);t.a=function(){return r.a.createElement("div",{className:c.a.wrapper},r.a.createElement("div",{class:c.a.loader},r.a.createElement("div",{class:c.a.loader__bar}),r.a.createElement("div",{class:c.a.loader__bar}),r.a.createElement("div",{class:c.a.loader__bar}),r.a.createElement("div",{class:c.a.loader__bar}),r.a.createElement("div",{class:c.a.loader__bar}),r.a.createElement("div",{class:c.a.loader__ball})))}},68:function(e,t,a){"use strict";var n=a(12),r=a(13),o=a(15),c=a(14),s=a(16),i=a(0),l=a.n(i),u=a(11),d=a(103),h=a.n(d),p=a(20),f=a(19),m=a(8),v=a(7),b=(a(254),a(42)),_=a(43),E=a(97),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(c.a)(t).call(this,e))).state={isLiked:a.props.json.isLiked},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"onViewPhoto",value:function(){var e=this.props.json.id;this.props.viewPhoto(e)}},{key:"render",value:function(){var e,t=this,a=null===(e=this.props.json)||void 0===e?void 0:e.isLiked,n=this.props.json.user;return l.a.createElement("div",{className:"card-overlay"},l.a.createElement("div",{className:"profile-info"},l.a.createElement("img",{src:n.profile_image.medium,className:"profile-photo",alt:"profile"}),l.a.createElement("div",{className:"profile-info-name"},l.a.createElement(E.a,{instagram_username:n.instagram_username}),l.a.createElement("span",null,n.name))),l.a.createElement("div",{className:"information-buttons"},l.a.createElement("button",{className:"information-button",style:a?{color:"red"}:{color:"white"},onClick:function(){t.props.toggleFavorite(t.props.json)}},l.a.createElement(f.a,{className:"information-icon",icon:p.d})),l.a.createElement(m.b,{to:"/photo",className:"information-button",onClick:this.onViewPhoto.bind(this)},l.a.createElement(f.a,{className:"information-icon",icon:p.b})),l.a.createElement("a",{className:"information-button",onClick:function(){v.a.download(t.props.json)},href:this.props.json.links.download+"?force=true"},l.a.createElement(f.a,{className:"information-icon",icon:p.a}))))}}]),t}(l.a.Component),O=Object(u.b)((function(e){return{favoritesList:e.favorites.favoritesList}}),(function(e){return{toggleFavorite:function(t){e(b.a.toggleFavorite(t))},viewPhoto:function(t){e(_.a.setCurrentPhoto(t))}}}))(g),y=a(32),P=a.n(y),j=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={isImageLoaded:!1,visibility:{visibility:"hidden"}},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.src,n=t.altDesc,r=t.json,o=t.setRef;return l.a.createElement("figure",{className:P.a.wrapper,ref:function(e){o&&o(e)}},l.a.createElement("div",{className:P.a.card},l.a.createElement("img",{src:a,alt:n,className:P.a.image,style:this.state.visibility,onLoad:function(){e.setState({isImageLoaded:!0,visibility:{visibility:"visible"}})}}),l.a.createElement("div",{className:P.a.informationOverlay},l.a.createElement(O,{json:r}))))}}]),t}(l.a.Component),w=(a(256),function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"compareWithFavorites",value:function(){var e,t=this.props.favoritesList,a=null===(e=this.props)||void 0===e?void 0:e.data;if(a){var n=!0,r=!1,o=void 0;try{for(var c,s=t[Symbol.iterator]();!(n=(c=s.next()).done);n=!0){var i=c.value,l=!0,u=!1,d=void 0;try{for(var h,p=a[Symbol.iterator]();!(l=(h=p.next()).done);l=!0){var f=h.value;i.id===f.id&&(f.isLiked=!0)}}catch(m){u=!0,d=m}finally{try{l||null==p.return||p.return()}finally{if(u)throw d}}1}}catch(m){r=!0,o=m}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}}}},{key:"render",value:function(){var e=this;this.compareWithFavorites();var t=this.props.setLastCardRef;return l.a.createElement(h.a,{className:"CardList",elementType:"div",disableImagesLoaded:!1,updateOnEachImageLoad:!1},this.props.data?this.props.data.map((function(a,n){return n===e.props.data.length-1?l.a.createElement(j,{setRef:t,src:a.urls.small,altDesc:a.alt_description,json:a,key:a.id}):l.a.createElement(j,{src:a.urls.small,altDesc:a.alt_description,json:a,key:a.id})})):null)}}]),t}(l.a.Component));t.a=Object(u.b)((function(e){return{favoritesList:e.favorites.favoritesList}}))(w)},69:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(9),r=a(2),o=a(7),c="SEARCH_PENDING",s="SEARCH_SUCCESS",i="SEARCH_FAILURE",l="ADD_SEARCH_KEYWORD",u={searchSuccsess:function(e){return{type:s,results:e.results}},searchFailure:function(){return{type:i}},searchPending:function(){return{type:c}},addSearchKeyword:function(e){return{type:l,keyword:e}},doSearch:function(e){return""===e.trim()&&alert("\u041f\u0443\u0441\u0442\u043e\u0439 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),function(t){t(u.searchPending()),t(u.addSearchKeyword(e)),o.a.searchPhotos(e).then((function(e){t(u.searchSuccsess(e))})).catch((function(e){alert("\u043d\u0435\u0443\u0434\u0430\u0447\u0430 \u043f\u0440\u0438 \u043f\u043e\u0438\u0441\u043a\u0435",e),t(u.searchFailure())}))}}},d={search_keywords:[],search_results:void 0,is_pending:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,a=t.type,o=t.results,u=t.keyword;switch(a){case c:return Object(r.a)({},e,{is_pending:!0});case s:return Object(r.a)({},e,{search_results:o,is_pending:!1});case i:return Object(r.a)({},e,{search_results:"no matches",is_pending:!1});case l:var h=new Set(Object(n.a)(e.search_keywords));return h.add(u),Object(r.a)({},e,{search_keywords:Object(n.a)(h)});default:return Object(r.a)({},e)}}},7:function(e,t,a){"use strict";var n=a(28),r=a.n(n);a.d(t,"a",(function(){return c}));var o=new r.a({accessKey:"rUttPX0GjgLp7kiiXGQNNTqLIuS2XGtb3OP6L0ZqSQY"}),c={getPhoto:function(e){return o.photos.getPhoto(e).then(n.toJson)},photos:function(e){if(!(e>=50))return o.photos.listPhotos(e,4,"latest").then(n.toJson).then((function(e){return e}));alert("\n      \u0412\u044b \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 ".concat(e," \u0440\u0430\u0437\n      Unsplash \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0431\u043e\u043b\u0435\u0435 50 \u0440\u0430\u0437\n      "))},download:function(e){o.photos.downloadPhoto(e)},listCollections:function(){return o.collections.listCollections(1,10,"popular").then(n.toJson).then((function(e){return e}))},searchPhotos:function(e){return o.search.photos(e,1,10).then(n.toJson).then((function(e){return e}))}}},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(104);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createElement("path",{d:"m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"}),l=r.a.createElement("path",{d:"m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"}),u=r.a.createElement("circle",{cx:18.406,cy:5.595,r:1.439}),d=function(e){var t=e.svgRef,a=e.title,n=s(e,["svgRef","title"]);return r.a.createElement("svg",c({id:"Bold",enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,ref:t},n),a?r.a.createElement("title",null,a):null,i,l,u)},h=r.a.forwardRef((function(e,t){return r.a.createElement(d,c({svgRef:t},e))})),p=(a.p,a(65)),f=a.n(p);t.a=function(e){var t=e.instagram_username;return o.isMobile?r.a.createElement("a",{href:"instagram://user?username=".concat(t)},r.a.createElement(h,{height:"1.3em",width:"1.3em",className:f.a.svg})," @",t):r.a.createElement("a",{href:"https://instagram.com/".concat(t),target:"blank"},r.a.createElement(h,{height:"1.3em",width:"1.3em",className:f.a.InstagramLogo})," ","@",t)}}},[[105,1,2]]]);
//# sourceMappingURL=main.4b04281e.chunk.js.map