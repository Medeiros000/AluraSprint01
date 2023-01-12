var encodeButton = document.getElementById("encode");
var decodeButton = document.getElementById("decode");
var copyButton = document.getElementById("copiar");
var eraseButton = document.getElementById("reset");
var imagem = document.getElementById("lupa");
var explicacao = document.getElementById("explicacao");

function capturaEcodifica(){
    var textoEntrada = document.getElementById("textoParaEnDec");
    var input = textoEntrada.value;
    var teste = seMaiusculasOuAcentuadas(input);
    if(input == ""){
        alert("Não há nada para criptografar");
    }else if(teste==true){
        alert("Use apenas letras minuscúlas e sem acento.");
    }else{
        var codificado = codificar(input);
        escreve(codificado);
        copyButton.style.display = 'inline-block';
        imagem.style.display = 'none';
        explicacao.style.display = 'none';
        minhaSpan.classList.add("topo")
    }
}
function escreve(frase){
    var resposta = document.getElementById('resposta');
    resposta.innerHTML = (frase);
}
function copia(){
    var resposta = document.getElementById('resposta');
    var texto = resposta.innerText;
    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = texto;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    minhaSpan.classList.add("topo");
}
function capturaEdecodifica(){
    var textoEntrada = document.getElementById("textoParaEnDec");
    var input = textoEntrada.value;
    var teste = seMaiusculasOuAcentuadas(input);
    if(input == ""){
        alert("Não há nada para descriptografar");
    }else if(teste==true){
        alert("Use apenas letras minuscúlas e sem acento.");
    }else{
        var decodificado = decodificar(input);
        escreve(decodificado);
        copyButton.style.display = 'inline-block';
        imagem.style.display = 'none';
        explicacao.style.display = 'none';
        minhaSpan.classList.add("topo")
    }
}
function codificar(input) {
    const vogais = 'aeiou';
    const letras = input.split('');
    for (let i = 0; i < letras.length; i++) {
        if (vogais.indexOf(letras[i]) !== -1) {
            if(letras[i] == 'a'){
                letras[i] = 'ai';
            }
            if(letras[i] == 'e'){
                letras[i] = 'enter';
            }
            if(letras[i] == 'i'){
                letras[i] = 'imes';
            }
            if(letras[i] == 'o'){
                letras[i] = 'ober';
            }
            if(letras[i] == 'u'){
                letras[i] = 'ufat';
            }
        }
    }
    return letras.join('');
}
function decodificar(palavra) {
    var mapping = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    return palavra.replace(/ai/g, mapping['ai'])
                    .replace(/enter/g, mapping['enter'])
                        .replace(/imes/g, mapping['imes'])
                            .replace(/ober/g, mapping['ober'])
                                .replace(/ufat/g, mapping['ufat']);
}
function seMaiusculasOuAcentuadas(texto){
    const regex = /[A-ZÁÉÍÓÚÀÈÌÒÙÃÕÇáéíóúàèìòùãõç]/;
    return regex.test(texto)
}

textoEntrada = document.getElementById("textoParaEnDec");
textoEntrada.addEventListener('input', autoResize, false);

function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

var minhaSpan = document.getElementById("teste-resposta");

function reload(){
    location.reload();
    document.getElementById("textoParaEnDec").value="";
    document.getElementById("resposta").innerText="";
}


encodeButton.onclick = capturaEcodifica;
decodeButton.onclick = capturaEdecodifica;
copyButton.onclick = copia;
eraseButton.onclick= reload;