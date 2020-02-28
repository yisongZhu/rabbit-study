(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ce9fefc"],{"1a20":function(e,t,s){},"2c1a":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[s("div",{attrs:{slot:"header"},slot:"header"},[s("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchUser,"label-width":"90px","label-position":"right",size:"mini"}},[s("el-form-item",{attrs:{label:"登陆账号："}},[s("el-input",{attrs:{placeholder:"请输入登陆账号"},model:{value:e.serchUser.username,callback:function(t){e.$set(e.serchUser,"username",t)},expression:"serchUser.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"用户昵称："}},[s("el-input",{attrs:{placeholder:"请输入用户昵称"},model:{value:e.serchUser.nickname,callback:function(t){e.$set(e.serchUser,"nickname",t)},expression:"serchUser.nickname"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"用户状态："}},[s("el-select",{attrs:{placeholder:"请选择用户状态"},model:{value:e.serchUser.status,callback:function(t){e.$set(e.serchUser,"status",t)},expression:"serchUser.status"}},[s("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),s("el-option",{attrs:{label:"正常",value:"1"}}),e._v(" "),s("el-option",{attrs:{label:"锁定",value:"2"}}),e._v(" "),s("el-option",{attrs:{label:"作废",value:"3"}})],1)],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),s("el-button",{on:{click:e.resetSearch}},[e._v("重置")])],1)],1)],1),e._v(" "),s("el-row",[s("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleAdd()}}},[e._v("添加用户")])],1),e._v(" "),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"auto"},attrs:{data:e.users,border:"",stripe:"",size:"small"},on:{"selection-change":e.handleSelectionChange}},[s("el-table-column",{attrs:{type:"selection",align:"center",width:"35"}}),e._v(" "),s("el-table-column",{attrs:{prop:"username",align:"center",fixed:"",label:"账号",width:"90"}}),e._v(" "),s("el-table-column",{attrs:{prop:"nickname",align:"center",label:"用户昵称",width:"90"}}),e._v(" "),s("el-table-column",{attrs:{align:"center",label:"角色"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.roles,(function(t,r){return s("el-tag",{key:r,attrs:{size:"small"}},[e._v(e._s(t.description))])}))}}])}),e._v(" "),s("el-table-column",{attrs:{width:"80",align:"center",label:"账号状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(1===t.row.status?"正常":"")+"\n        "+e._s(2===t.row.status?"锁定":"")+"\n      ")]}}])}),e._v(" "),s("el-table-column",{attrs:{prop:"email",align:"center",width:"140",label:"邮箱地址"}}),e._v(" "),s("el-table-column",{attrs:{prop:"projects",align:"center",label:"所属项目"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.projects,(function(t,r){return s("el-tag",{key:r,attrs:{size:"small"}},[e._v(e._s(t.projectName))])}))}}])}),e._v(" "),s("el-table-column",{attrs:{width:"110",align:"center",label:"默认项目"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-tag",{attrs:{size:"small"}},[e._v(e._s(t.row.projectName))])]}}])}),e._v(" "),s("el-table-column",{attrs:{width:"150",align:"center",label:"创建时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.createTime))]}}])}),e._v(" "),s("el-table-column",{attrs:{fixed:"right",label:"操作",width:"250"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{size:"mini"},on:{click:function(s){return e.handleEdit(t.row)}}},[e._v("修改")]),e._v(" "),"admin"!==t.row.username?s("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"primary",size:"mini"}},[e._v("锁定")]):e._e(),e._v(" "),"admin"!==t.row.username?s("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(s){return e.deleteRow(t.row)}}},[e._v("删除")]):e._e(),e._v(" "),s("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"success",size:"mini"},on:{click:function(s){return e.resetPassEdit(t.row)}}},[e._v("重置密码")])]}}])})],1),e._v(" "),s("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}}),e._v(" "),s("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.editForm.title,visible:e.editFormVisible,width:"500px"},on:{"update:visible":function(t){e.editFormVisible=t},closed:function(t){return e.closeDialog("edit")}}},[s("el-form",{ref:"editForm",attrs:{"label-width":"80px",model:e.editForm,size:"small",rules:e.editRules}},[s("el-form-item",{attrs:{label:"账号",prop:"username"}},[s("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入用户名",disabled:!0},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"用户昵称",prop:"nickname"}},[s("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入昵称"},model:{value:e.editForm.nickname,callback:function(t){e.$set(e.editForm,"nickname",t)},expression:"editForm.nickname"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"账号状态",prop:"status"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.status,callback:function(t){e.$set(e.editForm,"status",t)},expression:"editForm.status"}},[s("el-option",{attrs:{label:"正常",value:1}}),e._v(" "),s("el-option",{attrs:{label:"锁定",value:2}})],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"性别",prop:"sex"}},[s("el-radio-group",{model:{value:e.editForm.sex,callback:function(t){e.$set(e.editForm,"sex",t)},expression:"editForm.sex"}},[s("el-radio",{attrs:{label:0}},[e._v("男")]),e._v(" "),s("el-radio",{attrs:{label:1}},[e._v("女")])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"项目",prop:"projects"}},[s("el-checkbox-group",{on:{change:function(t){return e.changeProjectIds(e.editForm.projectIds,e.editForm.projectId,e.editForm.id)}},model:{value:e.editForm.projectIds,callback:function(t){e.$set(e.editForm,"projectIds",t)},expression:"editForm.projectIds"}},e._l(e.projects,(function(t,r){return s("el-checkbox",{key:r,attrs:{label:t.id}},[e._v(e._s(t.projectName))])})),1)],1),e._v(" "),s("el-form-item",{attrs:{label:"默认项目",prop:"projectId"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.projectId,callback:function(t){e.$set(e.editForm,"projectId",t)},expression:"editForm.projectId"}},e._l(e.selectedPoject,(function(e,t){return s("el-option",{key:t,attrs:{label:e.projectName,value:e.id}})})),1)],1),e._v(" "),s("el-form-item",{attrs:{label:"角色",prop:"roles"}},[s("el-checkbox-group",{model:{value:e.editForm.roleIds,callback:function(t){e.$set(e.editForm,"roleIds",t)},expression:"editForm.roleIds"}},e._l(e.roles,(function(t,r){return s("el-checkbox",{key:r,attrs:{label:t.id}},[e._v(e._s(t.description))])})),1)],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:function(t){return e.closeDialog("edit")}}},[e._v("取消")]),e._v(" "),s("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("editForm")}}},[e._v("保存")])],1)],1),e._v(" "),s("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.addForm.title,visible:e.addFormVisible,width:"500px"},on:{"update:visible":function(t){e.addFormVisible=t},closed:function(t){return e.closeDialog("add")}}},[s("el-form",{ref:"addForm",attrs:{"label-width":"80px",model:e.addForm,size:"small",rules:e.addRules}},[s("el-form-item",{attrs:{label:"账号",prop:"username"}},[s("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入用户名"},model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码",prop:"password"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入密码"},model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认密码",prop:"checkPassword"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请确认密码"},model:{value:e.addForm.checkPassword,callback:function(t){e.$set(e.addForm,"checkPassword",t)},expression:"addForm.checkPassword"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"用户昵称",prop:"nickname"}},[s("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入昵称"},model:{value:e.addForm.nickname,callback:function(t){e.$set(e.addForm,"nickname",t)},expression:"addForm.nickname"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"账号状态",prop:"status"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addForm.status,callback:function(t){e.$set(e.addForm,"status",t)},expression:"addForm.status"}},[s("el-option",{attrs:{label:"正常",value:1}}),e._v(" "),s("el-option",{attrs:{label:"锁定",value:2}})],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{placeholder:"请输入邮箱地址"},model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"性别",prop:"sex"}},[s("el-radio-group",{model:{value:e.addForm.sex,callback:function(t){e.$set(e.addForm,"sex",t)},expression:"addForm.sex"}},[s("el-radio",{attrs:{label:0}},[e._v("男")]),e._v(" "),s("el-radio",{attrs:{label:1}},[e._v("女")])],1)],1),e._v(" "),s("el-form-item",{attrs:{label:"项目",prop:"projects"}},[s("el-checkbox-group",{on:{change:function(t){return e.changeProjectIds(e.addForm.projectIds,e.addForm.projectId)}},model:{value:e.addForm.projectIds,callback:function(t){e.$set(e.addForm,"projectIds",t)},expression:"addForm.projectIds"}},e._l(e.projects,(function(t,r){return s("el-checkbox",{key:r,attrs:{label:t.id}},[e._v(e._s(t.projectName))])})),1)],1),e._v(" "),s("el-form-item",{attrs:{label:"默认项目",prop:"projectId"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.projectId,callback:function(t){e.$set(e.editForm,"projectId",t)},expression:"editForm.projectId"}},e._l(e.selectedPoject,(function(e,t){return s("el-option",{key:t,attrs:{label:e.projectName,value:e.id}})})),1)],1),e._v(" "),s("el-form-item",{attrs:{label:"角色",prop:"roles"}},[s("el-checkbox-group",{model:{value:e.addForm.roleIds,callback:function(t){e.$set(e.addForm,"roleIds",t)},expression:"addForm.roleIds"}},e._l(e.roles,(function(t,r){return s("el-checkbox",{key:r,attrs:{label:t.id}},[e._v(e._s(t.description))])})),1)],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:function(t){return e.closeDialog("add")}}},[e._v("取消")]),e._v(" "),s("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("addForm")}}},[e._v("保存")])],1)],1),e._v(" "),s("el-dialog",{attrs:{"close-on-click-modal":!1,title:e.editPassForm.title,visible:e.editPassFormVisible,width:"500px"},on:{"update:visible":function(t){e.editPassFormVisible=t},closed:function(t){return e.closeDialog("editPassForm")}}},[s("el-form",{ref:"editPassForm",attrs:{"label-width":"90px",model:e.editPassForm,size:"small",rules:e.resetRules}},[s("el-form-item",{attrs:{label:"账号",prop:"username"}},[s("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入用户名",disabled:!0},model:{value:e.editPassForm.username,callback:function(t){e.$set(e.editPassForm,"username",t)},expression:"editPassForm.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入新密码"},model:{value:e.editPassForm.newPassword,callback:function(t){e.$set(e.editPassForm,"newPassword",t)},expression:"editPassForm.newPassword"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"确认新密码",prop:"newPassword2"}},[s("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请确认新密码"},model:{value:e.editPassForm.newPassword2,callback:function(t){e.$set(e.editPassForm,"newPassword2",t)},expression:"editPassForm.newPassword2"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{attrs:{size:"small"},on:{click:function(t){return e.closeDialog("editPassForm")}}},[e._v("取消")]),e._v(" "),s("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(t){return e.submitForm("editPassForm")}}},[e._v("保存")])],1)],1)],1)},o=[],a=(s("6d57"),s("c24f")),l=s("cc5e"),i=s("3fa5"),n={name:"User",data:function(){var e=this,t=function(t,s,r){s!==e.addForm.password?r(new Error("两次输入密码不一致!")):r()},s=function(t,s,r){s!==e.editPassForm.newPassword?r(new Error("两次输入密码不一致!")):r()};return{listLoading:!1,editFormVisible:!1,addFormVisible:!1,editPassFormVisible:!1,pageInfo:{pageNum:1,pageSize:10,pageCount:0},serchUser:{username:"",nickname:"",status:""},roles:[],projects:[],selectedPoject:[],users:[],editForm:{title:"",id:"",username:"",nickname:"",status:"",email:"",sex:0,projectIds:[],projectId:"",roleIds:[]},addForm:{title:"",id:"",password:"",checkPassword:"",username:"",nickname:"",status:1,email:"",sex:0,projectIds:[],projectId:"",roleIds:[]},editPassForm:{title:"重置密码",username:"",newPassword:"",newPassword2:""},resetRules:{newPassword:[{required:!0,message:"密码不能为空",trigger:"blur"},{pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,18}$/,message:"密码由5-18位数字字母组合",trigger:"blur"}],newPassword2:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:s,trigger:"blur"}]},editRules:{nickname:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"请填写正确格式的邮箱地址",trigger:"blur"}]},addRules:{username:[{required:!0,message:"账号不能为空",trigger:"blur"},{pattern:/^[a-zA-Z\d]{5,12}$/,message:"账号只能由5-12位大小写字母和数字组成",trigger:"blur"}],nickname:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],password:[{required:!0,message:"密码不能为空",trigger:"blur"},{pattern:/^[0-9A-Za-z]{5,18}$/,message:"密码由5-18位数字字母组合",trigger:"blur"}],checkPassword:[{required:!0,message:"请再次输入密码",trigger:"blur"},{validator:t,trigger:"blur"}],email:[{pattern:/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"请输入正确的邮箱",trigger:"blur"}]}}},computed:{serchInfo:function(){var e=this.pageInfo;return e.serchUser=this.serchUser,e}},mounted:function(){this.getAllProjects(),this.requestUsersInfo()},methods:{changeProjectIds:function(e,t,s){var r=this;this.selectedPoject=[],1===s?this.selectedPoject=this.projects:this.projects.forEach((function(t){e.indexOf(t.id)>-1&&r.selectedPoject.push(t)})),t||(this.editForm.projectId="",this.addForm.projectId="")},searchList:function(){this.requestUsersInfo()},resetSearch:function(){this.serchUser={}},changePageNum:function(e){this.pageInfo.pageNum=e,this.requestUsersInfo()},handleSelectionChange:function(){},changePageSize:function(e){this.pageInfo.pageSize=e,this.requestUsersInfo()},deleteRow:function(e){var t=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(a["a"])(e.id).then((function(e){t.$message({type:"success",message:"删除成功!"}),t.requestUsersInfo()}))})).catch((function(){t.$message({type:"success",message:"已取消删除"})}))},requestUsersInfo:function(){var e=this;this.listLoading=!0,Object(a["k"])(this.serchInfo).then((function(t){e.users=t.list||{},e.pageInfo.pageCount=t.total,e.listLoading=!1}))},getAllRoles:function(){var e=this;Object(l["a"])().then((function(t){e.roles=t||[]}))},getAllProjects:function(){var e=this;Object(a["g"])().then((function(t){e.projects=t||[]}))},handleAdd:function(){this.getAllRoles(),this.addFormVisible=!0,this.addForm.title="添加用户",this.selectedPoject=[]},handleEdit:function(e){this.getAllRoles(),this.editForm.title="编辑用户",this.editForm.id=e.id||"",this.editForm.username=e.username||"",this.editForm.nickname=e.nickname||"",this.editForm.status=e.status||"",this.editForm.email=e.email||"",this.editForm.sex=e.sex||0,this.editForm.roleIds=e.roleIds,this.editForm.projectId=e.projectId;var t=[];e.projects.forEach((function(e){t.push(e.id)})),this.editForm.projectIds=t,this.changeProjectIds(this.editForm.projectIds,e.projectId,e.id),this.editFormVisible=!0},resetPassEdit:function(e){this.editPassFormVisible=!0,this.editPassForm.title="重置密码",this.editPassForm.username=e.username},submitForm:function(e){var t=this;this.$refs[e].validate((function(s){if(s&&"editForm"===e)Object(a["i"])(t.editForm).then((function(e){t.editFormVisible=!1,Object(i["a"])("保存数据成功"),t.requestUsersInfo()}));else if(s&&"addForm"===e)Object(a["e"])(t.addForm).then((function(e){t.addFormVisible=!1,Object(i["a"])("保存数据成功"),t.requestUsersInfo()}));else{if(!s||"editPassForm"!==e)return!1;Object(a["j"])(t.editPassForm).then((function(e){t.editPassFormVisible=!1,t.$refs["editPassForm"].resetFields(),Object(i["a"])("保存数据成功"),t.requestUsersInfo()}))}}))},closeDialog:function(e){"edit"===e?(this.editFormVisible=!1,this.$refs["editForm"].resetFields(),this.editForm={title:"",id:"",username:"",nickname:"",status:"",email:"",sex:0,projectIds:[],projectId:"",roleIds:[]}):"add"===e?(this.addFormVisible=!1,this.$refs["addForm"].resetFields(),this.addForm={title:"",id:"",password:"",checkPassword:"",username:"",nickname:"",status:1,email:"",sex:0,projectIds:[],projectId:"",roleIds:[]}):"editPassForm"===e&&(this.$refs["editPassForm"].resetFields(),this.editPassFormVisible=!1)}}},d=n,c=(s("eed7"),s("5511")),m=Object(c["a"])(d,r,o,!1,null,"19647574",null);t["default"]=m.exports},cc5e:function(e,t,s){"use strict";s.d(t,"a",(function(){return o})),s.d(t,"b",(function(){return a})),s.d(t,"d",(function(){return l})),s.d(t,"e",(function(){return i})),s.d(t,"c",(function(){return n}));var r=s("b775"),o=function(e){return Object(r["d"])("/roles/all",e)},a=function(e){return Object(r["d"])("/roles/allByPage",e)},l=function(e){return Object(r["d"])("/permissions/childListID",e)},i=function(e){return Object(r["e"])("/roles",e)},n=function(e){return Object(r["b"])("/roles/"+e)}},eed7:function(e,t,s){"use strict";var r=s("1a20"),o=s.n(r);o.a}}]);