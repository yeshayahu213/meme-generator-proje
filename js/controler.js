

function onInit() {
    renderGallery()
    //renderMemes()
}
function renderGallery() {
    var pics = getPics()
    var strHtml = pics.map(function (pic) {

        return `  
        <div class="pic-box">
        <img class="pic" src="${pic.url}" id="${pic.id}" onclick="onEditeMeme('${pic.id}')">   
          </div>
      `
    })
    document.querySelector('.gallery').innerHTML = strHtml.join('');
}

var pagesObj = {
    elGallery: document.querySelector('.gallery'),
    elEditor: document.querySelector('.editorcontainer'),
    elMmeme: document.querySelector('.mymemes')
}
function onEditeMeme(id) {
    updateCurrImg(id)
    moveToEdit()
}


function moveToEdit() {
    loadCanvas()
    // renderCanvas()
    pagesObj.elGallery.classList.add('none')
    pagesObj.elMmeme.classList.add('none')
    pagesObj.elEditor.classList.remove('none')
}
function moveToGallery() {
    pagesObj.elGallery.classList.remove('none')
    pagesObj.elMmeme.classList.add('none')
    pagesObj.elEditor.classList.add('none')
}
function moveToSavedMemes() {
    pagesObj.elGallery.classList.add('none')
    pagesObj.elMmeme.classList.remove('none')
    pagesObj.elEditor.classList.add('none')
}

function onToggleGalery() {
    document.querySelector('body').classList.toggle('menu-open')
}
