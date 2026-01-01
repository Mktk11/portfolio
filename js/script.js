// Seleciona todos os links dentro da navegação
let navLinks = document.querySelectorAll('nav ul li a');

// Seleciona a classe para trocar tema

const chk = document.getElementById('change-theme');
const main = document.querySelector('main');
const cards = document.querySelectorAll('.card');
const texts = document.querySelectorAll('.text-light');
const navbar = document.querySelector('.navbar');
const form = document.querySelector('.dark')

chk.addEventListener('change', () => {
    // 1. Troca o fundo do Main
    main.classList.toggle('bg-dark');
    main.classList.toggle('bg-white');

    // 2. Troca a Navbar
    navbar.classList.toggle('navbar-dark');
    navbar.classList.toggle('bg-dark');
    navbar.classList.toggle('navbar-light');
    navbar.classList.toggle('bg-primary');

    // 3. Troca todos os Cards
    cards.forEach(card => {
        card.classList.toggle('bg-dark');
        card.classList.toggle('bg-light'); // Card cinza claro no tema light
        card.classList.toggle('text-dark'); // Garante que o texto do card mude
    });

    const allTexts = document.querySelectorAll('h1, p.lead, .card-title');
    allTexts.forEach(txt => {
        // Se o main for bg-white, o texto deve ser dark
        if (main.classList.contains('bg-white')) {
            txt.classList.add('text-dark');
            txt.classList.remove('text-light');
        } else {
            txt.classList.add('text-light');
            txt.classList.remove('text-dark');
        }
    });
    
    // 5. Ajuste especial para o seu <code>
    const code = document.querySelector('code');
    if(code) {
        code.classList.toggle('text-success');
        code.classList.toggle('text-primary');
    }
});

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {

    navLinks.forEach(function(l) {
      l.classList.remove('active');
    });

    
    this.classList.add('active');
  });
});