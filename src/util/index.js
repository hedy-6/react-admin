import { cloneDeep } from 'lodash'
import pathToRegexp from 'path-to-regexp'

/**
 * 将普通的对象转化为 FieldsData value格式
 * @param {} data 
 */
export const dataToFieldsData = (data) => {
    let obj = {};
    Object.keys(data).forEach(key => {
        obj[key] = {
            value: data[key]
        }
    })
    return obj;
}

/**
 * 匹配 pathname 与 regexp 规则是否相符。
 * @param {*} regexp 
 * @param {*} pathname 
 */
export function pathMatchRegexp(regexp, pathname) {
    return pathToRegexp(regexp).exec(pathname)
}

/**
 * 获取自己权限的路由
 * @param {*} routes 
 * @param {*} assets 
 */
export const getOwnRoute = (routes, assets) => {
    return routes.filter(route => {
        for (let i = 0; i < assets.length; i++) {
            if (assets[i] === route.id) {
                return true;
            }
        }
        return false;
    })
}

/**
 * 将数组整理成树格式
 * @param {*} array 
 * @param {*} id 
 * @param {*} parentId 
 * @param {*} children 
 */
export const arrayToTree = (
    array,
    id = 'id',
    parentId = 'pid',
    children = 'children'
) => {
    const result = []
    const hash = {}
    const data = cloneDeep(array)

    data.forEach((item, index) => {
        hash[data[index][id]] = data[index]
    })

    data.forEach(item => {
        const hashParent = hash[item[parentId]]
        if (hashParent) {
            !hashParent[children] && (hashParent[children] = [])
            hashParent[children].push(item)
        } else {
            result.push(item)
        }
    })
    return result
}

/**
 * 从数组里获取当前值的父节点
 * @param {*} array 
 * @param {*} current 
 * @param {*} parentId 
 * @param {*} id 
 */
export const queryAncestors = (array, current, parentId, id = 'id') => {
    const result = [current]
    const hashMap = new Map()
    array.forEach(item => hashMap.set(item[id], item))
    const getPath = current => {
        const currentParentId = hashMap.get(current[id])[parentId]
        if (currentParentId) {
            result.push(hashMap.get(currentParentId))
            getPath(hashMap.get(currentParentId))
        }
    }

    getPath(current)
    return result
}
