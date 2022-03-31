
let header = document.querySelector('header')
header.style.border = '5px solid grey'

// geben dem Element vor dem Titel einen Rahmen
let info = document.querySelector('.info')
let infoPackage = document.querySelector('.info-package')
let packageTitles = document.querySelectorAll('.package-title')

if(info.contains(infoPackage)){
    for(pack of packageTitles){
        pack.previousElementSibling.style.border = '2px solid lightgrey'
    }
}

// Prüfen Sie, ob die Klasse des Labels "mild" ist. Wenn ja, wird das Label mit einem gelben Rahmen versehen. Wenn die Klasse des Labels mit "intensiv" übereinstimmt, erhält das Etikett einen orangefarbenen Rand. Stimmt die Klasse mit keiner der beiden Klassen überein, erhält das Etikett einen roten, durchgehenden Rahmen. 
let labels = document.querySelectorAll('label')

for(label of labels){
    if(label.matches('.mild')){
        label.style.borderBottom = '3px solid yellow'
    } else if (label.matches('.intense')){
        label.style.borderBottom = '3px solid orange'
    } else {
        label.style.borderBottom = '3px solid red'
}
}


// Fügen Sie alle Kinder der .nav-list zur ungeordneten Liste der Fußzeile, .site-map, hinzu. Hinweis: Die .nav-list sollte immer noch ihre Kinder enthalten.

let navList = document.querySelector('.nav-list')
let siteMap = document.querySelector('.site-map')

for(let i=0; i<navList.children.length; i++){
    let newLi = document.createElement('li')
    newLi.innerText = navList.children[i].innerText
    siteMap.appendChild(newLi)
}