const luz_vermelha = document.getElementsByClassName("luz_vermelha");
const luz_amarela = document.getElementsByClassName("luz_amarela");
const luz_verde = document.getElementsByClassName("luz_verde");

function vermelhaE(ligado) {
    if (ligado === "on") {
        luz_vermelha[0].classList.add("luz_vermelha_ativa");
        luz_vermelha[1].classList.add("luz_vermelha_ativa");
    } else {
        luz_vermelha[0].classList.remove("luz_vermelha_ativa");
        luz_vermelha[1].classList.remove("luz_vermelha_ativa");
    }
}

function amarelaE(ligado) {
    if (ligado === "on") {
        luz_amarela[0].classList.add("luz_amarela_ativa");
    } else {
        luz_amarela[0].classList.remove("luz_amarela_ativa");
    }
}

function verdeE(ligado) {
    if (ligado === "on") {
        luz_verde[0].classList.add("luz_verde_ativa");
    } else {
        luz_verde[0].classList.remove("luz_verde_ativa");
    }
}

let contador = 1;

setInterval(() => {
    if (contador <= 1) {
        verdeE("on");
        vermelhaE("off");
    } else if (contador === 10) {
        verdeE("off");
        amarelaE("on");
    } else if (contador === 15) {
        amarelaE("off");
        vermelhaE("on");
    } else if (contador === 22) {
        contador = 0;
    }

    contador += 1;
}, 200);
