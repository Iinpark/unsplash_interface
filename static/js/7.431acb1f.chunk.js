(this.webpackJsonpresplash=this.webpackJsonpresplash||[]).push([[7],{267:function(e,t,a){e.exports={photosScreenWrapper:"PhotosScreen_photosScreenWrapper__1AKTW",photosWrapper:"PhotosScreen_photosWrapper__3wKSl",photosScreenBackground:"PhotosScreen_photosScreenBackground__3dWyu",photosScreenOverlay:"PhotosScreen_photosScreenOverlay__3pigU",photo:"PhotosScreen_photo__1ExPw",profileInfo:"PhotosScreen_profileInfo__464e3",profilePhoto:"PhotosScreen_profilePhoto__1SZpd",profileText:"PhotosScreen_profileText__1bz7o",profileName:"PhotosScreen_profileName__1NO5V",profileLink:"PhotosScreen_profileLink__2K8YL",photoUpperButtons:"PhotosScreen_photoUpperButtons__MAGEE",upperButtonsDownload:"PhotosScreen_upperButtonsDownload__10wsA",upperButtons:"PhotosScreen_upperButtons__3vZ4i",upperButtonsHeart:"PhotosScreen_upperButtonsHeart__3jnSg",relatedTags:"PhotosScreen_relatedTags__xBPyG",relatedPhotos:"PhotosScreen_relatedPhotos__1_9xE"}},268:function(e,t,a){e.exports={photo:"ImgWithPreloader_photo__3_VE2",preloader:"ImgWithPreloader_preloader__38-sz"}},271:function(e,t,a){"use strict";a.r(t);var r=a(76),n=a(77),o=a(79),i=a(78),s=a(80),l=a(0),c=a.n(l),u=a(14),p=a(15),m=a(25),d=a(267),h=a.n(d),f=a(30),v=a(91),_=a(83),g=a(28);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(l){n=!0,o=l}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=a(268),b=a.n(E),P=function(e){var t=e.src,a=y(Object(l.useState)(!1),2),r=a[0],n=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{className:b.a.photo,display:!0,src:t,alt:".",onLoad:function(){n(!0)},style:r?{display:"block"}:{display:"none"}}),c.a.createElement("div",{className:b.a.preloader},!1===r?c.a.createElement(g.a,null):null))},O=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={isImageLoaded:!1,visibility:{visibility:"hidden"}},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"tagList",value:function(e){return c.a.createElement("div",{className:h.a.relatedTags},c.a.createElement("span",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0442\u0435\u0433\u0438"),c.a.createElement("div",null,e?e.map((function(e){return c.a.createElement("span",{style:{display:"flexbox",width:"fit-content"}},e.title)})):c.a.createElement("h2",null,"\u0413\u0440\u0443\u0437\u0438\u043c\u0441\u044f")))}},{key:"relatedPhotos",value:function(e){return c.a.createElement(v.a,{data:e})}},{key:"render",value:function(){var e,t,a,r;if(this.props.isCurrentPhotoPending)return c.a.createElement(g.a,null);console.log("PHOTOS SCREEN",this.props.currentPhoto);var n=this.props.currentPhoto,o=null===n||void 0===n?void 0:n.user,i=null===(e=this.props.currentPhoto)||void 0===e?void 0:null===(t=e.urls)||void 0===t?void 0:t.regular;return c.a.createElement("div",{className:h.a.photosScreenWrapper},c.a.createElement("section",{className:h.a.photosWrapper},c.a.createElement("div",{className:h.a.photosScreenBackground},c.a.createElement("img",{src:null===n||void 0===n?void 0:null===(a=n.urls)||void 0===a?void 0:a.regular,alt:"beautiful background"})),c.a.createElement("section",{className:h.a.photosScreenOverlay},c.a.createElement("div",{className:h.a.photoUpperButtons},c.a.createElement("div",{className:h.a.profileInfo},c.a.createElement("img",{className:h.a.profilePhoto,src:null===o||void 0===o?void 0:o.profile_image.medium,alt:"profile avatar"}),c.a.createElement("div",{className:h.a.profileText},c.a.createElement("h1",{className:h.a.profileName},null===o||void 0===o?void 0:o.username),c.a.createElement("span",{className:h.a.profileLink},c.a.createElement(_.a,{instagram_username:null===o||void 0===o?void 0:o.instagram_username})))),c.a.createElement("div",{className:h.a.upperButtons},c.a.createElement("button",{className:h.a.upperButtonsHeart},c.a.createElement(u.a,{color:"#828282",icon:p.d})),c.a.createElement("a",{href:(null===n||void 0===n?void 0:null===(r=n.links)||void 0===r?void 0:r.download)+"?force=true"||!1,className:h.a.upperButtonsDownload},c.a.createElement(u.a,{color:"white",icon:p.a}),c.a.createElement("span",null,"\u0421\u043a\u0430\u0447\u0430\u0442\u044c")))),c.a.createElement(P,{src:i}))),c.a.createElement("section",{className:h.a.relatedPhotos},c.a.createElement("h2",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"),this.relatedPhotos(this.props.relatedPhotos)))}}]),t}(c.a.PureComponent);t.default=Object(m.b)((function(e){return{currentPhoto:e.photosScreen.currentPhoto,relatedPhotos:e.photosScreen.relatedPhotos,isRelatedPhotosPending:e.photosScreen.isRelatedPhotosPending,isCurrentPhotoPending:e.photosScreen.isCurrentPhotoPending}}),(function(e){return{getRelatedPhotos:function(t){return e(f.a.getRelatedPhotos(t))}}}))(O)},83:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(107);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createElement("path",{d:"m12.004 5.838c-3.403 0-6.158 2.758-6.158 6.158 0 3.403 2.758 6.158 6.158 6.158 3.403 0 6.158-2.758 6.158-6.158 0-3.403-2.758-6.158-6.158-6.158zm0 10.155c-2.209 0-3.997-1.789-3.997-3.997s1.789-3.997 3.997-3.997 3.997 1.789 3.997 3.997c.001 2.208-1.788 3.997-3.997 3.997z"}),c=n.a.createElement("path",{d:"m16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941-2.308 2.308-2.013 5.418-2.013 9.979 0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"}),u=n.a.createElement("circle",{cx:18.406,cy:5.595,r:1.439}),p=function(e){var t=e.svgRef,a=e.title,r=s(e,["svgRef","title"]);return n.a.createElement("svg",i({id:"Bold",enableBackground:"new 0 0 24 24",height:512,viewBox:"0 0 24 24",width:512,ref:t},r),a?n.a.createElement("title",null,a):null,l,c,u)},m=n.a.forwardRef((function(e,t){return n.a.createElement(p,i({svgRef:t},e))})),d=(a.p,a(88)),h=a.n(d);t.a=function(e){var t=e.instagram_username;return o.isMobile?n.a.createElement("a",{href:"instagram://user?username=".concat(t)},n.a.createElement(m,{height:"1.3em",width:"1.3em",className:h.a.svg})," @",t):n.a.createElement("a",{href:"https://instagram.com/".concat(t),target:"blank"},n.a.createElement(m,{height:"1.3em",width:"1.3em",className:h.a.InstagramLogo})," ","@",t)}},87:function(e,t,a){},88:function(e,t,a){e.exports={svg:"Instagram_svg__1I4sW"}},89:function(e,t,a){e.exports={wrapper:"cardStyle_wrapper__3wLqN",card:"cardStyle_card__3Ox3Q",informationOverlay:"cardStyle_informationOverlay__hwRyk",image:"cardStyle_image__JVuE5"}},90:function(e,t,a){},91:function(e,t,a){"use strict";var r=a(76),n=a(77),o=a(79),i=a(78),s=a(80),l=a(0),c=a.n(l),u=a(25),p=a(98),m=a.n(p),d=a(15),h=a(14),f=a(7),v=a(12),_=(a(87),a(26)),g=a(27),y=a(83),E=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={isLiked:a.props.json.isLiked},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"onViewPhoto",value:function(){var e=this.props.json.id;this.props.viewPhoto(e)}},{key:"render",value:function(){var e,t=this,a=null===(e=this.props.json)||void 0===e?void 0:e.isLiked,r=this.props.json.user;return c.a.createElement("div",{className:"card-overlay"},c.a.createElement("div",{className:"profile-info"},c.a.createElement("img",{src:r.profile_image.medium,className:"profile-photo",alt:"profile"}),c.a.createElement("div",{className:"profile-info-name"},c.a.createElement(y.a,{instagram_username:r.instagram_username}),c.a.createElement("span",null,r.name))),c.a.createElement("div",{className:"information-buttons"},c.a.createElement("button",{className:"information-button",style:a?{color:"red"}:{color:"white"},onClick:function(){t.props.toggleFavorite(t.props.json)}},c.a.createElement(h.a,{className:"information-icon",icon:d.d})),c.a.createElement(f.b,{to:"/photo",className:"information-button",onClick:this.onViewPhoto.bind(this)},c.a.createElement(h.a,{className:"information-icon",icon:d.b})),c.a.createElement("a",{className:"information-button",onClick:function(){v.a.download(t.props.json)},href:this.props.json.links.download+"?force=true"},c.a.createElement(h.a,{className:"information-icon",icon:d.a}))))}}]),t}(c.a.Component),b=Object(u.b)((function(e){return{favoritesList:e.favorites.favoritesList}}),(function(e){return{toggleFavorite:function(t){e(_.a.toggleFavorite(t))},viewPhoto:function(t){e(g.a.setCurrentPhoto(t))}}}))(E),P=a(89),O=a.n(P),S=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={isImageLoaded:!1,visibility:{visibility:"hidden"}},a}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.src,r=t.altDesc,n=t.json,o=t.setRef;return c.a.createElement("figure",{className:O.a.wrapper,ref:function(e){o&&o(e)}},c.a.createElement("div",{className:O.a.card},c.a.createElement("img",{src:a,alt:r,className:O.a.image,style:this.state.visibility,onLoad:function(){e.setState({isImageLoaded:!0,visibility:{visibility:"visible"}})}}),c.a.createElement("div",{className:O.a.informationOverlay},c.a.createElement(b,{json:n}))))}}]),t}(c.a.Component),j=(a(90),function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"compareWithFavorites",value:function(){var e,t=this.props.favoritesList,a=null===(e=this.props)||void 0===e?void 0:e.data;if(a){var r=!0,n=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var l=i.value,c=!0,u=!1,p=void 0;try{for(var m,d=a[Symbol.iterator]();!(c=(m=d.next()).done);c=!0){var h=m.value;l.id===h.id&&(h.isLiked=!0)}}catch(f){u=!0,p=f}finally{try{c||null==d.return||d.return()}finally{if(u)throw p}}1}}catch(f){n=!0,o=f}finally{try{r||null==s.return||s.return()}finally{if(n)throw o}}}}},{key:"render",value:function(){var e=this;this.compareWithFavorites();var t=this.props.setLastCardRef;return c.a.createElement(m.a,{className:"CardList",elementType:"div",disableImagesLoaded:!1,updateOnEachImageLoad:!1},this.props.data?this.props.data.map((function(a,r){return r===e.props.data.length-1?c.a.createElement(S,{setRef:t,src:a.urls.small,altDesc:a.alt_description,json:a,key:a.id}):c.a.createElement(S,{src:a.urls.small,altDesc:a.alt_description,json:a,key:a.id})})):null)}}]),t}(c.a.Component));t.a=Object(u.b)((function(e){return{favoritesList:e.favorites.favoritesList}}))(j)}}]);
//# sourceMappingURL=7.431acb1f.chunk.js.map