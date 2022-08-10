// 顶栏

const nav = document.querySelector('#nav')
const ttop = document.querySelector('.top')
const closed = document.querySelector('#closed')


nav.addEventListener('click', function (e) {
    ttop.style.top = 0
    e.preventDefault()

})

closed.addEventListener('click', function (e) {
    ttop.style.top = '-200px'
    const n = document.querySelector('.top ul li.active')
    n && n.classList.remove('active')
    e.preventDefault()

})

const lism = document.querySelector('.top ul')
lism.addEventListener('click', function (e) {
    const n = document.querySelector('.top ul li.active')
    n && n.classList.remove('active')
    if (e.target.tagName === 'LI') {
        e.target.classList.add('active')
        const rname = e.target.dataset.name
        const rtop = document.querySelector(`.${rname}`).offsetTop
        document.documentElement.scrollTop = rtop - 220
    }

})





// 输入输出
const one = document.querySelector('#one')
const two = document.querySelector('#two')

const result = document.querySelector('#result')
const items = document.querySelectorAll('.item')
// 符号
const add = document.querySelector('#add')
const jian = document.querySelector('#jian')
const cheng = document.querySelector('#cheng')
const chu = document.querySelector('#chu')
const AC = document.querySelector('#AC')

let arrNumber = []

function concat(str1, str2) {
    return `${str1}${str2}`
}

// 0-9的事件绑定
for (let r = 0; r < items.length; r++) {
    items[r].addEventListener('click', function () {
        arrNumber.push(r)
        m = arrNumber.reduce(concat)
        one.innerHTML = m
    })
}

// 加减乘除事件绑定
add.addEventListener('click', function () {
    arrNumber.push(' + ')
    m = arrNumber.reduce(concat)
    one.innerHTML = m
})
jian.addEventListener('click', function () {
    arrNumber.push(' - ')
    m = arrNumber.reduce(concat)
    one.innerHTML = m
})
cheng.addEventListener('click', function () {
    arrNumber.push(' * ')
    m = arrNumber.reduce(concat)
    one.innerHTML = m
})
chu.addEventListener('click', function () {
    arrNumber.push(' / ')
    m = arrNumber.reduce(concat)
    one.innerHTML = m
})
AC.addEventListener('click', function () {
    one.innerHTML = ''
    two.innerHTML = ''
    arrNumber = []
})

// 等号的点击事件
result.addEventListener('click', function () {
    let n = m.split(' ')
    let str = 0
    // 乘除先处理
    for (let o = 0; o < n.length; o++) {
        if (n[o] === '*') {
            n[o - 1] = Number(n[o - 1]) * Number(n[o + 1])
            n.splice(o, 2)
            o--

        } else if (n[o] === '/') {
            n[o - 1] = Number(n[o - 1]) / Number(n[o + 1])
            n.splice(o, 2)
            o--
        } else {
            continue
        }
    }
    // 加减后处理
    for (let q = 0; q < n.length; q++) {
        if (q === 0) {
            str = Number(n[q]) + str
        } else {
            if (n[q] === '-') {
                str = str - Number(n[q + 1])

            } else if (n[q] === '+') {
                str = str + Number(n[q + 1])
            } else {
                continue
            }
        }
    }
    two.innerHTML = `=${str}`

})

//todolist
// 查看本地以往记录
let arrTodo = JSON.parse(localStorage.getItem('info')) || []
render(arrTodo)

// 定义对象数组
function Info(id, content, index, delt, timer) {
    this.id = id;
    this.content = content;
    this.index = index;
    this.delt = delt,
        this.timer = timer
}

// 获取时间
function addZero(n) {
    return n < 10 ? `0${n}` : n
}
function timer() {
    const date = new Date()
    const YYYY = date.getFullYear()
    const MM = addZero(date.getMonth() + 1)
    const DD = addZero(date.getDate())
    const hh = addZero(date.getHours())
    console.log(hh)
    const mm = addZero(date.getMinutes())
    return `${YYYY}-${MM}-${DD}  ${hh}:${mm}`

}

