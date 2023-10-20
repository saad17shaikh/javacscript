// console.log("hello")
// document.getElementById('para').innerHTML = "Hello"
// document.querySelector('#para').innerHTML = "by querySelector"


const allPara = document.querySelectorAll('p')
allPara //=>NodeList(3) [p#para.para, p#para.para, p#para.para]
allPara[1].style.color = "red"

allPara.forEach((p) =>{
    p.style.color = "yellow"
})

// Adding an element

function addLang(language){
    const listElement = document.createElement('li')
    listElement.appendChild(document.createTextNode(language))

    const selectClass = document.querySelector('.languages')
    selectClass.appendChild(listElement)
}

addLang('Python')
addLang('React')
addLang('TypeScript')
addLang('TypeScript')
addLang('TypeScript')

// Edit an element

function editLang(language,index){
    const langChild = document.querySelector(`li:nth-child(${index})`)
    // console.log(secondChild)
    const newLi = document.createElement('li')
    newLi.textContent = language

    langChild.replaceWith(newLi)

}
// editLang('C++',1)
editLang('C++',4)

// Removing an element


    const langChild = document.querySelector('li:last-child')
    langChild.remove()