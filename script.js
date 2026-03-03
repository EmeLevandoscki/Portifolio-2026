 const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1 // Ativa quando 10% da seção estiver visível
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//efrito de entrada 
document.querySelectorAll('.skill-tag').forEach((el, index) => {
    el.style.transitionDelay = `${index * 100}ms`;
});


window.addEventListener('load', () => {
    const terminal = document.querySelector('.terminal-window');
     
    setTimeout(() => {
        terminal.classList.add('show-glow');
    }, 500);
});


//filtro de projetos 
const botoes = document.querySelectorAll(".btn-filtro");
const projetos = document.querySelectorAll(".projeto-card");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        // muda botão ativo
        botoes.forEach(b => b.classList.remove("ativo"));
        botao.classList.add("ativo");

        const filtro = botao.dataset.filter;

        projetos.forEach(projeto => {

            const techs = projeto.dataset.tech
                ? projeto.dataset.tech.toLowerCase().split(" ")
                : [];

            if (filtro === "all" || techs.includes(filtro.toLowerCase())) {
                projeto.style.display = "";
            } else {
                projeto.style.display = "none";
            }

        });

    });
}); 


//nav bar
 
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault(); // impede o salto instantâneo
        const targetId = this.getAttribute("href").substring(1); // pega o id sem #
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});