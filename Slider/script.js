let count = 1
document.querySelector('#radio1').checked = true
setInterval(function () {
    transisao()
}, 5000)


const transisao = () => {
    count++
    if (count > 4) {
        count = 1
    }
    document.querySelector('#radio' + count).checked = true

}