// 导入express
import express from 'express'
import fs from 'fs';
import path from 'path';
import https from 'https';
// 跨域
import cors from 'cors'
import content from './cotent.js'
import content2 from './content2.js'
import reg from './reg.js'
import list from './list.js'
import updateinfo from './updateinfo.js'
import jwt from 'jsonwebtoken'
const secret = 'XZWYBZYSXLUCCSLZMGXXL'

// new
const app = express()
const options = {
    cert: fs.readFileSync("./cert/9834779_superjunior.top.pem"),
	key: fs.readFileSync("./cert/9834779_superjunior.top.key")
};


// 开放静态资源
app.use(express.static('./public'))
// 开放uploads静态资源
app.use("/uploads", express.static('./uploads'))
app.use(cors())

import multer from 'multer'
const upload = multer({ dest: './uploads' })
app.use(upload.single('avatar'))

// 上传文件-头像-旧版
app.post('/api/upload/avatar', (req, res) => {
    res.send({ message: '发送成功', code: 200, url: 'uploads/' + req.file.filename })
})


// 得到数据-评论
app.get('/api/getcomment', async (req, res) => {
    let arr = await content.getData()
    if (arr instanceof Array) {
        res.send({ code: 200, msg: '获取评论信息成功', data: arr })
    } else {
        res.send({ code: 501, msg: '获取评论信息失败' })
    }
}
)

// 得到数据-评论-新版
app.get('/home/getcomment', async (req, res) => {
    let arr = await content2.getData()
    if (arr instanceof Array) {
        res.send({ code: 200, msg: '获取评论信息成功', data: arr })
    } else {
        res.send({ code: 501, msg: '获取评论信息失败' })
    }
}
)


// 得到列表数据
app.get('/home/list', async (req, res) => {
    let arr = await list.getList()
    if (arr instanceof Array) {
        res.send({ code: 200, msg: '获取home列表信息成功', data: arr })
    } else {
        res.send({ code: 501, msg: '获取home列表信息失败' })
    }
}
)


// 增加数据-评论-旧版
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/api/addcomment', async (req, res) => {
    const str = await content.addData(req.body)
    const { nicname, contents } = req.body
    if (!nicname || !contents) {
        return res.send({ code: 401, msg: '姓名和评论内容不能为空' })
    }
    if (str == '添加成功') {
        res.send({ code: 201, msg: '添加评论成功' })
    } else {
        res.send({ code: 501, msg: '添加评论失败' })
    }
})

// 增加数据-评论-vue版本
app.post('/home/addcomment', async (req, res) => {
    const str = await content2.addData(req.body)
    const { name, contents, token } = req.body
    jwt.verify(token, secret, async (err, payload) => {
        if (err) res.sendStatus(403);
        if (!contents) {
            return res.send({ code: 401, msg: '评论内容不能为空' })
        }
        if (str == '添加成功') {
            res.send({ code: 201, msg: '添加评论成功' })
        } else {
            res.send({ code: 501, msg: '添加评论失败' })
        }
    })
})
// 上传文件-头像/home/avatar-新版
app.post('/home/avatar', (req, res) => {
    res.send({ message: '发送成功', code: 200, url: 'uploads/' + req.file.filename })
})

// 增加数据-用户-昵称and头像
app.post('/home/addinfo', async (req, res) => {
    const str = await updateinfo.addInfo(req.body)
    // 解构内容
    const { token, nicname } = req.body
    jwt.verify(token, secret, async (err, payload) => { // 验证成功的话，会得到真正的负载内容payload
        if (err) res.sendStatus(403);
        if (!nicname) {
            return res.send({ code: 401, msg: '昵称内容不能为空' })
        }
        if (str == '添加成功') {
            res.send({ code: 201, msg: '添加信息成功' })
        } else {
            res.send({ code: 501, msg: '添加信息失败' })
        }
    })

})


// 注册
app.post('/oa/reg', async (req, res) => {
    const str = await reg.addUser(req.body)
    // 解构内容
    const { name, password } = req.body
    if (!name || !password) {
        return res.send({ code: 401, msg: '姓名和密码内容不能为空' })
    }
    if (str == '添加成功') {
        res.send({ code: 201, msg: '添加用户成功' })
    } else if (str == '该用户已经存在') {
        res.send({ code: 502, msg: '该用户已经存在' })
    } else {
        res.send({ code: 501, msg: '添加用户失败' })
    }
})

// 用户登录
app.post('/oa/login', async (req, res) => {
    const str = await reg.checkUser(req.body)
    // 解构内容
    const { name, password } = req.body
    if (!name || !password) {
        return res.send({ code: 401, msg: '姓名和密码内容不能为空' })
    }
    if (str == '登录成功') {
        const token = jwt.sign({ name, password }, secret, {
            expiresIn: 60 * 60 * 24 // 过期时间
        })
        res.send({ code: 201, msg: '登录成功', token })
    } else {
        res.send({ code: 501, msg: '账号或者登录密码错误' })
    }
})

// 获取数据-获取用户信息
app.get('/user/userinfo', (req, res) => {
    const headers = req.headers;
    const token = headers['authorization']; 
    jwt.verify(token, secret, async (err, payload) => { 
        if (err) res.sendStatus(403); // 解析token错误的话，返回403
        let arr = await reg.getInfo()
        // 筛选出该用户的数据
        let info = arr.filter(item => item.name == payload.name)
        res.json({ code: 200, msg: '获取用户常规信息成功', data: info })
    })
})

https.createServer(options, app).listen(8000, () => {
    console.log('成功运行');
})