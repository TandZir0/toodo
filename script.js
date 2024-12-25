const inuptEL = (document.getElementsByClassName('app__controls-input'))[0]
const btnEL = (document.getElementsByClassName('app__controls-button'))[0]
const listEL = (document.getElementsByClassName('app__list'))[0]
let counter = 1
const data = []

function createTask(objectData) {
    const root = document.createElement('div')
    root.classList.add('app__list-item')

    if (objectData.isDone) {
        root.classList.add('app-list-item_done')
    }

    const input = document.createElement('input')
    input.classList.add('app__list-checkbox')
    input.type = 'checkbox'

    if (objectData.isDone) {
        input.checked = true
    }

    const txt = document.createElement('p')
    txt.classList.add('app__list-text')
    txt.innerText = objectData.text

    if (objectData.isDone) {
        txt.classList.add('app__list-item_done')
    }

    const btn = document.createElement('button')
    btn.classList.add('app__list-btn')

    const img = document.createElement('img')
    img.src = 'imges/trash.svg'
    img.alt = 'trash'

    btn.appendChild(img)

    input.addEventListener('change', () => {
        objectData.isDone = input.checked

        if (objectData.isDone) {
            root.classList.add('app__list-item_done')
            txt.classList.add('app__list-text_done')
        } else {
            root.classList.remove('app__list-item_done')
            txt.classList.remove('app__list-text_done')
        }
    })

    btn.addEventListener('click', () => {
        const index = data.findIndex(item => item.id === objectData.id)
        if (index !== -1) {
            data.splice(index, 1)
        }
        render()
    })

    root.appendChild(input)
    root.appendChild(txt)
    root.appendChild(btn)
    return root
}

btnEL.addEventListener('click', () => {
    const textValue = inuptEL.value
    if (textValue === '') return
    data.push({
        id: counter++,
        text: textValue,
        isDone: false
    })
    render()
    inuptEL.value = ''
})

function render() {
    listEL.innerHTML = ''
    for (let item of data) {
        const tmpElement = createTask(item)
        listEL.appendChild(tmpElement)
    }
}