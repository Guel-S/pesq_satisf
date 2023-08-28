document.addEventListener("DOMContentLoaded", function() {
    const enviarBotao = document.getElementById("enviarBotao");

    enviarBotao.addEventListener("click", function() {
        // Aqui você define a URL da página para a qual deseja redirecionar o usuário
        const novaPaginaURL = "http://127.0.0.1:5500/pag_final.html";

        // Redireciona o usuário para a nova página
        window.location.href = pag_final.html;
    });
});