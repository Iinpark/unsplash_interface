(this.webpackJsonpunsplash_interface=this.webpackJsonpunsplash_interface||[]).push([[0],{22:function(e,t,a){e.exports={searchHeaderWrapper:"searchHeader_searchHeaderWrapper__3_cYP",searchTextInput:"searchHeader_searchTextInput__1F5Cd",collectionsList:"searchHeader_collectionsList__22j05"}},29:function(e,t,a){e.exports={placeholderWrapper:"placeholder_placeholderWrapper__3Fh6V",placeholder:"placeholder_placeholder___e8lr"}},38:function(e,t,a){e.exports={searchResultsScreen:"searchResultsScreen_searchResultsScreen__1ZGx9"}},39:function(e,t,a){e.exports=a.p+"static/media/empty_placeholder.ced1b148.png"},40:function(e,t,a){e.exports=a(79)},45:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),s=(a(45),a(7)),l=a(13),i=(a(50),a(51),a(10)),u=a(11),h=function(){return r.a.createElement("div",{className:"container-fluid mainWrapper"},r.a.createElement(l.b,{to:"/",className:"logoWrapper"},r.a.createElement(i.a,{icon:u.c}),r.a.createElement("span",{className:"logoText"},"unsplash_interface")),r.a.createElement("div",{className:"navigation"},r.a.createElement(l.b,{to:"/search",className:"navigation-button"},r.a.createElement(i.a,{color:"white",icon:u.f}),r.a.createElement("span",null,"\u041f\u043e\u0438\u0441\u043a")),r.a.createElement(l.b,{to:"/favorites",className:"navigation-button"},r.a.createElement(i.a,{color:"white",icon:u.d}),r.a.createElement("span",null,"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435")),r.a.createElement(l.b,{to:"/history",className:"navigation-button"},r.a.createElement(i.a,{color:"white",icon:u.e}),r.a.createElement("span",null,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430"))))},p=a(17),m=a(36),d=a(21),f=a(14),E=a(18),v=new(a.n(E).a)({accessKey:"rUttPX0GjgLp7kiiXGQNNTqLIuS2XGtb3OP6L0ZqSQY"}),_=function(e){return v.photos.getPhoto(e).then(E.toJson)},b=function(){return v.photos.listPhotos(1,10,"latest").then(E.toJson).then((function(e){return e}))},O=function(e){v.photos.downloadPhoto(e)},S=function(){return v.collections.listCollections(1,10,"popular").then(E.toJson).then((function(e){return e}))},g=function(e){return v.search.photos(e,1,10).then(E.toJson).then((function(e){return e}))},P={SEARCH_PENDING:"SEARCH_PENDING",SEARCH_SUCCESS:"SEARCH_SUCCESS",SEARCH_FAILURE:"SEARCH_FAILURE",ADD_SEARCH_KEYWORD:"ADD_SEARCH_KEYWORD"},j={searchSuccsess:function(e){return{type:P.SEARCH_SUCCESS,results:e.results}},searchFailure:function(){return{type:P.SEARCH_NO_MATHCES}},searchPending:function(){return{type:P.SEARCH_PENDING}},addSearchKeyword:function(e){return{type:P.ADD_SEARCH_KEYWORD,keyword:e}},doSearch:function(e){return""===e.trim()&&alert("\u041f\u0443\u0441\u0442\u043e\u0439 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"),function(t){t(j.searchPending()),t(j.addSearchKeyword(e)),g(e).then((function(e){t(j.searchSuccsess(e))})).catch((function(e){alert("\u043d\u0435\u0443\u0434\u0430\u0447\u0430 \u043f\u0440\u0438 \u043f\u043e\u0438\u0441\u043a\u0435",e),t(j.searchFailure())}))}}},y={search_keywords:[],search_results:void 0,is_pending:!1},N="TOGGLE_FAVORITE",w=function(e){return{type:N,photoJson:e}},C={favoritesList:[],total:0},k=function(e,t){return(null===e||void 0===e?void 0:e.id)===t.photoJson.id},R="FETCH_SUCCESS",L="SET_CURRENT_PHOTO_SUCCESS",A="GET_RELATED_PHOTOS_PENDING",T="GET_RELATED_PHOTOS_SUCCESS",H={fetchSuccess:function(e){return{type:R,photos:e}},setCurrentPhotoSuccess:function(e){return{type:L,currentPhoto:e}},fetchAllPhotos:function(){return function(e){b().then((function(t){e(H.fetchSuccess(t))})).catch((function(e){alert(e)}))}},setCurrentPhoto:function(e){return function(t){_(e).then((function(e){t(H.setCurrentPhotoSuccess(e),t(H.getRelatedPhotos(e.alt_description)))}))}},getRelatedPhotos:function(e){return function(t){t(H.getRelatedPhotosPending()),g(e).then((function(e){t(H.getRelatedPhotosSuccess(e.results))}))}},getRelatedPhotosSuccess:function(e){return{type:T,relatedPhotos:e}},getRelatedPhotosPending:function(){return{type:A}}},D={allPhotos:void 0,currentPhoto:void 0,relatedPhotos:void 0,isRelatedPhotosPending:!0},x=Object(p.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.results,r=t.keyword;switch(a){case P.SEARCH_PENDING:return Object(f.a)({},e,{is_pending:!0});case P.SEARCH_SUCCESS:return Object(f.a)({},e,{search_results:n,isPending:!1});case P.SEARCH_FAILURE:return Object(f.a)({},e,{search_results:"no matches"});case P.ADD_SEARCH_KEYWORD:var o=Object(d.a)(e.search_keywords);return o.push(r),Object(f.a)({},e,{search_keywords:o});default:return Object(f.a)({},e)}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var a=e.favoritesList.some((function(e){return k(e,t)})),n=t.photoJson;return a?(delete n.isLiked,Object.assign({},e,{favoritesList:e.favoritesList.filter((function(e){return!k(e,t)}))})):(n.isLiked=!0,Object.assign({},e,{favoritesList:[].concat(Object(d.a)(e.favoritesList),[n])}));default:return e}},photos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(f.a)({},e,{allPhotos:t.photos});case L:return Object(f.a)({},e,{currentPhoto:t.currentPhoto});case T:return Object(f.a)({},e,{relatedPhotos:t.relatedPhotos,isRelatedPhotosPending:!1});default:return e}}}),W=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,I=Object(p.e)(x,W(Object(p.a)(m.a))),B=a(2),U=a(3),G=a(5),F=a(4),K=a(6),J=a(15),M=a(22),Y=a.n(M),z=(a(72),function(e){var t=e.itemTitle;return r.a.createElement("span",null,t)}),V=function(e){function t(){return Object(B.a)(this,t),Object(G.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){return console.log("H TEXT LIST",this.props),r.a.createElement("div",null,this.props.data?this.props.data.map((function(e){return r.a.createElement(z,{itemTitle:e})})):"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442")}}]),t}(r.a.PureComponent),X=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(G.a)(this,Object(F.a)(t).call(this,e))).state={collectionsList:void 0,searchKeyword:""},a}return Object(K.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){var e=this;S().then((function(t){var a=t.map((function(e){return e.title}));e.setState({collectionsList:a})}))}},{key:"viewCollection",value:function(){}},{key:"handleEnter",value:function(){this.props.doSearch(this.state.searchKeyword)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:Y.a.searchHeaderWrapper},r.a.createElement("form",{onSubmit:this.handleEnter.bind(this)},r.a.createElement("input",{className:Y.a.searchTextInput,type:"search",results:"2",placeholder:"\u041f\u043e\u0438\u0441\u043a",onChange:function(t){e.setState({searchKeyword:t.target.value})}})),r.a.createElement("hr",{size:"10",color:"white",width:"80%"}),r.a.createElement("div",{className:Y.a.collectionsList}))}}]),t}(r.a.Component),Z=Object(s.b)((function(e){return{search_results:e.search.search_results,is_pending:e.search.is_pending}}),(function(e){return{doSearch:function(t){e(j.doSearch(t))}}}))(X),Q=(a(73),a(37));function q(){return(q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ee=r.a.createElement("path",{d:"m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"}),te=r.a.createElement("path",{d:"m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"}),ae=r.a.createElement("circle",{cx:18.406,cy:5.595,r:1.439}),ne=function(e){var t=e.svgRef,a=e.title,n=$(e,["svgRef","title"]);return r.a.createElement("svg",q({id:"Bold",enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,ref:t},n),a?r.a.createElement("title",null,a):null,ee,te,ae)},re=r.a.forwardRef((function(e,t){return r.a.createElement(ne,q({svgRef:t},e))})),oe=(a.p,function(e){var t=e.instagram_username;return Q.isMobile?r.a.createElement("a",{href:"instagram://user?username=".concat(t)},r.a.createElement(re,{height:"1.3em",width:"1.3em",fill:"white"})," @",t):r.a.createElement("a",{href:"https://instagram.com/".concat(t),target:"blank"},r.a.createElement(re,{height:"1.3em",width:"1.3em",fill:"white"})," @",t)}),ce=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(G.a)(this,Object(F.a)(t).call(this,e))).state={isLiked:a.props.json.isLiked},a}return Object(K.a)(t,e),Object(U.a)(t,[{key:"onViewPhoto",value:function(){var e=this.props.json.id;this.props.viewPhoto(e)}},{key:"render",value:function(){var e,t=this,a=null===(e=this.props.json)||void 0===e?void 0:e.isLiked,n=this.props.json.user;return r.a.createElement("div",{className:"card-overlay"},r.a.createElement("div",{className:"profile-info"},r.a.createElement("img",{src:n.profile_image.medium,className:"profile-photo",alt:"profile"}),r.a.createElement("div",{className:"profile-info-name"},r.a.createElement(oe,{instagram_username:n.instagram_username}),r.a.createElement("span",null,n.name))),r.a.createElement("div",{className:"information-buttons"},r.a.createElement("button",{className:"information-button",style:a?{color:"red"}:{color:"white"},onClick:function(){t.props.toggleFavorite(t.props.json)}},r.a.createElement(i.a,{className:"information-icon",icon:u.d})),r.a.createElement(l.b,{to:"/photo",className:"information-button",onClick:this.onViewPhoto.bind(this)},r.a.createElement(i.a,{className:"information-icon",icon:u.b})),r.a.createElement("a",{className:"information-button",onClick:function(){O(t.props.json)},href:this.props.json.links.download+"?force=true"},r.a.createElement(i.a,{className:"information-icon",icon:u.a}))))}}]),t}(r.a.Component),se=Object(s.b)((function(e){return{favoritesList:e.favorites.favoritesList}}),(function(e){return{toggleFavorite:function(t){e(w(t))},viewPhoto:function(t){e(H.setCurrentPhoto(t))}}}))(ce),le=(a(75),function(e){var t=e.src,a=e.altDesc,n=e.json;return r.a.createElement("figure",null,r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,alt:a,className:"image"}),r.a.createElement("div",{className:"information-overlay"},r.a.createElement(se,{json:n}))))}),ie=(a(76),function(e){function t(){return Object(B.a)(this,t),Object(G.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"root"},this.props.data?this.props.data.map((function(e){return r.a.createElement(le,{src:e.urls.small,altDesc:e.alt_description,json:e})})):null)}}]),t}(r.a.Component)),ue=a(38),he=a.n(ue),pe=a(39),me=a.n(pe),de=a(29),fe=a.n(de),Ee=function(){return r.a.createElement("div",{className:fe.a.placeholderWrapper},r.a.createElement("div",null,r.a.createElement("img",{src:me.a,alt:"placeholder",className:fe.a.placeholder})))},ve=function(e){function t(e){var a;return Object(B.a)(this,t),(a=Object(G.a)(this,Object(F.a)(t).call(this,e))).state={search_results:void 0},a}return Object(K.a)(t,e),Object(U.a)(t,[{key:"componentWillUnmount",value:function(){this.state.search_results=void 0,console.log("UNMOUNTING",this.state.search_results)}},{key:"render",value:function(){return r.a.createElement("div",{className:he.a.searchResultsScreen},r.a.createElement(Z,null),this.state.search_results?r.a.createElement(ie,{data:this.state.search_results}):r.a.createElement(Ee,null))}}],[{key:"getDerivedStateFromProps",value:function(e){return{search_results:e.search_results}}}]),t}(r.a.Component),_e=Object(s.b)((function(e){return{search_results:e.search.search_results}}))(ve),be=function(e){function t(){return Object(B.a)(this,t),Object(G.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchAllPhotos()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ie,{data:this.props.allPhotos})||"\u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435\u0442")}}]),t}(r.a.Component),Oe=Object(s.b)((function(e){return console.log("STATE",e),{allPhotos:e.photos.allPhotos}}),(function(e){return{fetchAllPhotos:function(){e(H.fetchAllPhotos())}}}))(be),Se=(a(77),function(e){var t=e.search_history_list;return r.a.createElement("div",{className:"history-header-wrapper"},r.a.createElement("span",{className:"yourQuerys"},"\u0412\u0430\u0448\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u044b"),r.a.createElement(V,{data:t}))}),ge=function(e){function t(){return Object(B.a)(this,t),Object(G.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){console.log("SearchHistoryScreen",this.props);var e=this.props.search_history_list;return 0===e.length?r.a.createElement(Ee,null):r.a.createElement(Se,{search_history_list:e})}}]),t}(r.a.Component),Pe=Object(s.b)((function(e){return{search_history_list:e.search.search_keywords}}))(ge),je=Object(s.b)((function(e){return{favoritesList:e.favorites.favoritesList}}))((function(e){var t=e.favoritesList;return 0===t.length?r.a.createElement(Ee,null):r.a.createElement(ie,{data:t})})),ye=a(8),Ne=a.n(ye),we=function(e){function t(){return Object(B.a)(this,t),Object(G.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(U.a)(t,[{key:"tagList",value:function(e){return r.a.createElement("div",{className:Ne.a.relatedTags},r.a.createElement("span",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0442\u0435\u0433\u0438"),r.a.createElement("div",null,e?e.map((function(e){return r.a.createElement("span",{style:{display:"flexbox",width:"fit-content"}},e.title)})):r.a.createElement("h2",null,"\u0413\u0440\u0443\u0437\u0438\u043c\u0441\u044f")))}},{key:"relatedPhotos",value:function(e){return r.a.createElement(ie,{data:e})}},{key:"render",value:function(){var e,t,a;console.log("PHOTOS SCREEN",this.props.currentPhoto);var n=this.props.currentPhoto,o=null===n||void 0===n?void 0:n.user;return r.a.createElement("div",{className:Ne.a.photosScreenWrapper},r.a.createElement("section",{className:Ne.a.photosWrapper},r.a.createElement("div",{className:Ne.a.photosScreenBackground},r.a.createElement("img",{src:null===n||void 0===n?void 0:null===(e=n.urls)||void 0===e?void 0:e.regular,alt:"beautyful background"})),r.a.createElement("section",{className:Ne.a.photosScreenOverlay},r.a.createElement("div",{className:Ne.a.photoUpperButtons},r.a.createElement("div",{className:Ne.a.profileInfo},r.a.createElement("img",{className:Ne.a.profilePhoto,src:null===o||void 0===o?void 0:o.profile_image.medium,alt:"profile avatar"}),r.a.createElement("div",{className:Ne.a.profileText},r.a.createElement("h1",{className:Ne.a.profileName},null===o||void 0===o?void 0:o.username),r.a.createElement("span",{className:Ne.a.profileLink},"@",null===o||void 0===o?void 0:o.instagram_username))),r.a.createElement("div",{className:Ne.a.upperButtons},r.a.createElement("button",{className:Ne.a.upperButtonsHeart},r.a.createElement(i.a,{color:"#828282",icon:u.d})),r.a.createElement("a",{href:(null===n||void 0===n?void 0:null===(t=n.links)||void 0===t?void 0:t.download)+"?force=true"||!1,className:Ne.a.upperButtonsDownload},r.a.createElement(i.a,{color:"white",icon:u.a}),r.a.createElement("span",null,"\u0421\u043a\u0430\u0447\u0430\u0442\u044c")))),r.a.createElement("img",{className:Ne.a.photo,src:null===n||void 0===n?void 0:null===(a=n.urls)||void 0===a?void 0:a.regular,alt:"."}))),r.a.createElement("section",{className:Ne.a.relatedPhotos},r.a.createElement("h2",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"),this.relatedPhotos(this.props.relatedPhotos)))}}]),t}(r.a.Component),Ce=Object(s.b)((function(e){return{currentPhoto:e.photos.currentPhoto,relatedPhotos:e.photos.relatedPhotos,isRelatedPhotosPending:e.photos.isRelatedPhotosPending}}),(function(e){return{getRelatedPhotos:function(t){return e(H.getRelatedPhotos(t))}}}))(we),ke=function(e){function t(){return Object(B.a)(this,t),Object(G.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){return r.a.createElement(J.c,null,r.a.createElement(J.a,{path:"/search"},r.a.createElement(_e,null)),r.a.createElement(J.a,{path:"/history"},r.a.createElement(Pe,null)),r.a.createElement(J.a,{path:"/favorites"},r.a.createElement(je,null)),r.a.createElement(J.a,{exact:!0,path:"/"},r.a.createElement(Oe,null)),r.a.createElement(J.a,{path:"/photo"},r.a.createElement(Ce,null)))}}]),t}(r.a.PureComponent);var Re=function(){return r.a.createElement(s.a,{store:I},r.a.createElement(l.a,null,r.a.createElement("div",{className:"MainWrapper"},r.a.createElement("div",{className:"header"},r.a.createElement(h,null)),r.a.createElement("div",{className:"content"},r.a.createElement(ke,null),r.a.createElement("footer",{className:"footer"},r.a.createElement("span",null,"2020"),r.a.createElement("a",{href:"https://youtu.be/A0FZIwabctw",title:"\u0423\u0437\u043d\u0430\u0442\u044c \u0447\u0442\u043e \u044d\u0442\u043e \u0437\u043d\u0430\u0447\u0438\u0442",target:"blank"},"\u2055Made on Earth for Humans\u2055"))))))};a(78),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports={photosScreenWrapper:"PhotosScreen_photosScreenWrapper__1AKTW",photosWrapper:"PhotosScreen_photosWrapper__3wKSl",photosScreenBackground:"PhotosScreen_photosScreenBackground__3dWyu",photosScreenOverlay:"PhotosScreen_photosScreenOverlay__3pigU",photo:"PhotosScreen_photo__1ExPw",profileInfo:"PhotosScreen_profileInfo__464e3",profilePhoto:"PhotosScreen_profilePhoto__1SZpd",profileText:"PhotosScreen_profileText__1bz7o",profileName:"PhotosScreen_profileName__1NO5V",profileLink:"PhotosScreen_profileLink__2K8YL",photoUpperButtons:"PhotosScreen_photoUpperButtons__MAGEE",upperButtonsDownload:"PhotosScreen_upperButtonsDownload__10wsA",upperButtons:"PhotosScreen_upperButtons__3vZ4i",upperButtonsHeart:"PhotosScreen_upperButtonsHeart__3jnSg",relatedTags:"PhotosScreen_relatedTags__xBPyG",relatedPhotos:"PhotosScreen_relatedPhotos__1_9xE"}}},[[40,1,2]]]);
//# sourceMappingURL=main.df01e475.chunk.js.map