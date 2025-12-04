const menuToggle = document.getElementById("menuLogo");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ---- SWITCHING JSON FILES -----//
const navlinks = document.querySelectorAll('.jsonLink');

navlinks.forEach(link => {  
  link.addEventListener('click', e => {
    e.preventDefault(); // Zabrání přesměrování

    const file = link.getAttribute('data-file');

    // Odstranit předchozí skript, pokud existuje
    const oldScript = document.getElementById('dynamicJsonScript');
    if (oldScript) oldScript.remove();

    // Vytvořit nový <script> tag a přidat ho
    const script = document.createElement('script');
    script.src = file;
    script.id = 'dynamicJsonScript';
    document.body.appendChild(script);
  });
});

