const dataHoje = new Date();

function mensagemBoasVindas() {
  // Elementos Html
  const cabecalho = window.document.getElementsByTagName("header")[0];
  const boasVindas = window.document.getElementById("mensagem");
  const conteudoCabecalho = window.document.querySelectorAll("header > *");
  const horaAtual = dataHoje.getHours();

  // Variáveis
  var mensagem = "";

  // Código
  if (horaAtual > 6 && horaAtual < 12) {
    cabecalho.style.background = "darkorange";
    mensagem = "Bom Dia";
  } else if (horaAtual < 18) {
    cabecalho.style.background = "lightblue";
    mensagem = "Boa Tarde";
  } else {
    cabecalho.style.background = "rgb(40,40,40)";
    mensagem = "Boa Noite";

    for (let i = 0; i < conteudoCabecalho.length; i++) {
      conteudoCabecalho[i].style.color = "white";
    }
  }

  boasVindas.innerText = `${mensagem}, Seja bem-vindo!`;
}

function mensagemDataCurso() {
  const diaHtml = window.document.getElementById("dias");
  const dataCriacaoSite = new Date("2023-10-18");

  var diferencaMilissegundosDatas = dataHoje - dataCriacaoSite;
  var diferencaDiasDatas = Math.floor(diferencaMilissegundosDatas / 86400000) - 1;

  diaHtml.innerText = diferencaDiasDatas;
}

mensagemBoasVindas();
mensagemDataCurso();
