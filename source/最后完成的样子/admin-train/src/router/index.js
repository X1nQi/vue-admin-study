import Vue  from "vue";
import VueRouter from "vue-router";
import routes from "./routes.js"; //导入路由路径配置对象数组
const { isNavigationFailure, NavigationFailureType } = VueRouter

// 注册路由
Vue.use(VueRouter)


const router = new VueRouter({
	routes,
})

const originalPush = VueRouter.prototype.push; //备份原来的push方法
VueRouter.prototype.push = function push(location){

	
	return originalPush.call(this,location).catch(err=> console.log(err));
	 
}
export default router;