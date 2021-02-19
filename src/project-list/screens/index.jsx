import React, { useState, useEffect } from 'react'
import {SearchPanel} from './search-panel'
import {List} from './list'
import { cleanObject } from 'utils'
import * as qs from 'qs'

// 获取环境变量配置里的url
const apiUrl = process.env.REACT_APP_API_URL
console.log(process.env)

export const ProjectListScreen = () => {
    // 初始化了一个名为param的状态，返回一个setParam的方法用来修改param这个状态
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })

    // 初始化了一个名为list的状态，[0]是list，[1]是修改list的状态的方法
    const [list, setList] = useState([])

    // 初始化了一个名为users的状态，[0]是users，[1]是setUsers方法
    const [users, setUsers] = useState([])

    // 监听[param]，当[param]变化时，执行前面的函数
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param])

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    }, [users])

    return <div>
        <SearchPanel param = {param} setParam = {setParam} users = {users}/>
        <List list = {list} users = {users}/>
    </div>
}