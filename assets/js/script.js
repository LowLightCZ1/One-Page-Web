
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
  const btnText = textBtn.querySelector(".btn-text");
  if (!textBtn || !moreText) return;

  const isOpen = moreText.classList.contains("open");

  if(!isOpen){
    moreText.classList.add("open");
    textBtn.classList.add("open");
    moreText.style.maxHeight = moreText.scrollHeight + "px";
    btnText.textContent = "Zobrazit Méně";
    aboutCon?.classList.add("expanded");
  }
  else{
    aboutCon?.classList.remove("expanded")
    moreText.classList.remove("open")
    textBtn.classList.remove("open")
    moreText.style.maxHeight = "0";
    btnText.textContent = "Zobrazit Více";
  }
};

function engineBtnFunction(button){
  //const engineBtn = document.getElementById("engineBtn")

  const engineCard = button.closest(".Engine");
  const container = engineCard.parentElement;
  const infoCards = container.querySelectorAll(".Engine");

  const btnText = button.querySelector(".btn-text");
  const engineTextDiv = engineCard.querySelector(".engine-text");

  const isOpen = engineTextDiv.classList.contains("open");

  const section = document.getElementById("mainSec");

  engineTextDiv.classList.toggle("open");
  button.classList.toggle("open");


  if(isOpen){
    engineCard.classList.remove("expanded");
    infoCards.forEach(c => {c.classList.remove("hidden"); c.style.transition = 'none'; c.style.transition = ''; });
    void engineCard.offsetWidth;
    section.classList.remove("expanded");
    section.style.width = "auto";
    section.style.height = "auto";
    btnText.textContent = "Zobrazit více";
  }
  else{
    infoCards.forEach(c => {
      if (c !== engineCard) c.classList.add("hidden");
    });
    section.classList.add("expanded");
    engineCard.classList.add("expanded");
    section.style.width = "90%";
    section.style.height = "90%";
    section.style.border = "";
    btnText.textContent = "Zobrazit méně";
  };
};



