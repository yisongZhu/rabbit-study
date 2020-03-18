(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2765d9a2"],{2514:function(t,e,r){},a753:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[r("el-row",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.add()}}},[t._v("添加资源")])],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.data,border:"",size:"small",stripe:"","row-key":"id"}},[r("el-table-column",{attrs:{label:"资源名称",width:"190"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"资源类型",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.type?r("span",[t._v("菜单")]):t._e(),t._v(" "),2===e.row.type?r("span",[t._v("按钮")]):t._e(),t._v(" "),3===e.row.type?r("span",[t._v("嵌套页面")]):t._e(),t._v(" "),4===e.row.type?r("span",[t._v("主菜单")]):t._e(),t._v(" "),5===e.row.type?r("span",[t._v("详情页面")]):t._e()]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"路由","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.path))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"redirect","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.redirect))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"activeMenu","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.activeMenu))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"组件","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.component))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"权限标识","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.permission))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"图标",width:"50px"},scopedSlots:t._u([{key:"default",fn:function(t){return[r("svg-icon",{attrs:{"icon-class":t.row.icon}})]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"排序",width:"55px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(e.row.sort))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"操作",fixed:"right",width:"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{size:"mini"},on:{click:function(r){return t.editRow(e.row)}}},[t._v("编辑")]),t._v(" "),r("el-button",{staticStyle:{padding:"2px 3px 2px 3px",margin:"1px"},attrs:{type:"primary",size:"mini"},on:{click:function(r){return t.add(e.row)}}},[t._v("添加下级")]),t._v(" "),r("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(r){return t.deleteRow(e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),r("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.addOrEditFormVisible,width:"500px"},on:{"update:visible":function(e){t.addOrEditFormVisible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[r("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[r("el-form-item",{attrs:{label:"上级名称",prop:"parentId"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择上级名称"},model:{value:t.addOrEditForm.parentId,callback:function(e){t.$set(t.addOrEditForm,"parentId",e)},expression:"addOrEditForm.parentId"}},[r("el-option",{attrs:{label:"root",value:0}}),t._v(" "),t._l(t.resources,(function(t,e){return r("el-option",{key:e,attrs:{label:t.name,value:t.id}})}))],2)],1),t._v(" "),r("el-form-item",{attrs:{label:"资源名称",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"资源类型",prop:"type"}},[r("el-select",{attrs:{placeholder:"请输入资源类型"},model:{value:t.addOrEditForm.type,callback:function(e){t.$set(t.addOrEditForm,"type",e)},expression:"addOrEditForm.type"}},[r("el-option",{attrs:{label:"菜单",value:1}}),t._v(" "),r("el-option",{attrs:{label:"按钮",value:2}}),t._v(" "),r("el-option",{attrs:{label:"嵌套页面",value:3}}),t._v(" "),r("el-option",{attrs:{label:"主菜单",value:4}}),t._v(" "),r("el-option",{attrs:{label:"详情页面",value:5}})],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"图标",prop:"icon"}},[r("el-popover",{attrs:{placement:"bottom-start",trigger:"click"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[r("div",{staticClass:"menu-icon-list",staticStyle:{width:"395px",height:"220px",overflow:"auto"}},t._l(t.svgIcons,(function(e,o){return r("el-button",{key:o,class:{"is-active":e===t.addOrEditForm.icon,"is-one":o%8===0},on:{click:function(r){return t.iconActiveHandle(e)}}},[r("svg-icon",{attrs:{"icon-class":e}})],1)})),1),t._v(" "),r("el-input",{attrs:{slot:"reference",clearable:"",placeholder:"菜单图标名称"},slot:"reference",model:{value:t.addOrEditForm.icon,callback:function(e){t.$set(t.addOrEditForm,"icon",e)},expression:"addOrEditForm.icon"}})],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"路由链接",prop:"path"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入路由链接"},model:{value:t.addOrEditForm.path,callback:function(e){t.$set(t.addOrEditForm,"path",e)},expression:"addOrEditForm.path"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"redirect",prop:"redirect"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入跳转路由"},model:{value:t.addOrEditForm.redirect,callback:function(e){t.$set(t.addOrEditForm,"redirect",e)},expression:"addOrEditForm.redirect"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"activeMenu",prop:"activeMenu"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入活动菜单路由链接"},model:{value:t.addOrEditForm.activeMenu,callback:function(e){t.$set(t.addOrEditForm,"activeMenu",e)},expression:"addOrEditForm.activeMenu"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"资源链接",prop:"component"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入资源链接"},model:{value:t.addOrEditForm.component,callback:function(e){t.$set(t.addOrEditForm,"component",e)},expression:"addOrEditForm.component"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"权限标识",prop:"permission"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入权限标识"},model:{value:t.addOrEditForm.permission,callback:function(e){t.$set(t.addOrEditForm,"permission",e)},expression:"addOrEditForm.permission"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"排序",prop:"sort"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入排序"},model:{value:t.addOrEditForm.sort,callback:function(e){t.$set(t.addOrEditForm,"sort",e)},expression:"addOrEditForm.sort"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),r("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)],1)},i=[],a=(r("c904"),r("cc57"),r("c24f")),s=r("b775"),d=function(t){return Object(s["d"])("/permissions/allMenu")},n=function(t){return Object(s["e"])("/permissions",t)},l=function(t){return Object(s["f"])("/permissions",t)},c=function(t){return Object(s["b"])("/permissions/"+t)},u=r("3fa5"),m=(r("9e76"),r("6d57"),r("51ff")),p=function(t){return t.keys()},f=/\.\/(.*)\.svg/,v=p(m).map((function(t){return t.match(f)[1]})),b=v,h={data:function(){return{visible:!1,svgIcons:b,listLoading:!1,data:[],addOrEditFormVisible:!1,rules:{name:[{required:!0,message:"资源名称不能为空",trigger:"blur"}],sort:[{required:!0,message:"排序不能为空",trigger:"blur"}]},resources:{},addOrEditForm:{title:"",submitType:0,id:"",name:"",parentId:"",type:1,icon:"",path:"",redirect:"",activeMenu:"",component:"",permission:"",sort:""}}},mounted:function(){this.requestUsersInfo(),this.getResourceAll()},methods:{iconActiveHandle:function(t){this.addOrEditForm.icon=t,this.visible=!1},add:function(t){t?(this.addOrEditFormVisible=!0,this.addOrEditForm.title="添加下级",this.addOrEditForm.submitType=0,this.addOrEditForm.parentId=t.id):(this.addOrEditFormVisible=!0,this.addOrEditForm.title="新增资源",this.addOrEditForm.parentId=0,this.addOrEditForm.submitType=1)},deleteRow:function(t){var e=this;this.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c(t.id).then((function(t){e.$message({type:"success",message:"删除成功!"}),e.requestUsersInfo(),e.getResourceAll()}))})).catch((function(){e.$message({type:"success",message:"已取消删除"})}))},editRow:function(t){this.addOrEditFormVisible=!0,this.addOrEditForm.title="修改资源",this.addOrEditForm.submitType=2,this.addOrEditForm.name=t.name,this.addOrEditForm.parentId=t.parentId,this.addOrEditForm.id=t.id,this.addOrEditForm.type=t.type,this.addOrEditForm.path=t.path,this.addOrEditForm.redirect=t.redirect,this.addOrEditForm.activeMenu=t.activeMenu,this.addOrEditForm.component=t.component,this.addOrEditForm.permission=t.permission,this.addOrEditForm.sort=t.sort,this.addOrEditForm.icon=t.icon},requestUsersInfo:function(){var t=this;Object(a["f"])().then((function(e){t.data=e}))},getResourceAll:function(){var t=this;this.listLoading=!0,d().then((function(e){t.resources=e,t.listLoading=!1}))},closeDialog:function(t){"addOrEditForm"===t&&(this.addOrEditFormVisible=!1,this.$refs[t].resetFields())},submitForm:function(t){var e=this;this.$refs[t].validate((function(r){r&&"addOrEditForm"===t&&2!==e.addOrEditForm.submitType?n(e.addOrEditForm).then((function(r){e.addOrEditFormVisible=!1,e.requestUsersInfo(),e.getResourceAll(),e.$refs[t].resetFields(),Object(u["a"])("保存数据成功")})):r&&"addOrEditForm"===t&&2===e.addOrEditForm.submitType&&l(e.addOrEditForm).then((function(r){e.addOrEditFormVisible=!1,e.requestUsersInfo(),e.getResourceAll(),e.$refs[t].resetFields(),Object(u["a"])("保存数据成功")}))}))}}},O=h,F=(r("b869"),r("5511")),_=Object(F["a"])(O,o,i,!1,null,"fba11042",null);e["default"]=_.exports},b869:function(t,e,r){"use strict";var o=r("2514"),i=r.n(o);i.a}}]);