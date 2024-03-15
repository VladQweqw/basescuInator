function $id(el) {
    return document.getElementById(el)
}

function $(el) {
    return document.querySelector(el)
}

function $a(el) {
    return document.querySelectorAll(el)
}

const input_file_el = $id('file')

function setLoading(state) {
    if(state) {
        $('.loading').classList.add('loading-active')
    }else {
        $('.loading').classList.remove('loading-active')
    }


}

input_file_el.addEventListener('change', async (e) => {
    const image = e.target.files[0]

    if(image.type !== 'image/jpeg' && image.type !== 'image/png') {
        return alert('Wrong format')
    }

    setLoading(true)

    const formData = new FormData()
    formData.append('image', image)

    const worker = await Tesseract.createWorker()
    await worker.loadLanguage('eng')
    await worker.initialize('eng')

    const res = await worker.recognize(image)

    let textArr = res.data.text.replaceAll('\n', ' ').split(' ')
    console.log(textArr)

    sessionStorage.setItem('data', JSON.stringify(textArr))

    window.location.pathname = 'pages/result.html'
    setLoading(false)
})


