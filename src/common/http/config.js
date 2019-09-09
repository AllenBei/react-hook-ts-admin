//测试环境
var dev = {
	baseURL:'/',//请求地址
	DLdefault:'#/user/login',//无权时登录默认跳转地址
	sdkAppID:1400170184,
	accountType:36862,
	imgUrl:'http://192.168.1.5/'
}
// build后本地
var devNginx = {
}
//build后外网测试环境
var build = {
}
//正式生产环境
var prod ={
}
export default dev;
