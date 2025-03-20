function iniciarJogo() {
  window.location.href = "pagina1.html"; // Redireciona para a primeira página
}

function verificarSenha(pagina) {
  let senhaDigitada = document.getElementById("senha").value;
  let mensagem = document.getElementById("mensagem");

  let senhas = {
    pagina1: "Sete",
    pagina2: "Zerá",
    pagina3: "Levi",
    pagina4: "467",
    pagina5: ["Jl", "jl", "JL", "jL"], // Senhas diferentes para a página 5
    pagina6: "40",
    pagina7: "12",
    pagina8: "4",
    pagina9: ["1C1347", "1c1347"], // Senhas diferentes para a página 9
  };

  let proximasPaginas = {
    pagina1: "pagina2.html",
    pagina2: "pagina3.html",
    pagina3: "pagina4.html",
    pagina4: "pagina5.html",
    pagina5: "pagina6.html",
    pagina6: "pagina7.html",
    pagina7: "pagina8.html",
    pagina8: "pagina9.html",
    pagina9: "paginafinal.html",
  };

  // Verificação para página 5 com múltiplas senhas
  if (pagina === "pagina5") {
    if (senhas[pagina].includes(senhaDigitada)) {
      window.location.href = proximasPaginas[pagina];
    } else {
      mensagem.textContent = "Senha incorreta. Tente novamente!";
      mensagem.style.color = "red";
    }
  }
  // Verificação para página 9 com múltiplas senhas
  else if (pagina === "pagina9") {
    if (senhas[pagina].includes(senhaDigitada)) {
      window.location.href = proximasPaginas[pagina];
    } else {
      mensagem.textContent = "Senha incorreta. Tente novamente!";
      mensagem.style.color = "red";
    }
  }
  // Verificação para outras páginas
  else {
    if (senhaDigitada === senhas[pagina]) {
      window.location.href = proximasPaginas[pagina];
    } else {
      mensagem.textContent = "Senha incorreta. Tente novamente!";
      mensagem.style.color = "red";
    }
  }
}
