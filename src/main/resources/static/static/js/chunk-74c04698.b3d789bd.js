(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74c04698","chunk-a2dcd376","chunk-28da7a11"],{4103:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-row",{staticClass:"dect-main",attrs:{gutter:10}},[n("el-col",{attrs:{span:7}},[n("el-row",{staticClass:"titil"},[n("el-col",{attrs:{span:24}},[n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.addSuite()}}},[e._v("添加用例集")])],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small","highlight-current-row":""},on:{"row-click":e.selectRow}},[n("el-table-column",{attrs:{align:"left"},scopedSlots:e._u([{key:"header",fn:function(t){return[e._e(),e._v(" "),n("el-input",{attrs:{size:"small",placeholder:"请输入用例集名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchList()}},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}},[n("el-button",{staticClass:"el-icon-search",attrs:{slot:"suffix",type:"primary",size:"small"},on:{click:e.searchList},slot:"suffix"})],1)]}},{key:"default",fn:function(t){return[t.row.edit?[n("el-input",{staticClass:"edit-input",staticStyle:{width:"73%"},attrs:{size:"small"},model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}}),e._v(" "),n("el-button",{staticClass:"mini-btn",attrs:{size:"mini"},on:{click:function(n){return e.addRow(t.row)}}},[e._v("保存")]),e._v(" "),n("el-button",{staticClass:"mini-btn",staticStyle:{"margin-left":"0px"},attrs:{type:"warning",size:"mini"},on:{click:function(n){return e.cancelRow(t.row)}}},[e._v("取消")])]:e._e(),e._v(" "),t.row.edit?e._e():[e._v("\n            "+e._s(t.row.name)+"\n            "),n("i",{staticClass:"el-icon-delete",staticStyle:{float:"right",padding:"5px",cursor:"pointer"},on:{click:function(n){return e.deleteRow(t.row)}}}),e._v(" "),n("i",{staticClass:"el-icon-edit",staticStyle:{float:"right",padding:"5px",cursor:"pointer"},on:{click:function(e){t.row.edit=!t.row.edit}}})]]}}])})],1),e._v(" "),n("el-pagination",{staticStyle:{float:"none !important"},attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1),e._v(" "),n("el-col",{attrs:{span:17}},[e.selectedId?n("suite-case",{ref:"suiteCaseRef"}):e._e()],1)],1)},i=[],s=(n("cc57"),n("696d")),r=n("6631"),c={components:{SuiteCase:r["default"]},data:function(){return{loading:!1,serchData:{name:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],selectedId:"",rules:{key:[{required:!0,message:"key不能为空",trigger:"blur"}],name:[{required:!0,message:"name不能为空",trigger:"blur"}]}}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},mounted:function(){this.getPageList()},methods:{cancelRow:function(e){e.id?this.getPageList():this.dataList.splice(e.$index,1)},addSuite:function(){var e={edit:!0};this.dataList.unshift(e)},resetSearch:function(){this.serchData={}},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},addRow:function(e){var t=this;e.name?e.id?Object(s["h"])(e).then((function(e){t.$message({type:"success",message:"更新成功!"}),t.getPageList()})):(e.projectId=this.$store.getters.projectId,Object(s["b"])(e).then((function(e){t.$message({type:"success",message:"新增成功!"}),t.getPageList()}))):this.$message.error("用例集名称不能为空")},selectRow:function(e){var t=this;this.selectedId=e.id,this.$nextTick((function(){t.$refs.suiteCaseRef.init(e.id)}))},deleteRow:function(e){var t=this;this.$confirm("此操作将永久删除该用例集, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["d"])(e).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getPageList()}))})).catch((function(){t.$message({type:"success",message:"已取消删除"})}))},getPageList:function(){var e=this;this.loading=!0,this.selectedId="",Object(s["f"])(this.serchInfo).then((function(t){e.dataList=t.list.map((function(e){return e.edit=!1,e}))||[],e.pageInfo.pageCount=t.total,e.loading=!1}))}}},o=c,u=(n("6194"),n("5511")),l=Object(u["a"])(o,a,i,!1,null,"4b6adeab",null);t["default"]=l.exports},5019:function(e,t,n){},6194:function(e,t,n){"use strict";var a=n("5019"),i=n.n(a);i.a},6631:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticClass:"titil"},[n("el-col",{attrs:{span:24}},[n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.getPageList()}}},[e._v("刷新数据")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addRow()}}},[e._v("新增用例")])],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dragTable",staticStyle:{width:"auto"},attrs:{"row-key":"suiteCaseId",data:e.dataList,border:"",stripe:"",size:"small"}},[n("el-table-column",{attrs:{align:"center",width:"60px",label:"用例ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"180",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"mini-btn",attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.deleteRow(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("caseAdd",{ref:"caseAdd",on:{refreshData:e.getPageList},model:{value:e.addFormVisible,callback:function(t){e.addFormVisible=t},expression:"addFormVisible"}})],1)},i=[],s=(n("6d57"),n("2480")),r=n("696d"),c=n("c21c"),o={components:{caseAdd:c["default"]},data:function(){return{visible:!1,loading:!1,suiteId:"",oldDataList:[],dataList:[],addFormVisible:!1,rules:{}}},computed:{suiteCases:function(){var e=this,t=[];return this.dataList.forEach((function(n){t.push({id:n.suiteCaseId,suiteId:e.suiteId,caseId:n.id})})),t}},mounted:function(){},methods:{init:function(e){this.suiteId=e,this.getPageList()},setSort:function(){var e=this,t=this.$refs.dragTable.$el.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];s["a"].create(t,{setData:function(e){e.setData("Text","")},onStart:function(t){e.oldDataList=[],e.dataList.forEach((function(t){e.oldDataList.push(t)}))},onEnd:function(t){var n=e.dataList.splice(t.oldIndex,1)[0];e.dataList.splice(t.newIndex,0,n);for(var a=!0,i=0;i<e.dataList.length;i++)if(e.dataList[i].suiteCaseId!==e.oldDataList[i].suiteCaseId){a=!1;break}a||e.updateCaseSort()}})},addRow:function(e){this.$refs.caseAdd.suiteId=this.suiteId,this.addFormVisible=!0},deleteRow:function(e){var t=this;this.$confirm("此操作将永久删除该用例, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["c"])(e.suiteCaseId).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getPageList()}))})).catch((function(){t.$message({type:"success",message:"已取消删除"})}))},updateCaseSort:function(){var e=this;Object(r["g"])(this.suiteCases).then((function(t){e.$message({type:"success",message:"修改排序成功!"}),e.getPageList()}))},getPageList:function(){var e=this;this.loading=!0,Object(r["e"])(this.suiteId).then((function(t){e.dataList=t||[],e.loading=!1,e.$nextTick((function(){e.setSort()}))}))}}},u=o,l=(n("a423"),n("5511")),d=Object(l["a"])(u,a,i,!1,null,"6b620062",null);t["default"]=d.exports},"696d":function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return r})),n.d(t,"g",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"h",(function(){return l})),n.d(t,"d",(function(){return d}));var a=n("b775"),i=function(e){return Object(a["d"])("/testsuiteUi/listPage",e,!1)},s=function(e){return Object(a["d"])("/testsuiteUi/listCaseById/"+e)},r=function(e){return Object(a["e"])("/testsuiteUi/add",e)},c=function(e){return Object(a["e"])("/testsuiteUi/updateCaseSort",e)},o=function(e){return Object(a["e"])("/testsuiteUi/addCaseToSuite",e)},u=function(e){return Object(a["e"])("/testsuiteUi/delSuiteCaseById/"+e)},l=function(e){return Object(a["f"])("/testsuiteUi/edit",e)},d=function(e){return Object(a["e"])("/testsuiteUi/remove",e)}},"74bd":function(e,t,n){"use strict";var a=n("f026"),i=n.n(a);i.a},a423:function(e,t,n){"use strict";var a=n("e0a6"),i=n.n(a);i.a},c21c:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加用例",visible:e.visible,width:"70%"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog("addForm")}}},[n("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[n("div",{staticClass:"my-class"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"用例名称："}},[n("el-input",{attrs:{placeholder:"请输入用例名称"},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"用例描述："}},[n("el-input",{attrs:{placeholder:"请输入用例描述"},model:{value:e.serchData.remark,callback:function(t){e.$set(e.serchData,"remark",t)},expression:"serchData.remark"}})],1),e._v(" "),n("el-form-item",[n("el-button",{on:{click:e.searchList}},[e._v("查询")]),e._v(" "),n("el-button",{staticClass:"title",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("addForm")}}},[e._v("保存")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":e.selected}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"40"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"160",align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.createTime))]}}])})],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)],1)},i=[],s=n("fc93"),r=n("3fa5"),c=n("696d"),o={props:["value"],data:function(){return{visible:!1,dataList:[],selectedData:[],serchData:{name:"",remark:"",caseType:1},pageInfo:{pageNum:1,pageSize:10,pageCount:0},suiteId:"",loading:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},watch:{value:{handler:function(e){this.visible=e},immediate:!0},visible:function(e){this.$emit("input",e)}},mounted:function(){this.getPageList()},methods:{selected:function(e){this.selectedData=e},submitForm:function(e){var t=this;if("addForm"===e&&0===this.selectedData.length)this.$message({showClose:!0,message:"请选择一个用例",type:"error"});else if("addForm"===e&&this.selectedData.length>0){var n=[];this.selectedData=this.selectedData.map((function(e){return n.push({suiteId:t.suiteId,caseId:e.id}),e})),Object(c["a"])(n).then((function(e){t.visible=!1,t.$emit("refreshData"),Object(r["a"])("保存数据成功")}))}},getPageList:function(){var e=this;this.loading=!0,Object(s["f"])(this.serchInfo).then((function(t){e.dataList=t.list||[],e.pageInfo.pageCount=t.total,e.loading=!1}))},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},closeDialog:function(e){this.visible=!1,this.$refs.table.clearSelection()}}},u=o,l=(n("74bd"),n("5511")),d=Object(l["a"])(u,a,i,!1,null,"1c954249",null);t["default"]=d.exports},e0a6:function(e,t,n){},f026:function(e,t,n){},fc93:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return l}));var a=n("b775"),i=function(e){return Object(a["d"])("/uiTestCaseNew/listPage",e,!1)},s=function(e){return Object(a["d"])("/uiTestCaseNew/allBusiness/"+e)},r=function(e){return Object(a["d"])("/uiTestCaseNew/"+e)},c=function(e){return Object(a["d"])("/uiTestCaseNew/business/"+e)},o=function(e){return Object(a["e"])("/uiTestCaseNew/add",e)},u=function(e){return Object(a["f"])("/uiTestCaseNew/edit",e)},l=function(e){return Object(a["e"])("/uiTestCaseNew/remove",e)}}}]);