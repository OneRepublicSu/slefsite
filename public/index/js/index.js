// 时间获取
const Time = document.querySelector('#Time')
const saying = document.querySelector('#saying')

function fn(){
    const date = new Date()
    const YYYY = date.getFullYear()
    const MM = addZero(date.getMonth()+1)
    const DD = addZero(date.getDate())
    const hh = addZero(date.getHours())
    const mm = addZero(date.getMinutes())
    const str = `${MM}-${DD}  ${hh}:${mm}`
    Time.innerHTML = str 
    if( hh<=04){
        saying.innerHTML='\"好好睡觉,不睡觉真的会掉头发会长痘痘会变丑:(\"'
    }else if(hh<=08 && hh > 04){
        saying.innerHTML='\"早上要是能吃上一碗重庆小面就好了，辣辣的那种,趴在凳子上的那种\/拍肚子\"'
    }
    else if(hh<=12 && hh > 08){
        saying.innerHTML='\"生命就是这样，你总要做些什么，或者感受些什么，这两种过程都值得尊敬。\"'
    }
    else if(hh<=16 && hh > 12){
        saying.innerHTML='\"无论何人无论何时，人们总要在乌云周围寻索着浪漫的微光活下去。\"'
    } 
    else if(hh<=20 && hh > 16){
        saying.innerHTML='\"但是太阳，他每时每刻都是夕阳也都是旭日。\"'
    }else{
        saying.innerHTML='\"警告！不要出门！不要出门！万一被烧烤摊拐跑了你的体重就危险了！！\"'
    }
}

function addZero(n){
    return n < 10 ? `0${n}` : n
}

// 执行时间获取
fn()

// 定期刷新
setInterval(fn,20000)

