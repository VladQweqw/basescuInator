function $id(el) {
    return document.getElementById(el)
}

function $(el) {
    return document.querySelector(el)
}

function $a(el) {
    return document.querySelectorAll(el)
}

function getData() {
    return JSON.parse(sessionStorage.getItem('data'))
}
const textArr = getData()

const status_text = $id('status-message')


