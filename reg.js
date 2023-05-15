
// axios处理接口
import thenFs from "then-fs";
const url = './user.json'
const url2 = './info.json'

// 获得用户数据
export async function getUser() {
    try {
        const str = await thenFs.readFile(url, 'utf-8')
        const arr = JSON.parse(str)
        return arr
    } catch (e) {
        return '获取信息失败'
    }
}

// 获得用户信息
export async function getInfo() {
    try {
        const str = await thenFs.readFile(url2, 'utf-8')
        const arr = JSON.parse(str)
        return arr
    } catch (e) {
        return '获取用户信息失败'
    }
}
// 加入用户数据
export async function addUser(obj) {
    if (obj.name == '' || obj.password == '') {
        return
    }
    // 获得用户
    const arr = await getUser()
    if (arr.some(item => item.name == obj.name)) {
        return '该用户已经存在'
    } else {
        arr.push(obj)
        try {
            // 写入
            await thenFs.writeFile(url, JSON.stringify(arr))
            // 获取常规信息
            const arr2 = await getInfo()
            // 加入默认信息+用户信息 并写入
            arr2.push({ "name": obj.name, "user_info": "https://superjunior.top/uploads/9fbfdd7fbe7493b96af70785ac3cbffb" })
            await thenFs.writeFile(url2, JSON.stringify(arr2))
            return '添加成功'
        } catch (e) {
            return '添加失败'
        }
    }

}

// 登录
export async function checkUser(obj) {
    if (obj.name == '' || obj.password == '') {
        return
    }
    const arr = await getUser()
    if (arr.some(item => item.name == obj.name && item.password == obj.password)) {
        return '登录成功'
    } else {
        return '登录失败'

    }
}

// 导出模块
export default { getUser, addUser, checkUser, getInfo }