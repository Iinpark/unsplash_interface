(this.webpackJsonpunsplash_interface=this.webpackJsonpunsplash_interface||[]).push([[0],{35:function(e,t,n){e.exports=n(74)},40:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),c=n.n(r),s=(n(40),n(7)),i=n(13),l=(n(45),n(46),n(11)),u=n(12),h=function(){return o.a.createElement("div",{className:"container-fluid mainWrapper"},o.a.createElement(i.b,{to:"/home",className:"logoWrapper"},o.a.createElement(l.a,{icon:u.c}),o.a.createElement("span",{className:"logoText"},"unsplash_interface")),o.a.createElement("div",{className:"navigation"},o.a.createElement(i.b,{to:"/search",className:"navigation-button"},o.a.createElement(l.a,{color:"white",icon:u.f}),o.a.createElement("span",null,"\u041f\u043e\u0438\u0441\u043a")),o.a.createElement(i.b,{to:"/favorites",className:"navigation-button"},o.a.createElement(l.a,{color:"white",icon:u.d}),o.a.createElement("span",null,"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435")),o.a.createElement(i.b,{to:"/history",className:"navigation-button"},o.a.createElement(l.a,{color:"white",icon:u.e}),o.a.createElement("span",null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430"))))},p=n(17),m=n(34),d=n(21),f=n(14),E=n(18),v="rUttPX0GjgLp7kiiXGQNNTqLIuS2XGtb3OP6L0ZqSQY",_=new(n.n(E).a)({accessKey:v}),b=function(e){return _.photos.getPhoto(e).then(E.toJson)},O=function(){return _.photos.listPhotos(1,10,"latest").then(E.toJson).then((function(e){return e}))},P=function(e){fetch(e.links.download_location+"?client_id=".concat(v)).then((function(e){return e.json()})).then((function(e){console.log(typeof e),window.open(e.url)})),_.photos.downloadPhoto(e)},S=function(){return _.collections.listCollections(1,10,"popular").then(E.toJson).then((function(e){return e}))},g=function(e){return _.search.photos(e,1,10).then(E.toJson).then((function(e){return e}))},j={SEARCH_PENDING:"SEARCH_PENDING",SEARCH_SUCCESS:"SEARCH_SUCCESS",SEARCH_FAILURE:"SEARCH_FAILURE",ADD_SEARCH_KEYWORD:"ADD_SEARCH_KEYWORD"},y={searchSuccsess:function(e){return{type:j.SEARCH_SUCCESS,results:e.results}},searchFailure:function(){return{type:j.SEARCH_NO_MATHCES}},searchPending:function(){return{type:j.SEARCH_PENDING}},addSearchKeyword:function(e){return{type:j.ADD_SEARCH_KEYWORD,keyword:e}},doSearch:function(e){return""===e.trim()&&alert("\u041f\u0443\u0441\u0442\u043e\u0439 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),function(t){t(y.searchPending()),t(y.addSearchKeyword(e)),g(e).then((function(e){t(y.searchSuccsess(e))})).catch((function(e){alert("\u043d\u0435\u0443\u0434\u0430\u0447\u0430 \u043f\u0440\u0438 \u043f\u043e\u0438\u0441\u043a\u0435",e),t(y.searchFailure())}))}}},N={search_keywords:[],search_results:void 0,is_pending:!1},C="TOGGLE_FAVORITE",w=function(e){return{type:C,photoJson:e}},k={favoritesList:[],total:0},R=function(e,t){return(null===e||void 0===e?void 0:e.id)===t.photoJson.id},A="FETCH_SUCCESS",L="SET_CURRENT_PHOTO_SUCCESS",T="GET_RELATED_PHOTOS_PENDING",D="GET_RELATED_PHOTOS_SUCCESS",H={fetchSuccess:function(e){return{type:A,photos:e}},setCurrentPhotoSuccess:function(e){return{type:L,currentPhoto:e}},fetchAllPhotos:function(){return function(e){O().then((function(t){e(H.fetchSuccess(t))})).catch((function(e){alert(e)}))}},setCurrentPhoto:function(e){return function(t){b(e).then((function(e){t(H.setCurrentPhotoSuccess(e),t(H.getRelatedPhotos(e.alt_description)))}))}},getRelatedPhotos:function(e){return function(t){t(H.getRelatedPhotosPending()),g(e).then((function(e){t(H.getRelatedPhotosSuccess(e.results))}))}},getRelatedPhotosSuccess:function(e){return{type:D,relatedPhotos:e}},getRelatedPhotosPending:function(){return{type:T}}},U={allPhotos:void 0,currentPhoto:void 0,relatedPhotos:void 0,isRelatedPhotosPending:!0},B=Object(p.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.results,o=t.keyword;switch(n){case j.SEARCH_PENDING:return Object(f.a)({},e,{is_pending:!0});case j.SEARCH_SUCCESS:return Object(f.a)({},e,{search_results:a,isPending:!1});case j.SEARCH_FAILURE:return Object(f.a)({},e,{search_results:"no matches"});case j.ADD_SEARCH_KEYWORD:var r=Object(d.a)(e.search_keywords);return r.push(o),Object(f.a)({},e,{search_keywords:r});default:return Object(f.a)({},e)}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:var n=e.favoritesList.some((function(e){return R(e,t)})),a=t.photoJson;return n?(delete a.isLiked,Object.assign({},e,{favoritesList:e.favoritesList.filter((function(e){return!R(e,t)}))})):(a.isLiked=!0,Object.assign({},e,{favoritesList:[].concat(Object(d.a)(e.favoritesList),[a])}));default:return e}},photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(f.a)({},e,{allPhotos:t.photos});case L:return Object(f.a)({},e,{currentPhoto:t.currentPhoto});case D:return Object(f.a)({},e,{relatedPhotos:t.relatedPhotos,isRelatedPhotosPending:!1});default:return e}}}),I=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,G=Object(p.e)(B,I(Object(p.a)(m.a))),W=n(2),x=n(3),F=n(5),K=n(4),J=n(6),M=n(15),X=(n(67),n(68),function(e){var t=e.itemTitle;return o.a.createElement("span",null,t)}),V=function(e){function t(){return Object(W.a)(this,t),Object(F.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return console.log("H TEXT LIST",this.props),o.a.createElement("div",null,this.props.data?this.props.data.map((function(e){return o.a.createElement(X,{itemTitle:e})})):"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442")}}]),t}(o.a.PureComponent),Y=function(e){function t(e){var n;return Object(W.a)(this,t),(n=Object(F.a)(this,Object(K.a)(t).call(this,e))).state={collectionsList:void 0,searchKeyword:""},n}return Object(J.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){var e=this;S().then((function(t){var n=t.map((function(e){return e.title}));e.setState({collectionsList:n})}))}},{key:"viewCollection",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"search-header-wrapper container-fluid"},o.a.createElement("input",{className:"search-text-input",type:"text",placeholder:"\u0418\u0441\u0441\u043b\u0435\u0434\u0443\u0439",onChange:function(t){e.setState({searchKeyword:t.target.value})}}),o.a.createElement("button",{onClick:function(){e.props.doSearch(e.state.searchKeyword)}},"\u043f\u043e\u0438\u0441\u043a"),o.a.createElement("hr",{size:"10",color:"white",width:"80%"}),o.a.createElement("div",{className:"collections-list"},o.a.createElement(V,{data:this.state.collectionsList})))}}]),t}(o.a.Component),Z=Object(s.b)((function(e){return{search_results:e.search.search_results,is_pending:e.search.is_pending}}),(function(e){return{doSearch:function(t){e(y.doSearch(t))}}}))(Y),Q=(n(69),function(e){function t(e){var n;return Object(W.a)(this,t),(n=Object(F.a)(this,Object(K.a)(t).call(this,e))).state={isLiked:n.props.json.isLiked},n}return Object(J.a)(t,e),Object(x.a)(t,[{key:"onViewPhoto",value:function(){var e=this.props.json.id;this.props.viewPhoto(e)}},{key:"render",value:function(){var e,t=this,n=null===(e=this.props.json)||void 0===e?void 0:e.isLiked,a=this.props.json.user;return o.a.createElement("div",{className:"card-overlay"},o.a.createElement("div",{className:"profile-info"},o.a.createElement("img",{src:a.profile_image.medium,className:"profile-photo",alt:"profile"}),o.a.createElement("div",{className:"profile-info-name"},o.a.createElement("span",null,"@",a.instagram_username),o.a.createElement("span",null,a.name))),o.a.createElement("div",{className:"information-buttons"},o.a.createElement("button",{className:"information-button",style:n?{color:"red"}:{color:"white"},onClick:function(){t.props.toggleFavorite(t.props.json)}},o.a.createElement(l.a,{className:"information-icon",icon:u.d})),o.a.createElement(i.b,{to:"/photo",className:"information-button",onClick:this.onViewPhoto.bind(this)},o.a.createElement(l.a,{className:"information-icon",icon:u.b})),o.a.createElement("button",{className:"information-button",onClick:function(){P(t.props.json)}},o.a.createElement(l.a,{className:"information-icon",icon:u.a}))))}}]),t}(o.a.Component)),q=Object(s.b)((function(e){return{favoritesList:e.favorites.favoritesList}}),(function(e){return{toggleFavorite:function(t){e(w(t))},viewPhoto:function(t){e(H.setCurrentPhoto(t))}}}))(Q),z=(n(70),function(e){var t=e.src,n=e.altDesc,a=e.json;return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:t,alt:n,className:"image"}),o.a.createElement("div",{className:"information-overlay"},o.a.createElement(q,{json:a})))}),$=(n(71),function(e){function t(){return Object(W.a)(this,t),Object(F.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"root"},this.props.data?this.props.data.map((function(e){return o.a.createElement(z,{src:e.urls.small,altDesc:e.alt_description,json:e})})):null)}}]),t}(o.a.Component)),ee=function(e){function t(e){var n;return Object(W.a)(this,t),(n=Object(F.a)(this,Object(K.a)(t).call(this,e))).state={search_results:void 0},n}return Object(J.a)(t,e),Object(x.a)(t,[{key:"componentWillUnmount",value:function(){this.state.search_results=void 0,console.log("UNMOUNTING",this.state.search_results)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Z,null),o.a.createElement($,{data:this.state.search_results})||"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u043d\u0435\u0442")}}],[{key:"getDerivedStateFromProps",value:function(e){return{search_results:e.search_results}}}]),t}(o.a.Component),te=Object(s.b)((function(e){return{search_results:e.search.search_results}}))(ee),ne=function(e){function t(){return Object(W.a)(this,t),Object(F.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAllPhotos()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement($,{data:this.props.allPhotos})||"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442")}}]),t}(o.a.Component),ae=Object(s.b)((function(e){return console.log("STATE",e),{allPhotos:e.photos.allPhotos}}),(function(e){return{fetchAllPhotos:function(){e(H.fetchAllPhotos())}}}))(ne),oe=(n(72),Object(s.b)((function(e){return{search_history_list:e.search.search_keywords}}))((function(e){var t=e.search_history_list;return o.a.createElement("div",{className:"history-header-wrapper"},o.a.createElement("span",{className:"yourQuerys"},"\u0412\u0430\u0448\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b"),o.a.createElement(V,{data:t}))}))),re=function(e){function t(){return Object(W.a)(this,t),Object(F.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return o.a.createElement(oe,null)}}]),t}(o.a.Component),ce=Object(s.b)((function(e){return{favoritesList:e.favorites.favoritesList}}))((function(e){var t=e.favoritesList;return o.a.createElement($,{data:t})})),se=n(8),ie=n.n(se),le=function(e){function t(){return Object(W.a)(this,t),Object(F.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(x.a)(t,[{key:"tagList",value:function(e){return o.a.createElement("div",{className:ie.a.relatedTags},o.a.createElement("span",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0442\u0435\u0433\u0438"),o.a.createElement("div",null,e?e.map((function(e){return o.a.createElement("span",{style:{display:"flexbox",width:"fit-content"}},e.title)})):o.a.createElement("h2",null,"\u0413\u0440\u0443\u0437\u0438\u043c\u0441\u044f")))}},{key:"relatedPhotos",value:function(e){return o.a.createElement($,{data:e})}},{key:"render",value:function(){var e,t;console.log("PHOTOS SCREEN",this.props.currentPhoto);var n=this.props.currentPhoto,a=null===n||void 0===n?void 0:n.user;return o.a.createElement("div",{className:ie.a.photosScreenWrapper},o.a.createElement("div",{className:ie.a.photosScreenBackground},o.a.createElement("img",{src:null===n||void 0===n?void 0:null===(e=n.urls)||void 0===e?void 0:e.regular,alt:"beautyful background"})),o.a.createElement("section",{className:ie.a.photosScreenOverlay},o.a.createElement("div",{className:ie.a.photoUpperButtons},o.a.createElement("div",{className:ie.a.profileInfo},o.a.createElement("img",{className:ie.a.profilePhoto,src:null===a||void 0===a?void 0:a.profile_image.medium,alt:"profile avatar"}),o.a.createElement("div",{className:ie.a.profileText},o.a.createElement("h1",{className:ie.a.profileName},null===a||void 0===a?void 0:a.username),o.a.createElement("span",{className:ie.a.profileLink},"@",null===a||void 0===a?void 0:a.instagram_username))),o.a.createElement("div",{className:ie.a.upperButtons},o.a.createElement("button",{className:ie.a.upperButtonsHeart},o.a.createElement(l.a,{color:"#828282",icon:u.d})),o.a.createElement("button",{className:ie.a.upperButtonsDownload},"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"))),o.a.createElement("img",{className:ie.a.photo,src:null===n||void 0===n?void 0:null===(t=n.urls)||void 0===t?void 0:t.regular,alt:"."}),this.tagList(null===n||void 0===n?void 0:n.tags)),o.a.createElement("section",null,o.a.createElement("h2",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"),this.relatedPhotos(this.props.relatedPhotos)))}}]),t}(o.a.Component),ue=Object(s.b)((function(e){return{currentPhoto:e.photos.currentPhoto,relatedPhotos:e.photos.relatedPhotos,isRelatedPhotosPending:e.photos.isRelatedPhotosPending}}),(function(e){return{getRelatedPhotos:function(t){return e(H.getRelatedPhotos(t))}}}))(le),he=function(e){function t(){return Object(W.a)(this,t),Object(F.a)(this,Object(K.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){return o.a.createElement(M.c,null,o.a.createElement(M.a,{path:"/search"},o.a.createElement(te,null)),o.a.createElement(M.a,{path:"/history"},o.a.createElement(re,null)),o.a.createElement(M.a,{path:"/favorites"},o.a.createElement(ce,null)),o.a.createElement(M.a,{exact:!0,path:"/home"},o.a.createElement(ae,null)),o.a.createElement(M.a,{path:"/photo"},o.a.createElement(ue,null)))}}]),t}(o.a.PureComponent);var pe=function(){return o.a.createElement(s.a,{store:G},o.a.createElement(i.a,null,o.a.createElement("div",{className:"header"},o.a.createElement(h,null)),o.a.createElement("div",{className:"content"},o.a.createElement(he,null),o.a.createElement("div",{className:"manifesto"},o.a.createElement("span",null,"2020"),o.a.createElement("a",{href:"https://youtu.be/A0FZIwabctw",title:"\u0423\u0437\u043d\u0430\u0442\u044c \u0447\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442",target:"blank"},"\u2055Made on Earth for Humans\u2055")))))};n(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports={photosScreenWrapper:"PhotosScreen_photosScreenWrapper__1AKTW",photosScreenBackground:"PhotosScreen_photosScreenBackground__3dWyu",photosScreenOverlay:"PhotosScreen_photosScreenOverlay__3pigU",photo:"PhotosScreen_photo__1ExPw",profileInfo:"PhotosScreen_profileInfo__464e3",profilePhoto:"PhotosScreen_profilePhoto__1SZpd",profileName:"PhotosScreen_profileName__1NO5V",photoUpperButtons:"PhotosScreen_photoUpperButtons__MAGEE",upperButtonsDownload:"PhotosScreen_upperButtonsDownload__10wsA",upperButtons:"PhotosScreen_upperButtons__3vZ4i",upperButtonsHeart:"PhotosScreen_upperButtonsHeart__3jnSg",relatedTags:"PhotosScreen_relatedTags__xBPyG"}}},[[35,1,2]]]);
//# sourceMappingURL=main.14578dd2.chunk.js.map