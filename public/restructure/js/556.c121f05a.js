"use strict";(self["webpackChunkOneRepublicSu"]=self["webpackChunkOneRepublicSu"]||[]).push([[556],{9556:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main"},[e("div",{staticClass:"dashboard"},[e("div",{staticClass:"pic"},[e("div",{staticClass:"picin",style:{background:`url(${t.userInfo.user_info||t.url}) center/cover`}}),e("div",{staticClass:"nicname"},[e("span",[t._v(t._s(t.userInfo.nicname||t.userInfo.name||"stranger"))])])]),e("div",{staticClass:"container"},[e("el-card",[e("el-form",[e("el-form-item",[e("el-input",{attrs:{type:"textarea",rows:"6",placeholder:"提交评论之前需要先登录哦",resize:"none"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),e("el-form-item",[e("el-button",{staticStyle:{float:"right","margin-left":"20px"},attrs:{type:"primary",plain:""},on:{click:t.addCommit}},[t._v("提交")]),e("el-button",{staticStyle:{float:"right"},attrs:{type:"info",plain:""}},[t._v("取消")])],1)],1)],1)],1)]),t._l(t.commentList,(function(s){return e("div",{key:s.id,staticClass:"render"},[e("el-card",{attrs:{shadow:"hover"}},[e("div",{staticClass:"header"},[e("div",{staticClass:"userpicin"},[e("el-image",{staticStyle:{width:"40px",height:"40px"},attrs:{fit:"cover","preview-src-list":t.srcList,src:s.user_info||t.url},on:{click:function(e){return t.srcList.push(s.user_info||t.url)}}})],1),e("span",[t._v("Nicname:"+t._s(s.nicname||s.name))]),e("span",[t._v("Time:"+t._s(s.time))])]),e("el-divider"),e("div",{domProps:{innerHTML:t._s(s.contents)}})],1)],1)}))],2)},i=[],a=s(629),r={data(){return{srcList:[],value:new Date,url:"https://superjunior.top/uploads/9fbfdd7fbe7493b96af70785ac3cbffb",content:"",commentList:[]}},computed:{...(0,a.rn)(["userInfo","token"])},methods:{async getData(){const{data:t}=await this.$http.get("/home/getcomment");this.commentList=t.data.filter((t=>1!==t.id))},async addCommit(){if(!this.token)return this.$notify({title:"警告",message:"在发布留言之前请您先完成注册登录哦",type:"warning"});const{data:t}=await this.$http.post("/home/addcomment",{name:this.userInfo.name,contents:this.content.replace(/(\r\n)|(\n)/g,"<br>"),time:this.getTime(),token:this.token,user_info:this.userInfo.user_info,nicname:this.userInfo.nicname});if(501===t.code)return this.$message.error(t.msg);this.$message.success(t.msg),this.getData()},getTime(){const t=new Date,e=t.getFullYear(),s=this.addZero(t.getMonth()+1),n=this.addZero(t.getDate()),i=this.addZero(t.getMinutes()),a=this.addZero(t.getHours()),r=e+"/"+s+"/"+n+" "+a+":"+i;return r},addZero(t){return t<10?`0${t}`:t}},created(){this.getData()}},o=r,c=s(1001),l=(0,c.Z)(o,n,i,!1,null,"572f19c2",null),u=l.exports}}]);