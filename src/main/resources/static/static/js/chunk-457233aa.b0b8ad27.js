(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-457233aa","chunk-aa626f6e"],{1967:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[a("div",{staticStyle:{"margin-bottom":"10px"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:t.serchData.status,callback:function(e){t.$set(t.serchData,"status",e)},expression:"serchData.status"}},[a("el-radio-button",{attrs:{label:""},nativeOn:{click:function(e){return t.clickRadio(e,-1)}}},[t._v("全部")]),t._v(" "),a("el-radio-button",{attrs:{label:0},nativeOn:{click:function(e){return t.clickRadio(e,0)}}},[t._v("成功")]),t._v(" "),a("el-radio-button",{attrs:{label:1},nativeOn:{click:function(e){return t.clickRadio(e,1)}}},[t._v("失败")]),t._v(" "),a("el-radio-button",{attrs:{label:2},nativeOn:{click:function(e){return t.clickRadio(e,2)}}},[t._v("跳过")])],1)],1)])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"mini"}},[a("el-table-column",{attrs:{type:"index",width:"70",align:"center",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"用例集名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.suiteName))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"用例名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.caseName))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?a("el-tag",{attrs:{size:"small"}},[t._v(t._s("执行成功"))]):t._e(),t._v(" "),1===e.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v(t._s("执行失败"))]):t._e(),t._v(" "),2===e.row.status?a("el-tag",{attrs:{size:"small",type:"info"}},[t._v(t._s("跳过"))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"140",align:"center",label:"开始时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.createTime))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"140",align:"center",label:"耗时"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.getDifftime(e.row.createTime,e.row.endTime)))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"180",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.viewDetail(e.row)}}},[t._v("查看详情")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}}),t._v(" "),t.caseDetailVisible?a("case-detail",{ref:"caseDetail"}):t._e()],1)},i=[],s=a("aae1"),r=a("cf45"),o=a("ffdc"),l={components:{caseDetail:o["default"]},data:function(){return{caseDetail:!1,loading:!1,serchData:{status:""},pageInfo:{pageNum:1,pageSize:20,pageCount:0},dataList:[],caseDetailVisible:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},mounted:function(){this.$route.query.id&&(this.serchData.planLogId=this.$route.query.id,this.getPageList())},methods:{clickRadio:function(t,e){"INPUT"!==t.target.tagName&&(this.serchData.status=-1===e?"":e,this.getPageList())},getDifftime:function(t,e){return Object(r["a"])(t,e)},getRate:function(t,e){return Object(r["b"])(t,e)},viewDetail:function(t){var e=this;this.caseDetailVisible=!0,this.$nextTick(function(){e.$refs.caseDetail.init(t)})},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},getPageList:function(){var t=this;this.loading=!0,Object(s["a"])(this.serchInfo).then(function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1})}}},c=l,u=(a("5ffa"),a("6691")),g=Object(u["a"])(c,n,i,!1,null,"97d0ac76",null);e["default"]=g.exports},"248f":function(t,e,a){},"5ffa":function(t,e,a){"use strict";var n=a("248f"),i=a.n(n);i.a},6473:function(t,e,a){},aae1:function(t,e,a){"use strict";a.d(e,"d",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"b",function(){return r}),a.d(e,"e",function(){return o}),a.d(e,"a",function(){return l}),a.d(e,"f",function(){return c});var n=a("b775"),i=function(t){return Object(n["d"])("/uiLogNew/planListPage",t,!1)},s=function(t){return Object(n["d"])("/uiLogNew/planById/"+t)},r=function(t){return Object(n["b"])("/uiLogNew/removePlan/"+t,"",!1)},o=function(t){return Object(n["d"])("/uiLogNew/suiteInfo/"+t)},l=function(t){return Object(n["d"])("/uiLogNew/caseListPage",t)},c=function(t){return Object(n["d"])("/uiLogNew/stepListPage",t)}},cf45:function(t,e,a){"use strict";a.d(e,"b",function(){return n}),a.d(e,"a",function(){return i});a("34a3");var n=function(t,e){return t=parseFloat(t),e=parseFloat(e),isNaN(t)||isNaN(e)?"-":e<=0?"0%":Math.round(t/e*1e4)/100+"%"},i=function(t,e){if(!t||!e)return"0秒";var a=Date.parse(new Date(t.replace(/-/g,"/"))),n=Date.parse(new Date(e.replace(/-/g,"/"))),i=new Date(a),s=new Date(n),r=s.getTime()-i.getTime(),o=Math.floor(r/864e5),l=r%864e5,c=Math.floor(l/36e5),u=l%36e5,g=Math.floor(u/6e4),f=u%6e4,d=Math.floor(f/1e3);return o+""==="0"&c+""==="0"&g+""==="0"?d+"秒":o+""==="0"&c+""==="0"?g+"分钟 "+d+"秒":o+""==="0"?c+"小时 "+g+"分钟 "+d+"秒":o+"天 "+c+"小时 "+g+"分钟 "+d+"秒"}},f4b7:function(t,e,a){"use strict";var n=a("6473"),i=a.n(n);i.a},ffdc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-drawer",{attrs:{title:"用例详情",size:"50%",visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("div",{staticStyle:{margin:"0px 20px 0px 20px"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"}},[a("el-table-column",{attrs:{type:"index",width:"40",align:"center",label:"ID"}}),t._v(" "),a("el-table-column",{attrs:{align:"center",width:"180",label:"步骤名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.stepName))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"实际结果"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.logDetail))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"70",align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.status?a("el-tag",{attrs:{size:"small"}},[t._v(t._s("成功"))]):t._e(),t._v(" "),1===e.row.status?a("el-tag",{attrs:{size:"small",type:"danger"}},[t._v(t._s("失败"))]):t._e(),t._v(" "),2===e.row.status?a("el-tag",{attrs:{size:"small",type:"info"}},[t._v(t._s("跳过"))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"120",align:"center",label:"截图"},scopedSlots:t._u([{key:"default",fn:function(e){return e.row.imgname?[a("el-image",{staticStyle:{width:"80px",height:"30px"},attrs:{src:t.getFilePath(e.row.imgname),"preview-src-list":t.getFileList(e.row.imgname)}})]:void 0}}],null,!0)})],1),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}})],1)])},i=[],s=a("aae1"),r=a("cf45"),o={data:function(){return{visible:!1,loading:!1,serchData:{caseLogId:""},pageInfo:{pageNum:1,pageSize:20,pageCount:0},dataList:[],addOrEditFormVisible:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},mounted:function(){},methods:{init:function(t){this.serchData.caseLogId=t.id,this.getPageList(),this.visible=!0},getFilePath:function(t){return"/public/profile/"+t},getFileList:function(t){return["/public/profile/"+t]},getDifftime:function(t,e){return Object(r["a"])(t,e)},getRate:function(t,e){return Object(r["b"])(t,e)},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},getPageList:function(){var t=this;this.loading=!0,Object(s["f"])(this.serchInfo).then(function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1})}}},l=o,c=(a("f4b7"),a("6691")),u=Object(c["a"])(l,n,i,!1,null,"6bf8d3fa",null);e["default"]=u.exports}}]);