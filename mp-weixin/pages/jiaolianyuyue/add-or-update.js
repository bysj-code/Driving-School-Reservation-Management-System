(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiaolianyuyue/add-or-update"],{1365:function(e,n,a){},"1e9e":function(e,n,a){"use strict";a.d(n,"b",(function(){return t})),a.d(n,"c",(function(){return r})),a.d(n,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(a.bind(null,"acf9"))}},t=function(){var e=this,n=e.$createElement;e._self._c},r=[]},4752:function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=t(a("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,n,a,i,t,r,u){try{var o=e[r](u),c=o.value}catch(l){return void a(l)}o.done?n(c):Promise.resolve(c).then(i,t)}function u(e){return function(){var n=this,a=arguments;return new Promise((function(i,t){var u=e.apply(n,a);function o(e){r(u,i,t,o,c,"next",e)}function c(e){r(u,i,t,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("acf9"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{jiaolianzhanghao:"",jiaolianxingming:"",zhaopian:"",yuyuekemu:"",yuyueshijian:"",cheliangbianhao:"",cheliangleixing:"",cheliangmingcheng:"",cheliangzhuangtai:"",xueyuanhao:"",xingming:"",shouji:"",sfsh:"",shhf:""},jiaolianzhanghaoOptions:[],jiaolianzhanghaoIndex:0,yuyuekemuOptions:[],yuyuekemuIndex:0,cheliangbianhaoOptions:[],cheliangbianhaoIndex:0,user:{},ro:{jiaolianzhanghao:!1,jiaolianxingming:!1,zhaopian:!1,yuyuekemu:!1,yuyueshijian:!1,cheliangbianhao:!1,cheliangleixing:!1,cheliangmingcheng:!1,cheliangzhuangtai:!1,xueyuanhao:!1,xingming:!1,shouji:!1,sfsh:!1,shhf:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return u(i.default.mark((function t(){var r,u,o,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.getStorageSync("nowTable"),t.next=3,a.$api.session(r);case 3:return u=t.sent,a.user=u.data,a.ruleForm.xueyuanhao=a.user.xueyuanhao,a.ro.xueyuanhao=!0,a.ruleForm.xingming=a.user.xingming,a.ro.xingming=!0,a.ruleForm.shouji=a.user.shouji,a.ro.shouji=!0,t.next=13,a.$api.option("jiaolian","jiaolianzhanghao",{});case 13:return u=t.sent,a.jiaolianzhanghaoOptions=u.data,a.yuyuekemuOptions="科目二,科目三".split(","),t.next=18,a.$api.option("jiaxiaocheliang","cheliangbianhao",{});case 18:if(u=t.sent,a.cheliangbianhaoOptions=u.data,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=28;break}return a.ruleForm.id=n.id,t.next=26,a.$api.info("jiaolianyuyue",a.ruleForm.id);case 26:u=t.sent,a.ruleForm=u.data;case 28:if(a.cross=n.cross,!n.cross){t.next=84;break}o=e.getStorageSync("crossObj"),t.t0=i.default.keys(o);case 32:if((t.t1=t.t0()).done){t.next=84;break}if(c=t.t1.value,"jiaolianzhanghao"!=c){t.next=38;break}return a.ruleForm.jiaolianzhanghao=o[c],a.ro.jiaolianzhanghao=!0,t.abrupt("continue",32);case 38:if("jiaolianxingming"!=c){t.next=42;break}return a.ruleForm.jiaolianxingming=o[c],a.ro.jiaolianxingming=!0,t.abrupt("continue",32);case 42:if("zhaopian"!=c){t.next=46;break}return a.ruleForm.zhaopian=o[c],a.ro.zhaopian=!0,t.abrupt("continue",32);case 46:if("yuyuekemu"!=c){t.next=50;break}return a.ruleForm.yuyuekemu=o[c],a.ro.yuyuekemu=!0,t.abrupt("continue",32);case 50:if("yuyueshijian"!=c){t.next=54;break}return a.ruleForm.yuyueshijian=o[c],a.ro.yuyueshijian=!0,t.abrupt("continue",32);case 54:if("cheliangbianhao"!=c){t.next=58;break}return a.ruleForm.cheliangbianhao=o[c],a.ro.cheliangbianhao=!0,t.abrupt("continue",32);case 58:if("cheliangleixing"!=c){t.next=62;break}return a.ruleForm.cheliangleixing=o[c],a.ro.cheliangleixing=!0,t.abrupt("continue",32);case 62:if("cheliangmingcheng"!=c){t.next=66;break}return a.ruleForm.cheliangmingcheng=o[c],a.ro.cheliangmingcheng=!0,t.abrupt("continue",32);case 66:if("cheliangzhuangtai"!=c){t.next=70;break}return a.ruleForm.cheliangzhuangtai=o[c],a.ro.cheliangzhuangtai=!0,t.abrupt("continue",32);case 70:if("xueyuanhao"!=c){t.next=74;break}return a.ruleForm.xueyuanhao=o[c],a.ro.xueyuanhao=!0,t.abrupt("continue",32);case 74:if("xingming"!=c){t.next=78;break}return a.ruleForm.xingming=o[c],a.ro.xingming=!0,t.abrupt("continue",32);case 78:if("shouji"!=c){t.next=82;break}return a.ruleForm.shouji=o[c],a.ro.shouji=!0,t.abrupt("continue",32);case 82:t.next=32;break;case 84:a.styleChange();case 85:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},jiaolianzhanghaoChange:function(e){var n=this;return u(i.default.mark((function a(){var t;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.jiaolianzhanghaoIndex=e.target.value,n.ruleForm.jiaolianzhanghao=n.jiaolianzhanghaoOptions[n.jiaolianzhanghaoIndex],a.next=4,n.$api.follow("jiaolian","jiaolianzhanghao",{columnValue:n.ruleForm.jiaolianzhanghao});case 4:t=a.sent,t.data.jiaolianxingming&&(n.ruleForm.jiaolianxingming=t.data.jiaolianxingming),t.data.cheliangleixing&&(n.ruleForm.cheliangleixing=t.data.cheliangleixing),t.data.cheliangmingcheng&&(n.ruleForm.cheliangmingcheng=t.data.cheliangmingcheng),t.data.cheliangzhuangtai&&(n.ruleForm.cheliangzhuangtai=t.data.cheliangzhuangtai);case 9:case"end":return a.stop()}}),a)})))()},cheliangbianhaoChange:function(e){var n=this;return u(i.default.mark((function a(){var t;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.cheliangbianhaoIndex=e.target.value,n.ruleForm.cheliangbianhao=n.cheliangbianhaoOptions[n.cheliangbianhaoIndex],a.next=4,n.$api.follow("jiaxiaocheliang","cheliangbianhao",{columnValue:n.ruleForm.cheliangbianhao});case 4:t=a.sent,t.data.jiaolianxingming&&(n.ruleForm.jiaolianxingming=t.data.jiaolianxingming),t.data.cheliangleixing&&(n.ruleForm.cheliangleixing=t.data.cheliangleixing),t.data.cheliangmingcheng&&(n.ruleForm.cheliangmingcheng=t.data.cheliangmingcheng),t.data.cheliangzhuangtai&&(n.ruleForm.cheliangzhuangtai=t.data.cheliangzhuangtai);case 9:case"end":return a.stop()}}),a)})))()},yuyueshijianConfirm:function(e){console.log(e),this.ruleForm.yuyueshijian=e.result,this.$forceUpdate()},yuyuekemuChange:function(e){this.yuyuekemuIndex=e.target.value,this.ruleForm.yuyuekemu=this.yuyuekemuOptions[this.yuyuekemuIndex]},zhaopianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.zhaopian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(i.default.mark((function a(){var t,r,u,o,c,l,s,h,g,m;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.ruleForm.yuyuekemu){a.next=3;break}return n.$utils.msg("预约科目不能为空"),a.abrupt("return");case 3:if(n.ruleForm.yuyueshijian){a.next=6;break}return n.$utils.msg("预约时间不能为空"),a.abrupt("return");case 6:if(n.ruleForm.cheliangbianhao){a.next=9;break}return n.$utils.msg("车辆编号不能为空"),a.abrupt("return");case 9:if(!n.cross){a.next=25;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){a.next=25;break}if(l=e.getStorageSync("crossObj"),o.startsWith("[")){a.next=21;break}for(s in l)s==o&&(l[s]=c);return h=e.getStorageSync("crossTable"),a.next=19,n.$api.update("".concat(h),l);case 19:a.next=25;break;case 21:t=Number(e.getStorageSync("userid")),r=l["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 25:if(!r||!t){a.next=47;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=r,g={page:1,limit:10,crossuserid:t,crossrefid:r},a.next=31,n.$api.list("jiaolianyuyue",g);case 31:if(m=a.sent,!(m.data.total>=u)){a.next=37;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 37:if(!n.ruleForm.id){a.next=42;break}return a.next=40,n.$api.update("jiaolianyuyue",n.ruleForm);case 40:a.next=44;break;case 42:return a.next=44,n.$api.add("jiaolianyuyue",n.ruleForm);case 44:n.$utils.msgBack("提交成功");case 45:a.next=55;break;case 47:if(!n.ruleForm.id){a.next=52;break}return a.next=50,n.$api.update("jiaolianyuyue",n.ruleForm);case 50:a.next=54;break;case 52:return a.next=54,n.$api.add("jiaolianyuyue",n.ruleForm);case 54:n.$utils.msgBack("提交成功");case 55:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),i=n.getMonth()+1,t=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(a,"-").concat(i,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,a("543d")["default"])},8513:function(e,n,a){"use strict";(function(e){a("4307");i(a("66fd"));var n=i(a("db96"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,a("543d")["createPage"])},aa40:function(e,n,a){"use strict";a.r(n);var i=a("4752"),t=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(n,e,(function(){return i[e]}))}(r);n["default"]=t.a},db96:function(e,n,a){"use strict";a.r(n);var i=a("1e9e"),t=a("aa40");for(var r in t)"default"!==r&&function(e){a.d(n,e,(function(){return t[e]}))}(r);a("e321");var u,o=a("f0c5"),c=Object(o["a"])(t["default"],i["b"],i["c"],!1,null,"b36526d4",null,!1,i["a"],u);n["default"]=c.exports},e321:function(e,n,a){"use strict";var i=a("1365"),t=a.n(i);t.a}},[["8513","common/runtime","common/vendor"]]]);