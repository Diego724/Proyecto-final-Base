const btn = document.getElementById('btn-login');

function abrirOtroDocumento() {
    // Redirige al otro documento
    window.location.href = '/Pagina-Inicio/inicio.html';
}

btn.addEventListener('click',()=>{
   abrirOtroDocumento();
})


