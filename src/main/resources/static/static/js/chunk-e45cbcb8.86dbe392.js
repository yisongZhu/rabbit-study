(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e45cbcb8"],{1183:function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return s})),a.d(t,"a",(function(){return c})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return l}));var n=a("b775"),i=function(e){return Object(n["d"])("/flag/listPage",e,!1)},s=function(e,t){return Object(n["d"])("/flag/listByProjectIdAndType/"+e+"/"+t)},c=function(e){return Object(n["e"])("/flag/add",e)},o=function(e){return Object(n["f"])("/flag/edit",e)},l=function(e){return Object(n["e"])("/flag/remove",e)}},"388d":function(e,t,a){"use strict";var n=a("f842"),i=a.n(n);i.a},ae39:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加用例集",visible:e.visible,width:"700px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog()}}},[a("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[a("div",{staticClass:"my-class"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[a("el-form-item",{attrs:{label:"业务流名称："}},[a("el-input",{attrs:{placeholder:"请输入业务流名称"},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}})],1),e._v(" "),a("el-form-item",[a("el-button",{on:{click:e.searchList}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addRow()}}},[e._v("添加")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"refTable",staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":e.selected}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"40"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"业务流名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])})],1),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)],1)},i=[],s=(a("6d57"),a("1183")),c={props:["value"],data:function(){return{visible:!1,dataList:[],selectedData:[],serchData:{name:"",remark:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},loading:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,t.type=2,e.serchData=t,e}},watch:{value:{handler:function(e){this.visible=e},immediate:!0},visible:function(e){this.$emit("input",e)}},mounted:function(){this.getPageList()},methods:{selected:function(e){this.selectedData=e},addRow:function(){this.selectedData.forEach((function(e){e.isValid=1})),this.$emit("backDate",this.selectedData),this.visible=!1},getPageList:function(){var e=this;this.loading=!0,Object(s["c"])(this.serchInfo).then((function(t){e.dataList=t.list||[],e.pageInfo.pageCount=t.total,e.loading=!1}))},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},closeDialog:function(){this.$refs.refTable.clearSelection(),this.selectedData=[]}}},o=c,l=(a("388d"),a("5511")),r=Object(l["a"])(o,n,i,!1,null,"1a2e8981",null);t["default"]=r.exports},f842:function(e,t,a){}}]);