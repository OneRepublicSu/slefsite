
// axios处理接口
import thenFs from "then-fs";
const url = './info.json'
const url2 = './data2.json'



// 获得哟用户数据
export async function getInfo() {
    try {
        const str = await thenFs.readFile(url, 'utf-8')
        const arr = JSON.parse(str)
        return arr
    } catch (e) {
        return '获取信息失败'
    }
}


// 获得评论数据
export async function getUserInfo() {
    try {
        const str = await thenFs.readFile(url2, 'utf-8')
        const arr = JSON.parse(str)
        return arr
    } catch (e) {
        return '获取信息失败'
    }
}

// 导出数据
export async function addInfo(obj) {
    // 获取用户信息arr
    const arr = await getInfo()
    const index = arr.findIndex(item => item.name == obj.name)
    arr.splice(index, 1, obj)
    arr[index].nicname = obj.nicname
    arr[index].user_info = obj.user_info
    // 获取评论信息增加昵称
    const arr2 = await getUserInfo()
    const index2 = arr2.findIndex(item => item.name == obj.name)
    arr2.forEach(item => {
        if (item.name == obj.name) {
            item.nicname = obj.nicname
            item.user_info = obj.user_info
        }
    })
    // 写入
    await thenFs.writeFile(url2, JSON.stringify(arr2))
    try {
        // 写入用户信息
        await thenFs.writeFile(url, JSON.stringify(arr))
        return '添加成功'
    } catch (e) {
        return '添加失败'
    }
}




// 导出模块
export default { addInfo, getInfo }