(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a4da514c"],{1183:function(t,e,r){"use strict";r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return a})),r.d(e,"a",(function(){return d})),r.d(e,"e",(function(){return n})),r.d(e,"b",(function(){return l}));var i=r("b775"),o=function(t){return Object(i["d"])("/flag/listPage",t,!1)},a=function(t,e){return Object(i["d"])("/flag/listByProjectIdAndType/"+t+"/"+e)},d=function(t){return Object(i["e"])("/flag/add",t)},n=function(t){return Object(i["f"])("/flag/edit",t)},l=function(t){return Object(i["e"])("/flag/remove",t)}},"569b":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.visible,"append-to-body":!0,width:"500px"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[r("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[r("el-form-item",{attrs:{label:"标签名称",prop:"name"}},[r("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入标签名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1),t._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),r("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)},o=[],a=r("1183"),d=r("3fa5"),n={data:function(){return{visible:!1,rules:{name:[{required:!0,message:"标签名不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",type:1,remark:""}}},methods:{init:function(t){this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.type=t,this.addOrEditForm.title="新增标签"},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectId:"",type:1,remark:""}},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){t&&Object(a["a"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(d["a"])("保存数据成功")})).catch((function(){}))}))}}},l=n,s=r("5511"),c=Object(s["a"])(l,i,o,!1,null,null,null);e["default"]=c.exports}}]);