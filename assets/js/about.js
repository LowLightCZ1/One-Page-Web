fetch('../data/about.json')
.then(res => res.json())
.then(mainInfo =>{
    const section = document.getElementById("mainSec");

    section.className = "about-section";

    section.innerHTML = '';

    const div = document.createElement("div");
    div.className = "About-us";
    div.id = "aboutUs"
    
    const info = document.createElement("div");
    info.className = "main-info";

    info.innerHTML =`
    <h1>${mainInfo.header}</h1> 
    <section class = "mainInfo" id = "mainInfo">
        <div class = "info-text" id = "infoText">
            <h2 class = "h2ß1">${mainInfo.h2ß1}</h2>
            <p class="pß1">${mainInfo.pßM1}</p>
            <p class="pß2">${mainInfo.pßM2}</p>
            <p class="pß3">${mainInfo.pßM3}</p>
        </div>
        <div id = "moreText" class = "more-text">
            <h2 class = "h2ß2">${mainInfo.h2ß2}</h2>
            <p class="pßO">${mainInfo.pßO}</p>
        </div>
    </section>
    <button id="textBtn" class = "text-btn" onclick="textBtnFunction()">
        <span class="btn-text">Zobrazit více</span>
        <img src = "../assets/svg/arrow-down-svgrepo-com.svg" class = "arrow-img" alt = "arrow image">
    </button>`;
    
    div.appendChild(info);
    section.appendChild(div);
        

})
.catch(error => console.error("Chyba při načítání JSON:", error));