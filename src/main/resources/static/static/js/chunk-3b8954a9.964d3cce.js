(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b8954a9","chunk-6900d56e","chunk-52d39502","chunk-5c716117","chunk-3ead1b9c","chunk-477ad00a","chunk-a4da514c","chunk-2d0db458","chunk-2d221446"],{"0cea":function(e,t,n){"use strict";n.d(t,"h",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"f",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"i",(function(){return c})),n.d(t,"j",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n("b775"),i=function(e){return Object(a["d"])("/apiTestCase/listPage",e,!1)},s=function(e){return Object(a["d"])("/apiTestCase/"+e)},r=function(e){return Object(a["d"])("/apiTestCase/steps/"+e)},o=function(e){return Object(a["e"])("/apiTestCase/add",e)},l=function(e){return Object(a["e"])("/apiTestCase/addApiToCase",e)},c=function(e){return Object(a["f"])("/apiTestCase/edit",e)},u=function(e){return Object(a["f"])("/apiTestCase/editStep",e)},d=function(e){return Object(a["e"])("/apiTestCase/remove",e)},f=function(e){return Object(a["e"])("/apiTestCase/removeStep",e)},p=function(e){return Object(a["e"])("/apiTestCase/debug",e)}},1183:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return l}));var a=n("b775"),i=function(e){return Object(a["d"])("/flag/listPage",e,!1)},s=function(e,t){return Object(a["d"])("/flag/listByProjectIdAndType/"+e+"/"+t)},r=function(e){return Object(a["e"])("/flag/add",e)},o=function(e){return Object(a["f"])("/flag/edit",e)},l=function(e){return Object(a["e"])("/flag/remove",e)}},"163d":function(e,t,n){"use strict";var a=n("e7ad"),i=n("e042"),s=n("75c4"),r=n("1e5b"),o=n("94b3"),l=n("238a"),c=n("2ea2").f,u=n("dcb7").f,d=n("064e").f,f=n("777a").trim,p="Number",m=a[p],b=m,v=m.prototype,h=s(n("e005")(v))==p,g="trim"in String.prototype,y=function(e){var t=o(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():f(t,3);var n,a,i,s=t.charCodeAt(0);if(43===s||45===s){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===s){switch(t.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+t}for(var r,l=t.slice(2),c=0,u=l.length;c<u;c++)if(r=l.charCodeAt(c),r<48||r>i)return NaN;return parseInt(l,a)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof m&&(h?l((function(){v.valueOf.call(n)})):s(n)!=p)?r(new b(y(t)),n,m):y(t)};for(var _,I=n("149f")?c(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;I.length>w;w++)i(b,_=I[w])&&!i(m,_)&&d(m,_,u(b,_));m.prototype=v,v.constructor=m,n("bf16")(a,p,m)}},"179f":function(e,t,n){},"18c9":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return l}));var a=n("b775"),i=function(e){return Object(a["d"])("/env/listPage",e,!1)},s=function(e){return Object(a["d"])("/env/listByProjectId/"+e)},r=function(e){return Object(a["e"])("/env/add",e)},o=function(e){return Object(a["f"])("/env/edit",e)},l=function(e){return Object(a["e"])("/env/remove",e)}},"190b":function(e,t,n){n("149f")&&"g"!=/./g.flags&&n("064e").f(RegExp.prototype,"flags",{configurable:!0,get:n("f1fe")})},"1c2e":function(e,t,n){"use strict";n.d(t,"g",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return c})),n.d(t,"j",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return m}));var a=n("b775"),i=function(e){return Object(a["d"])("/api/listPage",e,!1)},s=function(e){return Object(a["d"])("/api/"+e)},r=function(e){return Object(a["d"])("/api/listTreeByProjectId/"+e)},o=function(e){return Object(a["d"])("/api/listSuiteByProjectId/"+e)},l=function(e){return Object(a["e"])("/api/debug",e)},c=function(e){return Object(a["e"])("/api/add",e)},u=function(e){return Object(a["f"])("/api/edit",e)},d=function(e){return Object(a["e"])("/api/addSuite",e)},f=function(e){return Object(a["f"])("/api/editSuite",e)},p=function(e){return Object(a["e"])("/api/remove",e)},m=function(e){return Object(a["e"])("/api/removeSuite",e)}},"1e5b":function(e,t,n){var a=n("fb68"),i=n("859b").set;e.exports=function(e,t,n){var s,r=t.constructor;return r!==n&&"function"==typeof r&&(s=r.prototype)!==n.prototype&&a(s)&&i&&i(e,s),e}},"4d33":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{height:e.height+"px",zIndex:e.zIndex}},[n("div",{class:e.className,style:{bottom:"0px",zIndex:e.zIndex,position:"fixed",width:e.width+"px",height:e.height+"px",transition:"width 0.3s"}},[e._t("default",[n("div",[e._v("myFoot")])])],2)])},i=[],s=(n("163d"),{name:"MyFoot",props:{zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{width:void 0,height:void 0}},computed:{sidebar:function(){return this.$store.state.app.sidebar}},watch:{"sidebar.opened":function(e){this.width=e?this.width-156:this.width+156}},mounted:function(){this.handleResize()},destroyed:function(){},methods:{handleResize:function(){this.width=this.$el.getBoundingClientRect().width}}}),r=s,o=n("5511"),l=Object(o["a"])(r,a,i,!1,null,null,null);t["a"]=l.exports},"53ef":function(e,t,n){"use strict";var a=n("e46f"),i=n.n(a);i.a},"569b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.addOrEditForm.title,visible:e.visible,"append-to-body":!0,width:"500px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog("addOrEditForm")}}},[n("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:e.addOrEditForm,size:"small",rules:e.rules}},[n("el-form-item",{attrs:{label:"标签名称",prop:"name"}},[n("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入标签名称"},model:{value:e.addOrEditForm.name,callback:function(t){e.$set(e.addOrEditForm,"name",t)},expression:"addOrEditForm.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"备注",prop:"remark"}},[n("el-input",{attrs:{type:"textarea"},model:{value:e.addOrEditForm.remark,callback:function(t){e.$set(e.addOrEditForm,"remark",t)},expression:"addOrEditForm.remark"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{size:"small"},on:{click:function(t){return e.closeDialog("addOrEditForm")}}},[e._v("取消")]),e._v(" "),n("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("addOrEditForm")}}},[e._v("保存")])],1)],1)},i=[],s=n("1183"),r=n("3fa5"),o={data:function(){return{visible:!1,rules:{name:[{required:!0,message:"标签名不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",type:1,remark:""}}},methods:{init:function(e){this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.type=e,this.addOrEditForm.title="新增标签"},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectId:"",type:1,remark:""}},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){e&&Object(s["a"])(t.addOrEditForm).then((function(e){t.visible=!1,t.$emit("refreshDataList"),Object(r["a"])("保存数据成功")})).catch((function(){}))}))}}},l=o,c=n("5511"),u=Object(c["a"])(l,a,i,!1,null,null,null);t["default"]=u.exports},"59b5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-select",{attrs:{size:"mini",clearable:"",filterable:"",multiple:"","popper-class":"flag-select-class",placeholder:"请选择标签"},model:{value:e.flags,callback:function(t){e.flags=t},expression:"flags"}},[e._l(e.flagList,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id+""}})})),e._v(" "),0===e.flagList.length?n("el-option",{attrs:{disabled:"",label:"没有标签，请新增",value:""}}):e._e(),e._v(" "),n("span",[n("el-button",{staticStyle:{"margin-left":"5px","font-size":"14px"},attrs:{size:"small",type:"text",disabled:""}},[e._v("\n        没有你想要的标签\n      ")]),e._v(" "),n("el-button",{staticStyle:{"margin-left":"0px","font-size":"14px"},attrs:{size:"small",type:"text"},on:{click:e.addRow}},[e._v("\n        添加标签\n      ")])],1)],2),e._v(" "),e.addOrEditFormVisible?n("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:e.getDataList}}):e._e()],1)},i=[],s=n("1183"),r=n("569b"),o={props:["value","type"],components:{AddOrUpdate:r["default"]},data:function(){return{addOrEditFormVisible:!1,flags:[],flagList:[]}},watch:{flags:{handler:function(e){this.$emit("input",e)},deep:!0},value:{handler:function(e){this.flags=e||""},immediate:!0}},mounted:function(){this.getDataList()},methods:{getDataList:function(e){var t=this;Object(s["d"])(this.$store.getters.projectId,1).then((function(e){t.flagList=e||[]}))},addRow:function(){var e=this;this.addOrEditFormVisible=!0,this.$nextTick((function(){e.type?e.$refs.addOrUpdate.init(e.type):e.$refs.addOrUpdate.init(1)}))}}},l=o,c=(n("5e8d"),n("5511")),u=Object(c["a"])(l,a,i,!1,null,"0a86a995",null);t["default"]=u.exports},"5e8d":function(e,t,n){"use strict";var a=n("cdb4"),i=n.n(a);i.a},"5edf":function(e,t,n){},"65e5":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-drawer",{attrs:{title:"接口信息",size:"850px","append-to-body":"","custom-class":"drawer-mian",visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[n("div",{staticClass:"debug-result-tabls",staticStyle:{margin:"0px 20px 0px 20px",overflow:"auto",height:"calc(100% - 15px)"}},[n("el-row",{staticStyle:{"margin-bottom":"10px"}},[n("span",{staticStyle:{"font-size":"13px"}},[n("b",[e._v("接口名称：")]),e._v("\n        "+e._s(e.apiData.name)+"\n      ")]),n("br")]),e._v(" "),n("el-row",{staticStyle:{"margin-bottom":"10px"}},[n("span",{staticStyle:{"font-size":"13px"}},[n("b",[e._v("环境域名：")]),e._v("\n        "+e._s(e.apiData.domain)+"\n      ")]),n("br")]),e._v(" "),n("el-row",{staticStyle:{"margin-bottom":"10px"}},[n("el-tag",{attrs:{effect:"dark",size:"small",type:"success"}},[e._v(" "+e._s(e.apiData.method))]),e._v(" "),n("span",{staticStyle:{"font-size":"13px"}},[e._v(e._s(e.apiData.path?e.apiData.path.split("?")[0]:""))])],1),e._v(" "),n("el-collapse",{model:{value:e.reqActiveNames,callback:function(t){e.reqActiveNames=t},expression:"reqActiveNames"}},[n("el-collapse-item",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("b",[e._v("headers")])]),e._v(" "),e._l(e.apiData.reqHeaders,(function(t,a){return n("div",{key:a},[n("span",[n("b",[e._v(e._s(t.key+"："))]),e._v("\n            "+e._s(t.value)+"\n          ")]),n("br")])}))],2),e._v(" "),n("el-collapse-item",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("b",[e._v("params")])]),e._v(" "),e._l(e.apiData.reqQuery,(function(t,a){return n("div",{key:a},[n("span",[n("b",[e._v(e._s(t.key+"："))]),e._v("\n            "+e._s(t.value)+"\n          ")]),n("br")])}))],2),e._v(" "),"GET"!==e.apiData.reqMethod?n("el-collapse-item",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("b",[e._v(e._s("raw"===e.apiData.reqBodyType?"body":"bodyForm"))])]),e._v(" "),"raw"===e.apiData.reqBodyType?n("pre",[e._v(e._s(e.formatJson(e.apiData.reqBodyJson)))]):e._e(),e._v(" "),"raw"!==e.apiData.reqBodyType?n("div",e._l(e.apiData.reqBodyData,(function(t,a){return n("div",{key:a},[n("span",[n("b",[e._v(e._s(t.key+"："))]),e._v("\n              "+e._s(t.value)+"\n            ")]),n("br")])})),0):e._e()],2):e._e()],1)],1)])},i=[],s={data:function(){return{visible:!1,reqActiveNames:["1","2","3","4","5"],apiData:{}}},computed:{},mounted:function(){},methods:{init:function(e){this.apiData=e,this.visible=!0},formatJson:function(e){try{var t=JSON.parse(e);return JSON.stringify(t,null,2)}catch(n){return e}}}},r=s,o=(n("ed3f"),n("5511")),l=Object(o["a"])(r,a,i,!1,null,null,null);t["default"]=l.exports},"68cf":function(e,t,n){"use strict";var a=n("5edf"),i=n.n(a);i.a},"6ec6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{attrs:{data:e.params,border:"","max-height":"200",size:"mini"}},[n("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",disabled:!e.isAdd,clearable:""},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name","string"===typeof n?n.trim():n)},expression:"scope.row.name"}})]}}])},[n("template",{slot:"header"},[n("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",disabled:!e.isAdd,size:"mini"},on:{click:e.addParam}}),e._v("\n        方法参数名\n      ")],1)],2),e._v(" "),n("el-table-column",{attrs:{label:"值",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",clearable:""},model:{value:t.row.value,callback:function(n){e.$set(t.row,"value","string"===typeof n?n.trim():n)},expression:"scope.row.value"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"描述",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini",clearable:""},model:{value:t.row.description,callback:function(n){e.$set(t.row,"description","string"===typeof n?n.trim():n)},expression:"scope.row.description"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"el-icon-delete",attrs:{type:"text",disabled:!e.isAdd,size:"mini"},on:{click:function(n){return e.deleteParam(t.$index)}}})]}}])})],1)],1)},i=[],s={props:{isAdd:Boolean},data:function(){return{params:[]}},methods:{addParam:function(){this.params.push({name:"",value:"",description:""})},deleteParam:function(e){this.params.splice(e,1)}}},r=s,o=n("5511"),l=Object(o["a"])(r,a,i,!1,null,null,null);t["default"]=l.exports},"777a":function(e,t,n){var a=n("e46b"),i=n("f6b4"),s=n("238a"),r=n("9769"),o="["+r+"]",l="​",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(e,t,n){var i={},o=s((function(){return!!r[e]()||l[e]()!=l})),c=i[e]=o?t(f):r[e];n&&(i[n]=c),a(a.P+a.F*o,"String",i)},f=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},"859b":function(e,t,n){var a=n("fb68"),i=n("69b3"),s=function(e,t){if(i(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=n("4ce5")(Function.call,n("dcb7").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,n){return s(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:s}},9769:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},a512:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加HTTP接口",visible:e.visible,"append-to-body":"",width:"70%"},on:{"update:visible":function(t){e.visible=t},open:function(t){return e.openDialog()},close:function(t){return e.closeDialog("addForm")}}},[n("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never","body-style":"padding-top:0px;"}},[n("div",{staticClass:"my-class"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"接口名称："}},[n("el-input",{attrs:{placeholder:"请输入接口名称"},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"接口描述："}},[n("el-input",{attrs:{placeholder:"请输入接口描述"},model:{value:e.serchData.remark,callback:function(t){e.$set(e.serchData,"remark",t)},expression:"serchData.remark"}})],1),e._v(" "),n("el-form-item",[n("el-button",{on:{click:e.searchList}},[e._v("查询")]),e._v(" "),n("el-button",{staticClass:"title",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("addForm")}}},[e._v("添加")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":e.selected}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"40"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"200",label:"接口名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"接口路径"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.path))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"170",label:"接口分类"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.row.suiteName)+"\n        ")]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"90",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(0===t.row.status?"未完成":"已完成")+"\n        ")]}}])})],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)],1)},i=[],s=(n("cc57"),n("6d57"),n("1c2e")),r=n("0cea"),o=n("3fa5"),l={props:["value","testcaseId"],data:function(){return{visible:!1,dataList:[],selectedData:[],apiSuiteList:[],serchData:{name:"",remark:"",caseType:1},pageInfo:{pageNum:1,pageSize:10,pageCount:0},loading:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},watch:{value:{handler:function(e){this.visible=e},immediate:!0},visible:function(e){this.$emit("input",e)}},mounted:function(){var e=this;Object(s["h"])(this.$store.getters.projectId).then((function(t){e.apiSuiteList=t||[]}))},methods:{selected:function(e){this.selectedData=e},submitForm:function(e){var t=this;if("addForm"===e&&0===this.selectedData.length)this.$message({showClose:!0,message:"请选择一个HTTP接口",type:"error"});else if("addForm"===e&&this.selectedData.length>0){var n=[];this.selectedData.forEach((function(e){var a={};a.api=e,a.name=e.name,a.type=1,a.testcaseId=t.testcaseId,a.sourceId=e.id,a.status=1,a.domain=e.domain||"",a.method=e.method||"GET",a.path=e.path||"",a.beforeExcs=e.beforeExcs,a.reqHeader=e.reqHeader,a.reqQuery=e.reqQuery,a.reqBodyData=e.reqBodyData,a.reqBodyJson=e.reqBodyJson,a.reqBodyType=e.reqBodyType,a.reqExtract=e.reqExtract,a.reqAssert=e.reqAssert,n.push(a)})),Object(r["a"])(n).then((function(e){t.visible=!1,t.$emit("callBack"),Object(o["a"])("保存数据成功")}))}},getPageList:function(){var e=this;this.loading=!0,Object(s["g"])(this.serchInfo).then((function(t){e.dataList=t.list.map((function(t,n){for(var a=0;a<e.apiSuiteList.length;a++)if(e.apiSuiteList[a].id===t.apiSuiteId){t.suiteName=e.apiSuiteList[a].name;break}return t})),e.pageInfo.pageCount=t.total,e.loading=!1}))},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},closeDialog:function(e){this.visible=!1,this.$refs.table.clearSelection()},openDialog:function(){this.getPageList()}}},c=l,u=(n("68cf"),n("5511")),d=Object(u["a"])(c,a,i,!1,null,"304f0b91",null);t["default"]=d.exports},ca2d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{attrs:{data:e.fileList,border:"","max-height":"200",size:"mini"}},[n("el-table-column",{attrs:{align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])},[n("template",{slot:"header"},[n("el-button",{staticClass:"el-icon-circle-plus",staticStyle:{padding:"4px 0px"},attrs:{type:"text",size:"mini"},on:{click:function(t){e.dialogVisible=!0}}}),e._v("\n        文件名称\n      ")],1)],2),e._v(" "),n("el-table-column",{attrs:{label:"文件类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.contentType)+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"el-icon-delete",staticStyle:{padding:"2px"},attrs:{type:"text",size:"mini"},on:{click:function(n){return e.deleteFile(t.row.id)}}}),e._v(" "),n("el-button",{staticClass:"el-icon-download",staticStyle:{padding:"2px"},attrs:{type:"text",size:"mini"},on:{click:function(n){return e.downloadFile(t.row)}}})]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:"文件导入","close-on-click-modal":!1,visible:e.dialogVisible,width:"410px",center:""},on:{"update:visible":function(t){e.dialogVisible=t},close:function(t){return e.closeDialog()}}},[n("el-form",{ref:"uploadForm",attrs:{model:e.uploadInfo,"label-position":"right",size:"mini",rules:e.rules}},[n("el-form-item",{attrs:{prop:"name"}},[n("el-input",{attrs:{size:"small",placeholder:"请输入文件名称"},model:{value:e.uploadInfo.name,callback:function(t){e.$set(e.uploadInfo,"name",t)},expression:"uploadInfo.name"}})],1)],1),e._v(" "),n("el-upload",{directives:[{name:"loading",rawName:"v-loading",value:e.uploadLoading,expression:"uploadLoading"}],ref:"upload",attrs:{"show-file-list":!1,drag:"","http-request":e.fileUpload,action:"#",multiple:""}},[n("i",{staticClass:"el-icon-upload"}),e._v(" "),n("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),n("em",[e._v("点击上传")])]),e._v(" "),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip",center:""},slot:"tip"},[e._v("文件不能超过10M")])])],1)],1)},i=[],s=n("b775"),r=function(e){return Object(s["e"])("/file/list",e)},o=function(e){return Object(s["g"])("/file/upload",e)},l=function(e){return Object(s["b"])("/file/"+e)},c={data:function(){return{dialogVisible:!1,uploadLoading:!1,rules:{name:[{required:!0,message:"文件名不能为空",trigger:"blur"}]},uploadInfo:{name:"",sourceType:1,sourceId:0,projectId:this.$store.getters.projectId},fileList:[]}},methods:{init:function(e,t){e&&(t&&(this.uploadInfo.sourceType=t),this.uploadInfo.sourceId=e,this.getFiles())},downloadFile:function(e){var t=document.createElement("a");t.style.display="none",t.href="/public/profile/system/"+e.path,t.download="",document.body.appendChild(t),t.click(),document.body.removeChild(t)},fileUpload:function(e){var t=this;this.$refs["uploadForm"].validate((function(n){if(n){var a=e.file,i=a.size<10485760;if(!i)return t.$message.warning("请上传10M以下的zip文件"),!1;var s=new FormData;s.append("files",a),s.append("fileInfo",JSON.stringify(t.uploadInfo)),t.uploadLoading=!0,o(s).then((function(e){t.$message({type:"success",message:"上传成功!"}),t.getFiles(),t.$refs["upload"].clearFiles(),t.dialogVisible=!1})).finally((function(){t.uploadLoading=!1}))}}))},deleteFile:function(e){var t=this;this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){l(e).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getFiles()}))})).catch((function(){t.$message({type:"success",message:"已取消删除"})}))},closeDialog:function(){this.$refs["upload"].clearFiles(),this.uploadInfo.name=""},getFiles:function(){var e=this;r({sourceType:this.uploadInfo.sourceType,sourceId:this.uploadInfo.sourceId}).then((function(t){e.fileList=t||[]}))}}},u=c,d=n("5511"),f=Object(d["a"])(u,a,i,!1,null,null,null);t["default"]=f.exports},cdb4:function(e,t,n){},e46f:function(e,t,n){},ed3f:function(e,t,n){"use strict";var a=n("179f"),i=n.n(a);i.a},f88d:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[n("el-card",{staticClass:"box-card card-main",staticStyle:{padding:"0px"},attrs:{shadow:"never","body-style":"padding-top:0px;"}},[n("el-form",{ref:"caseInfoForm",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.caseInfo,"label-width":"82px","label-position":"right",rules:e.formRules,size:"mini"}},[n("el-form-item",{attrs:{label:"用例名称：",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入用例名称"},model:{value:e.caseInfo.name,callback:function(t){e.$set(e.caseInfo,"name",t)},expression:"caseInfo.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"默认环境：",prop:"envId"}},[n("el-select",{attrs:{filterable:"",placeholder:"选择默认接口环境"},model:{value:e.caseInfo.envId,callback:function(t){e.$set(e.caseInfo,"envId",t)},expression:"caseInfo.envId"}},[n("el-option",{attrs:{label:"默认环境",value:-1}}),e._v(" "),e._l(e.apiEnvList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],2)],1),e._v(" "),n("el-form-item",{attrs:{label:"标签：",prop:"flagList"}},[n("FlagsSelect",{attrs:{type:1},model:{value:e.caseInfo.flagList,callback:function(t){e.$set(e.caseInfo,"flagList",t)},expression:"caseInfo.flagList"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"备注："}},[n("el-input",{attrs:{placeholder:"请输入业务备注"},model:{value:e.caseInfo.remark,callback:function(t){e.$set(e.caseInfo,"remark",t)},expression:"caseInfo.remark"}})],1)],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.caseInfo.id,expression:"caseInfo.id"}]},[n("el-tabs",{staticStyle:{margin:"20px 0px 30px 0px"},attrs:{"tab-position":"left"}},[n("el-tab-pane",{attrs:{label:"用例参数"}},[n("action-case-var-list",{ref:"caseVars",attrs:{"is-add":!0}})],1),e._v(" "),n("el-tab-pane",{attrs:{label:"公共参数"}},[e._v("公共参数列表")]),e._v(" "),n("el-tab-pane",{attrs:{disabled:!e.caseInfo.id,label:"附件"}},[n("ActionFileList",{ref:"actionFileList"})],1)],1),e._v(" "),n("el-divider",{attrs:{"content-position":"left"}},[e._v("\n        接口信息\n        "),n("el-divider",{attrs:{direction:"vertical"}}),e._v(" "),n("el-button",{attrs:{type:"text"},on:{click:e.addApi}},[e._v("添加HTTP接口")])],1),e._v(" "),n("el-table",{ref:"dragTable",staticStyle:{width:"auto"},attrs:{"max-height":"450",data:e.caseInfo.testSteps,"row-key":"id",border:"",stripe:"",size:"small"}},[n("el-table-column",{attrs:{width:"65",align:"center",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":0,"inactive-color":"#ff4949"},model:{value:t.row.status,callback:function(n){e.$set(t.row,"status",n)},expression:"scope.row.status"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"200",align:"center",label:"步骤名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-link",{staticStyle:{"font-size":"12px"},attrs:{type:"primary"},on:{click:function(n){return e.editRow(t.row)}}},[e._v(" "+e._s(t.row.name))])]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"200",align:"center",label:"关联接口"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.api?n("el-link",{staticStyle:{"font-size":"12px"},attrs:{type:"primary"},on:{click:function(n){return e.openApiDetail(t.row.api)}}},[e._v("\n              "+e._s(t.row.api.name)+"\n            ")]):e._e(),e._v(" "),t.row.api?e._e():n("el-link",{staticStyle:{"font-size":"12px"},attrs:{disabled:""}},[e._v("该接口已被删除")])]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"90",align:"center",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(1===t.row.type?"HTTP接口":"")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{"min-width":"300","show-overflow-tooltip":"",align:"center",label:"请求地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.api?t.row.api.domain+t.row.api.path+"":"该接口已被删除")+"\n          ")]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"130",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"mini-btn",attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.deleteRow(t.row)}}},[e._v("删除")]),e._v(" "),n("el-button",{staticClass:"mini-btn",attrs:{size:"mini"},on:{click:function(n){return e.deleteRow(t.row)}}},[e._v("复制")])]}}])})],1)],1),e._v(" "),n("addApi",{attrs:{"testcase-id":e.caseInfo.id},on:{callBack:e.refreshSteps},model:{value:e.addApiVisible,callback:function(t){e.addApiVisible=t},expression:"addApiVisible"}})],1),e._v(" "),n("MyFoot",{attrs:{"z-index":2,"sticky-bottom":0,"class-name":"sub-navbar my-foot-api-edit"}},[n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{staticStyle:{"font-size":"14px"},attrs:{size:"small"},on:{click:e.toBack}},[e._v("返回")]),e._v(" "),n("el-button",{staticStyle:{"font-size":"14px"},attrs:{type:"primary",size:"small"},on:{click:function(t){return e.save("caseInfoForm")}}},[e._v("\n        "+e._s(e.$route.query.id?"保存(ctrl+s)":"保存并继续(ctrl+s)")+"\n      ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.$route.query.id,expression:"$route.query.id"}],staticStyle:{"font-size":"14px"},attrs:{type:"success",size:"small"},on:{click:function(t){return e.save("caseInfoForm",1)}}},[e._v("\n        调试(ctrl+d)\n      ")]),e._v(" "),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.$route.query.id,expression:"$route.query.id"}],staticStyle:{"font-size":"14px"},attrs:{type:"info",plain:"",size:"small"},on:{click:function(t){return e.save("caseInfoForm",2)}}},[e._v("复制(ctrl+shift+c)")])],1)]),e._v(" "),n("apiDetail",{ref:"apiDetail"})],1)},i=[],s=(n("63ff"),n("57f0")),r=(n("6d57"),n("9a33"),n("190b"),n("cc57"),n("4d33")),o=n("3fa5"),l=n("a512"),c=n("0cea"),u=n("1183"),d=n("6ec6"),f=n("ca2d"),p=n("59b5"),m=n("18c9"),b=n("2480"),v=n("65e5"),h={components:{MyFoot:r["a"],ActionCaseVarList:d["default"],ActionFileList:f["default"],FlagsSelect:p["default"],addApi:l["default"],apiDetail:v["default"]},data:function(){return{loading:!1,addApiVisible:!1,apiEnvList:[],flagList:[],formRules:{name:{type:"string",required:!0,message:"用例名称不能为空",trigger:"blur"},timoutTime:{required:!0,message:"超时时间不能为空",trigger:"blur"}},caseInfo:{title:"",id:"",name:"",envId:-1,beforeExcs:[],projectId:0,timoutTime:1,failContinue:"",flags:"",flagList:[],params:[],caseVars:[],caseType:1,testSteps:[],remark:""}}},destroyed:function(){window.onbeforeunload=null,document.onkeydown=null},mounted:function(){var e=this;this.initBefore(),Object(m["d"])(this.$store.getters.projectId).then((function(t){e.apiEnvList=t||[]})),Object(u["d"])(this.$store.getters.projectId,1).then((function(t){e.flagList=t||[]})),document.onkeydown=function(){var t=window.event;83===t.keyCode&&t.ctrlKey?(e.save("caseInfoForm"),t.preventDefault()):68===t.keyCode&&t.ctrlKey?(e.save("caseInfoForm",1),t.preventDefault()):67===t.keyCode&&t.ctrlKey&&t.shiftKey&&(e.save("caseInfoForm",2),t.preventDefault())}},methods:{initBefore:function(){var e=this;this.$route.query.id?(this.loading=!0,Object(c["g"])(this.$route.query.id).then((function(t){t&&t.projectId===e.$store.getters.projectId||e.toBack(),e.init(t)})).finally((function(){e.loading=!1}))):this.init()},init:function(e){var t=this;e?(this.caseInfo.id=e.id,this.caseInfo.name=e.name,this.caseInfo.envId=e.envId||-1,this.caseInfo.domain=e.domain||"",this.caseInfo.path=e.path||"",this.caseInfo.beforeExcs=e.beforeExcs||[],this.caseInfo.projectId=e.projectId,this.caseInfo.timoutTime=e.timoutTime,this.caseInfo.failContinue=e.failContinue,this.caseInfo.flags=e.flags,this.caseInfo.flagList=(e.flags||"").split(",").filter((function(e){return""!==e})),this.caseInfo.params=e.params||[],this.caseInfo.caseVars=e.caseVars||[],this.caseInfo.caseType=e.caseType,this.caseInfo.testSteps=e.testSteps||[],this.caseInfo.remark=e.remark,this.setSort(),this.$nextTick((function(){t.$refs.actionFileList.init(e.id,3),t.$refs.caseVars.params=t.caseInfo.caseVars}))):(this.caseInfo.projectId=this.$store.getters.projectId,this.caseInfo.envId=-1,this.caseInfo.caseType=1,this.caseInfo.failContinue=0,this.caseInfo.timoutTime=1)},debug:function(){this.$refs.debug.visible=!0},openApiDetail:function(e){this.$refs.apiDetail.init(e)},deleteRow:function(e){var t=this;this.$confirm("此操作将永久删除该步骤, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(c["e"])(e).then((function(n){t.$message({type:"success",message:"删除成功!"}),1===e.type&&t.$emit("closeApi","引用api步骤-"+e.id),t.refreshSteps()}))})).catch((function(){t.$message({type:"success",message:"已取消删除"})}))},editRow:function(e){this.$emit("editApi",e)},toBack:function(){this.$router.push({path:"/apiTest/testCase/list"})},addApi:function(){this.addApiVisible=!0},refreshSteps:function(){var e=this;Object(c["f"])(this.caseInfo.id).then((function(t){e.caseInfo.testSteps=t||[]}))},setSort:function(){var e=this,t=this.$refs.dragTable.$el.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];b["a"].create(t,{setData:function(e){e.setData("Text","")},onStart:function(t){e.oldDataList=[],e.caseInfo.testSteps.forEach((function(t){e.oldDataList.push(t)}))},onEnd:function(t){var n=e.caseInfo.testSteps.splice(t.oldIndex,1)[0];e.caseInfo.testSteps.splice(t.newIndex,0,n)}})},save:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,n){var a,i,s=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=!0,e.next=3,this.$refs["caseInfoForm"].validate((function(e,t){!e&a&&(a=e)}));case 3:return e.next=5,this.$refs.caseVars.params.every((function(e,t){return!!e.name||(s.$message.error("第"+(t+1)+"行用例参数名不能为空"),a=!1,!1)}));case 5:return i=e.sent,i&&(this.caseInfo.caseVars=this.$refs.caseVars.params||[]),e.next=9,this.$refs[t].validate((function(e,t){e&a&&(s.caseInfo.flags=s.caseInfo.flagList.join(","),s.loading=!0,1===n?Object(c["c"])(s.caseInfo).then((function(e){s.loading=!1,s.$emit("debug",e||{}),setTimeout((function(){Object(o["a"])("调试成功")}),10)})):s.$route.query.id&&2!==n?Object(c["i"])(s.caseInfo).then((function(e){s.initBefore(),Object(o["a"])("保存用例成功！")})).catch((function(){s.loading=!1})):Object(c["b"])(s.caseInfo).then((function(e){s.$router.push({path:"/apiTest/testCase/edit",query:{id:e.id}}),2===n?Object(o["a"])("恭喜你！复制用例成功！"):Object(o["a"])("保存用例成功！")})).catch((function(){s.loading=!1})))}));case 9:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()}},g=h,y=(n("53ef"),n("5511")),_=Object(y["a"])(g,a,i,!1,null,"270e5412",null);t["default"]=_.exports}}]);