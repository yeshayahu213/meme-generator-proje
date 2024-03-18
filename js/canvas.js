let gElCanvas
let gCtx
var gTxtSize = 45
var gStrockeColor = 'white'
var gFillStyleColor = 'white'






var meme
function loadCanvas() {
    meme = getMeme()
    gElCanvas = document.querySelector('canvas')

    gCtx = gElCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
    var currImg = getCurrImg()
    const pic = new Image()


    pic.src = `./pictures/${currImg}.jpg`

    pic.onload = () => { gCtx.drawImage(pic, 0, 0, gElCanvas.width, gElCanvas.height) }

}
function renderCanvas() {

    meme = getMeme()
    console.log(meme);
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d');
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)

    var currImg = getCurrImg()
    const pic = new Image()
    pic.src = `./pictures/${currImg}.jpg`


    var elEditorTxt = document.querySelector('.memetxteditor')


    elEditorTxt.value = meme.lines[meme.selectedLineIdx].txt
    pic.onload = () => {

        //elEditorTxt.value = meme.lines[meme.selectedLineIdx].txt
        gCtx.drawImage(pic, 0, 0, gElCanvas.width, gElCanvas.height)


        meme.lines.forEach(line => {
            console.log(line.location);
            console.log(130 / line.location, line.txt);
            drawText(line.txt, 130, 130 / line.location, line.fillColor, line.stroke,
                line.size, line.align)
        });
    }
}

function onAddLine() {
    if (meme.lines.length <= 3) addLine()

    renderCanvas()
}

function onEditTxt(val) {
    var value = val.value
    changeTxt(value)

}
function changeTxt(txt) {

    editTxt(txt)
    renderCanvas()
}

function drawText(text, x = 0, y = 10, strockeColor = "white", fillStyleColor = "white", fontSize = 25,
    align = "center") {
    gCtx.lineWidth = 2

    gCtx.strokeStyle = strockeColor

    gCtx.fillStyle = fillStyleColor

    gCtx.font = `${fontSize}px Arial`
    gCtx.textAlign = align
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
}

function onEnlargeTxt() {
    enlargeTxt()
    renderCanvas()
}

function onReduceTxt() {
    reduceTxt()
    renderCanvas()
}

function onChangeLine() {
    moveSelectedLine()
    renderCanvas()
}

function onAlignTxt(dir) {
    alignTxt(dir)
    renderCanvas()
}

function onAreseTxt() {
    areseTxt()
    renderCanvas()
}
function onSaveMeme() {
    saveCurrMeme()


    var elEditorTxt = document.querySelector('.memetxteditor')
    elEditorTxt.value = ''
    moveToSavedMemes()
    renderCanvasMy()
}
function onSetColor(value) {
    console.log(value);
    updateColor(value)
    renderCanvas()
}
