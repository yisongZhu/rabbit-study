(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-052272d2"],{"0172":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.visible,width:"500px"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[r("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[r("el-form-item",{attrs:{label:"分类名称",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入分类名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),r("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)},d=[],n=(r("cc57"),r("1c2e")),o=r("3fa5"),a={data:function(){return{visible:!1,projectPages:[],rules:{elementName:[{required:!0,message:"分类名称不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",remark:""}}},methods:{init:function(t){t?(this.visible=!0,this.addOrEditForm.title="编辑分类",this.addOrEditForm.id=t.id,this.addOrEditForm.name=t.name,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.remark=t.remark):(this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增分类")},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectId:"",remark:""}},submitForm:function(t){var e=this;this.$refs[t].validate((function(r){r&&"addOrEditForm"===t&&e.addOrEditForm.id?Object(n["k"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")})):r&&"addOrEditForm"===t&&!e.addOrEditForm.id&&Object(n["b"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(o["a"])("保存数据成功")}))}))}}},c=a,s=r("5511"),u=Object(s["a"])(c,i,d,!1,null,null,null);e["default"]=u.exports},"1c2e":function(t,e,r){"use strict";r.d(e,"g",(function(){return d})),r.d(e,"f",(function(){return n})),r.d(e,"i",(function(){return o})),r.d(e,"h",(function(){return a})),r.d(e,"c",(function(){return c})),r.d(e,"a",(function(){return s})),r.d(e,"j",(function(){return u})),r.d(e,"b",(function(){return l})),r.d(e,"k",(function(){return m})),r.d(e,"d",(function(){return f})),r.d(e,"e",(function(){return O}));var i=r("b775"),d=function(t){return Object(i["d"])("/api/listPage",t,!1)},n=function(t){return Object(i["d"])("/api/"+t)},o=function(t){return Object(i["d"])("/api/listTreeByProjectId/"+t)},a=function(t){return Object(i["d"])("/api/listSuiteByProjectId/"+t)},c=function(t){return Object(i["e"])("/api/debug",t)},s=function(t){return Object(i["e"])("/api/add",t)},u=function(t){return Object(i["f"])("/api/edit",t)},l=function(t){return Object(i["e"])("/api/addSuite",t)},m=function(t){return Object(i["f"])("/api/editSuite",t)},f=function(t){return Object(i["e"])("/api/remove",t)},O=function(t){return Object(i["e"])("/api/removeSuite",t)}}}]);