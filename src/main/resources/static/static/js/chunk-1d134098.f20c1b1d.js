(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d134098","chunk-a4da514c"],{1183:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return n})),i.d(e,"a",(function(){return d})),i.d(e,"e",(function(){return l})),i.d(e,"b",(function(){return s}));var r=i("b775"),a=function(t){return Object(r["d"])("/flag/listPage",t,!1)},n=function(t,e){return Object(r["d"])("/flag/listByProjectIdAndType/"+t+"/"+e)},d=function(t){return Object(r["e"])("/flag/add",t)},l=function(t){return Object(r["f"])("/flag/edit",t)},s=function(t){return Object(r["e"])("/flag/remove",t)}},"2fb8":function(t,e,i){},"569b":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.visible,"append-to-body":!0,width:"500px"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[i("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[i("el-form-item",{attrs:{label:"标签名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入标签名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),i("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)},a=[],n=i("1183"),d=i("3fa5"),l={data:function(){return{visible:!1,rules:{name:[{required:!0,message:"标签名不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",type:1,remark:""}}},methods:{init:function(t){this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.type=t,this.addOrEditForm.title="新增标签"},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",projectId:"",type:1,remark:""}},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){t&&Object(n["a"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(d["a"])("保存数据成功")})).catch((function(){}))}))}}},s=l,o=i("5511"),c=Object(o["a"])(s,r,a,!1,null,null,null);e["default"]=c.exports},"59b5":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-select",{attrs:{size:"mini",clearable:"",filterable:"",multiple:"","popper-class":"flag-select-class",placeholder:"请选择标签"},model:{value:t.flags,callback:function(e){t.flags=e},expression:"flags"}},[t._l(t.flagList,(function(t){return i("el-option",{key:t.id,attrs:{label:t.name,value:t.id+""}})})),t._v(" "),i("span",[i("el-button",{staticStyle:{"margin-left":"5px","font-size":"14px"},attrs:{size:"small",type:"text",disabled:""}},[t._v("\n        没有你想要的标签\n      ")]),t._v(" "),i("el-button",{staticStyle:{"margin-left":"0px","font-size":"14px"},attrs:{size:"small",type:"text"},on:{click:t.addRow}},[t._v("\n        添加标签\n      ")])],1)],2),t._v(" "),t.addOrEditFormVisible?i("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e()],1)},a=[],n=i("1183"),d=i("569b"),l={props:["value","type"],components:{AddOrUpdate:d["default"]},data:function(){return{addOrEditFormVisible:!1,flags:[],flagList:[]}},watch:{flags:{handler:function(t){this.$emit("input",t)},deep:!0},value:{handler:function(t){this.flags=t||""},immediate:!0}},mounted:function(){this.getDataList()},methods:{getDataList:function(t){var e=this;Object(n["d"])(this.$store.getters.projectId,1).then((function(t){e.flagList=t||[]}))},addRow:function(){var t=this;this.addOrEditFormVisible=!0,this.$nextTick((function(){t.type?t.$refs.addOrUpdate.init(t.type):t.$refs.addOrUpdate.init(1)}))}}},s=l,o=(i("a691"),i("5511")),c=Object(o["a"])(s,r,a,!1,null,"69687c27",null);e["default"]=c.exports},a691:function(t,e,i){"use strict";var r=i("2fb8"),a=i.n(r);a.a}}]);