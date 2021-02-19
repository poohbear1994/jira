import React, {useEffect, useState} from 'react'
// useState是vue中用来初始化状态的一个函数，它返回一个数组，
// 数组的第0项是初始化的状态
// 数组的第二项是更新状态的函数（方法）

// useEffect是组件的一个类似于生命周期函数的东西，它可以用来执行副作用操作

export const SearchPanel = ({users, param, setParam}) => {

    return <form action="">
        <div>
            {/* setParam(Object.assign({}, param, {name: evt.target.value})) */}
            <input type="text" value={param.name} onChange={evt => setParam({
                ...param,
                name: evt.target.value
            })}/>
            <select value={param.personId} onChange={evt => setParam({
                ...param,
                personId: evt.target.value
            })}>
                <option value={''}>负责人</option>
                {
                    users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                }
            </select>
        </div>
    </form>
}