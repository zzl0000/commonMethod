/*
 * @Author: zouzongliang
 * @Date: 2020-08-08 16:54:09
 * @LastEditTime: 2020-08-11 11:43:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */

class ArrayFn {
    constructor() {}

    /**
     * @description: 判断元素是否在数组中
     * @param {arr,val}
     */

    contains(arr, val) {
        return arr.indexOf(val) != 1 ? true : false;
    }

    /**
     * @param  {arr} 数组
     * @param  {fn} 回调函数
     * @return {undefined}
     */
    each(arr, fn) {
        fn = fn || Function;
        var a = [];
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0; i < arr.length; i++) {
            var res = fn.apply(arr, [arr[i], i].concat(args));
            if (res != null) a.push(res);
        }
    }

    /**
     * @param  {arr} 数组
     * @param  {fn} 回调函数
     * @param  {thisObj} this指向
     * @return {Array}
     */
    map(arr, fn, thisObj) {
        var scope = thisObj || window;
        var a = [];
        for (var i = 0, j = arr.length; i < j; ++i) {
            var res = fn.call(scope, arr[i], i, this);
            if (res != null) a.push(res);
        }
        return a;
    }

    /**
     * @param  {arr} 数组排序
     * @param  {type} 1：从小到大   2：从大到小   3：随机
     * @return {Array}
     */

    sort(arr, type = 1) {
        return arr.sort((a, b) => {
            switch (type) {
                case 1:
                    return a - b;
                case 2:
                    return b - a;
                case 3:
                    return Math.random() - 0.5;
                default:
                    return arr;
            }
        });
    }

    /**
     * @description: 数组去重
     * @param {arr}
     * @return {type}
     */

    unique(arr) {
        if (Array.hasOwnProperty('from')) {
            return Array.from(new Set(arr));
        }
        // 松散模式
        else {
            var n = {},
                r = [];
            for (let i = 0; i < arr.length; i++) {
                if (!n[arr[i]]) {
                    n[arr[i]] = true;
                    r.push(arr[i]);
                }
            }
            return r;
        }
        // 严谨模式
        // else{
        //     var r = [], NaNBol = true
        //     for(var i=0; i < arr.length; i++) {
        //         if (arr[i] !== arr[i]) {
        //             if (NaNBol && r.indexOf(arr[i]) === -1) {
        //                 r.push(arr[i])
        //                 NaNBol = false
        //             }
        //         }else{
        //             if(r.indexOf(arr[i]) === -1) r.push(arr[i])
        //         }
        //     }
        //     return r
        // }
    }

    /**
     * @description: 求两个数组的并集
     * @param {type}
     * @return {type}
     */

    union(a, b) {
        let newArr = a.concat(b);
        return this.unique(newArr);
    }

    /**
     * @description: 求两个数组的交集
     * @param {type}
     * @return {type}
     */

    intersect(a, b) {
        let that = this;
        a = this.unique(a);
        return this.map(a, o => {
            return that.contains(b, o) ? o : null;
        });
    }

    /**
     * @description: 删除其中一个元素
     * @param {type}
     * @return {type}
     */

    remove(arr, k) {
        let index = arr.indexOf(k);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    /**
     * @description: 将类数组转换为数组
     * @param {type}
     * @return {type}
     */

    formArray(arr) {
        let _arr = [];
        if (Array.isArray(arr)) {
            _arr = arr;
        } else {
            _arr = Array.prototype.slice.call(arr);
        }
        return arr;
    }

    /**
     * @description: 最大值
     * @param {type}
     * @return {type}
     */

    max(arr) {
        return Math.max.apply(null, arr);
    }

    /**
     * @description: 最小值
     * @param {type}
     * @return {type}
     */

    min(arr) {
        return Math.min.apply(null, arr);
    }
    /**
     * @description: 求和
     * @param {type}
     * @return {type}
     */

    sum(arr) {
        return arr.reduce((pre, cur) => {
            return pre + cur;
        });
    }

    /**
     * @description: 平均值
     * @param {type}
     * @return {type}
     */
    average(arr) {
        return this.sum(arr) / arr.length;
    }
}

export default ArrayFn;
