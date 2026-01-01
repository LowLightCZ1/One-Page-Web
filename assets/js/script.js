
// ----- MOBILE MENU ------//

function mobileNav() {
  const section = document.getElementById("headerSec");
  const href = document.querySelectorAll("a");

  const button = document.createElement("button");
  button.className = "closebtn";


  if(section.childNodes.length <= 9){
    section.appendChild(button);
  }

  console.log(section.childNodes.length)

  const isActive = section.classList.contains("active");

  if(!isActive){
    section.classList.add("active");
    button.textContent = "×"
  }

  button.addEventListener("click", () =>{
    section.classList.remove("active");
    button.remove(button);
  });

  href.forEach(link =>{
    link.addEventListener("click", function (e) {
      e.preventDefault();
      section.classList.remove("active");
      button.remove(button);
    });
  })




}


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
  }
  else{
    aboutCon.classList.remove("expanded")
    moreText.style.display = "none";  
  }

  if (moreText.style.maxHeight) {
    moreText.style.maxHeight = null;
    textBtn.textContent = "Zobrazit Více";
  }else {
    moreText.style.maxHeight = moreText.scrollHeight + "px";
    textBtn.textContent = "Zobrazit Méně";
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



