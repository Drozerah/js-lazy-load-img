(() => {

    const imageLoader = () => {
        // targeted image container
        const imgContainer = document.querySelector('.image__container')
        // create & append spinner
        const spinner = document.createElement('div')
        // add class of image__container--spinner
        spinner.classList.add('image__container--spinner')
        // append img to image container
        imgContainer.appendChild(spinner)
        // create img element
        const img = document.createElement('img')
        // add img file src
        img.src = './src/img/500.png'
        // listen on load event for img element
        img.addEventListener('load', () => {
            console.log('image loaded!') // !DEBUG
            spinner.remove()
            imgContainer.appendChild(img)
        })
    }
    const [btn] = document.getElementsByTagName('button')
    btn.addEventListener('click', cb = (e) => {
        imageLoader()
        e.target.innerText = 'Loaded!'
        e.target.disabled = true
        // remove listener https://stackoverflow.com/a/13076344
        e.target.removeEventListener(e.type, cb)
    })
})()