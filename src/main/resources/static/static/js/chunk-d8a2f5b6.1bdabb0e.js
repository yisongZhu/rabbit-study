(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d8a2f5b6","chunk-e019713c"],{6211:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[a("el-form-item",{attrs:{label:"页面名称："}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入页面名称"},model:{value:t.serchData.pageName,callback:function(e){t.$set(t.serchData,"pageName",e)},expression:"serchData.pageName"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("查询")]),t._v(" "),a("el-button",{on:{click:t.resetSearch}},[t._v("重置")])],1)],1)],1),t._v(" "),a("el-row",[a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.addRow()}}},[t._v("新增页面")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"}},[a("el-table-column",{attrs:{align:"center",label:"页面名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.pageName))]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"180",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{size:"mini"},on:{click:function(a){return t.addRow(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.editElement(e.row)}}},[t._v("编辑元素")]),t._v(" "),a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.deleteRow(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}}),t._v(" "),t.addOrEditFormVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getPageList}}):t._e()],1)},r=[],n=a("af96"),o=a("9aef"),s={components:{AddOrUpdate:o["default"]},data:function(){return{loading:!1,serchData:{pageName:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],addOrEditFormVisible:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},mounted:function(){this.getPageList()},methods:{editElement:function(t){this.$router.push({path:"/uiTestNew/pageElement/element",query:{id:t.id}})},resetSearch:function(){this.serchData={pageName:""}},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},addRow:function(t){var e=this;this.addOrEditFormVisible=!0,this.$nextTick((function(){e.$refs.addOrUpdate.init(t)}))},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除该页面, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["b"])(t).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.getPageList()}))})).catch((function(){e.$message({type:"success",message:"已取消删除"})}))},getPageList:function(){var t=this;this.loading=!0,Object(n["c"])(this.serchInfo).then((function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1}))}}},d=s,l=a("5511"),c=Object(l["a"])(d,i,r,!1,null,"0c1c0be2",null);e["default"]=c.exports},"9aef":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.visible,width:"500px"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[a("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[a("el-form-item",{attrs:{label:"页面名称",prop:"pageName"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入页面名称"},model:{value:t.addOrEditForm.pageName,callback:function(e){t.$set(t.addOrEditForm,"pageName",e)},expression:"addOrEditForm.pageName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),a("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)},r=[],n=a("af96"),o=a("3fa5"),s={data:function(){return{visible:!1,rules:{pageName:[{required:!0,message:"页面名称不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",projectId:"",pageName:"",isEnable:1,remark:""}}},methods:{init:function(t){t?(this.visible=!0,this.addOrEditForm.title="编辑页面",this.addOrEditForm.id=t.id,this.addOrEditForm.projectId=t.projectId,this.addOrEditForm.pageName=t.pageName,this.addOrEditForm.isEnable=t.isEnable,this.addOrEditForm.remark=t.remark):(this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增页面")},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",projectId:"",pageName:"",isEnable:1,remark:""}},submitForm:function(t){var e=this;this.$refs[t].validate((function(a){a&&"addOrEditForm"===t&&e.addOrEditForm.id?Object(n["f"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")})):a&&"addOrEditForm"===t&&!e.addOrEditForm.id&&Object(n["a"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")}))}))}}},d=s,l=a("5511"),c=Object(l["a"])(d,i,r,!1,null,null,null);e["default"]=c.exports},af96:function(t,e,a){"use strict";a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n})),a.d(e,"f",(function(){return o})),a.d(e,"b",(function(){return s})),a.d(e,"e",(function(){return d})),a.d(e,"d",(function(){return l}));var i=a("b775"),r=function(t){return Object(i["d"])("/projectPage/listPage",t,!1)},n=function(t){return Object(i["e"])("/projectPage/add",t)},o=function(t){return Object(i["f"])("/projectPage/edit",t)},s=function(t){return Object(i["e"])("/projectPage/remove",t)},d=function(t){return Object(i["d"])("/projectPage/listByProjectId/"+t)},l=function(t){return Object(i["d"])("/projectPage/listById/"+t)}}}]);