function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12) {
        // bom dia
        img.src = "img/manha.png"
        document.body.style.backgroundColor = "#e6c496"
    } else if (hora <= 18) {
        // boa tarde
        img.src = "img/tarde.png"
        document.body.style.backgroundColor = "#fc8600"

    } else {
        //boa noite
        img.src = "img/noite.png"
        document.body.style.backgroundColor = "#0059ba"

    }
}