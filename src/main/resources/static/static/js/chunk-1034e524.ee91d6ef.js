(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1034e524"],{"8f3f":function(t,e,r){"use strict";r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"e",(function(){return l})),r.d(e,"b",(function(){return s}));var i=r("b775"),d=function(t){return Object(i["d"])("/clients/listPage",t,!1)},a=function(t){return Object(i["d"])("/clients/listByProjectId/"+t)},o=function(t){return Object(i["e"])("/clients/add",t)},l=function(t){return Object(i["f"])("/clients/edit",t)},s=function(t){return Object(i["e"])("/clients/remove",t)}},df48:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.visible,width:"580px"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[r("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[r("el-form-item",{attrs:{label:"客户端名称",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入客户端名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[r("el-select",{attrs:{filterable:"",placeholder:"请选择项目名称"},model:{value:t.addOrEditForm.projectName,callback:function(e){t.$set(t.addOrEditForm,"projectName",e)},expression:"addOrEditForm.projectName"}},t._l(t.projects,(function(t,e){return r("el-option",{key:e,attrs:{label:t.projectName,value:t.projectName}})})),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"客户端IP",prop:"clientIp"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入客户端IP"},model:{value:t.addOrEditForm.clientIp,callback:function(e){t.$set(t.addOrEditForm,"clientIp",e)},expression:"addOrEditForm.clientIp"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"客户端端口",prop:"clientPort"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入客户端端口"},model:{value:t.addOrEditForm.clientPort,callback:function(e){t.$set(t.addOrEditForm,"clientPort",e)},expression:"addOrEditForm.clientPort"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),r("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)},d=[],a=(r("cc57"),r("8f3f")),o=r("3fa5"),l={data:function(){return{visible:!1,projects:[],rules:{name:[{required:!0,message:"客户端组名不能为空",trigger:"blur"}],projectName:[{required:!0,message:"项目名称不能为空",trigger:"blur"}],clientIp:[{required:!0,message:"客户端IP不能为空",trigger:"blur"},{pattern:/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/,message:"请填写正确的ip地址",trigger:"blur"}],clientPort:[{required:!0,message:"客户端端口不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectName:"",clientIp:"",clientPort:"",isEnable:1,status:1,remark:""}}},mounted:function(){this.projects=this.$store.getters.projects},methods:{init:function(t){if(t){try{this.addOrEditForm.jobParams=JSON.parse(t.methodParams)}catch(e){this.addOrEditForm.jobParams={}}this.visible=!0,this.addOrEditForm.title="编辑客户端",this.addOrEditForm.id=t.id,this.addOrEditForm.name=t.name,this.addOrEditForm.projectName=t.projectName,this.addOrEditForm.clientIp=t.clientIp,this.addOrEditForm.clientPort=t.clientPort,this.addOrEditForm.isEnable=t.isEnable,this.addOrEditForm.status=t.status,this.addOrEditForm.remark=t.remark}else this.visible=!0,this.addOrEditForm.title="新增客户端"},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectName:"",clientIp:"",clientPort:"",isEnable:1,status:1,remark:""}},submitForm:function(t){var e=this;this.$refs[t].validate((function(r){e.addOrEditForm.methodParams=JSON.stringify(e.addOrEditForm.jobParams),r&&"addOrEditForm"===t&&e.addOrEditForm.id?Object(a["e"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")})):r&&"addOrEditForm"===t&&!e.addOrEditForm.id&&Object(a["a"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")}))}))}}},s=l,n=r("5511"),c=Object(n["a"])(s,i,d,!1,null,null,null);e["default"]=c.exports}}]);