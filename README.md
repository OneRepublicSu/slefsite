此网站基于express框架

运行在8000端口



开放的静态资源为public文件夹以及uploads文件夹

完全允许跨域



开发时Updateinfo.vue以及main.js需要更换端口



|  用途    | 接口                       | 命令种类 | 需要的参数 | 模块 | 文件 |  |
| ---- | ------------------------------ | -------- | ---------- | ---- | ---- | ---- |
|  旧版提交头像    | /api/upload/avatar | post     |            |      |      |      |
| 获得评论旧版 | /api/getcomment | get |            | content.js | data.json |  |
| 获得评论新版 | /home/getcomment | get |            | content2.js | data2.json |  |
| 获得home列表 | /home/list | get | | list.js | list.json |  |
| 增加评论旧版 | /api/addcomment | post | | content.js | data.json |  |
| 增加评论新版 | /home/addcomment | post | | content2.js | data2.json | 需要token验证 |
| 增加用户信息 | /home/addinfo | post | | updateinfo.js | info.json/data2.json |  |
| 新版增加头像 | /home/avatar | post | |  |  |  |
| 注册 | /oa/reg | post |            | reg.js | user.json/info.json |  |
| 登录 | /oa/login | post |            | reg.js | user.json/info.json  |  |
| 获取用户常规信息 | /user/userinfo | get |            | reg.js | user.json/info.json  |  |



```
content.js

此文件中包含getData以及addData
返回的分别是 获取信息失败 or arr   添加成功/添加失败

```

```
content2.js

此文件中包含getData以及addData
返回的分别是 获取信息失败 or arr   添加成功/添加失败
```

```
list.js

此文件中包含getList
返回的是  获取列表信息失败 or arr
```

```
updateinfo.js

此文件中包含addInfo以及getInfo
先从info.json中获取 用户信息数据 有概率返回   获取信息失败
再从data2.json中获取 评论信息
为所有此用户的评论更换昵称和头像
再把nicname写入用户信息  返回的分别是 获取信息失败 or arr   添加成功/添加失败
```

```
reg.js

此文件中包含getUser,addUser,checkUser,getInfo
先从user.json中获取用户信息
再从info.json中获得常规信息

有概率返回  该用户已经存在
注册返回的分别是 返回的分别是 添加成功/添加失败
登录返回的分别是  登录成功/登录失败
```

