(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5323:function(e,a,t){e.exports=t(5504)},5332:function(e,a,t){},5418:function(e,a,t){},5488:function(e,a,t){},5493:function(e,a,t){},5496:function(e,a,t){},5499:function(e,a,t){},5502:function(e,a,t){},5504:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(14),l=t.n(r),c=t(100),i=t(28),s=t(42),u=t(15),m=t(38),d=t(39),b=t(43),p=t(40),h=t(44),_=t(102),E=t.n(_),v=t(21),f=t.n(v),g=t(104),N=t.n(g),k=t(36),O=t.n(k),A=t(103),y=t.n(A),F=(t(5332),Object(u.withStyles)({header__AppBar:{boxShadow:"none"}})(function(e){var a=e.classes;return o.a.createElement("div",{className:"header"},o.a.createElement(E.a,{className:a.header__AppBar,color:"inherit",position:"static"},o.a.createElement(y.a,null,o.a.createElement(N.a,{color:"inherit","aria-label":"Menu"},o.a.createElement(O.a,null)),o.a.createElement("figure",{className:"header__logo"}),o.a.createElement("div",{className:"header__buttons"},o.a.createElement(f.a,{className:"header__button",color:"inherit",disableRipple:!0},"SIGN UP"),o.a.createElement(f.a,{className:"header__button",color:"inherit",disableRipple:!0},"LOG IN")),o.a.createElement(f.a,{className:"header__button header__help-button",color:"inherit",disableRipple:!0},"Help"))))})),C=t(41),L=t.n(C),j=(t(5418),Object(u.withStyles)({bookingFooter__button:{borderRadius:100},bookingFooter__input:{margin:0}})(function(e){var a=e.classes;return o.a.createElement("div",{className:"booking-footer"},o.a.createElement("div",{className:"booking-footer__inputs"},o.a.createElement(L.a,{className:a.bookingFooter__input,id:"booking-footer-promo-code-input",margin:"normal",placeholder:"+ Add Promo Code"})),o.a.createElement("div",{className:"booking-footer__texts"},o.a.createElement("h4",{className:"booking-footer__text"}," Avg Daily Rate: "),o.a.createElement("h4",{className:"booking-footer__text"}," Estimated Total: ")),o.a.createElement("div",{className:"booking-footer__buttons"},o.a.createElement(f.a,{disabled:!0},"View Full Breakdown"),o.a.createElement(f.a,{className:a.bookingFooter__button,color:"inherit",disabled:!0,variant:"contained"},"BOOK NOW")))})),w=t(105),D=t.n(w),S=t(106),I=t.n(S),T=(t(5488),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(b.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(o)))).state={value:0},t.handleChange=function(e,a){t.setState({value:a})},t}return Object(h.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.state.value,a=this.props,t=a.classes,n=a.bookingFooterNavLabels;return o.a.createElement("div",{className:"bookingFooterNav"},o.a.createElement(D.a,{className:t.root,onChange:this.handleChange,showLabels:!0,value:e},n.map(function(e,a){return o.a.createElement(I.a,{key:a,label:e})})))}}]),a}(n.Component)),R=Object(u.withStyles)({root:{backgroundColor:"#f4f4f4"}})(T),P=t(62),V=(t(5493),function(e){var a=e.item;return o.a.createElement("div",{className:"location__card","aria-label":a.description,tabIndex:"0",role:"button"},o.a.createElement("div",{className:"card__city"},a.name," ",a.airport_code?"(".concat(a.airport_code,")"):""),o.a.createElement("div",{className:"card__icon"},o.a.createElement("span",{className:"card__icon-icon"},a.airport_code?o.a.createElement(P.a,null):o.a.createElement(P.b,null)),o.a.createElement("span",{className:"card__icon-description"},a.description)))}),x=(t(5496),function(e){var a=e.handleOnChangeSearch;return o.a.createElement("div",{className:"search"},o.a.createElement(L.a,{autoFocus:!0,className:"search__input",id:"search-input",margin:"normal",onChange:function(e){return a(e.target.value)},placeholder:"Search by city or airport code"}))}),U=(t(5499),function(e){var a=e.bookingFooterNavLabels,t=e.data,n=e.handleOnChangeSearch;return o.a.createElement("div",{className:"locations__selection"},o.a.createElement("h3",{className:"locations__title"},"Choose Location"),o.a.createElement(x,{handleOnChangeSearch:n}),o.a.createElement("div",{className:"locations"},o.a.createElement("div",{className:"locations__list"},t.map(function(e){return o.a.createElement(V,{key:e.id,item:e})}))),o.a.createElement(R,{bookingFooterNavLabels:a}),o.a.createElement(j,null))}),B="GET_ALL_DATA";var G="SEARCH_INPUT_VALUE";t(5502);var H=function(e){function a(){return Object(m.a)(this,a),Object(b.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.getAllData;fetch("locations.json").then(function(e){return e.json()}).then(function(a){return e(a)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props,a=e.apiDataAllFiltered,t=e.bookingFooterNavLabels,n=e.searchInputValue;return o.a.createElement("div",{className:"App"},o.a.createElement(F,null),o.a.createElement(U,{bookingFooterNavLabels:t,data:a,handleOnChangeSearch:function(e){return n(e)}}))}}]),a}(n.Component),M=Object(s.b)(function(e){return{apiDataAllFiltered:e.apiDataAllFiltered,bookingFooterNavLabels:e.bookingFooterNavLabels}},function(e){return{getAllData:function(a){return e(function(e){return{type:B,payload:e}}(a))},searchInputValue:function(a){return e(function(e){return{type:G,payload:e}}(a))}}})(H),J=t(63),K={apiDataAll:[],apiDataAllFiltered:[],bookingFooterNavLabels:["CITY","PICK UP","DROP OFF","VEHICLE","COVERAGE"]};var Q=Object(i.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ALL_DATA":var t=a.payload.filter(function(e){return!e.name.match(/(Q5|A5C)/)});return Object(J.a)({},e,{apiDataAll:t,apiDataAllFiltered:t,bookingFooterNavLabels:e.bookingFooterNavLabels});case"SEARCH_INPUT_VALUE":var n=a.payload.toLowerCase(),o=e.apiDataAll.filter(function(e){var a=e.airport_code,t=e.name;return(a||"").toLowerCase().includes(n)||t.toLowerCase().includes(n)});return Object(J.a)({},e,{apiDataAllFiltered:o});default:return e}},Object(i.a)(c.a)),W=Object(u.createMuiTheme)({palette:{primary:{main:"#49aaca"},secondary:{main:"#ef9a9a"}},status:{danger:"orange"},typography:{useNextVariants:!0}});l.a.render(o.a.createElement(s.a,{store:Q},o.a.createElement(function(){return o.a.createElement(u.MuiThemeProvider,{theme:W},o.a.createElement(M,null))},null)),document.getElementById("root"))}},[[5323,2,1]]]);
//# sourceMappingURL=main.f075caac.chunk.js.map