function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("ano")
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique o valor informado e tente novamente.')
    } else {
        var radioGenero = document.getElementsByName("genero")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (radioGenero[0].checked) {
            genero = 'Masculino'
            if (idade <=10) {
                // menino
                img.setAttribute('src', 'img/menino.png')
            } else if (idade <= 20){
                // moco
                img.setAttribute('src', 'img/moco.png')
            } else if (idade <45) {
                // homem
                img.setAttribute('src', 'img/homem.png')
            } else {
                //velho
                img.setAttribute('src', 'img/velho.png')
            }
        } else {
            genero = 'Feminino'
            if (idade <=10) {
                // menina
                img.setAttribute('src', 'img/menina.png')
            } else if (idade <= 20){
                // moca
                img.setAttribute('src', 'img/moca.png')
            } else if (idade <45) {
                // mulher
                img.setAttribute('src', 'img/mulher.png')
            } else {
                //velha
                img.setAttribute('src', 'img/velha.png')
            }
        }
        res.innerHTML = `Detectamos gênero ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}