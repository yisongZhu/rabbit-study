(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20308f86","chunk-ac7f1f22"],{"117a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{staticClass:"titil"},[i("el-col",{attrs:{span:24}},[i("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.getPageList()}}},[t._v("刷新数据")]),t._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.addRow()}}},[t._v("新增接口")])],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"dragTable",staticStyle:{width:"auto"},attrs:{"row-key":"suiteCaseId",data:t.dataList,border:"",stripe:"",size:"small"}},[i("el-table-column",{attrs:{align:"center",label:"接口名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"接口路径"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.path))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"接口分类"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.name)+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(0===e.row.status?"未完成":"已完成")+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"180",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{staticClass:"mini-btn",attrs:{type:"danger",size:"mini"},on:{click:function(i){return t.deleteRow(e.row)}}},[t._v("删除")]),t._v(" "),i("el-button",{staticClass:"mini-btn",attrs:{type:"danger",size:"mini"},on:{click:function(i){return t.deleteRow(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}}),t._v(" "),i("apiAdd",{ref:"apiAdd",on:{refreshDataList:t.callBack},model:{value:t.addFormVisible,callback:function(e){t.addFormVisible=e},expression:"addFormVisible"}})],1)},n=[],r=i("1c2e"),o=i("c1c4"),s={components:{apiAdd:o["default"]},data:function(){return{visible:!1,loading:!1,serchData:{apiSuiteId:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],addFormVisible:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},mounted:function(){},methods:{init:function(t){this.serchData.apiSuiteId=t||"",this.getPageList()},addRow:function(){this.$refs.apiAdd.init(),this.addFormVisible=!0},resetSearch:function(){this.serchData={name:""}},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除该接口, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r["c"])(t).then(function(t){e.$message({type:"success",message:"删除成功!"}),e.callBack()})}).catch(function(){e.$message({type:"success",message:"已取消删除"})})},callBack:function(){this.serchData.apiSuiteId?this.$emit("refreshDataList",{rowKey:this.serchData.apiSuiteId+"",id:this.serchData.apiSuiteId,type:1}):this.$emit("refreshDataList",{rowKey:"0",id:0,type:0})},getPageList:function(){var t=this;this.loading=!0,Object(r["f"])(this.serchInfo).then(function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1})}}},c=s,d=(i("dc24"),i("6691")),l=Object(d["a"])(c,a,n,!1,null,"4015ecf1",null);e["default"]=l.exports},"1c2e":function(t,e,i){"use strict";i.d(e,"f",function(){return n}),i.d(e,"e",function(){return r}),i.d(e,"h",function(){return o}),i.d(e,"g",function(){return s}),i.d(e,"a",function(){return c}),i.d(e,"i",function(){return d}),i.d(e,"b",function(){return l}),i.d(e,"j",function(){return u}),i.d(e,"c",function(){return f}),i.d(e,"d",function(){return p});var a=i("b775"),n=function(t){return Object(a["d"])("/api/listPage",t,!1)},r=function(t){return Object(a["d"])("/api/"+t)},o=function(t){return Object(a["d"])("/api/listTreeByProjectId/"+t)},s=function(t){return Object(a["d"])("/api/listSuiteByProjectId/"+t)},c=function(t){return Object(a["e"])("/api/add",t)},d=function(t){return Object(a["f"])("/api/edit",t)},l=function(t){return Object(a["e"])("/api/addSuite",t)},u=function(t){return Object(a["f"])("/api/editSuite",t)},f=function(t){return Object(a["e"])("/api/remove",t)},p=function(t){return Object(a["e"])("/api/removeSuite",t)}},b538:function(t,e,i){},c1c4:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.visible,width:"500px"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[i("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[i("el-form-item",{attrs:{label:"接口分类",prop:"apiSuiteId"}},[i("el-select",{staticStyle:{width:"70%"},attrs:{filterable:"",placeholder:"请选择分类名称"},model:{value:t.addOrEditForm.apiSuiteId,callback:function(e){t.$set(t.addOrEditForm,"apiSuiteId",e)},expression:"addOrEditForm.apiSuiteId"}},t._l(t.apiSuiteList,function(t,e){return i("el-option",{key:e,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"接口名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入分类名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"接口路径",prop:"path"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入接口路径:/path"},model:{value:t.addOrEditForm.path,callback:function(e){t.$set(t.addOrEditForm,"path",e)},expression:"addOrEditForm.path"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),i("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)},n=[],r=i("1c2e"),o=i("3fa5"),s={data:function(){return{visible:!1,apiSuiteList:[],rules:{apiSuiteId:[{required:!0,message:"分类名称不能为空",trigger:"change"}],name:[{required:!0,message:"接口名称不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",apiSuiteId:"",method:"GET",path:"",remark:""}}},methods:{init:function(){var t=this;Object(r["g"])(this.$store.getters.projectId).then(function(e){t.apiSuiteList=e||[]}),this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增接口"},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectId:"",apiSuiteId:"",method:"GET",path:"",remark:""}},submitForm:function(t){var e=this;this.$refs[t].validate(function(i){i&&"addOrEditForm"===t&&Object(r["a"])(e.addOrEditForm).then(function(t){e.visible=!1,e.$emit("refreshDataList",{rowKey:t.apiSuiteId+"-"+t.id,id:t.id,type:2}),Object(o["a"])("保存数据成功")})})}}},c=s,d=i("6691"),l=Object(d["a"])(c,a,n,!1,null,null,null);e["default"]=l.exports},dc24:function(t,e,i){"use strict";var a=i("b538"),n=i.n(a);n.a}}]);