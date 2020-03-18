(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9814180"],{"05ed":function(t,i,e){"use strict";e.d(i,"e",(function(){return n})),e.d(i,"i",(function(){return d})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return o})),e.d(i,"j",(function(){return s})),e.d(i,"g",(function(){return c})),e.d(i,"b",(function(){return l})),e.d(i,"k",(function(){return u})),e.d(i,"d",(function(){return m})),e.d(i,"h",(function(){return h})),e.d(i,"f",(function(){return f}));var r=e("b775"),n=function(t){return Object(r["d"])("/dict/listDict")},d=function(t){return Object(r["d"])("/dict/uiActionList")},a=function(t){return Object(r["d"])("/dict/apiActionList")},o=function(t){return Object(r["e"])("/dict/addDict",t)},s=function(t){return Object(r["f"])("/dict/editDict",t)},c=function(t){return Object(r["d"])("/dict/listDictValue/"+t)},l=function(t){return Object(r["e"])("/dict/addDictValue",t)},u=function(t){return Object(r["f"])("/dict/editDictValue",t)},m=function(t){return Object(r["e"])("/dict/removeDictValue/"+t)},h=function(t){return Object(r["d"])("/dict/dictValue/listPage",t)},f=function(t){return Object(r["e"])("/dict/getDictValueById/"+t)}},"2fc8":function(t,i,e){"use strict";e.r(i);var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[e("sticky",{attrs:{"z-index":4,"sticky-top":84,"class-name":"sub-navbar"}},[e("el-button",{attrs:{size:"mini"},on:{click:t.toBack}},[t._v("返回")]),t._v(" "),e("el-button",{staticClass:"title",attrs:{size:"mini",type:"primary"},on:{click:function(i){return t.submitForm("addOrEditForm")}}},[t._v("\n        "+t._s("保存")+"\n      ")])],1),t._v(" "),e("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[e("div",{staticClass:"task-main"},[e("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[e("el-row",[e("el-col",{attrs:{span:10}},[e("el-form-item",{attrs:{label:"关键字名称",prop:"name"}},[e("el-input",{staticStyle:{width:"290px"},attrs:{"auto-complete":"off",placeholder:"请输入关键字名称"},model:{value:t.addOrEditForm.name,callback:function(i){t.$set(t.addOrEditForm,"name",i)},expression:"addOrEditForm.name"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"关键字Key",prop:"name"}},[e("el-input",{staticStyle:{width:"290px"},attrs:{"auto-complete":"off",placeholder:"请输入关键字名称"},model:{value:t.addOrEditForm.key,callback:function(i){t.$set(t.addOrEditForm,"key",i)},expression:"addOrEditForm.key"}})],1)],1),t._v(" "),e("el-col",{attrs:{span:10}},[e("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"关键字描述",prop:"remark"}},[e("el-input",{attrs:{autosize:"",type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(i){t.$set(t.addOrEditForm,"remark",i)},expression:"addOrEditForm.remark"}})],1)],1)],1),t._v(" "),e("el-divider",{attrs:{"content-position":"left"}},[e("div",[t._v("\n              关键字代码\n              "),e("el-divider",{attrs:{direction:"vertical"}}),t._v(" "),e("el-popover",{attrs:{placement:"right",width:"800",trigger:"click"}},[e("pre",[t._v('import org.openqa.selenium.WebDriver;\nimport java.util.Map;\npublic class TestStingToCode {\n    /**说明：方法名和参数是固定的！！！\n     * @param driver   浏览器驱动\n     * @param byString 定位方式  byid和byvalue用英文字符“;;”隔开\n     * @param data     操作的数据\n     * @param vars     内置用例变量\n     * @return 返回 Result.fail(String msg),Result.success(String msg),断言此关键字是否通过\n     */\n    public static Object run(WebDriver driver, String byString, String data, Map vars) throws Exception {\n        try {\n            driver.get("https://www.baidu.com/");\n            //编写执行内容，并进行断言\n            return Result.success("你执行我，我报错了！");\n        } catch (Exception e) {\n            //失败的时候断言\n            return Result.fail("关闭失败！");\n        }\n    }\n}')]),t._v(" "),e("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("模板")])],1)],1)]),t._v(" "),e("div",{staticClass:"action-codemirror"},[e("codemirror",{ref:"myCm",attrs:{options:t.cmOptions},model:{value:t.addOrEditForm.remark2,callback:function(i){t.$set(t.addOrEditForm,"remark2",i)},expression:"addOrEditForm.remark2"}})],1)],1)],1)])],1)},n=[],d=(e("cc57"),e("8a2b")),a=e("05ed"),o=e("3fa5"),s=e("b804"),c={components:{Sticky:s["a"],codemirror:d["codemirror"]},data:function(){return{browserTypeList:[],clientList:[],loading:!1,rules:{name:[{required:!0,message:"关键字名称不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",key:"",dictId:"",remark:"",remark2:""},cmOptions:{value:"",mode:"text/x-java",theme:"night",indentUnit:2,smartIndent:!0,tabSize:4,readOnly:!1,showCursorWhenSelecting:!0,lineNumbers:!0,firstLineNumber:1,extraKeys:{"Ctrl-Space":"autocomplete"},autofocus:!0,matchBrackets:!0}}},mounted:function(){this.initBefore()},methods:{initBefore:function(){var t=this;this.$route.query.id?(this.loading=!0,Object(a["f"])(this.$route.query.id).then((function(i){19!==i.dictId&&t.toBack(),t.init(i)})).finally((function(){t.loading=!1}))):this.init()},init:function(t){t?(this.addOrEditForm.title="编辑任务",this.addOrEditForm.id=t.id,this.addOrEditForm.name=t.name,this.addOrEditForm.projectId=t.projectId,this.addOrEditForm.key=t.key,this.addOrEditForm.remark=t.remark,this.addOrEditForm.remark2=t.remark2,this.addOrEditForm.dictId=t.dictId):(this.addOrEditForm.title="新增任务",this.addOrEditForm.dictId=19)},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.resetDialog()},toBack:function(){this.closeDialog(),this.$router.push({path:"/publicConfig/customerAction/list"})},submitForm:function(t){var i=this;this.$refs[t].validate((function(t){t&&i.addOrEditForm.id?(i.loading=!0,Object(a["k"])(i.addOrEditForm).then((function(t){Object(o["a"])("保存数据成功"),i.initBefore()})).finally((function(){i.loading=!1}))):t&&!i.addOrEditForm.id&&(i.loading=!0,Object(a["b"])(i.addOrEditForm).then((function(t){Object(o["a"])("保存数据成功"),i.toBack()})).finally((function(){i.loading=!1})))}))},resetDialog:function(){this.addOrEditForm={title:"",id:"",name:"",key:"",dictId:"",remark:"",remark2:""}}}},l=c,u=(e("b19f"),e("5511")),m=Object(u["a"])(l,r,n,!1,null,"3fb65e05",null);i["default"]=m.exports},b19f:function(t,i,e){"use strict";var r=e("bfbf"),n=e.n(r);n.a},b804:function(t,i,e){"use strict";var r=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[e("div",{class:t.className,style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"}},[t._t("default",[e("div",[t._v("sticky")])])],2)])},n=[],d=(e("163d"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var t=this.$el.getBoundingClientRect().width;this.width=t||"auto";var i=this.$el.getBoundingClientRect().top;i<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}}),a=d,o=e("5511"),s=Object(o["a"])(a,r,n,!1,null,null,null);i["a"]=s.exports},bfbf:function(t,i,e){}}]);