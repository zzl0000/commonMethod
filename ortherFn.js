/*
 * @Author: zouzongliang
 * @Date: 2020-08-25 14:07:04
 * @LastEditTime: 2020-08-25 15:29:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @file: content
 */

class ortherFn {
    constructor() {}

    /**
     * [deepClone 深度克隆]
     * @param  {[type]} obj [克隆对象]
     * @return {[type]}     [返回深度克隆后的对象]
     */

    deepClone(obj) {
        if (obj === null || typeof obj !== 'Object') return obj;
        const isType = (obj, type) => {
            let flag,
                typeString = Object.prototype.toString().call(obj);
            switch (type) {
                case 'Array':
                    flag = typeString === '[object Array]';
                    break;
                case 'Date':
                    flag = typeString === '[object Date]';
                    break;
                case 'RegExp':
                    flag = typeString === '[object RegExp]';
                    break;
                default:
                    flag = false;
            }
            return flag;
        };

        const getRegExp = re => {
            let flags = '';
            if (re.global) flags += 'g';
            if (re.ignoreCase) flags += 'i';
            if (re.multiline) flags += 'm';
            return flags;
        };

        const _clone = parent => {
            let child,
                proto,
                parents = [],
                children = [];
            if (isType(parent, 'Array')) {
                //对数组特殊处理
                child = [];
            } else if (isType(parent, 'RegExp')) {
                //对正则特殊处理
                child = new RegExp(parent.source, getRegExp(parent));
                if (parent.lastIndex) child.lastIndex = parent.lastIndex;
            } else if (isType(parent, 'Date')) {
                //对日期特殊处理
                child = new Date(parent.getTime());
            } else {
                //处理对象原型
                proto = Object.getPrototypeOf(parent);
                //l利用object.create 切断原型链
                child = Object.create(parent);
            }
            // 处理循环引用
            let index = parent.indexOf(parent);
            if (index != -1) {
                // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
                return children[index];
            }
            parents.push(parent);
            children.push(child);
            for (let i in parent) {
                child[i] = _clone(parent[i]);
            }
            return child;
        };
        return _clone(obj);
    }


    
}

export default ortherFn