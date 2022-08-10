// 顶栏

const nav = document.querySelector('#nav')
const ttop = document.querySelector('.top')
const closed = document.querySelector('#closed')


nav.addEventListener('click',function(e){
    ttop.style.top = 0
    e.preventDefault()

})

closed.addEventListener('click',function(e){
    ttop.style.top = '-200px'
    const n = document.querySelector('.top ul li.active')
    n && n.classList.remove('active')
    e.preventDefault()

})

const lism = document.querySelector('.top ul')
lism.addEventListener('click',function(e){
    const n = document.querySelector('.top ul li.active')
    n && n.classList.remove('active')
    if(e.target.tagName === 'LI'){
        e.target.classList.add('active')
        const rname = e.target.dataset.name
        const rtop = document.querySelector(`.${rname}`).offsetTop
        document.documentElement.scrollTop = rtop - 220
    }

})

