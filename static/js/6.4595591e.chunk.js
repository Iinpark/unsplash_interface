(this.webpackJsonpresplash=this.webpackJsonpresplash||[]).push([[6],{268:function(e,t,o){e.exports={photosScreenWrapper:"PhotosScreen_photosScreenWrapper__1AKTW",photosWrapper:"PhotosScreen_photosWrapper__3wKSl",photosScreenBackground:"PhotosScreen_photosScreenBackground__3dWyu",photosScreenOverlay:"PhotosScreen_photosScreenOverlay__3pigU",photo:"PhotosScreen_photo__1ExPw",profileInfo:"PhotosScreen_profileInfo__464e3",profilePhoto:"PhotosScreen_profilePhoto__1SZpd",profileText:"PhotosScreen_profileText__1bz7o",profileName:"PhotosScreen_profileName__1NO5V",profileLink:"PhotosScreen_profileLink__2K8YL",photoUpperButtons:"PhotosScreen_photoUpperButtons__MAGEE",upperButtonsDownload:"PhotosScreen_upperButtonsDownload__10wsA",upperButtons:"PhotosScreen_upperButtons__3vZ4i",upperButtonsHeart:"PhotosScreen_upperButtonsHeart__3jnSg",relatedTags:"PhotosScreen_relatedTags__xBPyG",relatedPhotos:"PhotosScreen_relatedPhotos__1_9xE"}},269:function(e,t,o){e.exports={photo:"ImgWithPreloader_photo__3_VE2",preloader:"ImgWithPreloader_preloader__38-sz"}},271:function(e,t,o){"use strict";o.r(t);var r=o(12),a=o(13),n=o(15),l=o(14),s=o(16),c=o(0),i=o.n(c),p=o(19),u=o(20),h=o(11),d=o(268),m=o.n(d),_=o(30),f=o(68),v=o(97),P=o(67);function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var o=[],r=!0,a=!1,n=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done)&&(o.push(l.value),!t||o.length!==t);r=!0);}catch(c){a=!0,n=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw n}}return o}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var S=o(269),g=o.n(S),y=function(e){var t=e.src,o=E(Object(c.useState)(!1),2),r=o[0],a=o[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{className:g.a.photo,display:!0,src:t,alt:".",onLoad:function(){a(!0)},style:r?{display:"block"}:{display:"none"}}),i.a.createElement("div",{className:g.a.preloader},!1===r?i.a.createElement(P.a,null):null))},b=function(e){function t(){var e,o;Object(r.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(o=Object(n.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={isImageLoaded:!1,visibility:{visibility:"hidden"}},o}return Object(s.a)(t,e),Object(a.a)(t,[{key:"tagList",value:function(e){return i.a.createElement("div",{className:m.a.relatedTags},i.a.createElement("span",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0442\u0435\u0433\u0438"),i.a.createElement("div",null,e?e.map((function(e){return i.a.createElement("span",{style:{display:"flexbox",width:"fit-content"}},e.title)})):i.a.createElement("h2",null,"\u0413\u0440\u0443\u0437\u0438\u043c\u0441\u044f")))}},{key:"relatedPhotos",value:function(e){return i.a.createElement(f.a,{data:e})}},{key:"render",value:function(){var e,t,o,r;if(this.props.isCurrentPhotoPending)return i.a.createElement(P.a,null);console.log("PHOTOS SCREEN",this.props.currentPhoto);var a=this.props.currentPhoto,n=null===a||void 0===a?void 0:a.user,l=null===(e=this.props.currentPhoto)||void 0===e?void 0:null===(t=e.urls)||void 0===t?void 0:t.regular;return i.a.createElement("div",{className:m.a.photosScreenWrapper},i.a.createElement("section",{className:m.a.photosWrapper},i.a.createElement("div",{className:m.a.photosScreenBackground},i.a.createElement("img",{src:null===a||void 0===a?void 0:null===(o=a.urls)||void 0===o?void 0:o.regular,alt:"beautiful background"})),i.a.createElement("section",{className:m.a.photosScreenOverlay},i.a.createElement("div",{className:m.a.photoUpperButtons},i.a.createElement("div",{className:m.a.profileInfo},i.a.createElement("img",{className:m.a.profilePhoto,src:null===n||void 0===n?void 0:n.profile_image.medium,alt:"profile avatar"}),i.a.createElement("div",{className:m.a.profileText},i.a.createElement("h1",{className:m.a.profileName},null===n||void 0===n?void 0:n.username),i.a.createElement("span",{className:m.a.profileLink},i.a.createElement(v.a,{instagram_username:null===n||void 0===n?void 0:n.instagram_username})))),i.a.createElement("div",{className:m.a.upperButtons},i.a.createElement("button",{className:m.a.upperButtonsHeart},i.a.createElement(p.a,{color:"#828282",icon:u.d})),i.a.createElement("a",{href:(null===a||void 0===a?void 0:null===(r=a.links)||void 0===r?void 0:r.download)+"?force=true"||!1,className:m.a.upperButtonsDownload},i.a.createElement(p.a,{color:"white",icon:u.a}),i.a.createElement("span",null,"\u0421\u043a\u0430\u0447\u0430\u0442\u044c")))),i.a.createElement(y,{src:l}))),i.a.createElement("section",{className:m.a.relatedPhotos},i.a.createElement("h2",null,"\u041f\u043e\u0445\u043e\u0436\u0438\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"),this.relatedPhotos(this.props.relatedPhotos)))}}]),t}(i.a.PureComponent);t.default=Object(h.b)((function(e){return{currentPhoto:e.photosScreen.currentPhoto,relatedPhotos:e.photosScreen.relatedPhotos,isRelatedPhotosPending:e.photosScreen.isRelatedPhotosPending,isCurrentPhotoPending:e.photosScreen.isCurrentPhotoPending}}),(function(e){return{getRelatedPhotos:function(t){return e(_.a.getRelatedPhotos(t))}}}))(b)}}]);
//# sourceMappingURL=6.4595591e.chunk.js.map