(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-651d547a","chunk-63707dcf"],{"5c65":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"device-card"},[i("div",{staticClass:"header"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[i("el-form-item",{attrs:{label:"设备类型："}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择设备类型"},model:{value:t.serchData.platform,callback:function(e){t.$set(t.serchData,"platform",e)},expression:"serchData.platform"}},[i("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),i("el-option",{attrs:{label:"安卓",value:1}}),t._v(" "),i("el-option",{attrs:{label:"IOS",value:2}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"设备状态："}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选设备状态"},model:{value:t.serchData.status,callback:function(e){t.$set(t.serchData,"status",e)},expression:"serchData.status"}},[i("el-option",{attrs:{label:"请选择",value:""}}),t._v(" "),i("el-option",{attrs:{label:"正常",value:1}}),t._v(" "),i("el-option",{attrs:{label:"离线",value:2}}),t._v(" "),i("el-option",{attrs:{label:"使用中",value:3}})],1)],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary"},on:{click:t.searchList}},[t._v("查询")]),t._v(" "),i("el-button",{on:{click:t.resetSearch}},[t._v("重置")])],1)],1)],1),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"body"},t._l(t.dataList,(function(e,a){return i("el-card",{key:a,staticStyle:{width:"250px",height:"260px",float:"left",margin:"0px 20px 20px 0px"},attrs:{shadow:"hover","body-style":{padding:"0px"}}},[i("div",{staticStyle:{width:"250px","line-height":"50px","border-bottom":"1px solid rgb(233, 230, 230)","text-align":"center","font-size":"13px"}},[i("strong",[t._v(t._s(e.name))])]),t._v(" "),i("div",{staticStyle:{width:"250px",height:"160px",padding:"10px 20px 10px 20px"}},[i("el-row",[i("el-col",{attrs:{span:9}},[i("div",{staticClass:"grid-content bg-purple"}),t._v(" "),i("div",{staticStyle:{width:"68px"}},[i("img",{staticClass:"image",attrs:{src:"http://127.0.0.1:8890/9f3809a0be2f460393dfa202c7acb3c6.jpg",width:"100%"}})])]),t._v(" "),i("el-col",{attrs:{span:15}},[i("dl",[i("span",[t._v("系统版本："+t._s(e.systemVersion))])]),t._v(" "),i("dl",[i("span",[t._v("分辨率："+t._s(e.screenHeight+"x"+e.screenWidth))])]),t._v(" "),i("dl",[i("span",[t._v("内存："+t._s(e.memSize))])]),t._v(" "),i("dl",[i("span",[t._v("cpu："+t._s(e.cpuInfo))])])])],1)],1),t._v(" "),i("div",{staticStyle:{width:"250px","line-height":"50px","border-top":"1px solid rgb(233, 230, 230)","text-align":"center"}},[2===e.status?i("el-button",{staticStyle:{"font-size":"15px"},attrs:{type:"text"},on:{click:function(i){return t.useDevice(e)}}},[t._v("立即使用")]):t._e(),t._v(" "),0===e.status?i("el-button",{staticStyle:{"font-size":"15px"},attrs:{type:"text",disabled:""}},[t._v("已离线")]):t._e(),t._v(" "),1===e.status?i("el-button",{staticStyle:{color:"#e77878","font-size":"15px"},attrs:{type:"text",disabled:""}},[t._v(t._s("["+e.username+"]使用中"))]):t._e()],1)])})),1),t._v(" "),i("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}}),t._v(" "),t.addOrEditFormVisible?i("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getPageList}}):t._e()],1)},r=[],s=(i("cc57"),i("b775")),n=function(t){return Object(s["d"])("/device/listPage",t,!1)},o=function(t){return Object(s["d"])("/device/"+t+"/start")},d=i("9c0a"),l={components:{AddOrUpdate:d["default"]},data:function(){return{loading:!1,serchData:{platform:"",clientIp:"",status:""},pageInfo:{pageNum:1,pageSize:20,pageCount:0},dataList:[],addOrEditFormVisible:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return t.serchData=e,t}},mounted:function(){this.getPageList()},methods:{resetSearch:function(){this.serchData={platform:"",clientIp:"",status:""}},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},addRow:function(t){var e=this;this.addOrEditFormVisible=!0,this.$nextTick((function(){e.$refs.addOrUpdate.init(t)}))},getPageList:function(){var t=this;this.loading=!0,n(this.serchInfo).then((function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1}))},useDevice:function(t){var e=this;this.$store.state.device.show?this.$message.error("只能使用一台手机"):o(t.id).then((function(){t.username=e.$store.state.user.name,t.status=1,e.$store.dispatch("device/setAgentIp",t.agentIp),e.$store.dispatch("device/setAgentPort",t.agentPort),e.$store.dispatch("device/setId",t.id),e.$store.dispatch("device/setPlatform",t.platform),e.$store.dispatch("device/setShow",!0)}))}}},c=l,u=(i("702a"),i("5511")),p=Object(u["a"])(c,a,r,!1,null,"35731a74",null);e["default"]=p.exports},"702a":function(t,e,i){"use strict";var a=i("e314"),r=i.n(a);r.a},"8f3f":function(t,e,i){"use strict";i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return s})),i.d(e,"a",(function(){return n})),i.d(e,"e",(function(){return o})),i.d(e,"b",(function(){return d}));var a=i("b775"),r=function(t){return Object(a["d"])("/clients/listPage",t,!1)},s=function(t){return Object(a["d"])("/clients/listByProjectId/"+t)},n=function(t){return Object(a["e"])("/clients/add",t)},o=function(t){return Object(a["f"])("/clients/edit",t)},d=function(t){return Object(a["e"])("/clients/remove",t)}},"9c0a":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{"close-on-click-modal":!1,title:t.addOrEditForm.title,visible:t.visible,width:"500px"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog("addOrEditForm")}}},[i("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[i("el-form-item",{attrs:{label:"执行机名称",prop:"name"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入执行机名称"},model:{value:t.addOrEditForm.name,callback:function(e){t.$set(t.addOrEditForm,"name",e)},expression:"addOrEditForm.name"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"执行机IP",prop:"clientIp"}},[i("el-input",{attrs:{"auto-complete":"off",placeholder:"请输入执行机IP"},model:{value:t.addOrEditForm.clientIp,callback:function(e){t.$set(t.addOrEditForm,"clientIp",e)},expression:"addOrEditForm.clientIp"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"执行机端口",prop:"clientPort"}},[i("el-input-number",{attrs:{controls:!1,min:1,max:66889,label:"请输入执行机端口"},model:{value:t.addOrEditForm.clientPort,callback:function(e){t.$set(t.addOrEditForm,"clientPort",e)},expression:"addOrEditForm.clientPort"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{size:"small"},on:{click:function(e){return t.closeDialog("addOrEditForm")}}},[t._v("取消")]),t._v(" "),i("el-button",{staticClass:"title",attrs:{size:"small",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1)],1)},r=[],s=(i("cc57"),i("8f3f")),n=i("3fa5"),o={data:function(){return{visible:!1,rules:{name:[{required:!0,message:"执行机组名不能为空",trigger:"blur"}],clientIp:[{required:!0,message:"执行机IP不能为空",trigger:"blur"},{pattern:/((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))/,message:"请填写正确的ip地址",trigger:"blur"}],clientPort:[{required:!0,message:"执行机端口不能为空",trigger:"blur"}]},addOrEditForm:{title:"",id:"",name:"",projectId:"",clientIp:"",clientPort:"",isEnable:1,status:1,remark:""}}},methods:{init:function(t){t?(this.visible=!0,this.addOrEditForm.title="编辑执行机",this.addOrEditForm.id=t.id,this.addOrEditForm.name=t.name,this.addOrEditForm.clientIp=t.clientIp,this.addOrEditForm.clientPort=t.clientPort,this.addOrEditForm.isEnable=t.isEnable,this.addOrEditForm.projectId=t.projectId,this.addOrEditForm.status=t.status,this.addOrEditForm.remark=t.remark):(this.visible=!0,this.addOrEditForm.projectId=this.$store.getters.projectId,this.addOrEditForm.title="新增执行机")},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.visible=!1,this.addOrEditForm={title:"",id:"",name:"",clientIp:"",projectId:"",clientPort:"",isEnable:1,status:1,remark:""}},submitForm:function(t){var e=this;this.$refs[t].validate((function(i){i&&"addOrEditForm"===t&&e.addOrEditForm.id?Object(s["e"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(n["a"])("保存数据成功")})):i&&"addOrEditForm"===t&&!e.addOrEditForm.id&&Object(s["a"])(e.addOrEditForm).then((function(t){e.visible=!1,e.$emit("refreshDataList"),Object(n["a"])("保存数据成功")}))}))}}},d=o,l=i("5511"),c=Object(l["a"])(d,a,r,!1,null,null,null);e["default"]=c.exports},e314:function(t,e,i){}}]);