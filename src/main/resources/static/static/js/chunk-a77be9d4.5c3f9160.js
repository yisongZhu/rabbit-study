(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a77be9d4","chunk-1a115802"],{"1f90":function(e,t,n){"use strict";n.d(t,"e",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return c}));var a=n("b775"),i=function(e){return Object(a["d"])("/uiTestBusiness/listPage",e,!1)},s=function(e){return Object(a["e"])("/uiTestBusiness/add",e)},l=function(e){return Object(a["f"])("/uiTestBusiness/edit",e)},o=function(e){return Object(a["e"])("/uiTestBusiness/remove",e)},r=function(e){return Object(a["e"])("/uiTestBusiness/delBusinessCaseById/"+e)},u=function(e){return Object(a["e"])("/uiTestBusiness/addCaseToBusiness",e)},c=function(e){return Object(a["e"])("/uiTestBusiness/updateCaseSort",e)}},"2b69":function(e,t,n){"use strict";var a=n("fdd2"),i=n.n(a);i.a},"31ee":function(e,t,n){"use strict";var a=n("b4aa"),i=n.n(a);i.a},6574:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticClass:"header"},[n("b",{staticClass:"title"},[e._v("业务流列表")]),e._v(" "),n("el-button",{staticStyle:{float:"right"},attrs:{size:"mini"},on:{click:function(t){return e.addRow()}}},[e._v("新增业务流")])],1),e._v(" "),n("el-table",{ref:"dragTable",staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"}},[n("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"150px",label:"业务流名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"120px",label:"用例失败是否继续"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(1===t.row.failContinue?"继续":"跳过"))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"120px",label:"超时时间(秒)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.timoutTime))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"业务流描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"业务流状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(1===t.row.isValid?"启用":"")+"\n        "+e._s(0===t.row.isValid?"禁用":"")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{width:"180",fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.isValid?n("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{size:"mini"},on:{click:function(e){t.row.isValid=1}}},[e._v("启用")]):e._e(),e._v(" "),1===t.row.isValid?n("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{size:"mini"},on:{click:function(e){t.row.isValid=0}}},[e._v("禁用")]):e._e(),e._v(" "),n("el-button",{staticStyle:{padding:"3px 4px 3px 4px",margin:"1px"},attrs:{type:"danger",size:"mini"},on:{click:function(n){return e.deleteRow(t.$index)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("business-add",{ref:"addOrUpdate",on:{backDate:e.addBusiness},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}})],1)},i=[],s=(n("6d57"),n("befb")),l={components:{businessAdd:s["default"]},props:["value"],data:function(){return{dataList:[],visible:!1,maxSortTemp:0}},watch:{value:{handler:function(e){this.dataList=e||[]},immediate:!0},dataList:function(e){this.$emit("input",e)}},mounted:function(){},methods:{deleteRow:function(e){this.dataList.splice(e,1)},addRow:function(){this.visible=!0},addBusiness:function(e){var t=this;e&&e.forEach((function(e){t.dataList.push(e)}))}}},o=l,r=(n("31ee"),n("5511")),u=Object(r["a"])(o,a,i,!1,null,"66af16a6",null);t["default"]=u.exports},b4aa:function(e,t,n){},befb:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{"close-on-click-modal":!1,title:"添加业务流",visible:e.visible,width:"70%"},on:{"update:visible":function(t){e.visible=t},close:function(t){return e.closeDialog()}}},[n("el-card",{staticClass:"box-card card-my",attrs:{shadow:"never"}},[n("div",{staticClass:"my-class"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.serchData,"label-width":"90px","label-position":"right",size:"mini"}},[n("el-form-item",{attrs:{label:"业务流名称："}},[n("el-input",{attrs:{placeholder:"请输入业务流名称"},model:{value:e.serchData.name,callback:function(t){e.$set(e.serchData,"name",t)},expression:"serchData.name"}})],1),e._v(" "),n("el-form-item",[n("el-button",{on:{click:e.searchList}},[e._v("查询")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addRow()}}},[e._v("添加")])],1)],1)],1),e._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"refTable",staticStyle:{width:"auto"},attrs:{data:e.dataList,border:"",stripe:"",size:"small"},on:{"selection-change":e.selected}},[n("el-table-column",{attrs:{type:"selection",align:"center",width:"35"}}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"60px",label:"ID"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"150px",label:"业务流名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.name))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"120px",label:"用例失败是否继续"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(1===t.row.failContinue?"继续":"跳过"))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",width:"120px",label:"超时时间(秒)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.timoutTime))]}}])}),e._v(" "),n("el-table-column",{attrs:{align:"center",label:"业务流描述"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.remark))]}}])})],1),e._v(" "),n("el-pagination",{attrs:{background:"","current-page":e.pageInfo.pageNum,"page-sizes":[10,20,30,50],"page-size":e.pageInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.pageInfo.pageCount},on:{"size-change":e.changePageSize,"current-change":e.changePageNum}})],1)],1)},i=[],s=(n("6d57"),n("1f90")),l={props:["value"],data:function(){return{visible:!1,dataList:[],selectedData:[],serchData:{name:"",remark:""},pageInfo:{pageNum:1,pageSize:10,pageCount:0},loading:!1}},computed:{serchInfo:function(){var e=this.pageInfo,t=this.serchData;return t.projectId=this.$store.getters.projectId,e.serchData=t,e}},watch:{value:{handler:function(e){this.visible=e},immediate:!0},visible:function(e){this.$emit("input",e)}},mounted:function(){this.getPageList()},methods:{selected:function(e){this.selectedData=e},addRow:function(){this.selectedData.forEach((function(e){e.isValid=1})),this.$emit("backDate",this.selectedData),this.visible=!1},getPageList:function(){var e=this;this.loading=!0,Object(s["e"])(this.serchInfo).then((function(t){e.dataList=t.list||[],e.pageInfo.pageCount=t.total,e.loading=!1}))},searchList:function(){this.getPageList()},changePageSize:function(e){this.pageInfo.pageSize=e,this.getPageList()},changePageNum:function(e){this.pageInfo.pageNum=e,this.getPageList()},closeDialog:function(){this.$refs.refTable.clearSelection(),this.selectedData=[]}}},o=l,r=(n("2b69"),n("5511")),u=Object(r["a"])(o,a,i,!1,null,"ed4baeda",null);t["default"]=u.exports},fdd2:function(e,t,n){}}]);