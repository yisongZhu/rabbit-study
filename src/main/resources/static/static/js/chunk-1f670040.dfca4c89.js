(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f670040"],{"05ed":function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"i",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"j",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"k",(function(){return l})),n.d(t,"d",(function(){return b})),n.d(t,"h",(function(){return g})),n.d(t,"f",(function(){return f}));var i=n("b775"),s=function(e){return Object(i["d"])("/dict/listDict")},r=function(e){return Object(i["d"])("/dict/uiActionList")},o=function(e){return Object(i["d"])("/dict/apiActionList")},u=function(e){return Object(i["e"])("/dict/addDict",e)},a=function(e){return Object(i["f"])("/dict/editDict",e)},c=function(e){return Object(i["d"])("/dict/listDictValue/"+e)},d=function(e){return Object(i["e"])("/dict/addDictValue",e)},l=function(e){return Object(i["f"])("/dict/editDictValue",e)},b=function(e){return Object(i["e"])("/dict/removeDictValue/"+e)},g=function(e){return Object(i["d"])("/dict/dictValue/listPage",e)},f=function(e){return Object(i["e"])("/dict/getDictValueById/"+e)}},"120e":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return a}));var i=n("b775"),s=function(e){return Object(i["d"])("/pageElement/listPage",e,!1)},r=function(e){return Object(i["e"])("/pageElement/add",e)},o=function(e){return Object(i["f"])("/pageElement/edit",e)},u=function(e){return Object(i["e"])("/pageElement/remove",e)},a=function(e){return Object(i["d"])("/pageElement/listByProjectId/"+e)}},"5a41":function(e,t,n){},6491:function(e,t,n){"use strict";var i=n("e46b"),s=n("eafa"),r=n("7c0a"),o="startsWith",u=""[o];i(i.P+i.F*n("bc96")(o),"String",{startsWith:function(e){var t=r(this,e,o),n=s(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return u?u.call(t,i,n):t.slice(n,n+i.length)===i}})},"8f3f":function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return a}));var i=n("b775"),s=function(e){return Object(i["d"])("/clients/listPage",e,!1)},r=function(e){return Object(i["d"])("/clients/listByProjectId/"+e)},o=function(e){return Object(i["e"])("/clients/add",e)},u=function(e){return Object(i["f"])("/clients/edit",e)},a=function(e){return Object(i["e"])("/clients/remove",e)}},"919d":function(e,t,n){"use strict";var i=n("5a41"),s=n.n(i);s.a},ad5d:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"调试用例",visible:e.visible,width:"1400px",top:"10vh"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog("debugForm")}}},[n("el-form",{ref:"debugForm",attrs:{inline:!0,model:e.debugForm,size:"mini",rules:e.rules}},[n("el-form-item",{attrs:{label:"执行机",prop:"host"}},[n("el-select",{staticStyle:{width:"220px"},attrs:{filterable:"",placeholder:"请选择执行机"},model:{value:e.debugForm.host,callback:function(t){e.$set(e.debugForm,"host",t)},expression:"debugForm.host"}},e._l(e.clientList,(function(e,t){return n("el-option",{key:t,attrs:{label:"【"+e.remark+"】 "+e.name+(1===e.status?"【在线】":"【离线】"),value:e.name}})})),1)],1),e._v(" "),n("el-form-item",{attrs:{label:"浏览器类型",prop:"browserType"}},[n("el-select",{staticStyle:{width:"200px"},attrs:{filterable:"",placeholder:"请选浏览器类型"},model:{value:e.debugForm.browserType,callback:function(t){e.$set(e.debugForm,"browserType",t)},expression:"debugForm.browserType"}},e._l(e.browserTypeList,(function(e,t){return n("el-option",{key:t,attrs:{label:e.key,value:e.key}})})),1)],1),e._v(" "),n("el-button",{staticClass:"title",attrs:{loading:e.loading,size:"mini",type:"primary"},on:{click:function(t){return e.initDebug("debugForm")}}},[e._v(e._s(e.loading?"调试中":"开始"))]),e._v(" "),n("el-button",{attrs:{disabled:e.isDebuging,size:"mini"},on:{click:function(t){return e.debugNext()}}},[e._v("执行下一步")]),e._v(" "),n("el-button",{attrs:{disabled:e.isDebuging,size:"mini"},on:{click:function(t){return e.debugNextPoint()}}},[e._v("执行到下个断点")]),e._v(" "),n("el-button",{attrs:{disabled:e.isDebuging,size:"mini"},on:{click:function(t){return e.debugNextAll()}}},[e._v("执行剩余步骤")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.stopDebug()}}},[e._v("停止")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){e.debugLog=""}}},[e._v("清除日志")]),e._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(t){e.debugLogIsTop=!e.debugLogIsTop}}},[e._v(e._s(e.debugLogIsTop?"取消显示最底":"显示最底"))])],1),e._v(" "),n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:13}},[n("el-table",{ref:"debugTable",staticStyle:{width:"auto"},attrs:{data:e.debugTestcase.testSteps,height:"400",border:"",size:"mini","row-class-name":e.tableRowClassName}},[n("el-table-column",{attrs:{align:"center",width:"50px",label:"断点"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticStyle:{padding:"7px",margin:"3px"},attrs:{round:"",type:t.row.point?"danger":"info"},on:{click:function(n){return e.swichDebug(t.row)}}})]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"40px",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"步骤描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"120",label:"定位方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-select",{attrs:{size:"mini",filterable:"",clearable:""},model:{value:t.row.byType,callback:function(n){e.$set(t.row,"byType",n)},expression:"scope.row.byType"}},[n("el-option",{attrs:{label:"id",value:"id"}}),e._v(" "),n("el-option",{attrs:{label:"name",value:"name"}}),e._v(" "),n("el-option",{attrs:{label:"className",value:"className"}}),e._v(" "),n("el-option",{attrs:{label:"cssSelector",value:"cssSelector"}}),e._v(" "),n("el-option",{attrs:{label:"xpath",value:"xpath"}}),e._v(" "),n("el-option",{attrs:{label:"linkText",value:"linkText"}}),e._v(" "),n("el-option",{attrs:{label:"tagName",value:"tagName"}}),e._v(" "),n("el-option",{attrs:{label:"partialLinkText",value:"partialLinkText"}})],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"定位值"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini","auto-complete":"off",placeholder:"请输入定位值"},model:{value:t.row.byValue,callback:function(n){e.$set(t.row,"byValue",n)},expression:"scope.row.byValue"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"操作数据"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{attrs:{size:"mini","auto-complete":"off"},model:{value:t.row.optionData,callback:function(n){e.$set(t.row,"optionData",n)},expression:"scope.row.optionData"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"70",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{staticClass:"mini-btn",attrs:{type:"danger",disabled:!e.loading,size:"mini"},on:{click:function(n){return e.debugRow(t.row)}}},[e._v("调试")])]}}])})],1)],1),e._v(" "),n("el-col",{attrs:{span:11}},[n("div",{staticClass:"log-s",staticStyle:{width:"100%"}},[n("div",{staticClass:"debug-log-codemirror"},[n("codemirror",{ref:"debugLog",staticClass:"code",attrs:{options:e.cmOptions},model:{value:e.debugLog,callback:function(t){e.debugLog=t},expression:"debugLog"}})],1)])])],1)],1)},s=[],r=(n("6491"),n("63ff"),n("57f0")),o=n("05ed"),u=n("8f3f"),a=n("8a2b"),c=n("120e"),d={components:{codemirror:a["codemirror"]},data:function(){return{debugTestcase:{title:"",id:"",name:"",projectId:0,failContinue:"",caseType:1,params:"",timoutTime:"",testSteps:[],remark:""},loading:!1,visible:!1,rules:{host:[{required:!0,message:"执行机不能为空",trigger:"blur"}],browserType:[{required:!0,message:"浏览器类型不能为空",trigger:"blur"}]},debugLog:"",debugForm:{caseId:this.$route.query.id,host:"",browserType:"",caseVars:""},debugWebsocket:null,clientList:[],browserTypeList:[],testPageList:[],cmOptions:{value:"",mode:"text/x-yaml",theme:"night",indentUnit:2,smartIndent:!0,tabSize:4,readOnly:!0,showCursorWhenSelecting:!0,lineNumbers:!0,firstLineNumber:1,extraKeys:{"Ctrl-Space":"autocomplete"},autofocus:!0,matchBrackets:!0},debugId:0,debugCaseList:[],isDebuging:!0,debugLogIsTop:!0}},mounted:function(){var e=this;Object(o["g"])(2).then((function(t){e.browserTypeList=t})),Object(u["d"])(this.$store.getters.projectId).then((function(t){e.clientList=t})),Object(c["d"])(this.$store.getters.projectId).then((function(t){e.testPageList=t||[]}))},beforeDestroy:function(){this.debugWebsocket&&(this.debugWebsocket.close(),this.debugWebsocket.send("关闭一下")),this.loading=!1},methods:{init:function(e){var t=this,n=JSON.parse(JSON.stringify(e));n.testSteps.map((function(e,n){if(e.elementId)for(var i=0;i<t.testPageList.length;i++){var s=t.testPageList[i];s.id===e.elementId&&(e.byType=s.byType||"",e.byValue=s.byValue||"")}return e.id=n+1,e.point=!1,e})),this.debugForm.caseVars=n.caseVars,this.debugTestcase=n,this.isDebuging=!0,this.debugLogIsTop=!0,this.debugId=0},tableRowClassName:function(e){e.row;var t=e.rowIndex;return t+1===this.debugId?"debug-row":""},swichDebug:function(e){e.point=!e.point},debugNextAll:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDebugCase(this.debugId,!0);case 2:this.debugCaseList.length>0?(this.isDebuging=!0,this.debugId=this.debugId+1,this.debugWebsocket.send(JSON.stringify({key:"case",msg:this.debugTestcase.testSteps[this.debugId-1]}))):this.debugLog=this.debugLog.concat("提示: 已经没有步骤可以执行！\r\n");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),debugNextPoint:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDebugCase(this.debugId);case 2:this.debugCaseList.length>0?(this.isDebuging=!0,this.debugId=this.debugId+1,this.debugWebsocket.send(JSON.stringify({key:"case",msg:this.debugTestcase.testSteps[this.debugId-1]}))):this.debugLog=this.debugLog.concat("提示: 已经没有步骤可以执行！\r\n");case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),stopDebug:function(){this.debugWebsocket&&this.debugWebsocket.close()},debugRow:function(e){this.debugWebsocket.send(JSON.stringify({key:"debugCase",msg:e}))},debugNext:function(){this.debugId<this.debugTestcase.testSteps[this.debugTestcase.testSteps.length-1].id?(this.debugId=this.debugId+1,this.debugWebsocket.send(JSON.stringify({key:"case",msg:this.debugTestcase.testSteps[this.debugId-1]}))):this.debugLog=this.debugLog.concat("提示: 已经没有步骤可以执行！\r\n")},closeDialog:function(){this.$refs["debugForm"].resetFields(),this.visible=!1,this.debugLog="",this.debugWebsocket&&this.debugWebsocket.close(),this.debugForm={caseId:this.$route.query.id,host:"",browserType:""}},getDebugCase:function(e,t){var n=0;for(e&&(n=e),this.debugCaseList=[],n;n<this.debugTestcase.testSteps.length;n++){var i=this.debugTestcase.testSteps[n];if(t)this.debugCaseList.push(i);else{if(i.point){this.debugCaseList.push(i);break}this.debugCaseList.push(i)}}},initDebug:function(e){var t=this;this.debugId=0,this.isDebuging=!0,this.$refs[e].validate((function(e){e&&(t.loading=!0,t.debugWebsocket=new WebSocket("ws://"+t.debugForm.host+"/ui/debug"),t.debugWebsocket.onclose=function(){t.loading=!1,t.debugId=0,t.isDebuging=!0,t.debugLog=t.debugLog.concat("调试通道关闭\r\n")},t.debugWebsocket.onerror=function(){t.loading=!1,t.debugId=0,t.isDebuging=!0,t.debugLog=t.debugLog.concat("调试通道报错\r\n")},t.debugWebsocket.onmessage=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(n){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=JSON.parse(n.data)||{},"info"!==i.type){e.next=12;break}if("调试通道连接成功"!==i.msg){e.next=8;break}return t.debugWebsocket.send(JSON.stringify({key:"start",msg:t.debugForm})),e.next=6,t.getDebugCase();case 6:e.next=9;break;case 8:i.msg.startsWith("创建浏览器对象成功")&&(t.debugCaseList&&(t.debugId=1),t.debugWebsocket.send(JSON.stringify({key:"case",msg:t.debugCaseList[0]})));case 9:t.debugLog=t.debugLog.concat((i.msg||"")+"\r\n"),e.next=13;break;case 12:"caseInfo"===i.type&&(i.stepNo<t.debugCaseList[t.debugCaseList.length-1].id?(t.debugLog=t.debugLog.concat((i.msg||"")+"\r\n"),t.debugId=t.debugId+1,t.debugWebsocket.send(JSON.stringify({key:"case",msg:t.debugTestcase.testSteps[t.debugId-1]}))):i.stepNo===t.debugCaseList[t.debugCaseList.length-1].id?(t.debugLog=t.debugLog.concat((i.msg||"")+"\r\n"),t.isDebuging=!1,t.debugLog=t.debugLog.concat("已经执行完断点\r\n")):t.debugLog=t.debugLog.concat((i.msg||"")+"\r\n"));case 13:t.debugLogIsTop&&t.$nextTick((function(){var e=t.$el.querySelector(".CodeMirror-vscrollbar");e.scrollTop=e.scrollHeight}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))}}},l=d,b=(n("919d"),n("5511")),g=Object(b["a"])(l,i,s,!1,null,"59dd1f94",null);t["default"]=g.exports}}]);