function mudarTema() {
    const html = document.documentElement;
    const btn = document.getElementById("btnTema");
    const bolinha = document.getElementById("bolinha")
    html.dataset.bsTheme = html.dataset.bsTheme == "light" ? "dark" : "light";
    btn.classList.toggle("ativo");
    bolinha.classList.toggle("ativo");
}