(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03d7ccec"],{"117a":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[i("el-row",{staticClass:"titil"},[i("el-col",{attrs:{span:24}},[i("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.getPageList()}}},[e._v("刷新数据")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(t){return e.addRow()}}},[e._v("新增接口")])],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"dragTable",staticStyle:{width:"auto"},attrs:{"row-key":"suiteCaseId",data:e.dataList,border:"",stripe:"",size:"small"}},[i("el-table-column",{attrs:{align:"center",width:"200",label:"接口名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center","show-overflow-tooltip":"",label:"接口路径"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.path))]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",width:"170",label:"接口分类"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.suiteName)+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",width:"90",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(0===t.row.status?"未完成":"已完成")+"\n      ")]}}])}),e._v(" "),i("el-table-column",{attrs:{align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{staticClass:"mini-btn",attrs:{type:"primary",size:"mini"},on:{click:function(i){return e.editRow(t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{staticClass:"mini-btn",attrs:{type:"danger",size:"mini"},on:{click:function(i){return e.deleteRow(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}}),e._v(" "),i("apiAdd",{ref:"apiAdd",on:{refreshDataList:e.callBack},model:{value:e.addFormVisible,callback:function(t){e.addFormVisible=t},expression:"addFormVisible"}})],1)},r=[],s=(i("cc57"),i("1c2e")),n=i("c1c4"),o={components:{apiAdd:n["default"]},data:function(){return{loading:!1,serchData:{apiSuiteId:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],apiSuiteList:[],addFormVisible:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},mounted:function(){var e=this;Object(s["h"])(this.$store.getters.projectId).then((function(t){e.apiSuiteList=t||[]}))},methods:{init:function(e){this.serchData.apiSuiteId=e||"",this.getPageList()},addRow:function(){this.$refs.apiAdd.init(this.serchData.apiSuiteId),this.addFormVisible=!0},resetSearch:function(){this.serchData={name:""}},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},editRow:function(e){this.$emit("refreshDataList",{rowKey:e.apiSuiteId+"-"+e.id,id:e.id,type:2})},deleteRow:function(e){var t=this;this.$confirm("此操作将永久删除该接口, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(s["d"])(e).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.callBack()}))})).catch((function(){t.$message({type:"success",message:"已取消删除"})}))},callBack:function(){this.serchData.apiSuiteId?this.$emit("refreshDataList",{rowKey:this.serchData.apiSuiteId+"",id:this.serchData.apiSuiteId,type:1}):this.$emit("refreshDataList",{rowKey:"0",id:0,type:0})},getPageList:function(){var e=this;this.loading=!0,Object(s["g"])(this.serchInfo).then((function(t){e.dataList=t.list.map((function(t,i){for(var a=0;a<e.apiSuiteList.length;a++)if(e.apiSuiteList[a].id===t.apiSuiteId){t.suiteName=e.apiSuiteList[a].name;break}return t})),e.pageInfo.pageCount=t.total,e.loading=!1}))}}},d=o,l=(i("60bf"),i("5511")),c=Object(l["a"])(d,a,r,!1,null,"4490f5b6",null);t["default"]=c.exports},"598e":function(e,t,i){"use strict";var a=i("e79b"),r=i.n(a);r.a},"60bf":function(e,t,i){"use strict";var a=i("e77f"),r=i.n(a);r.a},"955a":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.addOrEditForm.title,visible:e.visible,width:"500px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog("addOrEditForm")}}},[i("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:e.addOrEditForm,size:"small",rules:e.rules}},[i("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入分类名称"},model:{value:e.addOrEditForm.name,callback:function(t){e.$set(e.addOrEditForm,"name",t)},expression:"addOrEditForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea"},model:{value:e.addOrEditForm.remark,callback:function(t){e.$set(e.addOrEditForm,"remark",t)},expression:"addOrEditForm.remark"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){return e.closeDialog("addOrEditForm")}}},[e._v("取消")]),e._v(" "),i("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("addOrEditForm")}}},[e._v("保存")])],1)],1)},r=[],s=(i("cc57"),i("1c2e")),n=i("3fa5"),o={data:function(){return{visible:!1,projectPages:[],rules:{elementName:[{required:!0,message:"分类名称不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",remark:""}}},methods:{init:function(e){e?(this.visible=!0,this.addOrEditForm.title="编辑分类",this.addOrEditForm.id=e.id,this.addOrEditForm.name=e.name,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.remark=e.remark):(this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增分类")},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectId:"",remark:""}},submitForm:function(e){var t=this;this.$refs[e].validate((function(i){i&&"addOrEditForm"===e&&t.addOrEditForm.id?Object(s["k"])(t.addOrEditForm).then((function(e){t.visible=!1,t.$emit("refreshDataList"),Object(n["a"])("保存数据成功")})):i&&"addOrEditForm"===e&&!t.addOrEditForm.id&&Object(s["b"])(t.addOrEditForm).then((function(e){t.visible=!1,t.$emit("refreshDataList"),Object(n["a"])("保存数据成功")}))}))}}},d=o,l=i("5511"),c=Object(l["a"])(d,a,r,!1,null,null,null);t["default"]=c.exports},c1c4:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.addOrEditForm.title,visible:e.visible,width:"500px"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog("addOrEditForm")}}},[i("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:e.addOrEditForm,size:"small",rules:e.rules}},[i("el-form-item",{attrs:{label:"接口分类",prop:"apiSuiteId"}},[i("el-select",{staticStyle:{width:"70%"},attrs:{filterable:"",placeholder:"请选择分类名称"},model:{value:e.addOrEditForm.apiSuiteId,callback:function(t){e.$set(e.addOrEditForm,"apiSuiteId",t)},expression:"addOrEditForm.apiSuiteId"}},e._l(e.apiSuiteList,(function(e,t){return i("el-option",{key:t,attrs:{label:e.name,value:e.id}})})),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"接口名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入分类名称"},model:{value:e.addOrEditForm.name,callback:function(t){e.$set(e.addOrEditForm,"name",t)},expression:"addOrEditForm.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"接口路径",prop:"path"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入接口路径:/path"},model:{value:e.addOrEditForm.path,callback:function(t){e.$set(e.addOrEditForm,"path",t)},expression:"addOrEditForm.path"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(t){return e.closeDialog("addOrEditForm")}}},[e._v("取消")]),e._v(" "),i("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("addOrEditForm")}}},[e._v("保存")])],1)],1)},r=[],s=i("1c2e"),n=i("3fa5"),o={data:function(){return{visible:!1,apiSuiteList:[],rules:{apiSuiteId:[{required:!0,message:"分类名称不能为空",trigger:"change"}],name:[{required:!0,message:"接口名称不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",apiSuiteId:"",envId:-1,method:"GET",path:"",remark:""}}},methods:{init:function(e){var t=this;0!==e&&(this.addOrEditForm.apiSuiteId=e),Object(s["h"])(this.$store.getters.projectId).then((function(e){t.apiSuiteList=e||[]})),this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增接口"},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectId:"",apiSuiteId:"",envId:-1,method:"GET",path:"",remark:""}},submitForm:function(e){var t=this;this.$refs[e].validate((function(i){i&&"addOrEditForm"===e&&Object(s["a"])(t.addOrEditForm).then((function(e){t.visible=!1,t.$emit("refreshDataList",{rowKey:e.apiSuiteId+"-"+e.id,id:e.id,type:2}),Object(n["a"])("保存数据成功")}))}))}}},d=o,l=i("5511"),c=Object(l["a"])(d,a,r,!1,null,null,null);t["default"]=c.exports},ccd5:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"dect-main",attrs:{gutter:15}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"left my-border",staticStyle:{"min-height":"500px",background:"#FFF"},attrs:{span:6}},[i("el-row",{staticClass:"titil"},[i("el-col",{attrs:{span:24}},[i("el-input",{staticStyle:{width:"72%"},attrs:{size:"small",placeholder:"请输入接口名称"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),i("el-button",{staticStyle:{width:"70px",padding:"7px 5px"},attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.addRow()}}},[e._v("添加分类")])],1)],1),e._v(" "),i("el-tree",{ref:"tree",staticClass:"api-suite-list",attrs:{"node-key":"rowKey",data:e.dataList,props:e.defaultProps,"default-expanded-keys":e.selectedKeyList,"highlight-current":"","expand-on-click-node":!1,"filter-node-method":e.filterNode},on:{"node-click":function(t){return e.selectRow(t,!0)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.node,r=t.data;return i("span",{staticClass:"custom-tree-node",on:{mouseenter:function(t){return e.show(r)},mouseleave:function(t){return e.show(r)}}},[0===r.type?i("span",{staticClass:"el-icon-folder"},[e._v(e._s(" "+a.label))]):e._e(),e._v(" "),1===r.type?i("span",{staticClass:"el-icon-folder-opened"},[e._v(e._s(" "+a.label))]):e._e(),e._v(" "),0!==r.type&&1!==r.type?i("span",[e._v(e._s(" "+a.label))]):e._e(),e._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:r.show,expression:"data.show"}]},[1===r.type?i("el-button",{staticClass:"el-icon-plus",attrs:{type:"text"},on:{click:function(t){return t.stopPropagation(),e.addApi(r)}}}):e._e(),e._v(" "),1===r.type?i("el-button",{staticClass:"el-icon-edit",staticStyle:{"margin-left":"5px"},attrs:{type:"text"},on:{click:function(t){return t.stopPropagation(),e.addRow(r)}}}):e._e(),e._v(" "),0!==r.type?i("el-button",{staticClass:"el-icon-delete",staticStyle:{"margin-left":"5px"},attrs:{type:"text"},on:{click:function(t){return t.stopPropagation(),e.deleteRow(a,r)}}}):e._e()],1)])}}])})],1),e._v(" "),i("div",{staticClass:"right my-border",attrs:{span:18}},[i("apiList",{directives:[{name:"show",rawName:"v-show",value:2!==e.selectedType,expression:"selectedType !== 2"}],ref:"apiList",on:{refreshDataList:e.freshTree}}),e._v(" "),2===e.selectedType?i("apiDetail",{ref:"apiDetail",on:{refreshDataList:e.freshTree}}):e._e()],1),e._v(" "),i("apiSuiteAddOrEdit",{ref:"apiSuiteAddOrEdit",on:{refreshDataList:e.freshTree}}),e._v(" "),i("apiAdd",{ref:"apiAdd",on:{refreshDataList:e.freshTree},model:{value:e.addApiFormVisible,callback:function(t){e.addApiFormVisible=t},expression:"addApiFormVisible"}})],1)},r=[],s=(i("6d57"),i("cc57"),i("63ff"),i("57f0")),n=i("1c2e"),o=i("117a"),d=i("9250"),l=i("955a"),c=i("c1c4"),u={components:{apiList:o["default"],apiDetail:d["default"],apiSuiteAddOrEdit:l["default"],apiAdd:c["default"]},data:function(){return{loading:!1,serchData:{name:""},dataList:[],selectedType:0,selectedKey:"0",selectedKeyList:[],rules:{key:[{required:!0,message:"key不能为空",trigger:"blur"}],name:[{required:!0,message:"name不能为空",trigger:"blur"}]},addApiFormVisible:!1,filterText:"",defaultProps:{children:"children",label:"name"}}},watch:{filterText:function(e){this.$refs.tree.filter(e)}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getSuiteTreeList();case 2:this.selectRow();case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{show:function(e){e.show=!e.show},filterNode:function(e,t){return!e||-1!==t.name.indexOf(e)},addRow:function(e){var t=this;this.$nextTick((function(){t.$refs.apiSuiteAddOrEdit.init(e)}))},addApi:function(e){this.$refs.apiAdd.init(e.id),this.addApiFormVisible=!0},selectRow:function(e,t){var i=this;e?(this.$nextTick((function(){i.$refs.tree.setCurrentKey(e.rowKey)})),this.selectedType=e.type,this.selectedKey=e.rowKey,t||(this.selectedKeyList=[],this.selectedKeyList.push(this.selectedKey||[])),0===this.selectedType?this.$refs.apiList.init():1===this.selectedType?this.$refs.apiList.init(e.id):this.$nextTick((function(){i.$refs.apiDetail.init(e.id)}))):(this.selectedKey="0",this.$nextTick((function(){i.$refs.tree.setCurrentKey("0")})),this.selectedType=0,this.$refs.apiList.init())},freshTree:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getSuiteTreeList();case 2:this.selectRow(t);case 3:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),deleteRow:function(e,t){var i=this;1===t.type?this.$confirm("该操作会删除该分类下所有接口，接口删除后无法恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["e"])(t).then((function(e){i.selectedKey===t.rowKey?i.freshTree():i.freshTree(i.$refs.tree.getCurrentNode()),i.$message({type:"success",message:"删除成功!"})}))})).catch((function(){i.$message({type:"success",message:"已取消删除"})})):this.$confirm("接口删除后，无法恢复, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["d"])({id:t.id}).then((function(e){i.selectedKey===t.rowKey?i.freshTree():i.freshTree(i.$refs.tree.getCurrentNode()),i.$message({type:"success",message:"删除成功!"})}))})).catch((function(){i.$message({type:"success",message:"已取消删除"})}))},getSuiteTreeList:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,Object(n["i"])(this.$store.getters.projectId).then((function(e){t.dataList=[],t.dataList.push({rowKey:"0",id:0,name:"全部接口",show:!1,type:0}),e.forEach((function(e){var i=[];e.apiList&&e.apiList.forEach((function(t){i.push({rowKey:e.id+"-"+t.id,id:t.id,name:t.name,show:!1,type:2})})),t.dataList.push({rowKey:e.id+"",id:e.id,name:e.name,projectId:e.projectId,remark:e.remark,show:!1,type:1,children:i})})),t.loading=!1}));case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},p=u,f=(i("598e"),i("5511")),m=Object(f["a"])(p,a,r,!1,null,"ce597c80",null);t["default"]=m.exports},e77f:function(e,t,i){},e79b:function(e,t,i){}}]);