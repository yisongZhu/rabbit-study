(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c8a7b3f","chunk-096e2b7b"],{"04c7":function(t,e,n){},"221a":function(t,e,n){},6631:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{staticClass:"titil"},[n("el-col",{attrs:{span:24}},[n("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.getPageList()}}},[t._v("刷新数据")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.addRow()}}},[t._v("新增用例")])],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dragTable",staticStyle:{width:"auto"},attrs:{"row-key":"suiteCaseId",data:t.dataList,border:"",stripe:"",size:"small"}},[n("el-table-column",{attrs:{align:"center",width:"60px",label:"用例ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"180",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{staticClass:"mini-btn",attrs:{type:"danger",size:"mini"},on:{click:function(n){return t.deleteRow(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("caseAdd",{ref:"caseAdd",on:{refreshData:t.getPageList},model:{value:t.addFormVisible,callback:function(e){t.addFormVisible=e},expression:"addFormVisible"}})],1)},i=[],s=(n("f763"),n("5807")),r=n.n(s),c=n("696d"),o=n("c21c"),u={components:{caseAdd:o["default"]},data:function(){return{visible:!1,loading:!1,suiteId:"",oldDataList:[],dataList:[],addFormVisible:!1,rules:{}}},computed:{suiteCases:function(){var t=this,e=[];return this.dataList.forEach(function(n){e.push({id:n.suiteCaseId,suiteId:t.suiteId,caseId:n.id})}),e}},mounted:function(){},methods:{init:function(t){this.suiteId=t,this.getPageList()},setSort:function(){var t=this,e=this.$refs.dragTable.$el.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];r.a.create(e,{setData:function(t){t.setData("Text","")},onStart:function(e){t.oldDataList=[],t.dataList.forEach(function(e){t.oldDataList.push(e)})},onEnd:function(e){var n=t.dataList.splice(e.oldIndex,1)[0];t.dataList.splice(e.newIndex,0,n);for(var a=!0,i=0;i<t.dataList.length;i++)if(t.dataList[i].suiteCaseId!==t.oldDataList[i].suiteCaseId){a=!1;break}a||t.updateCaseSort()}})},addRow:function(t){this.$refs.caseAdd.suiteId=this.suiteId,this.addFormVisible=!0},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除该用例, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c["c"])(t.suiteCaseId).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.getPageList()})}).catch(function(){e.$message({type:"success",message:"已取消删除"})})},updateCaseSort:function(){var t=this;Object(c["g"])(this.suiteCases).then(function(e){t.$message({type:"success",message:"修改排序成功!"}),t.getPageList()})},getPageList:function(){var t=this;this.loading=!0,Object(c["e"])(this.suiteId).then(function(e){t.dataList=e||[],t.loading=!1,t.$nextTick(function(){t.setSort()})})}}},l=u,d=(n("a423"),n("6691")),f=Object(d["a"])(l,a,i,!1,null,"6b620062",null);e["default"]=f.exports},"696d":function(t,e,n){"use strict";n.d(e,"f",function(){return i}),n.d(e,"e",function(){return s}),n.d(e,"b",function(){return r}),n.d(e,"g",function(){return c}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"h",function(){return l}),n.d(e,"d",function(){return d});var a=n("b775"),i=function(t){return Object(a["d"])("/testsuiteUi/listPage",t,!1)},s=function(t){return Object(a["d"])("/testsuiteUi/listCaseById/"+t)},r=function(t){return Object(a["e"])("/testsuiteUi/add",t)},c=function(t){return Object(a["e"])("/testsuiteUi/updateCaseSort",t)},o=function(t){return Object(a["e"])("/testsuiteUi/addCaseToSuite",t)},u=function(t){return Object(a["e"])("/testsuiteUi/delSuiteCaseById/"+t)},l=function(t){return Object(a["f"])("/testsuiteUi/edit",t)},d=function(t){return Object(a["e"])("/testsuiteUi/remove",t)}},"74bd":function(t,e,n){"use strict";var a=n("04c7"),i=n.n(a);i.a},a423:function(t,e,n){"use strict";var a=n("221a"),i=n.n(a);i.a},c21c:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加用例",visible:t.visible,width:"70%"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addForm")}}},[n("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[n("div",{staticClass:"my-class"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"用例名称："}},[n("el-input",{attrs:{placeholder:"请输入用例名称"},model:{value:t.serchData.name,callback:function(e){t.$set(t.serchData,"name",e)},expression:"serchData.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"用例描述："}},[n("el-input",{attrs:{placeholder:"请输入用例描述"},model:{value:t.serchData.remark,callback:function(e){t.$set(t.serchData,"remark",e)},expression:"serchData.remark"}})],1),t._v(" "),n("el-form-item",[n("el-button",{on:{click:t.searchList}},[t._v("查询")]),t._v(" "),n("el-button",{staticClass:"title",attrs:{type:"primary"},on:{click:function(e){return t.submitForm("addForm")}}},[t._v("保存")])],1)],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"table",staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":t.selected}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"40"}}),t._v(" "),n("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"160",align:"center",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.createTime))]}}])})],1),t._v(" "),n("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}})],1)],1)},i=[],s=n("fc93"),r=n("3fa5"),c=n("696d"),o={props:["value"],data:function(){return{visible:!1,dataList:[],selectedData:[],serchData:{name:"",remark:"",caseType:1},pageInfo:{pageNum:1,pageSize:10,pageCount:0},suiteId:"",loading:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},watch:{value:{handler:function(t){this.visible=t},immediate:!0},visible:function(t){this.$emit("input",t)}},mounted:function(){this.getPageList()},methods:{selected:function(t){this.selectedData=t},submitForm:function(t){var e=this;if("addForm"===t&&0===this.selectedData.length)this.$message({showClose:!0,message:"请选择一个用例",type:"error"});else if("addForm"===t&&this.selectedData.length>0){var n=[];this.selectedData=this.selectedData.map(function(t){return n.push({suiteId:e.suiteId,caseId:t.id}),t}),Object(c["a"])(n).then(function(t){e.visible=!1,e.$emit("refreshData"),Object(r["a"])("保存数据成功")})}},getPageList:function(){var t=this;this.loading=!0,Object(s["f"])(this.serchInfo).then(function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1})},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},closeDialog:function(t){this.visible=!1,this.$refs.table.clearSelection()}}},u=o,l=(n("74bd"),n("6691")),d=Object(l["a"])(u,a,i,!1,null,"1c954249",null);e["default"]=d.exports},fc93:function(t,e,n){"use strict";n.d(e,"f",function(){return i}),n.d(e,"b",function(){return s}),n.d(e,"e",function(){return r}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return o}),n.d(e,"g",function(){return u}),n.d(e,"d",function(){return l});var a=n("b775"),i=function(t){return Object(a["d"])("/uiTestCaseNew/listPage",t,!1)},s=function(t){return Object(a["d"])("/uiTestCaseNew/allBusiness/"+t)},r=function(t){return Object(a["d"])("/uiTestCaseNew/"+t)},c=function(t){return Object(a["d"])("/uiTestCaseNew/business/"+t)},o=function(t){return Object(a["e"])("/uiTestCaseNew/add",t)},u=function(t){return Object(a["f"])("/uiTestCaseNew/edit",t)},l=function(t){return Object(a["e"])("/uiTestCaseNew/remove",t)}}}]);