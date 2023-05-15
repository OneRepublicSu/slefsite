
// axios处理接口
import thenFs from "then-fs";
const url = './data2.json'

// 获得数据
export async function getData() {
    try {
        const str = await thenFs.readFile(url, 'utf-8')
        const arr = JSON.parse(str)
        return arr
    } catch (e) {
        return '获取信息失败'
    }
}
// 导出数据
export async function addData(obj) {
    if (obj.name == '' || obj.contents == '') {
        return
    }
    console.log(obj);
    const arr = await getData()
    obj.id = arr[1].id*1 +1
    arr.unshift({name:obj.name,contents:obj.contents,time:obj.time,id:obj.id,user_info:obj.user_info,nicname:obj.nicname})
    console.log(arr);
   
    try {
        await thenFs.writeFile(url, JSON.stringify(arr))
        return '添加成功'
    } catch (e) {
        return '添加失败'
    }
}

// 导出模块
export default { getData, addData }