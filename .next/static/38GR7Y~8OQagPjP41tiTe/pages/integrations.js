(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0pry":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("9kay"),c=t("e+cM");t("/g91");a.default=function(){var e=Object(r.b)(),a=e.t,t=e.i18n;return l.a.createElement("div",null,l.a.createElement(c.a,{pt:function(){return t.changeLanguage("pt")},en:function(){return t.changeLanguage("en")}}),l.a.createElement("main",null,l.a.createElement("section",{id:"why",className:"section"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-center m-45px-b md-m-25px-b"},l.a.createElement("div",{className:"col-md-10 col-lg-8 col-xl-7"},l.a.createElement("div",{className:"section-title"},l.a.createElement("h2",{className:"theme-after-bg"},a("integrations")),l.a.createElement("p",null,"Based on the last ",l.a.createElement("u",null,"100 million emails")," we verified in 2018, ",l.a.createElement("u",null,"23,51% would bounce"),".",l.a.createElement("br",null),"Have you used an email list cleaning service recently?")))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 m-15px-tb"},l.a.createElement("div",{className:"feature-box"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"ti-shield"})),l.a.createElement("h3",{className:"font-alt"},"Protect Sender Reputation"),l.a.createElement("p",null,"1 out of 5 emails is not delivered due to reputation problems related to IP and domains. Get protected by using the best email list cleaning service."))),l.a.createElement("div",{className:"col-md-4 m-15px-tb"},l.a.createElement("div",{className:"feature-box"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"ti-check"})),l.a.createElement("h3",{className:"font-alt"},"Avoid Blockages by ESPs"),l.a.createElement("p",null,"A tiny ~5% bounce rate can get you blocked by the ESPs. Our single and bulk email list cleaning tool gets you protected to improve inbox deliverability."))),l.a.createElement("div",{className:"col-md-4 m-15px-tb"},l.a.createElement("div",{className:"feature-box"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"ti-bar-chart"})),l.a.createElement("h3",{className:"font-alt"},"Increase Campaigns ROI"),l.a.createElement("p",null,"Emails validated through TheChecker`s email address checker promote superior deliverability to the inbox, convert more sales, and increase your campaigns ROI."))))))))}},"9Jkg":function(e,a,t){e.exports=t("oh+g")},YFqc:function(e,a,t){e.exports=t("cTJO")},cTJO:function(e,a,t){"use strict";var n=t("KI45"),l=n(t("9Jkg")),r=n(t("iZP3")),c=n(t("/HRN")),i=n(t("WaGi")),s=n(t("ZDA2")),o=n(t("/+P4")),m=n(t("N9n2")),u=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var t in e)Object.hasOwnProperty.call(e,t)&&(a[t]=e[t]);return a.default=e,a},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(a,"__esModule",{value:!0});var p=t("CxY0"),d=u(t("q1tI")),h=(f(t("17x9")),u(t("20a2"))),E=t("Bu4q");var v=function(e){function a(){var e,t,n,l,i;return(0,c.default)(this,a),(e=(0,s.default)(this,(0,o.default)(a).apply(this,arguments))).formatUrls=(t=function(e,a){return{href:e&&"object"===(0,r.default)(e)?E.formatWithValidation(e):e,as:a&&"object"===(0,r.default)(a)?E.formatWithValidation(a):a}},n=null,l=null,i=null,function(e,a){if(e===n&&a===l)return i;var r=t(e,a);return n=e,l=a,i=r,r}),e.linkClicked=function(a){var t=a.currentTarget,n=t.nodeName,l=t.target;if("A"!==n||!(l&&"_self"!==l||a.metaKey||a.ctrlKey||a.shiftKey||a.nativeEvent&&2===a.nativeEvent.which)){var r=e.formatUrls(e.props.href,e.props.as),c=r.href,i=r.as;if(function(e){var a=p.parse(e,!1,!0),t=p.parse(E.getLocationOrigin(),!1,!0);return!a.host||a.protocol===t.protocol&&a.host===t.host}(c)){var s=window.location.pathname;c=p.resolve(s,c),i=i?p.resolve(s,i):c,a.preventDefault();var o=e.props.scroll;null==o&&(o=i.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](c,i,{shallow:e.props.shallow}).then(function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())}).catch(function(a){e.props.onError&&e.props.onError(a)})}}},e}return(0,m.default)(a,e),(0,i.default)(a,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,l.default)(this.props.href)!==(0,l.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,a=this.formatUrls(this.props.href,this.props.as).href,t=p.resolve(e,a);h.default.prefetch(t)}}},{key:"render",value:function(){var e=this,a=this.props.children,t=this.formatUrls(this.props.href,this.props.as),n=t.href,l=t.as;"string"==typeof a&&(a=d.default.createElement("a",null,a));var r=d.Children.only(a),c={onClick:function(a){r.props&&"function"==typeof r.props.onClick&&r.props.onClick(a),a.defaultPrevented||e.linkClicked(a)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(c.href=l||n),c.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(c.href=h.Router._rewriteUrlForNextExport(c.href)),d.default.cloneElement(r,c)}}]),a}(d.Component);a.default=v},"e+cM":function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("0iUn"),c=t("sLSF"),i=t("MI3g"),s=t("a7VT"),o=t("Tit0"),m=t("YFqc"),u=t.n(m),f=function(e){function a(){return Object(r.default)(this,a),Object(i.default)(this,Object(s.default)(a).apply(this,arguments))}return Object(o.default)(a,e),Object(c.default)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar header-nav fixed-top navbar-expand-lg header-nav-light"},l.a.createElement("div",{className:"container"},l.a.createElement(u.a,{href:"/#home"},l.a.createElement("a",{className:"navbar-brand"},l.a.createElement("img",{src:"static/img/email-verification-service-logo-thechecker.png"}))),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbar"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",null,l.a.createElement(u.a,{href:"/#why"},l.a.createElement("a",{className:"nav-link"},"Why TheChecker"))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/#features"},l.a.createElement("a",{className:"nav-link"},"Features"))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/integrations"},l.a.createElement("a",{className:"nav-link"},"Integrations"))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/#reviews"},l.a.createElement("a",{className:"nav-link"},"Reviews"))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/#home"},l.a.createElement("a",{className:"nav-link",href:"pricing.html"},"Pricing"))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/#home"},l.a.createElement("a",{className:"nav-link",href:"javascript:;"},"Resources")),l.a.createElement("span",{className:"sub-menu-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},l.a.createElement("i",{className:"ti-angle-down"})),l.a.createElement("ul",{className:"sub-menu"},l.a.createElement("li",null,l.a.createElement(u.a,{href:"/"},l.a.createElement("a",null,"Blog"))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/"},l.a.createElement("a",null,"Price"))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/"},l.a.createElement("a",null,"Faq's"))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/"},l.a.createElement("a",null,"Contact us"))))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/"},l.a.createElement("a",{className:"nav-link"},"Login"))),l.a.createElement("li",null,l.a.createElement(u.a,{href:"/"},l.a.createElement("a",{className:"nav-btn nav-link"},"Try For Free"))),l.a.createElement("li",{className:"flag"},l.a.createElement("button",{onClick:this.props.en},l.a.createElement("img",{src:"static/img/united-kingdom.png"}))),l.a.createElement("li",{className:"flag"},l.a.createElement("button",{onClick:this.props.pt},l.a.createElement("img",{src:"static/img/brazil.png"}))))))))}}]),a}(n.Component);t.d(a,"a",function(){return f})},"oh+g":function(e,a,t){var n=t("WEpk"),l=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return l.stringify.apply(l,arguments)}},qcMg:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/integrations",function(){var e=t("0pry");return{page:e.default||e}}])}},[["qcMg",1,0]]]);