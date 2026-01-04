fetch('../data/engine.json')
.then(res => res.json())
.then(data =>{
    const section = document.getElementById("mainSec");

    section.className = "engine-section";

    section.innerHTML = '';

    data.forEach(engine => {
        const div = document.createElement("div");
        div.className = "Engine";
        div.id = "engineCon";

        const ikona = engine.icon||"...";
        const name = engine.name||"...";
        const smallDes = engine.small$des||"...";
        const bigDes = engine.big$des||"...";

        div.innerHTML = `<img src="${ikona}" class="icon" /> ` ;
        
        const info = document.createElement("div");
        info.className = "info";

        info.innerHTML =`
        <h3>${name}</h3> 
        <p>Popis: ${smallDes}</p>
        <div class = "engine-text">
            <p>Info: ${bigDes}</p>
        </div>
        <button id="engineBtn" class ="engine-btn" onclick="engineBtnFunction(this)">
            <span class = "btn-text">Zobrazit více</span>
            <img src = "../assets/svg/arrow-down-svgrepo-com.svg" class = "arrow-img" alt = "arrow image">
        </button>`;

        div.appendChild(info);
        section.appendChild(div);
        
    });
})
.catch(error => console.error("Chyba při načítání JSON:", error));