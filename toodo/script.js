const inuptEL = (document.getElementsByClassName('app__controls-input'))[0]
const btnEL = (document.getElementsByClassName('app__controls-button'))[0]
const listEL = (document.getElementsByClassName('app__list'))[0]
let counter = 1
const data = [{
    id: 1,
    text: 'Some text',
    isDone: false
}]

function createTask(sometext) {
    const root = document.createElement('div')
    root.classList.add('app__list-item')


    const input = document.createElement('input')
    input.classList.add('app__list-checkbox')
    input.type = 'checkbox'

    const txt = document.createElement('p')
    txt.classList.add('app__list-text')
    txt.innerText = sometext

    const btn = document.createElement('button')
    btn.classList.add('app__list-btn')

    const img = document.createElement('img')
    img.src = 'imges/trash.svg'
    img.alt = 'trash'

    btn.appendChild(img)

    root.appendChild(input)
    root.appendChild(txt)
    root.appendChild(btn)
    return root
}

btnEL.addEventListener('click', () => {
    const textVaule = inuptEL.velue
    const taskEL = createTask(textVaule)
    listEL.appendChild(taskEL)
    inuptEL.value = ''
})

function render() {
    for (let item in data) {
        const tmpElement = createTask(item)
        listEL.appendChild(tmpElement)
    }
}