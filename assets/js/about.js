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
        <h2 class = "h2$1">${mainInfo.h2$1}</h2>
        <p class="p$1">${mainInfo.p$M}</p>
        <span id = "moreText">
            <h2 class = "h2$2">${mainInfo.h2$2}</h2>
            <p class="p$O">${mainInfo.p$O}</p>
        </span>

    </section>
    <button id="textBtn" onclick="textBtnFunction()">Zobrazit více</button>`;
    
    div.appendChild(info);
    section.appendChild(div);
        

})
.catch(error => console.error("Chyba při načítání JSON:", error));