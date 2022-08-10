
// 首行文字逐渐出现
let landInTexts = document.querySelectorAll(".landIn");
landInTexts.forEach(landInText => {
    let letters = landInText.textContent.split("");
    landInText.textContent = "";
    letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        landInText.append(span);
    });
});

// 鼠标追随
const mask = document.querySelector('.mask')
const mouse = document.querySelector('.mouse')
mouse.addEventListener('mouseover', function () {
    mask.style.display = 'block'
})
mouse.addEventListener('mouseleave', function () {
    mask.style.display = 'none'
})
mouse.addEventListener('mousemove', function (e) {
    const x = e.pageX - mouse.getBoundingClientRect().x 
    const y = e.pageY - mouse.getBoundingClientRect().y - document.documentElement.scrollTop 
    let maskX = x - mask.offsetWidth / 2
    let maskY = y - mask.offsetHeight / 2
    mask.style.left = `${maskX}px`
    mask.style.top = `${maskY}px`
})

// 轮播图
const sliderData = [
    { url: 'url(./index/img/ver2.0/banner-01.jpg)  center/cover ', title: '"天下万物的来和去，都有他的时间。"', color: 'rgb(100, 67, 68)' },
    { url: 'url(./index/img/ver2.0/banner-02.jpg)  center/cover ', title: '"少年与爱永不老去，即便披荆斩棘，丢失怒马鲜衣。"', color: 'rgb(43, 35, 26)' },
    { url: 'url(./index/img/ver2.0/banner-03.jpg)  center/cover ', title: '"如果爱一个人，不能只爱他的夏天。"', color: 'rgb(36, 31, 33)' },
    { url: 'url(./index/img/ver2.0/banner-04.jpg)  center/cover ', title: '"早晨是一只花鹿，踩到我额上。"', color: 'rgb(139, 98, 66)' },
    { url: 'url(./index/img/ver2.0/banner-05.jpg)  center/cover ', title: '"大海深处有一家便利店，售卖着蓝色的孤独。"', color: 'rgb(67, 90, 92)' },
]

const img = document.querySelector('.banner')
const lis = document.querySelectorAll('.indicator li')
const cont = document.querySelector('#describe span')
const rightbtn = document.querySelector('#rightbtn')
const leftbtn = document.querySelector('#leftbtn')
const bannerBox = document.querySelector('.banner-box')
let i = 0

function rander(i) {
    img.style.background = sliderData[i].url
    document.querySelector('.indicator li.active').classList.remove('active')
    lis[i].classList.add('active')
    cont.innerHTML = sliderData[i].title
}

// 开启定时器
let id = setInterval(function () {
    rightbtn.click()
}, 2500)

// 向右的箭头
rightbtn.addEventListener('click', function () {
    i++
    if (i > sliderData.length - 1) {
        i = 0
    }
    rander(i)
})

//向左的箭头
leftbtn.addEventListener('click', function () {
    i--
    if (i < 0) {
        i = sliderData.length - 1
    }
    rander(i)
})

// 指示器
function getChange(j) {
    lis[j].addEventListener('click', function () {
        rander(j)
        // 被赋予的值需要放在后面
        i = j
    })
}

for (j = 0; j < sliderData.length; j++) {
    getChange(j)
}

// 悬停
bannerBox.addEventListener('mouseenter', function () {
    clearInterval(id)
})
bannerBox.addEventListener('mouseleave', function () {
    id = setInterval(function () {
        rightbtn.click()
    }, 2500)
})


// 全选复选
const checkedAll = document.querySelector('#checkedAll')
const checkedLists = document.querySelectorAll('.checkedList')


checkedAll.addEventListener('click', function () {
    checkedLists[0].checked = checkedAll.checked
    checkedLists[1].checked = checkedAll.checked
})

for (let m = 0; m < 2; m++) {
    checkedLists[m].addEventListener('click', function () {
        const checkedListLength = document.querySelectorAll('.checkedList:checked').length
        // 被赋予的值需要放在后面
        checkedAll.checked = checkedListLength === checkedLists.length
    })
}


// 手风琴
const accordion = document.querySelector('#accordion')
const accs = document.querySelectorAll('#accordion li')

for (let q = 0; q < accs.length; q++) {
    accs[q].addEventListener('mouseenter', function () {
        for (let b = 0; b < accs.length; b++) {
            accs[b].style.width = '100px'
        }
        accs[q].style.width = '700px'
    })
    accs[q].addEventListener('mouseleave', function () {
        for (let b = 0; b < accs.length; b++) {
            accs[b].style.width = '250px'
        }
    })
}


