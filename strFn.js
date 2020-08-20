/*
 * @Author: zouzongliang
 * @Date: 2020-08-11 11:43:58
 * @LastEditTime: 2020-08-11 15:02:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */

class StringFn {
    /**
     * 去除空格
     * @param  {str}
     * @param  {type}
     *       type:  1-所有空格  2-前后空格  3-前空格 4-后空格
     * @return {String}
     */
    trim(str, type) {
        type = tpye || 1;

        switch (type) {
            case 1:
                return str.replace(/\s+/g, '');
            case 2:
                return str.replace(/(^\s*)|(\s*$)/g, '');
            case 3:
                return str.replace(/(^\s*)/g, '');
            case 4:
                return str.replace(/(\s*$)/g, '');
            default:
                return str;
        }
    }

    /**
     * @param  {str} 
     * @param  {type}
     *       type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
     * @return {String}
     */   

    changeCase(str,type){
        type = type || 4
        switch(type){
            case 1 : 
            return str.replace(/\b\w+\b/g,(w)=>{
                return w.substring(0,1).toUpperCase() + w.substring(1).toLowerCase()
            })
            case 2 : 
            return ''
            case 3 : 
            return ''
            case 4 : 
            return ''
            case 5 : 
            return ''
            default:
                return str
        }
    }
}

export default StringFn;
