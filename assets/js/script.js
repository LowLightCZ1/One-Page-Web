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
  const aboutCon = document.getElementById("aboutUs");
  if (!textBtn || !moreText) return;

  const isExpanded = moreText.classList.contains("expanded");

  if(moreText.style.display === "none" && !isExpanded){
    aboutCon.classList.add("expanded")
    moreText.style.display = "inline";
    textBtn.textContent = "Zobrazit Méně";
  }
  else{
    aboutCon.classList.remove("expanded")
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

  const section = document.getElementById("mainSec");

  if(isExpanded){
    engineCard.classList.remove("expanded");
    infoCards.forEach(c => c.style.display = "flex");
    button.textContent = "Zobrazit více";
    section.style.width = "auto";
    section.style.height = "auto";
  }
  else{
    infoCards.forEach(c => {
      if (c !== engineCard) c.style.display = 'none';
    });
    engineCard.classList.add("expanded")
    button.textContent = "Zobrazit méně";
    section.style.width = "100%";
    section.style.height = "100%";
    section.style.border = "none"
  }



};