// 放大鏡
const magData = [
    { url: 'url(./index/img/ver2.0/banner-01.jpg)  center/cover ', title: '"天下万物的来和去，都有他的时间。"', color: 'rgb(100, 67, 68)' },
    { url: 'url(./index/img/ver2.0/banner-02.jpg)  center/cover ', title: '"少年与爱永不老去，即便披荆斩棘，丢失怒马鲜衣。"', color: 'rgb(43, 35, 26)' },
    { url: 'url(./index/img/ver2.0/banner-03.jpg)  center/cover ', title: '"如果爱一个人，不能只爱他的夏天。"', color: 'rgb(36, 31, 33)' },
    { url: 'url(./index/img/ver2.0/banner-04.jpg)  center/cover ', title: '"早晨是一只花鹿，踩到我额上。"', color: 'rgb(139, 98, 66)' },
    { url: 'url(./index/img/ver2.0/banner-05.jpg)  center/cover ', title: '"大海深处有一家便利店，售卖着蓝色的孤独。"', color: 'rgb(67, 90, 92)' },
]

const middle = document.querySelector('.middle img')
const magnifier = document.querySelector('.magnifier')
const magLarge = document.querySelector('.magLarge')
const uis  = document.querySelector('.rowBody07 .aside ul')
uis.addEventListener('mouseover',function(e){
    if(e.target.tagName === 'IMG'){
        const dom = document.querySelector('.rowBody07 .aside .active')
        dom && dom.classList.remove('active')
        e.target.classList.add('active')
       middle.src =  e.target.src
       magLarge.style.background =`url(${e.target.src})`
    }

})

const maska = document.querySelector('.magnifier .mask')
magnifier.addEventListener('mouseover',function(){
    maska.style.display = 'block'
    magLarge.style.display = 'block'

})

magnifier.addEventListener('mousemove',function(e){
   let x = e.pageX - magnifier.getBoundingClientRect().x -maska.offsetWidth /2
   let y = e.pageY - magnifier.getBoundingClientRect().y-document.documentElement.scrollTop-maska.offsetHeight /2
   if(x<0) x = 0
   if(x>magnifier.offsetWidth - maska.offsetWidth) x = magnifier.offsetWidth - maska.offsetWidth
   if(y<0) y = 0
   if(y>magnifier.offsetHeight - maska.offsetHeight) y = magnifier.offsetHeight - maska.offsetHeight
   maska.style.left = `${x}px`
   maska.style.top = `${y}px`
   magLarge.style.backgroundPosition=`${-2 *x}px  ${-2 *y}px`

})

magnifier.addEventListener('mouseout',function(){
    maska.style.display = 'none'
    magLarge.style.display = 'none'
})


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

// 筛选器

const filterData = [
    {index:1, url: './index/img/ver2.0/Filter-01.jpg ', title: '"世界那么大，没必要害怕没必要总是迷茫。"', content:'中岛美嘉-《仆が死のうと思ったのは》' },
    {index:2, url: './index/img/ver2.0/Filter-02.jpg ', title: '"愿我足够坚强，直至凝固海浪。"', content:'THE HURTS-《water》' },
    {index:3, url: './index/img/ver2.0/Filter-03.jpg ', title: '"不一定原谅所有,不怕多少个白昼。"', content:'张远-《哼》'},
    {index:4, url: './index/img/ver2.0/Filter-04.jpeg ', title: '"太阳会升起在某个清晨，一道彩虹两个人。"', content:'毛不易-《借》' },
    {index:1 ,url: './index/img/ver2.0/Filter-05.jpg ', title: '"看天空里浮云悠游,羡煞了我的不自由。"', content:'苏打绿-《频率》' },
    {index:2,url: './index/img/ver2.0/Filter-06.jpg ', title: '"一条殊途，绝不回转。"', content:'呦猫-《梦回还》' },
    {index:3, url: './index/img/ver2.0/Filter-07.jpg ', title: '"每个人都喜欢我。"', content:'OneRepublic-《everybobdy loves me》' },
    {index:4, url: './index/img/ver2.0/Filter-08.jpeg ', title: '"彩虹化作我的屋顶，这是比谁都可爱的世界。"', content:'金泰妍-《UR》' },
]

function render(filterarr){
    document.querySelector('.contentmain').innerHTML= filterarr.map(({url,title,content}) => {
        return `
        <div class="filtermain">
           <div class="filterpic">
              <img src=${url} alt="">
           </div>
     
        <p>${title} </p>   
        <h4>${content} </h4>  
    </div>
    
        `
    }).join(' ')
}

render(filterData)

let farr = filterData
document.querySelector('.rowBody08 ul').addEventListener('click',(e) =>{
    if(e.target.tagName === 'A'){
        e.preventDefault()
        const dom = document.querySelector('.rowBody08 .active')
        dom && dom.classList.remove('active')
        e.target.classList.add('active')
         if(e.target.dataset.id === '1'){
             farr = filterData.filter(({index}) => index === 1)
             render(farr)
         }else if(e.target.dataset.id === '2'){
            farr = filterData.filter(({index}) => index === 2)
            render(farr)
        }else if(e.target.dataset.id === '3'){
            farr = filterData.filter(({index}) => index === 3)
            render(farr)
        }else if(e.target.dataset.id === '4'){
            farr = filterData.filter(({index}) => index === 4)
            render(farr)
        }else{
            farr = filterData
            render(farr) 
        }
    }

})

