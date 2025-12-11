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

// ----- READ MORE textBtn ----- ///


function textBtnFunction(){
  const moreText = document.getElementById("moreText");
  const textBtn = document.getElementById("textBtn"); 
  if (!textBtn || !moreText) return;

  if(moreText.style.display === "none"){
    moreText.style.display = "inline";
    textBtn.textContent = "Zobrazit Méně";
  }
  else{
    moreText.style.display = "none";
    textBtn.textContent = "Zobrazit Více";
  }
};

function engineBtnFunction(button){
  //const engineBtn = document.getElementById("engineBtn")

  const engineCard = button.closest(".Engine");
  const container = engineCard.parentElement;
  const infoCards = container.querySelectorAll(".Engine");

  const isExpanded = engineCard.classList.contains("expanded");

  if(isExpanded){
    engineCard.classList.remove("expanded");
    infoCards.forEach(c => c.style.display = "flex");
    button.textContent = "Zobrazit více";
  }
  else{
    infoCards.forEach(c => {
      if (c !== engineCard) c.style.display = 'none';
    });
    engineCard.classList.add("expanded")
    button.textContent = "Zobrazit méně";
  }



};



