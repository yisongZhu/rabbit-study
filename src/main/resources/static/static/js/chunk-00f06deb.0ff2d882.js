(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00f06deb","chunk-79e75bcf","chunk-fa9c9642"],{"05ed":function(t,e,i){"use strict";i.d(e,"e",(function(){return n})),i.d(e,"i",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return o})),i.d(e,"j",(function(){return d})),i.d(e,"g",(function(){return c})),i.d(e,"b",(function(){return l})),i.d(e,"k",(function(){return u})),i.d(e,"d",(function(){return f})),i.d(e,"h",(function(){return m})),i.d(e,"f",(function(){return b}));var r=i("b775"),n=function(t){return Object(r["d"])("/dict/listDict")},a=function(t){return Object(r["d"])("/dict/uiActionList")},s=function(t){return Object(r["d"])("/dict/apiActionList")},o=function(t){return Object(r["e"])("/dict/addDict",t)},d=function(t){return Object(r["f"])("/dict/editDict",t)},c=function(t){return Object(r["d"])("/dict/listDictValue/"+t)},l=function(t){return Object(r["e"])("/dict/addDictValue",t)},u=function(t){return Object(r["f"])("/dict/editDictValue",t)},f=function(t){return Object(r["e"])("/dict/removeDictValue/"+t)},m=function(t){return Object(r["d"])("/dict/dictValue/listPage",t)},b=function(t){return Object(r["e"])("/dict/getDictValueById/"+t)}},1111:function(t,e,i){},"138d":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加业务流",visible:t.visible,width:"70%"},on:{"update:visible":function(e){t.visible=e},close:function(e){return t.closeDialog()}}},[i("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[i("div",{staticClass:"my-class"},[i("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[i("el-form-item",{attrs:{label:"业务流名称："}},[i("el-input",{attrs:{placeholder:"请输入业务流名称"},model:{value:t.serchData.name,callback:function(e){t.$set(t.serchData,"name",e)},expression:"serchData.name"}})],1),t._v(" "),i("el-form-item",[i("el-button",{on:{click:t.searchList}},[t._v("查询")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addRow()}}},[t._v("添加")])],1)],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"refTable",staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":t.selected}},[i("el-table-column",{attrs:{type:"selection",align:"center",width:"35"}}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"150px",label:"业务流名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"120px",label:"用例失败是否继续"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(1===e.row.failContinue?"继续":"跳过"))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"120px",label:"超时时间(秒)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.timoutTime))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"业务流描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])})],1),t._v(" "),i("el-pagination",{attrs:{background:"","current-page":t.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":t.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:t.pageInfo.pageCount},on:{"size-change":t.changePageSize,"current-change":t.changePageNum}})],1)],1)},n=[],a=(i("6d57"),i("1f90")),s={props:["value"],data:function(){return{visible:!1,dataList:[],selectedData:[],serchData:{name:"",remark:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},loading:!1}},computed:{serchInfo:function(){var t=this.pageInfo,e=this.serchData;return e.projectId=this.$store.getters.projectId,t.serchData=e,t}},watch:{value:{handler:function(t){this.visible=t},immediate:!0},visible:function(t){this.$emit("input",t)}},mounted:function(){this.getPageList()},methods:{selected:function(t){this.selectedData=t},addRow:function(){this.selectedData.forEach((function(t){t.isValid=1})),this.$emit("backDate",this.selectedData),this.visible=!1},getPageList:function(){var t=this;this.loading=!0,Object(a["e"])(this.serchInfo).then((function(e){t.dataList=e.list||[],t.pageInfo.pageCount=e.total,t.loading=!1}))},searchList:function(){this.getPageList()},changePageSize:function(t){this.pageInfo.pageSize=t,this.getPageList()},changePageNum:function(t){this.pageInfo.pageNum=t,this.getPageList()},closeDialog:function(){this.$refs.refTable.clearSelection(),this.selectedData=[]}}},o=s,d=(i("6665"),i("5511")),c=Object(d["a"])(o,r,n,!1,null,"bfe291a6",null);e["default"]=c.exports},1647:function(t,e,i){},"1cc8":function(t,e,i){"use strict";var r=i("1111"),n=i.n(r);n.a},"1f90":function(t,e,i){"use strict";i.d(e,"e",(function(){return n})),i.d(e,"b",(function(){return a})),i.d(e,"g",(function(){return s})),i.d(e,"d",(function(){return o})),i.d(e,"c",(function(){return d})),i.d(e,"a",(function(){return c})),i.d(e,"f",(function(){return l}));var r=i("b775"),n=function(t){return Object(r["d"])("/uiTestBusiness/listPage",t,!1)},a=function(t){return Object(r["e"])("/uiTestBusiness/add",t)},s=function(t){return Object(r["f"])("/uiTestBusiness/edit",t)},o=function(t){return Object(r["e"])("/uiTestBusiness/remove",t)},d=function(t){return Object(r["e"])("/uiTestBusiness/delBusinessCaseById/"+t)},c=function(t){return Object(r["e"])("/uiTestBusiness/addCaseToBusiness",t)},l=function(t){return Object(r["e"])("/uiTestBusiness/updateCaseSort",t)}},"2ee8":function(t,e,i){},6665:function(t,e,i){"use strict";var r=i("2ee8"),n=i.n(r);n.a},7654:function(t,e,i){"use strict";i.d(e,"h",(function(){return n})),i.d(e,"d",(function(){return a})),i.d(e,"g",(function(){return s})),i.d(e,"a",(function(){return o})),i.d(e,"b",(function(){return d})),i.d(e,"i",(function(){return c})),i.d(e,"e",(function(){return l})),i.d(e,"c",(function(){return u})),i.d(e,"f",(function(){return f}));var r=i("b775"),n=function(t){return Object(r["d"])("/job/list",t,!1)},a=function(t){return Object(r["d"])("/job/listByCustomer",t,!1)},s=function(t){return Object(r["e"])("/job/run",t)},o=function(t){return Object(r["e"])("/job/add",t)},d=function(t){return Object(r["e"])("/job/changeStatus",t)},c=function(t){return Object(r["f"])("/job/edit",t)},l=function(t){return Object(r["e"])("/job/remove",t)},u=function(t){return Object(r["e"])("/job/checkCronExpressionIsValid",t)},f=function(t){return Object(r["d"])("/job/detail/"+t)}},"7dda":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("sticky",{attrs:{"z-index":1,"sticky-top":84,"class-name":"sub-navbar"}},[i("el-button",{attrs:{size:"mini"},on:{click:t.toBack}},[t._v("返回")]),t._v(" "),i("el-button",{staticClass:"title",attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.submitForm("addOrEditForm")}}},[t._v("保存")])],1),t._v(" "),i("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[i("div",{staticClass:"task-main"},[i("el-form",{ref:"addOrEditForm",attrs:{"label-width":"90px",model:t.addOrEditForm,size:"small",rules:t.rules}},[i("el-form-item",{attrs:{label:"任务组名",prop:"jobGroup"}},[i("el-input",{staticStyle:{width:"290px"},attrs:{"auto-complete":"off",placeholder:"请输入任务组名"},model:{value:t.addOrEditForm.jobGroup,callback:function(e){t.$set(t.addOrEditForm,"jobGroup",e)},expression:"addOrEditForm.jobGroup"}})],1),t._v(" "),1===t.addOrEditForm.jobType?i("el-form-item",{attrs:{label:"浏览器类型",prop:"jobParams.browserType"}},[i("el-select",{staticStyle:{width:"290px"},attrs:{filterable:"",placeholder:"请选浏览器类型"},model:{value:t.addOrEditForm.jobParams.browserType,callback:function(e){t.$set(t.addOrEditForm.jobParams,"browserType",e)},expression:"addOrEditForm.jobParams.browserType"}},t._l(t.browserTypeList,(function(t,e){return i("el-option",{key:e,attrs:{label:t.key,value:t.key}})})),1)],1):t._e(),t._v(" "),i("el-form-item",{attrs:{label:"执行机",prop:"jobParams.clientId"}},[i("el-select",{staticStyle:{width:"290px"},attrs:{filterable:"",placeholder:"请选择执行机"},model:{value:t.addOrEditForm.jobParams.clientId,callback:function(e){t.$set(t.addOrEditForm.jobParams,"clientId",e)},expression:"addOrEditForm.jobParams.clientId"}},t._l(t.clientList,(function(t,e){return i("el-option",{key:e,attrs:{label:"【"+t.remark+"】 "+t.name,value:t.id}})})),1)],1),t._v(" "),i("el-form-item",{attrs:{label:"cron表达式",prop:"cronExpression"}},[i("el-input",{staticStyle:{width:"290px"},attrs:{"auto-complete":"off",placeholder:"请输入cron表达式"},model:{value:t.addOrEditForm.cronExpression,callback:function(e){t.$set(t.addOrEditForm,"cronExpression",e)},expression:"addOrEditForm.cronExpression"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"执行错误策略",prop:"misfirePolicy"}},[i("el-radio-group",{model:{value:t.addOrEditForm.misfirePolicy,callback:function(e){t.$set(t.addOrEditForm,"misfirePolicy",e)},expression:"addOrEditForm.misfirePolicy"}},[i("el-radio",{attrs:{label:"0"}},[t._v("默认")]),t._v(" "),i("el-radio",{attrs:{label:"1"}},[t._v("立即执行")]),t._v(" "),i("el-radio",{attrs:{label:"2"}},[t._v("执行一次")]),t._v(" "),i("el-radio",{attrs:{label:"3"}},[t._v("放弃执行")])],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"状态",prop:"status"}},[i("el-radio-group",{model:{value:t.addOrEditForm.status,callback:function(e){t.$set(t.addOrEditForm,"status",e)},expression:"addOrEditForm.status"}},[i("el-radio",{attrs:{label:"0"}},[t._v("正常")]),t._v(" "),i("el-radio",{attrs:{label:"1"}},[t._v("暂停")])],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"是否发送邮件",prop:"isSendEmail"}},[i("el-radio-group",{model:{value:t.addOrEditForm.jobParams.isSendEmail,callback:function(e){t.$set(t.addOrEditForm.jobParams,"isSendEmail",e)},expression:"addOrEditForm.jobParams.isSendEmail"}},[i("el-radio",{attrs:{label:0}},[t._v("否")]),t._v(" "),i("el-radio",{attrs:{label:1}},[t._v("是")])],1)],1),t._v(" "),1===t.addOrEditForm.jobParams.isSendEmail?i("el-form-item",{attrs:{label:"收件人",prop:"receivers"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.jobParams.receivers,callback:function(e){t.$set(t.addOrEditForm.jobParams,"receivers",e)},expression:"addOrEditForm.jobParams.receivers"}})],1):t._e(),t._v(" "),i("el-form-item",{staticStyle:{width:"50%"},attrs:{label:"备注",prop:"remark"}},[i("el-input",{attrs:{type:"textarea"},model:{value:t.addOrEditForm.remark,callback:function(e){t.$set(t.addOrEditForm,"remark",e)},expression:"addOrEditForm.remark"}})],1),t._v(" "),i("add-or-edit-business",{model:{value:t.addOrEditForm.businessList,callback:function(e){t.$set(t.addOrEditForm,"businessList",e)},expression:"addOrEditForm.businessList"}})],1)],1)])],1)},n=[],a=(i("63ff"),i("57f0")),s=i("7654"),o=i("3fa5"),d=i("b804"),c=i("05ed"),l=i("bd23"),u=i("8f3f"),f={components:{Sticky:d["a"],addOrEditBusiness:l["default"]},data:function(){var t=this,e=function(e,i,r){Object(s["c"])(t.addOrEditForm).then((function(t){t?r():r(new Error("Cron表达式错误"))}))};return{browserTypeList:[],clientList:[],rules:{jobGroup:[{required:!0,message:"任务组名不能为空",trigger:"blur"}],cronExpression:[{required:!0,message:"cron表达式不能为空",trigger:"blur"},{validator:e,trigger:"blur"}],"jobParams.clientId":[{required:!0,message:"客户端不能为空",trigger:"blur"}],"jobParams.browserType":[{required:!0,message:"浏览器不能为空",trigger:"blur"}]},addOrEditForm:{title:"",jobId:"",jobName:"",jobGroup:"",methodName:"",methodParams:"",cronExpression:"",projectId:"",jobType:1,businessList:[],misfirePolicy:"0",status:"0",remark:"",jobParams:{browserType:"IE",clientId:"",isSendEmail:0,receivers:""}}}},mounted:function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getDictValueList();case 2:return t.next=4,Object(u["d"])(this.$store.getters.projectId).then((function(t){e.clientList=t}));case 4:this.$route.query.jobId?Object(s["f"])(this.$route.query.jobId).then((function(t){t.projectId!==e.$store.getters.projectId&&e.toBack(),e.init(t)})):this.init();case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{init:function(t){if(t){try{this.addOrEditForm.jobParams=JSON.parse(t.methodParams)}catch(e){this.addOrEditForm.jobParams={}}this.addOrEditForm.title="编辑任务",this.addOrEditForm.jobId=t.jobId,this.addOrEditForm.jobName=t.jobName,this.addOrEditForm.jobGroup=t.jobGroup,this.addOrEditForm.methodName=t.methodName,this.addOrEditForm.methodParams=t.methodParams,this.addOrEditForm.cronExpression=t.cronExpression,this.addOrEditForm.projectId=t.projectId,this.addOrEditForm.businessList=t.businessList,this.addOrEditForm.jobType=1,this.addOrEditForm.misfirePolicy=t.misfirePolicy,this.addOrEditForm.status=t.status,this.addOrEditForm.remark=t.remark}else this.addOrEditForm.title="新增任务",this.addOrEditForm.jobName="autoTestTask",this.addOrEditForm.methodName="uiTest",this.addOrEditForm.projectId=this.$store.getters.projectId},closeDialog:function(){this.$refs["addOrEditForm"].resetFields(),this.resetDialog()},toBack:function(){this.closeDialog(),this.$router.push({path:"/uiTest/testPlan/list"})},submitForm:function(t){var e=this;this.$refs[t].validate((function(t){e.addOrEditForm.methodParams=JSON.stringify(e.addOrEditForm.jobParams),t&&e.addOrEditForm.jobId?Object(s["i"])(e.addOrEditForm).then((function(t){e.closeDialog(),Object(o["a"])("保存数据成功"),e.$router.push({path:"/uiTest/testPlan/list"})})):t&&!e.addOrEditForm.jobId&&Object(s["a"])(e.addOrEditForm).then((function(t){e.closeDialog(),Object(o["a"])("保存数据成功"),e.$router.push({path:"/uiTest/testPlan/list"})}))}))},getDictValueList:function(){var t=this;Object(c["g"])(2).then((function(e){t.browserTypeList=e}))},resetDialog:function(){this.addOrEditForm={title:"",jobId:"",jobName:"",jobGroup:"",methodName:"",methodParams:"",cronExpression:"",projectId:"",jobType:1,misfirePolicy:"0",status:"0",remark:"",jobParams:{clientId:"",browserType:"",isSendEmail:0,receivers:"IE"}}}}},m=f,b=(i("e3a4"),i("5511")),p=Object(b["a"])(m,r,n,!1,null,"a7e90a26",null);e["default"]=p.exports},"8f3f":function(t,e,i){"use strict";i.d(e,"c",(function(){return n})),i.d(e,"d",(function(){return a})),i.d(e,"a",(function(){return s})),i.d(e,"e",(function(){return o})),i.d(e,"b",(function(){return d}));var r=i("b775"),n=function(t){return Object(r["d"])("/clients/listPage",t,!1)},a=function(t){return Object(r["d"])("/clients/listByProjectId/"+t)},s=function(t){return Object(r["e"])("/clients/add",t)},o=function(t){return Object(r["f"])("/clients/edit",t)},d=function(t){return Object(r["e"])("/clients/remove",t)}},b804:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{style:{height:t.height+"px",zIndex:t.zIndex}},[i("div",{class:t.className,style:{top:t.isSticky?t.stickyTop+"px":"",zIndex:t.zIndex,position:t.position,width:t.width,height:t.height+"px"}},[t._t("default",[i("div",[t._v("sticky")])])],2)])},n=[],a=(i("163d"),{name:"Sticky",props:{stickyTop:{type:Number,default:0},zIndex:{type:Number,default:1},className:{type:String,default:""}},data:function(){return{active:!1,position:"",width:void 0,height:void 0,isSticky:!1}},mounted:function(){this.height=this.$el.getBoundingClientRect().height,window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)},activated:function(){this.handleScroll()},destroyed:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleResize)},methods:{sticky:function(){this.active||(this.position="fixed",this.active=!0,this.width=this.width+"px",this.isSticky=!0)},handleReset:function(){this.active&&this.reset()},reset:function(){this.position="",this.width="auto",this.active=!1,this.isSticky=!1},handleScroll:function(){var t=this.$el.getBoundingClientRect().width;this.width=t||"auto";var e=this.$el.getBoundingClientRect().top;e<this.stickyTop?this.sticky():this.handleReset()},handleResize:function(){this.isSticky&&(this.width=this.$el.getBoundingClientRect().width+"px")}}}),s=a,o=i("5511"),d=Object(o["a"])(s,r,n,!1,null,null,null);e["a"]=d.exports},bd23:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{staticClass:"header"},[i("b",{staticClass:"title"},[t._v("业务流列表")]),t._v(" "),i("el-button",{staticStyle:{float:"right"},attrs:{size:"mini"},on:{click:function(e){return t.addRow()}}},[t._v("新增业务流")])],1),t._v(" "),i("el-table",{ref:"dragTable",staticStyle:{width:"auto"},attrs:{data:t.dataList,border:"",stripe:"",size:"small"}},[i("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"150px",label:"业务流名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"120px",label:"用例失败是否继续"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(1===e.row.failContinue?"继续":"跳过"))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",width:"120px",label:"超时时间(秒)"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.timoutTime))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"业务流描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.remark))]}}])}),t._v(" "),i("el-table-column",{attrs:{align:"center",label:"业务流状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(1===e.row.isValid?"启用":"")+"\n        "+t._s(0===e.row.isValid?"禁用":"")+"\n      ")]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"180",fixed:"right",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.isValid?i("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{size:"mini"},on:{click:function(t){e.row.isValid=1}}},[t._v("启用")]):t._e(),t._v(" "),1===e.row.isValid?i("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{size:"mini"},on:{click:function(t){e.row.isValid=0}}},[t._v("禁用")]):t._e(),t._v(" "),i("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(i){return t.deleteRow(e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),i("business-add",{ref:"addOrUpdate",on:{backDate:t.addBusiness},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}})],1)},n=[],a=(i("6d57"),i("138d")),s={components:{businessAdd:a["default"]},props:["value"],data:function(){return{dataList:[],visible:!1,maxSortTemp:0}},watch:{value:{handler:function(t){this.dataList=t||[]},immediate:!0},dataList:function(t){this.$emit("input",t)}},mounted:function(){},methods:{deleteRow:function(t){this.dataList.splice(t,1)},addRow:function(){this.visible=!0},addBusiness:function(t){var e=this;t&&t.forEach((function(t){e.dataList.push(t)}))}}},o=s,d=(i("1cc8"),i("5511")),c=Object(d["a"])(o,r,n,!1,null,"5aea930c",null);e["default"]=c.exports},e3a4:function(t,e,i){"use strict";var r=i("1647"),n=i.n(r);n.a}}]);