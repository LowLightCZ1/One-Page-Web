const menuToggle = document.getElementById("menuLogo");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


// ---- SWITCHING JSON FILES -----//
const navlinks = document.querySelectorAll('.jsonLink'); // Vybere všechny prvky s danou třídou

navlinks.forEach(link => {  // Pro každý prvek provede
  link.addEventListener('click', e => {
    e.preventDefault(); // Zabrání přesměrování

    const file = link.getAttribute('data-file'); // Vezme hodnotu daného atributu

    // Odstranit předchozí skript, pokud existuje
    const oldScript = document.getElementById('dynamicJsonScript');
    if (oldScript) oldScript.remove();

    // Vytvořit nový <script> tag a přidat hodnotu 'file'
    const script = document.createElement('script');
    script.src = file;
    script.id = 'dynamicJsonScript';
    document.body.appendChild(script);
  });
});

// ----- READ MORE BTN ----- ///




function btnFunction(){

  const moreText = document.getElementById("moreText");
  const btn = document.getElementById("moreBtn"); 
  if (!btn || !moreText) return;

  if(moreText.style.display === "none"){
    moreText.style.display = "inline";
    btn.textContent = "Zobrazit Méně";
  }
  else{
    moreText.style.display = "none";
    btn.textContent = "Zobrazit Více";
  }
};



