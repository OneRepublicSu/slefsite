const catalogue = document.querySelector('ul')
const iframe = document.querySelector('iframe')
const main = document.querySelector('.main')

catalogue.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        e.preventDefault()
        iframe.src = `./kllists/${e.target.dataset.name}.html`
        // document.body.scrollHeight
        if (e.target.dataset.name === 'vueCli') {
            main.style.height = "7200px"
        }else if(e.target.dataset.name === 'vueclizhi'){
            main.style.height = "4000px"
        }
        else if(e.target.dataset.name === 'vuecallback'){
            main.style.height = "4700px"
        }
        else if(e.target.dataset.name === 'vueaxios'){
            main.style.height = "2800px"
        }


       
    }
})
