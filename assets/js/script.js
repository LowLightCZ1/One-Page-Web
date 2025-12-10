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

function engineBtnFunction(){
  const engineInfo = document.getElementById("engineCon");
  const engineBtn = document.getElementById("engineBtn");
  if(!engineBtn || !engineInfo) return;

  engineInfo.style.zIndex = "2";
  engineInfo.style.height = "100%";
  engineInfo.style.width = "100%";
  engineInfo.style.overflow = "visible"

};


function textBtnFunction(){

  const moreText = document.getElementById("moreText");
  const textBtn = document.getElementById("moretextBtn"); 
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



