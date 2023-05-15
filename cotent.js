
// axios处理接口
import thenFs  from "then-fs";
const url = './data.json'

// 获得数据
export async function getData(){
    try{
        const str = await thenFs.readFile(url,'utf-8')
        const arr = JSON.parse(str)
        return arr 
    }catch(e){
        return '获取信息失败'
    }
}
// 导出数据
export async function addData(obj){
    if(obj.nicname == '' || obj.contents == ''){
        return
    }
    const arr = await getData()
    obj.id = arr[arr.length -1 ].id*1 +1
    arr.push(obj)
    try{
        await thenFs.writeFile(url,JSON.stringify(arr))
        return '添加成功'
    }catch(e){
        return '添加失败'
    }
}

// 导出模块
export default{getData,addData}