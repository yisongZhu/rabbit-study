(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b7b3a08","chunk-e1149a94"],{"1f90":function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"g",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"f",(function(){return l}));var a=n("b775"),s=function(e){return Object(a["d"])("/uiTestBusiness/listPage",e,!1)},i=function(e){return Object(a["e"])("/uiTestBusiness/add",e)},r=function(e){return Object(a["f"])("/uiTestBusiness/edit",e)},o=function(e){return Object(a["e"])("/uiTestBusiness/remove",e)},u=function(e){return Object(a["e"])("/uiTestBusiness/delBusinessCaseById/"+e)},c=function(e){return Object(a["e"])("/uiTestBusiness/addCaseToBusiness",e)},l=function(e){return Object(a["e"])("/uiTestBusiness/updateCaseSort",e)}},6380:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return c}));var a=n("b775"),s=function(e){return Object(a["d"])("/uiTestCase/listPage",e,!1)},i=function(e){return Object(a["d"])("/uiTestCase/"+e)},r=function(e){return Object(a["d"])("/uiTestCase/listByBusinessId",e,!1)},o=function(e){return Object(a["e"])("/uiTestCase/add",e)},u=function(e){return Object(a["f"])("/uiTestCase/edit",e)},c=function(e){return Object(a["e"])("/uiTestCase/remove",e)}},"7b1e":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加用例",visible:e.visible,width:"70%"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog("addForm")}}},[n("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[n("div",{staticClass:"my-class"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"用例名称："}},[n("el-input",{attrs:{placeholder:"请输入用例名称"},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"用例描述："}},[n("el-input",{attrs:{placeholder:"请输入用例描述"},model:{value:e.serchData.remark,callback:function(t){e.$set(e.serchData,"remark",t)},expression:"serchData.remark"}})],1),e._v(" "),n("el-form-item",[n("el-button",{on:{click:e.searchList}},[e._v("查询")]),e._v(" "),n("el-button",{staticClass:"title",attrs:{type:"primary"},on:{click:function(t){return e.submitForm("addForm")}}},[e._v("保存")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":e.selected}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"35"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"160",align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.createTime))]}}])})],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)],1)},s=[],i=n("6380"),r=n("3fa5"),o=n("1f90"),u={props:["value"],data:function(){return{visible:!1,dataList:[],selectedData:[],serchData:{name:"",remark:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},loading:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},watch:{value:{handler:function(e){this.visible=e},immediate:!0},visible:function(e){this.$emit("input",e)}},mounted:function(){this.getPageList()},methods:{selected:function(e){this.selectedData=e},submitForm:function(e){var t=this;"addForm"===e&&0===this.selectedData.length?this.$message({showClose:!0,message:"请选择一个用例",type:"error"}):"addForm"===e&&this.selectedData.length>0&&(this.selectedData=this.selectedData.map((function(e){return e.businessId=parseInt(t.$route.query.id),e.caseId=e.id,e})),Object(o["a"])(this.selectedData).then((function(e){t.visible=!1,t.$emit("refreshData"),Object(r["a"])("保存数据成功")})))},getPageList:function(){var e=this;this.loading=!0,Object(i["e"])(this.serchInfo).then((function(t){e.dataList=t.list||[],e.pageInfo.pageCount=t.total,e.loading=!1}))},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},closeDialog:function(e){this.visible=!1,this.$refs.table.clearSelection()}}},c=u,l=(n("d5c5"),n("5511")),d=Object(l["a"])(c,a,s,!1,null,"b2943aa4",null);t["default"]=d.exports},a2cd:function(e,t,n){"use strict";var a=n("238a");e.exports=function(e,t){return!!e&&a((function(){t?e.call(null,(function(){}),1):e.call(null)}))}},a735:function(e,t,n){},c904:function(e,t,n){"use strict";var a=n("e46b"),s=n("5daa"),i=n("008a"),r=n("238a"),o=[].sort,u=[1,2,3];a(a.P+a.F*(r((function(){u.sort(void 0)}))||!r((function(){u.sort(null)}))||!n("a2cd")(o)),"Array",{sort:function(e){return void 0===e?o.call(i(this)):o.call(i(this),s(e))}})},d5c5:function(e,t,n){"use strict";var a=n("a735"),s=n.n(a);s.a},de33:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-row",[n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("返回")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.getPageList()}}},[e._v("刷新数据")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addRow()}}},[e._v("新增用例")])],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dragTable",staticStyle:{width:"auto"},attrs:{"row-key":"businessCaseId",data:e.dataList,border:"",stripe:"",size:"small"}},[n("el-table-column",{attrs:{align:"center",width:"60px",label:"用例ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"用例描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"180",fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.deleteRow(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("caseAdd",{on:{refreshData:e.getPageList},model:{value:e.addFormVisible,callback:function(t){e.addFormVisible=t},expression:"addFormVisible"}})],1)},s=[],i=(n("c904"),n("6d57"),n("6380")),r=n("1f90"),o=n("7b1e"),u=n("2480"),c={components:{caseAdd:o["default"]},data:function(){return{visible:!1,loading:!1,businessId:this.$route.query.id,serchData:{name:"",remark:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},oldDataList:[],dataList:[],addFormVisible:!1,rules:{}}},computed:{businessCase:function(){var e=this,t=[];return this.dataList.forEach((function(n){t.push({businessId:e.businessId,caseId:n.id})})),t}},mounted:function(){this.getPageList()},methods:{setSort:function(){var e=this,t=this.$refs.dragTable.$el.querySelectorAll(".el-table__body-wrapper > table > tbody")[0];u["a"].create(t,{setData:function(e){e.setData("Text","")},onStart:function(t){e.oldDataList=[],e.dataList.forEach((function(t){e.oldDataList.push(t)}))},onEnd:function(t){var n=e.dataList.splice(t.oldIndex,1)[0];e.dataList.splice(t.newIndex,0,n);for(var a=!0,s=0;s<e.dataList.length;s++)if(e.dataList[s].businessCaseId!==e.oldDataList[s].businessCaseId){a=!1;break}a||e.updateCaseSort()}})},addRow:function(e){this.addFormVisible=!0},deleteRow:function(e){var t=this;this.$confirm("此操作将永久删除该用例, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["c"])(e.businessCaseId).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.getPageList()}))})).catch((function(){t.$message({type:"success",message:"已取消删除"})}))},updateCaseSort:function(){var e=this;Object(r["f"])(this.businessCase).then((function(t){e.$message({type:"success",message:"修改排序成功!"}),e.getPageList()}))},getPageList:function(){var e=this;this.loading=!0,Object(i["c"])({businessId:this.businessId}).then((function(t){e.dataList=t.map((function(e){return e.sortEdit=!1,e.orgSort=e.sort,e}))||[],e.loading=!1,e.$nextTick((function(){e.setSort()}))}))}}},l=c,d=n("5511"),f=Object(d["a"])(l,a,s,!1,null,"db577484",null);t["default"]=f.exports}}]);