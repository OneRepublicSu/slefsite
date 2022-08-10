// 导入express
import express from 'express'
// ES6模块化开发
// import comment from './comment.js'
// 跨域
import content from './cotent.js'
import cors from 'cors'

// new
const app = express()

// 开放静态资源
app.use(express.static('./public'))
// 开放uploads静态资源
app.use("/uploads", express.static('./uploads'))
app.use(cors())

import multer from 'multer'
const upload = multer({ dest: './uploads' })
app.use(upload.single('avatar'))

// 上传文件-头像
app.post('http://39.101.141.186:8000/api/upload/avatar', (req, res) => {
    res.send({ message: '发送成功', code: 200, url: 'uploads/' + req.file.filename })
})

// 得到数据-评论
app.get('http://39.101.141.186:8000/api/getcomment', async (req, res) => {
    let arr = await content.getData()
    if (arr instanceof Array) {
        res.send({ code: 200, msg: '获取评论信息成功', data: arr })
    } else {
        res.send({ code: 501, msg: '获取评论信息失败' })
    }
}
)

// 增加数据-评论
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('http://39.101.141.186:8000/api/addcomment',async (req,res)=>{
    const str = await content.addData(req.body)
    // 解构内容
    const { nicname , contents} = req.body
    if(!nicname || !contents ){
        return res.send({code:401,msg:'姓名和评论内容不能为空'})
    }
    if(str == '添加成功'){
        res.send({code:201,msg:'添加评论成功'})
    }else{
        res.send({code:501,msg:'添加评论失败'})
    }
})



app.listen(8000, () => {
    console.log('成功运行');
})