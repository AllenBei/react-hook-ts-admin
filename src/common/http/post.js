import axios from 'axios';
import { net } from '@network';
import configure from './config';
import { message } from 'antd';
// import {userLoadingFail} from '../../redux/UserLogin/action';
//post 请求

export default {
  post(url, data, obj) {
    if(url=="/")
    {
        url += "api";
        url=null;
    }
    return new Promise((resolve, reject) => {
      net.post( url, data).then( ( resp ) => {
        // console.log(resp)
        resolve(resp);
        obj(resp)
      }).start( function (resp) {
        // console.log(resp)
        // console.log(resp,resolve(resp),type)
      }).error( function ( resp, type ) {
       //console.log(resp, reject(resp));
        if(resp!==null){
          if(resp.data==null || resp.data == ''){
            if(resp.errorMsg!=="该用户暂无角色")
            {
              message.error(resp.errorMsg );
            }
            if(resp.errorMsg== '尚未登录'){
              window.location.replace(configure.DLdefault)
            }
            // return resp.errorMsg
          }
        }
        if ( resp ) {
          if(resp.errorMsg!=="该用户暂无角色")
          {
            message.error(resp.errorMsg );
          }
  
        } else {
            switch ( type ) {
                case -1:
                  message.error("网络错误"); 
                  break;
                case -2: 
                  // let instance = 
                  message.error('登录失效，请重新登录'); 
                  setTimeout(() => {
                    // instance.close();
                    window.location.replace(configure.DLdefault);
                  }, 500);
                  break;
                case -3: 
                  message.error("返回数据有误");  
            }
        }
        // obj(resp);
        reject(resp);
          //Indicator.close();
      }).progress( function (e ) {
        // console.log(e);
       
      });
    })
  },
  ddurl(){
    let ddUrl=''
    if(window.location.host=='adm.ddybw.com' || window.location.host=='customer.ddybw.com' || window.location.host=='test.customer.ddybw.com')
    {
        ddUrl='https://api.ddybw.com/api'
    }else if(window.location.host=='192.168.1.5:9091'){
      ddUrl='http://192.168.1.5:9090/api'
    }else{
        ddUrl='http://192.168.1.5:90/api'
    }
    return ddUrl
  },
  downloadDrl(){
    let ddUrl=''
    if(window.location.host=='adm.ddybw.com' || window.location.host=='customer.ddybw.com' || window.location.host=='test.customer.ddybw.com')
    {
        ddUrl='https://api.ddybw.com/'
    }else if(window.location.host=='192.168.1.5:9091'){
      ddUrl='http://192.168.1.5:9090/'
    }else{
        ddUrl='http://192.168.1.5:90/'
    }
    return ddUrl
  }
}