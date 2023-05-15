

function fn() {
    const date = new Date()
    const YYYY = date.getFullYear()
    const MM = addZero(date.getMonth() + 1)
    const DD = addZero(date.getDate())
    const hh = addZero(date.getHours())
    const mm = addZero(date.getMinutes())
    const str = `${YYYY}-${MM}-${DD}  ${hh}:${mm}`
    return str
}

function addZero(n) {
    return n < 10 ? `0${n}` : n
}

const nav = document.querySelector('#nav')
const addForm = document.querySelector('.contentadd')
const iptFile = document.querySelector('#iptFile')
const btnChoose = document.querySelector('#btnChoose')
const picurl = document.querySelector('#picurl')
const time = document.querySelector('#time')
const btnclose = document.querySelector('.btn-close')


nav.addEventListener('click', function () {
    addForm.style.display = 'block'
})
btnclose.addEventListener('click', function () {
    addForm.style.display = 'none'
})

btnChoose.addEventListener('click', function () {
    iptFile.click()
})
iptFile.addEventListener('change', function (e) {
    e.preventDefault()
    if (!iptFile.files[0]) return toastr.error('请选择照片')
    const fd = new FormData()
    fd.append('avatar', iptFile.files[0])
    axios.post('/api/upload/avatar', fd).then(({ data: res }) => {
        document.querySelector('.picavatar').src = 'https://superjunior.top/' + res.url
        picurl.value = 'https://superjunior.top/' + res.url
    })
})



addForm.addEventListener('submit', function (e) {
    e.preventDefault()
    time.value = fn()
    document.querySelector('.conmmenta').value=document.querySelector('.conmmenta').value.replace(/(\r\n)|(\n)/g,'<br>')
    axios.post('/api/addcomment', $('#addForm').serialize()).then(({ data: res }) => {
        if (res.code != 201) {
            return toastr.error(res.msg)
        }
        toastr.success('添加成功')
        document.querySelector('#addForm').reset()
        addForm.style.display = 'none'
        renderData()
    })
})

function renderData(){
    axios.get('https://superjunior.top/api/getcomment').then(({data:res}) =>{
        if(res.code != 200){
            return alert(res.message)
        }
        const newArr = res.data.filter(item => item.id != 1)
        
        const arr = newArr.map(item =>{
            if(item.picurl == ''){
                item.picurl = "https://superjunior.top/uploads/01.jpg"
            }
            return `
            <div class="content-main">
            <div>
                <!-- 头像 -->
                    <img src="${item.picurl}" alt="" class="pic">
                <!-- 信息 -->
                <div class="info">
                    <h4>
                       ${item.nicname}
                    </h4>
                </div>
                <!-- 评论 -->
                <div class="content">
                    <p>
                    ${item.contents}
                    </p>
                    <!-- 时间 -->
                    <p class="time">
                       ${item.time}
                    </p>
                </div>
            </div>
        </div>
            `
        })
        document.querySelector('#cma').innerHTML = arr.join(' ')
    })
}

renderData()
