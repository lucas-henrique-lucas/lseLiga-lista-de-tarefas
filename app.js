function adicionarTarefa() {
    let itemDaLista = document.createElement('li');
    manipularAtributo(itemDaLista, 'class', 'lista_item');

    let botoesDeConfiguracaoDaLista = document.createElement('div');
    manipularAtributo(botoesDeConfiguracaoDaLista, 'class', 'lista_item__configuracao');

    let botaoEditar = document.createElement('button');
    let imgDoBotaoEditar = document.createElement('img');
    configurarVariosAtributos(botaoEditar, [['class', 'btn'], ['onclick', 'editarTarefa(this)']]);
    configurarVariosAtributos(imgDoBotaoEditar, [['src', 'img/edit.svg'], ['alt', 'editar']]);
    botaoEditar.appendChild(imgDoBotaoEditar);

    let botaoApagar = document.createElement('button');
    let imgDoBotaoApagar = document.createElement('img');
    configurarVariosAtributos(botaoApagar, [['class', 'btn'], ['onclick', 'apagarTarefa(this)']]);
    configurarVariosAtributos(imgDoBotaoApagar, [['src', 'img/delete.svg'], ['alt', 'apagar']]);
    botaoApagar.appendChild(imgDoBotaoApagar);

    let botaoConcluir = document.createElement('button');
    let imgDoBotaoConcluir = document.createElement('img');
    configurarVariosAtributos(botaoConcluir, [['class', 'btn'], ['onclick', 'concluirTarefa(this)']]);
    configurarVariosAtributos(imgDoBotaoConcluir, [['src', 'img/check-square.svg'], ['alt', 'concluir']]);
    botaoConcluir.appendChild(imgDoBotaoConcluir);

    botoesDeConfiguracaoDaLista.appendChild(botaoEditar);
    botoesDeConfiguracaoDaLista.appendChild(botaoApagar);
    botoesDeConfiguracaoDaLista.appendChild(botaoConcluir);

    itemDaLista.appendChild(botoesDeConfiguracaoDaLista);

    let textoDoItemDaLista = document.createElement('textarea');
    configurarVariosAtributos(textoDoItemDaLista, [['class', 'lista_item__texto'], ['readonly', true]])
    itemDaLista.appendChild(textoDoItemDaLista);

    let atribuirTexto = document.getElementById('header__campo_de_texto');
    textoDoItemDaLista.textContent = atribuirTexto.value;

    let listaPendente = document.getElementById('lista_pendente');
    listaPendente.appendChild(itemDaLista);
}

function configurarVariosAtributos(elemento, geral) {
    for (let i = 0, x = 0, y = 1; i < geral.length; i++) {
        manipularAtributo(elemento, geral[i][x], geral[i][y]);
    }
}

function manipularAtributo(elemento, atributo, valor) {
    elemento.setAttribute(atributo, valor);
}

function apagarTarefa(esse) {
    let elemento = esse.parentNode.parentNode;
    elemento.remove();
}

function editarTarefa(esse) {
    let puxar = esse.parentNode.parentNode;
    let elemento = puxar.children[1];
    if (elemento.getAttribute('readonly') == 'true') {
        manipularAtributo(esse.firstChild, 'src', 'img/x.svg');
        elemento.removeAttribute('readonly', false);
    } else {
        manipularAtributo(esse.firstChild, 'src', 'img/edit.svg');
        elemento.setAttribute('readonly', true);
    }

    if (elemento.value == '') {
        apagarTarefa(esse);
    }
}

function concluirTarefa(esse) {
    let elemento = esse.parentNode.parentNode;
    if (elemento.parentNode.id == 'lista_pendente') {
        manipularAtributo(esse.firstChild, 'src', 'img/x.svg');
        let listaConcluir = document.getElementById('lista_concluido');
        listaConcluir.appendChild(elemento);
    } else {
        manipularAtributo(esse.firstChild, 'src', 'img/check-square.svg');
        let listaPendente = document.getElementById('lista_pendente');
        listaPendente.appendChild(elemento);
    }
    
}