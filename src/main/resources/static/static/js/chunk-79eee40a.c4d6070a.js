(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79eee40a","chunk-f9adfc2c"],{"0e4c":function(t,e,a){"use strict";a.d(e,"c",(function(){return i})),a.d(e,"d",(function(){return n})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return d})),a.d(e,"b",(function(){return s}));var r=a("b775"),i=function(t){return Object(r["d"])("/testDatabese/listPage",t,!1)},n=function(t){return Object(r["d"])("/testDatabese/listByProjectId/"+t)},o=function(t){return Object(r["e"])("/testDatabese/add",t)},d=function(t){return Object(r["f"])("/testDatabese/edit",t)},s=function(t){return Object(r["e"])("/testDatabese/remove",t)}},9913:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[a("el-form-item",{attrs:{label:"数据库名称："}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入数据库名称"},model:{value:t.serchData.name,callback:function(e){t.$set(t.serchData,"name",e)},expression:"serchData.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"数据库地址："}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入数据库地址"},model:{value:t.serchData.connectUrl,callback:function(e){t.$set(t.serchData,"connectUrl",e)},expression:"serchData.connectUrl"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("查询")]),t._v(" "),a("el-button",{on:{click:t.resetSearch}},[t._v("重置")])],1)],1)],1),t._v(" "),a("el-row",[a("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.addRow()}}},[t._v("新增数据库")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"}},[a("el-table-column",{attrs:{width:"150",align:"center",label:"数据库名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100",align:"center",label:"数据库类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(0===e.row.type?"mysql":"")+"\n        "+t._s(1===e.row.type?"oracle":"")+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"350",align:"center",label:"数据库连接"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.connectUrl))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100",align:"center",label:"用户名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.username))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100",align:"center",label:"密码"}},[[t._v("******")]],2),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"备注"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"180",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.addRow(e.row)}}},[t._v("修改")]),t._v(" "),a("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(a){return t.deleteRow(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}}),t._v(" "),t.addOrEditFormVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getPageList}}):t._e()],1)},i=[],n=a("0e4c"),o=a("b84a"),d={components:{AddOrUpdate:o["default"]},data:function(){return{loading:!1,serchData:{name:"",connectUrl:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],addOrEditFormVisible:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},mounted:function(){this.getPageList()},methods:{resetSearch:function(){this.serchData={name:"",connectUrl:""}},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},addRow:function(t){var e=this;this.addOrEditFormVisible=!0,this.$nextTick((function(){e.$refs.addOrUpdate.init(t)}))},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除该数据库, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["b"])(t).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.getPageList()}))})).catch((function(){e.$message({type:"success",message:"已取消删除"})}))},getPageList:function(){var t=this;this.loading=!0,Object(n["c"])(this.serchInfo).then((function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1}))}}},s=d,l=a("5511"),c=Object(l["a"])(s,r,i,!1,null,"5dcdb194",null);e["default"]=c.exports},b84a:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.visible,width:"500px"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[a("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[a("el-form-item",{attrs:{label:"数据库名称",prop:"name"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入数据库名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"数据库类型",prop:"type"}},[a("el-select",{attrs:{"auto-complete":"off",placeholder:"请选择数据库类型"},model:{value:t.addOrEditForm.type,callback:function(e){t.$set(t.addOrEditForm,"type",e)},expression:"addOrEditForm.type"}},[a("el-option",{attrs:{label:"mysql",value:0}}),t._v(" "),a("el-option",{attrs:{label:"oracle",value:1}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"数据库连接",prop:"connectUrl"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入数据库连接"},model:{value:t.addOrEditForm.connectUrl,callback:function(e){t.$set(t.addOrEditForm,"connectUrl",e)},expression:"addOrEditForm.connectUrl"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入用户名"},model:{value:t.addOrEditForm.username,callback:function(e){t.$set(t.addOrEditForm,"username",e)},expression:"addOrEditForm.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{"auto-complete":"off",type:"password",placeholder:"请输入密码"},model:{value:t.addOrEditForm.password,callback:function(e){t.$set(t.addOrEditForm,"password",e)},expression:"addOrEditForm.password"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),a("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)},i=[],n=(a("cc57"),a("0e4c")),o=a("3fa5"),d=(a("2b45"),a("c679")),s=a.n(d),l=s.a.enc.Utf8.parse("1234567890123456"),c=s.a.enc.Utf8.parse("1234567890123456");function u(t,e,a){var r=l,i=c;e&&(r=s.a.enc.Utf8.parse(e),i=s.a.enc.Utf8.parse(a));var n=s.a.enc.Utf8.parse(t),o=s.a.AES.encrypt(n,r,{iv:i,mode:s.a.mode.CBC,padding:s.a.pad.ZeroPadding});return s.a.enc.Base64.stringify(o.ciphertext)}function m(t,e,a){var r=l,i=c;e&&(r=s.a.enc.Utf8.parse(e),i=s.a.enc.Utf8.parse(a));var n=s.a.enc.Base64.parse(t),o=s.a.enc.Base64.stringify(n),d=s.a.AES.decrypt(o,r,{iv:i,mode:s.a.mode.CBC,padding:s.a.pad.ZeroPadding}),u=d.toString(s.a.enc.Utf8);return u.toString()}var p={data:function(){return{visible:!1,rules:{name:[{required:!0,message:"数据库组名不能为空",trigger:"blur"}],username:[{required:!0,message:"用户名不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"}],connectUrl:[{required:!0,message:"数据库IP不能为空",trigger:"blur"},{pattern:"^jdbc:(oracle|mysql)://(?:([a-zA-Z0-9-._]+)|(?:(?:d{1,2}|1dd|2[0-4]d|25[0-5]).(?:d{1,2}|1dd|2[0-4]d|25[0-5]).(?:d{1,2}|1dd|2[0-4]d|25[0-5]).(?:d{1,2}|1dd|2[0-4]d|25[0-5])))?(?::([0-9]+))?(?:/[a-zA-Z0-9-._?,'/\\+&amp;%$#=~]*)?$",message:"请填写正确的数据库连接",trigger:"blur"}],type:[{required:!0,message:"数据库连接",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",connectUrl:"",username:"",password:"",type:0,status:1,remark:""}}},methods:{init:function(t){t?(this.visible=!0,this.addOrEditForm.title="编辑数据库",this.addOrEditForm.id=t.id,this.addOrEditForm.name=t.name,this.addOrEditForm.connectUrl=t.connectUrl,this.addOrEditForm.username=t.username,this.addOrEditForm.password=m(t.password),this.addOrEditForm.projectId=t.projectId,this.addOrEditForm.status=t.status,this.addOrEditForm.type=t.type,this.addOrEditForm.remark=t.remark):(this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增数据库")},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectId:"",connectUrl:"",username:"",password:"",type:0,status:1,remark:""}},submitForm:function(t){var e=this;this.$refs[t].validate((function(a){a&&"addOrEditForm"===t&&e.addOrEditForm.id?(e.addOrEditForm.password=u(e.addOrEditForm.password),Object(n["e"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")})).catch((function(){e.addOrEditForm.password=m(e.addOrEditForm.password)}))):a&&"addOrEditForm"===t&&!e.addOrEditForm.id&&(e.addOrEditForm.password=u(e.addOrEditForm.password),Object(n["a"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")})).catch((function(){e.addOrEditForm.password=m(e.addOrEditForm.password)})))}))}}},f=p,g=a("5511"),h=Object(g["a"])(f,r,i,!1,null,null,null);e["default"]=h.exports}}]);