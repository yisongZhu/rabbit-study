(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a8ecbc0"],{"1f90":function(t,e,i){"use strict";i.d(e,"e",(function(){return r})),i.d(e,"b",(function(){return n})),i.d(e,"g",(function(){return o})),i.d(e,"d",(function(){return s})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return l})),i.d(e,"f",(function(){return u}));var a=i("b775"),r=function(t){return Object(a["d"])("/uiTestBusiness/listPage",t,!1)},n=function(t){return Object(a["e"])("/uiTestBusiness/add",t)},o=function(t){return Object(a["f"])("/uiTestBusiness/edit",t)},s=function(t){return Object(a["e"])("/uiTestBusiness/remove",t)},d=function(t){return Object(a["e"])("/uiTestBusiness/delBusinessCaseById/"+t)},l=function(t){return Object(a["e"])("/uiTestBusiness/addCaseToBusiness",t)},u=function(t){return Object(a["e"])("/uiTestBusiness/updateCaseSort",t)}},"3e69":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[i("el-form-item",{attrs:{label:"业务流名称："}},[i("el-input",{attrs:{placeholder:"请输入业务流名称"},model:{value:t.serchData.name,callback:function(e){t.$set(t.serchData,"name",e)},expression:"serchData.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"业务流描述："}},[i("el-input",{attrs:{placeholder:"请输入业务流描述"},model:{value:t.serchData.remark,callback:function(e){t.$set(t.serchData,"remark",e)},expression:"serchData.remark"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("查询")]),t._v(" "),i("el-button",{on:{click:t.resetSearch}},[t._v("重置")])],1)],1)],1),t._v(" "),i("el-row",[i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.addRow()}}},[t._v("新增业务流")])],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"}},[i("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"200px",label:"业务流名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"120px",label:"用例失败是否继续"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(1===e.row.failContinue?"继续":"跳过"))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"120px",label:"超时时间(秒)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.timoutTime))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"业务流描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{size:"mini"},on:{click:function(i){return t.addRow(e.row)}}},[t._v("修改")]),t._v(" "),i("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"primary",size:"mini"},on:{click:function(i){return t.editStep(e.row)}}},[t._v("编辑步骤")]),t._v(" "),i("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(i){return t.deleteRow(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}}),t._v(" "),i("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.addOrEditFormVisible,width:"530px"},on:{"update:visible":function(e){t.addOrEditFormVisible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[i("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[i("el-form-item",{attrs:{label:"业务流名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入业务流名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"失败是否继续",prop:"failContinue"}},[i("el-radio-group",{model:{value:t.addOrEditForm.failContinue,callback:function(e){t.$set(t.addOrEditForm,"failContinue",e)},expression:"addOrEditForm.failContinue"}},[i("el-radio",{attrs:{label:0}},[t._v("跳过")]),t._v(" "),i("el-radio",{attrs:{label:1}},[t._v("继续")])],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"超时时间(秒)",prop:"timoutTime"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入项目名称"},model:{value:t.addOrEditForm.timoutTime,callback:function(e){t.$set(t.addOrEditForm,"timoutTime",e)},expression:"addOrEditForm.timoutTime"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"业务流描述",prop:"remark"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入业务流描述"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),i("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)],1)},r=[],n=(i("cc57"),i("1f90")),o=i("3fa5"),s={data:function(){return{loading:!1,serchData:{name:"",remark:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],rules:{name:[{required:!0,message:"名称不能为空",trigger:"blur"}]},addOrEditFormVisible:!1,addOrEditForm:{title:"",id:"",projectId:"",failContinue:0,timoutTime:120,name:"",remark:""}}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},mounted:function(){this.getPageList()},methods:{editStep:function(t){this.$router.push({path:"/uiTest/business/uiBusinessCase",query:{id:t.id}})},resetSearch:function(){this.serchData={}},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},addRow:function(t){t?(this.addOrEditFormVisible=!0,this.addOrEditForm.title="编辑业务流",this.addOrEditForm.id=t.id,this.addOrEditForm.name=t.name,this.addOrEditForm.projectId=t.projectId,this.addOrEditForm.failContinue=t.failContinue,this.addOrEditForm.timoutTime=t.timoutTime,this.addOrEditForm.remark=t.remark):(this.addOrEditFormVisible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增业务流")},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除该任务, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["d"])(t).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.getPageList()}))})).catch((function(){e.$message({type:"success",message:"已取消删除"})}))},submitForm:function(t){var e=this;this.$refs[t].validate((function(i){i&&"addOrEditForm"===t&&e.addOrEditForm.id?Object(n["g"])(e.addOrEditForm).then((function(t){e.addOrEditFormVisible=!1,e.getPageList(),Object(o["a"])("保存数据成功")})):i&&"addOrEditForm"===t&&!e.addOrEditForm.id&&Object(n["b"])(e.addOrEditForm).then((function(t){e.addOrEditFormVisible=!1,e.getPageList(),Object(o["a"])("保存数据成功")}))}))},closeDialog:function(t){"addOrEditForm"===t&&(this.$refs[t].resetFields(),this.addOrEditFormVisible=!1,this.addOrEditForm={title:"",id:"",projectId:"",failContinue:0,timoutTime:120,name:"",remark:""})},getPageList:function(){var t=this;this.loading=!0,Object(n["e"])(this.serchInfo).then((function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1}))}}},d=s,l=i("5511"),u=Object(l["a"])(d,a,r,!1,null,"3a6045b3",null);e["default"]=u.exports}}]);