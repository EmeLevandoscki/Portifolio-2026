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


//animacao jornada

const steps = document.querySelectorAll('.journey-step');

const journeyObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

steps.forEach(step => journeyObserver.observe(step));


//animacao de entrada das habilidades
const projectCards = document.querySelectorAll('.projeto-card');

const projectObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

projectCards.forEach(card => projectObserver.observe(card));


// ===== MODAL =====
document.querySelectorAll('.btn-saiba-mais').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById(btn.dataset.modal).classList.add('active');
    });
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
        if (e.target === overlay) overlay.classList.remove('active');
    });
});
document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
        document.getElementById(btn.dataset.modal).classList.remove('active');
    });
});

// ===== FLIP CARD =====
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (!e.target.closest('a') && !e.target.closest('.btn-flip-back')) {
            this.classList.add('flipped');
        }
    });
});
document.querySelectorAll('.btn-flip-back').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        this.closest('.flip-card').classList.remove('flipped');
    });
});

// ===== INLINE EXPAND =====
document.querySelectorAll('.btn-expand').forEach(btn => {
    btn.addEventListener('click', function() {
        const target = document.getElementById(this.dataset.target);
        const isOpen = target.classList.toggle('open');
        this.textContent = isOpen ? '− detalhes' : '+ detalhes';
    });
});

///////////////////////formulario de contato
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // impede reload
    const form = e.target;
    fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
    })
    .then(() => {
        document.getElementById('formNote').textContent = "✅ Mensagem enviada com sucesso!";
        form.reset();
    })
    .catch(() => {
        document.getElementById('formNote').textContent = "❌ Ocorreu um erro, tente novamente.";
    });
});