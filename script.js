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

// Efeito cascata para as habilidades (opcional)
document.querySelectorAll('.skill-tag').forEach((el, index) => {
    el.style.transitionDelay = `${index * 100}ms`;
});