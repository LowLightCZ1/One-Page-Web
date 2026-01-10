
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

// ----- PHP SURVEY ------ //

document.addEventListener('submit', function(e) {

  const surveyDiv = document.getElementById("surveyDiv");
  if (e.target && e.target.id === 'surveyForm') {
    e.preventDefault(); // Zamezí obnovení stránky

    const form = e.target;
    const responseDiv = document.getElementById('response');
    
    const formData = new FormData(form);
    
    fetch('../php/test.php', {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (!res.ok) throw new Error('Chyba serveru');
      return res.text();
    })
    .then(data => {
      responseDiv.innerHTML = data;
    })
    .catch(err => {
      console.error('Chyba:', err);
      responseDiv.innerHTML = "Došlo k chybě při odesílání.";
    });
  }
  surveyDiv.innerHTML = `<h2> Děkuji za odeslání.</h2>`;
});

// ----- GALLERY SWITCH ----- //

function showGallery(galleryId) {
    // Get all elements with the class 'gallery-container'
    const galleries = document.getElementsByClassName('gallery-cont');

    // Loop through them and remove the 'active' class from all
    for (var i = 0; i < galleries.length; i++) {
        galleries[i].classList.remove('active');
    }

    // Add the 'active' class to the specific gallery you want to show
    document.getElementById(galleryId).classList.add('active');
}