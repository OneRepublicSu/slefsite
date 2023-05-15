
// axios处理接口
import thenFs  from "then-fs";
const url = './list.json'

// 获得数据
export async function getList(){
    try{
        const str = await thenFs.readFile(url,'utf-8')
        const arr = JSON.parse(str)
        return arr 
    }catch(e){
        return '获取列表信息失败'
    }
}


// 导出模块
export default{getList}