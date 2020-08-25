/*
 * @Author: zouzongliang
 * @Date: 2020-08-25 11:35:48
 * @LastEditTime: 2020-08-25 14:02:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */


 class storageFn {

    constructor(){
        this.localStorage = window.localStorage;
        this.sessionStorage = window.sessionStorage;
    }


    /**
     * @description: 设置Cookie
     * @param {name,val,day} 
     */
    setCookie(name,val,day){
        let set = arguments[0]
        if(Object.prototype.toString().call(set).slice(8,-1) === Object){
            for(let i in set){
                let oDate =  new Date()
                oDate.setDate(oDate.getDate() + day)
                document.cookie = i + '=' + set[i] + ';expires=' + oDate;
            }
        }else{
            var oDate = new Date();
            oDate.setDate(oDate.getDate() + day);
            document.cookie = name + '=' + val + ';expires=' + oDate;
        }
    }

    /**
     * @description: 获取cookie
     * @param {name} 
     * @return {key} 
     */    

     getCookie(name){
        var arr = document.cookie.split('; ');
        for(let i of arr){
            var arr2 = arr[i].split('=');
            if (arr2[0] == name) {
                return arr2[1];
            }
        }
        return '';
     }

    /**
     * @description: 移除cookie
     * @param {name} 
     */     

     removeCookie(name){
        this.setCookie(name, 1, -1);
     }

     
     /**
     * @description: 设置localStorage
     * @param {key,val} 
     */

     setLocal(key, val){
        let _set = arguments[0]
        if(Object.prototype.toString().call(_set).slice(8,-1) === Object){
            for(var i in _set){
                this.localStorage.setItem(i,JSON.stringify(_set[i]))
            }
        }else{
            this.localStorage.setItem(key,JSON.stringify(val))
        }

     }

    /**
     * @description: 获取localStorage
     * @param {key} 
     * @return {v}
     */
     getLocal(key){
         if (key) return JSON.parse(this.localStorage.getItem(key))
         return null;
     }

    /**
     * @description: 移除localStorage
     * @param {key} 
     */

    removeLocal(key){
        this.localStorage.removeItem(key)
    }

    /**
     * @description: 移除所有localStorage
     * @param {key} 
     */
     clearLocal() {
        this.localStorage.clear()
    }

    /**
     * @description: 设置 SessionStorage
     * @param {key,val} 
     */
    
    setSession(key,val){
        var _set = arguments[0];
        if (Object.prototype.toString.call(_set).slice(8, -1) === 'Object'){
            for(var i in _set){
                this.ss.setItem(i, JSON.stringify(_set[i]))
            }
        }else{
            this.ss.setItem(key, JSON.stringify(val))
        }
    }

    /**
     * @description: 获取 SessionStorage
     * @param {key}
     * @return {v} 
     */
    
    getSession(key){
        if(key) return JSON.parse(this.sessionStorage.getItem(key))
        return null
    }


    /**
     * @description: 移除 SessionStorage
     * @param {key} 
     */
    
    removeSession(){
        this.sessionStorage.removeItem(key)
    }

    /*移除所有sessionStorage*/
    clearSession() {
        this.sessionStorage.clear()
    }

 }


 export default storageFn