// 渲染
function render(arrNewTodo) {
    document.querySelector('.todo').innerHTML = arrNewTodo.map(({ id, content, index, delt, timer }) => {
        let str = ''
        if (index === "imp1") {
            str = 'red'
        } else if (index === "imp2") {
            str = 'orange'
        } else if (index === "imp3") {
            str = 'blue'
        } else if (index === "imp4") {
            str = 'green'
        }

        let res = ''
        if (delt) {
            res = 'active'

        } else {
            res = ''
        }
        return `
    <div class="todochild ${str} ${res} " data-name =${id}>
    <p>     
        <span> Time:${timer}</span>
        <a href="javascript;;">
        <i class="iconfont icon-duigou" data-id='01' data-name = ${id}></i>
            <i class="iconfont icon-shanchu" data-id='02' data-name = ${id}></i>
        </a>    
    </p>
    <div>
    ${content}
    </div>   
</div> 
    `
    }).join(' ')

}

// 点击表单
document.querySelector('form').addEventListener('click', (e) => {
    if (e.target.tagName === 'I' || e.target.tagName === 'P') {
        const inputv01 = document.querySelector('.task').value.trim()
        const checklength01 = document.querySelector('.impti:checked')
        if (inputv01.length && checklength01 ) {
           
        } else{
            toastr.error('请填写内容或者是选择优先级哦')
            return
        } 
        const checklength = document.querySelector('.impti:checked').dataset.id
        const inputv = document.querySelector('.task').value.trim()
        const del = document.querySelector(' .todochild .active')
        const time = timer()
        const id = arrTodo.length + 1
        const arrNewTodo = new Info(id, inputv, checklength, del, time)
        arrTodo.push(arrNewTodo)
        localStorage.setItem('info', JSON.stringify(arrTodo))
        render(arrTodo)
        document.querySelector('.task').value = ' '
        document.querySelector('.impti:checked').checked = false

    }
})
// 点击删除以及修改状态
document.querySelector('.todo').addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.tagName === 'I') {
        if (e.target.dataset.id === '01') {
            document.querySelector(`[data-name="${e.target.dataset.name}"].todochild`).classList.add('active')
            newarrTodo = arrTodo.map(item => {
                if (item.id == e.target.dataset.name) {
                    return {
                        id: item.id,
                        content: item.content,
                        index: item.index,
                        delt: true,
                        timer: item.timer
                    }
                } else {
                    return {
                        id: item.id,
                        content: item.content,
                        index: item.index,
                        delt: item.delt,
                        timer: item.timer
                    }
                }
            }
            )
            localStorage.setItem('info', JSON.stringify(newarrTodo))
            arrTodo = JSON.parse(localStorage.getItem('info')) || []
            render(arrTodo)
        }

        if(e.target.dataset.id === '02'){
            if(confirm('您确定要删除这条待办么?')){

            }else{
                return
            }
          const index =  arrTodo.findIndex(item =>  item.id == e.target.dataset.name)
          console.log(index)
          arrTodo.splice(index,1)
          console.log(arrTodo)
          localStorage.setItem('info', JSON.stringify(arrTodo))
          render(arrTodo)
        }
    }
})

// 说明书
document.querySelector('.instructions01').addEventListener('click',function(e){
    e.preventDefault()
    document.querySelector('.instructions-01').style.display = 'block'
 
 })
 
 document.querySelector('.instructions-01').addEventListener('click',function(e){
     if(e.target.tagName === 'P'){
         document.querySelector('.instructions-01').style.display = 'none'
     }
  
  
  })

document.querySelector('.instructions02').addEventListener('click',function(e){
   e.preventDefault()
   document.querySelector('.instructions-02').style.display = 'block'

})

document.querySelector('.instructions-02').addEventListener('click',function(e){
    if(e.target.tagName === 'P'){
        document.querySelector('.instructions-02').style.display = 'none'
    }
 
 
 })



