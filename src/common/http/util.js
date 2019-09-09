import configure from './config'

export default {
    /**
     * 默认图片
     */
    imgUrl:function(url){
        if(url){
            if(url.indexOf('http')>=0){
                return url;
            }
            return configure.imgUrl + url;
        }else{
            return "static/image/3.jpg";
        }
    },
    /**
     * 默认头像
     */
    imgUrlHead:function(url){
        if(url){
            if(url.indexOf('http')>=0){
                return url;
            }
            return configure.imgUrl + url;
        }else{
            return "static/image/1.png";
        }
    },
    /**
     * 跳转回上一个页面
     */
    goback: function(){
        window.history.go(-1);
    },
    /**
     * 获取cokie值
     * @name  key键名
     * @format   例：getCookie(token)
     * @return  	2323sxcsf2342sdf
     */
    getCookie:function (name){
    	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    	if(arr=document.cookie.match(reg))
    	return unescape(arr[2]);
    	else
    	return null;
	},
    /**
     * 设定cokie值
     * @name  s20是代表20秒，h是指小时，如12小时则是：h12 ，d是天数，30天则：d30
     * @format   例：setCookie('token',2312,'d1')
     * @return  	null
     */
	setCookie:function (name,value,time){
		var strsec = this.getsec(time+'');
		var exp = new Date();
		exp.setTime(exp.getTime() + strsec*1);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString()+"; path=/";
    },
    /**
     * 清除cookie的方法
     * key 传入要删除的cookie的key
     * 不转的话清除全部
    */
    clearAllCookie(key) {
        if(key) {
            document.cookie = key+"=0;expires=" + new Date(0).toUTCString()+";path=/";
        } else {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if(keys) {
                for(var i = keys.length; i--;) {
                    document.cookie = keys[i]+"=0;expires=" + new Date(0).toUTCString()+";path=/";
                }
            }
        }
    },
	getsec(str){
		var str1=str.substring(1,str.length)*1;
		var str2=str.substring(0,1);
		if (str2=="s")
		{
		return str1*1000;
		}
		else if (str2=="h")
		{
		return str1*60*60*1000;
		}
		else if (str2=="d")
		{
		return str1*24*60*60*1000;
		}
	},
    /**
     * 去除字符串两边的空格
     */
    trim:function(str) {
        if(str == "") return "";
        if(!str) return;
        return str.replace(/(^\s*)|(\s*$)/g, "");
    },
	/**
	 * 是否为空
	 * @param str
	 * @returns {boolean}
	 */
	isNotEmpty: function (str) {
		if (str != '' && str != null && typeof str != 'undefined') {
			return true;
		}
		return false;
	},
    /**
     * 验证手机
     * @param phone
     * @returns {boolean}
     */
    isPhone: function (phone) {
        if(!(/^1\d{10}$/.test(phone))){ 
            return false;
        } 
        return true;
    },
    /**
     * 返回的错误码
     */
    errorMsg (errorCode) {
        var errorMsg = new Array()
        errorMsg[-1] = "缺少CSRF"
        errorMsg[-2] = "用户不存在"
        errorMsg[-3] = "密码错误"
        errorMsg[-4] = "用户名已存在"
        errorMsg[-5] = "手机号格式错误"
        errorMsg[-6] = "手机号已存在 "
        errorMsg[-7] = "邮箱不存在"
        errorMsg[-8] = "邮箱格式错误 "
        errorMsg[-9] = "邮箱长度错误"
        errorMsg[-10] = "两次密码不一致"
        errorMsg[-11] = "密码长度错误"
        errorMsg[-12] = "数据写入失败"
        errorMsg[-13] = "参数格式错误"
        errorMsg[-14] = "该资讯不存在"
        errorMsg[-15] = "验证码为空"
        errorMsg[-16] = "邮件发送失败"
        errorMsg[-17] = "验证码错误"
        errorMsg[-18] = "短信发送失败"
        errorMsg[-19] = "手机号不存在"
        errorMsg[-20] = "authkey过期或错误"
        errorMsg[-21] = "已经点过赞"
        errorMsg[-22] = "尚未点赞"
        errorMsg[-23] = "已经收藏"
        errorMsg[-24] = "尚未收藏"
        errorMsg[-25] = "邮箱已存在"
        errorMsg[-26] = "点赞失败"
        errorMsg[-27] = "权限不足"
        errorMsg[-28] = "绑定手机失败"
        errorMsg[-101] = "帖子不存在"
        errorMsg[-102] = "关闭帖子失败"
        errorMsg[-103] = "板块不存在"
        errorMsg[-104] = "关注板块失败"
        errorMsg[-105] = "取消关注板块失败"
        errorMsg[-106] = "关注帖子失败"
        errorMsg[-107] = "取消关注帖子失败"
        errorMsg[-201] = "添加藏品失败"
        errorMsg[-202] = "编辑藏品失败"
        errorMsg[-203] = "上架藏品失败"
        errorMsg[-204] = "下架藏品失败"
        return errorMsg[errorCode]
    },
    /**
     * 时间戳格式化
     * @timestamp  时间戳
     * @format  日期格式 例：yyyy-MM-dd hh:mm:ss
     * @return yyyy-MM-dd hh:mm:ss
     */
    formatDate: function (date, fmt) {
        if (!date || date <= 0) {
            return 0;
        }
        var date = new Date(date*1000);
        var o = {
            'M+': date.getMonth() + 1, //月份
            'd+': date.getDate(), //日
            'h+': date.getHours(), //小时
            'm+': date.getMinutes(), //分
            's+': date.getSeconds(), //秒
            'q+': Math.floor((date.getMonth() + 3) / 3), //季度
            'S': date.getMilliseconds() //毫秒
        };
        if(!this.isNotEmpty(fmt)){
            fmt = 'yyyy-MM-dd hh:mm:ss';
        }
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
        }
        return fmt;
    },
    /**
     * 获取页面参数
     * @return 参数打印
     */
    GetUrlParam: function(paraName) {
        var url = document.location.toString();
        var arrObj = url.split("?");
        if (arrObj.length > 1) {
            var arrPara = arrObj[1].split("&");
            var arr;
            for (var i = 0; i < arrPara.length; i++) {
                arr = arrPara[i].split("=");
                if (arr != null && arr[0] == paraName) {
                    return arr[1];
                }
            }
            return "";
        } else {
            return "";
        }
    },
    /**
     * 当前时间戳
     * @return <int>        unix时间戳(秒)
     */
    CurTime: function(){
        return Date.parse(new Date())/1000;
    },
    /**
     * 日期 转换为 Unix时间戳
     * @param <string> 2014-01-01 20:20:20  日期格式
     * @return <int>        unix时间戳(秒)
     */
    DateToUnix: function(string) {
        var f = string.split(' ', 2);
        var d = (f[0] ? f[0] : '').split('-', 3);
        var t = (f[1] ? f[1] : '').split(':', 3);
        return (new Date(
                parseInt(d[0], 10) || null,
                (parseInt(d[1], 10) || 1) - 1,
                parseInt(d[2], 10) || null,
                parseInt(t[0], 10) || null,
                parseInt(t[1], 10) || null,
                parseInt(t[2], 10) || null
            )).getTime() / 1000;
    },
    /**
     * 时间戳转换日期
     * @param <int> unixTime    待时间戳(秒)
     * @param <bool> isFull    返回完整时间(Y-m-d 或者 Y-m-d H:i:s)
     * @param <int>  timeZone   时区
     */
    UnixToDate: function(unixTime, isFull, timeZone) {
        if (typeof (timeZone) == 'number')
        {
            unixTime = parseInt(unixTime) + parseInt(timeZone) * 60 * 60;
        }
        var time = new Date(unixTime * 1000);
        var ymdhis = "";
        ymdhis += time.getUTCFullYear() + "-";
        ymdhis += (time.getUTCMonth()+1) + "-";
        ymdhis += time.getUTCDate();
        if (isFull === true)
        {
            ymdhis += " " + time.getUTCHours() + ":";
            ymdhis += time.getUTCMinutes() + ":";
            ymdhis += time.getUTCSeconds();
        }
        return ymdhis;
    },
    /**
     * 上传图片 将base64转换为文件
     * @param dataurl
     * @param filename
     * @param 
     */
    dataURLtoFile:function(dataurl, filename) {//将base64转换为文件
        var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, {type:mime});
    },
    /**
     * 0~9的数字补0
     */
    addZero: function(num){
        if(num >= 0 && num < 10) {
            num = '0' + String(num);
            return num
        } else {
            return num;
        } 
    },
    // 是否今天
    isToday: function(str){
        var d = new Date(str);
        var todaysDate = new Date();
        if(d.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)){
            return true;
        } else {
            return false;
        }
    },
    // 获取token值 key = dt;
    getToken: function( key ) {

        var key = 'dt';

        if ( document.cookie.length > 0 ) {

            var c_start = document.cookie.indexOf( key + "=" );

            if ( c_start !== -1 ) {

                c_start = c_start + key.length + 1;
                var c_end = document.cookie.indexOf( ";", c_start );

                if ( c_end === -1 ) c_end = document.cookie.length;

                return decodeURIComponent( document.cookie.substring( c_start, c_end ) );

            }

        }

        return null;

    },
    // 去除多余的00
    getTruePrice: function (value) { // 价格去掉后面多余的两位00
        if(value === 0) {
            return value;
        }
        if (!value) {
          return ''
        } else {
          value = String(value)
          value = value.substring(0, value.length - 2)
          return value
        }
    },
    /**
     * 倒计时  
     * @param times 秒
     */
    countDown:function (times,tag){
        var timer=null;
        var day=0,
            hour=0,
            minute=0,
            second=0;//时间默认值
            if(times > 0){
            day = Math.floor(times / (60 * 60 * 24));
            hour = Math.floor(times / (60 * 60)) - (day * 24);
            minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
            second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            }
            if (day <= 9) day = '0' + day;
            if (hour <= 9) hour = '0' + hour;
            if (minute <= 9) minute = '0' + minute;
            if (second <= 9) second = '0' + second;
            //console.log(day+"天:"+hour+"小时："+minute+"分钟："+second+"秒");
            //console.log(hour+"时"+minute+"分"+second+"秒")
            return hour+"时"+minute+"分"+second+"秒"
    }
}
