function animacao() {
    const menu = document.querySelector('.menu');
    const btn = document.getElementById('btn-menu');

    btn.addEventListener('click', () => {
        btn.style.transition = '0.5s';
        btn.style.opacity = '0';
        menu.classList.add('ativo');
    })

    const bntFecharMenu = document.querySelector('.bnt-fechar-menu');

    bntFecharMenu.addEventListener('click', () => {
        menu.style.transition = '0.8s';
        btn.style.opacity = '1';
        menu.classList.remove('ativo');
    })


}

animacao();


function animacaoCards() {
    const cards = document.querySelector(".projetos-street");
    const btn_visitar = document.querySelector(".btn-visitar");

    console.log(cards);
    console.log(btn_visitar);

    cards.addEventListener("mouseenter", function(){
        btn_visitar.style.transition = "0.7s";
        btn_visitar.style.opacity = "1";
    });

    cards.addEventListener("mouseleave", function() {
        btn_visitar.style.transition = "0.4s";
        btn_visitar.style.opacity = "0";
    });
}

animacaoCards();

