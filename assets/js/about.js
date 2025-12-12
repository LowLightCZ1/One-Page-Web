fetch('../data/about.json')
.then(res => res.json())
.then(mainInfo =>{
    const infoCon = document.getElementById("mainContainer");

    infoCon.innerHTML = '';

    const div = document.createElement("div");
    div.className = "About-us";
    div.id = "aboutUs"
    
    const info = document.createElement("div");
    info.className = "main-info";

    info.innerHTML =`
    <h1>${mainInfo.header}</h1> 
    <p class = "mainInfo" id = "mainInfo">${mainInfo.main}</p>
    <button id="textBtn" onclick="textBtnFunction()">Zobrazit více</button>`;
    
    div.appendChild(info);
    infoCon.appendChild(div);
        

})
.catch(error => console.error("Chyba při načítání JSON:", error));