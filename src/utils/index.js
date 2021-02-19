/*
 * @Author: your name
 * @Date: 2021-02-18 17:13:35
 * @LastEditTime: 2021-02-18 21:00:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /jira/src/utils/index.js
 */
export const isFalsy = (value) => value === 0 ? false : !value

// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
    // Object.assign({}, object)
    const result = { ...object }
    Object.keys(result).forEach((key) => {
      const value = result[key]
      if (isFalsy(value)) {
        delete result[key]
      }
    })
    console.log(result)
    return result
  }