(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20d45232"],{"2c97":function(e,t,n){},"608b":function(e,t,n){"use strict";var a=n("b2f5"),r=n("2d43")(5),s="find",i=!0;s in[]&&Array(1)[s](function(){i=!1}),a(a.P+a.F*i,"Array",{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("644a")(s)},"83f9":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"box-card card-main",attrs:{shadow:"never"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"执行机名称："}},[n("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入执行机名称"},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"执行机IP："}},[n("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入执行机IP"},model:{value:e.serchData.clientIp,callback:function(t){e.$set(e.serchData,"clientIp",t)},expression:"serchData.clientIp"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"执行机状态："}},[n("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择执行机状态"},model:{value:e.serchData.status,callback:function(t){e.$set(e.serchData,"status",t)},expression:"serchData.status"}},[n("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),n("el-option",{attrs:{label:"正常",value:1}}),e._v(" "),n("el-option",{attrs:{label:"离线",value:2}}),e._v(" "),n("el-option",{attrs:{label:"状态未知",value:3}})],1)],1),e._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.searchList}},[e._v("查询")]),e._v(" "),n("el-button",{on:{click:e.resetSearch}},[e._v("重置")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"}},[n("el-table-column",{attrs:{width:"150",align:"center",label:"host"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"150",align:"center",label:"操作系统"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.osName))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"appium版本"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.appiumVersion))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"jmeter版本"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jmeterVersion))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"Java版本"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.javaVersion))]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"100",align:"center",label:"执行机状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?n("el-tag",{attrs:{size:"small"}},[e._v(e._s("正常"))]):e._e(),e._v(" "),2===t.row.status?n("el-tag",{attrs:{type:"info",size:"small"}},[e._v(e._s("离线"))]):e._e(),e._v(" "),3===t.row.status?n("el-tag",{attrs:{type:"warning",size:"small"}},[e._v(e._s("状态未知"))]):e._e()]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"250",align:"center",label:"所属项目"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?n("el-select",{attrs:{size:"mini",multiple:"",placeholder:"请选择"},model:{value:t.row.projects,callback:function(n){e.$set(t.row,"projects",n)},expression:"scope.row.projects"}},e._l(e.projects,function(e){return n("el-option",{key:e.id,attrs:{label:e.projectName,value:e.id+""}})}),1):n("div",e._l(t.row.projectNames,function(t){return n("el-tag",{key:t,attrs:{size:"small"}},[e._v("\n            "+e._s(t)+"\n          ")])}),1)]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return t.row.edit?[n("el-input",{attrs:{size:"mini"},model:{value:t.row.remark,callback:function(n){e.$set(t.row,"remark",n)},expression:"scope.row.remark"}})]:n("span",{},[e._v(e._s(t.row.remark))])}}],null,!0)}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"150",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.edit?e._e():n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.row.edit=!t.row.edit}}},[e._v("修改")]),e._v(" "),t.row.edit?n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(n){return e.addRow(t.row)}}},[e._v("保存")]):e._e(),e._v(" "),n("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.deleteRow(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)},r=[],s=(n("608b"),n("7bc1"),n("63ff"),n("e71e")),i=n("8f3f"),o=n("c24f"),c=n("3fa5"),l={data:function(){return{loading:!1,serchData:{name:"",clientIp:"",status:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},dataList:[],projects:[]}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return e.serchData=t,e}},mounted:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getAllProjects();case 2:this.getPageList();case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),methods:{resetSearch:function(){this.serchData={name:"",clientIp:"",status:""}},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},addRow:function(e){var t=this;e.projectIds=e.projects.join(","),Object(i["e"])(e).then(function(e){t.getPageList(),Object(c["a"])("保存数据成功")})},getAllProjects:function(){var e=this;Object(o["g"])().then(function(t){e.projects=t||[]})},deleteRow:function(e){var t=this;this.$confirm("此操作将永久删除该执行机, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(i["b"])(e).then(function(e){t.$message({type:"success",message:"删除成功!"}),t.getPageList()})}).catch(function(){t.$message({type:"success",message:"已取消删除"})})},cancelEdit:function(e){e.projectIds=e.originalProjectIds,e.remark=e.originalRemark,e.edit=!1},getPageList:function(){var e=this;this.loading=!0,Object(i["c"])(this.serchInfo).then(function(t){e.dataList=t.list.map(function(t){var n=[];return t.edit=!1,t.projects=[],t.projectIds&&(t.projects=t.projectIds.split(",")),t.projects.map(function(t){var a=e.projects.find(function(e){return e.id+""===t});a&&n.push(a.projectName)}),t.projectNames=n,t.originalProjects=t.projects,t.originalRemark=t.remark,t})||[],e.pageInfo.pageCount=t.total,e.loading=!1})}}},u=l,p=(n("b7cc"),n("6691")),f=Object(p["a"])(u,a,r,!1,null,"29984aa6",null);t["default"]=f.exports},"8f3f":function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"d",function(){return s}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return o}),n.d(t,"b",function(){return c});var a=n("b775"),r=function(e){return Object(a["d"])("/clients/listPage",e,!1)},s=function(e){return Object(a["d"])("/clients/listByProjectId/"+e)},i=function(e){return Object(a["e"])("/clients/add",e)},o=function(e){return Object(a["f"])("/clients/edit",e)},c=function(e){return Object(a["e"])("/clients/remove",e)}},b7cc:function(e,t,n){"use strict";var a=n("2c97"),r=n.n(a);r.a}}]);