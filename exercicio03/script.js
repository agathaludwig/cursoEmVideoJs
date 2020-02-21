function contar() {
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar... <br>"
    } else {
        res.innerHTML = "Contando... <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            p = 1
            window.alert("O passo 0 não é válido. Alterado para 1.")
        } else if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        else if (i > f) {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}