(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8821ef9a"],{"59ed":function(t,n,e){},8877:function(t,n,e){"use strict";var a=e("59ed"),i=e.n(a);i.a},"8f6a":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.screenLoading,expression:"screenLoading"}]},[e("iframe",{ref:"iframe",staticClass:"iframe",attrs:{src:t.urlPath}})])},i=[],r=(e("6d57"),e("9a33"),{name:"Myiframe",components:{},data:function(){return{screenLoading:!1,urlPath:""}},created:function(){this.getUrlPath(),this.screenLoading=!0},mounted:function(){this.iframeInit()},methods:{iframeInit:function(){var t=this,n=this.$refs.iframe,e=document.documentElement.clientHeight-90;n.style.height="".concat(e,"px"),n.attachEvent?n.attachEvent("onload",(function(){t.screenLoading=!1})):n.onload=function(){t.screenLoading=!1}},getUrlPath:function(){var t=this,n=window.location.href.split("iframe/")[1],e=this.$store.state.settings.frames;e.forEach((function(e){e[n]&&(t.urlPath=e[n])}))}}}),o=r,s=(e("8877"),e("5511")),c=Object(s["a"])(o,a,i,!1,null,null,null);n["default"]=c.exports}}]);