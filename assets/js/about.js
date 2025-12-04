fetch('../data/about.json')
.then(res => res.json())
.then(mainInfo =>{
    const infoCon = document.getElementById("infoContainer");

    infoCon.innerHTML = '';

    const div = document.createElement("div");
    div.className = "About-us";
    
    const info = document.createElement("div");
    info.className = "mainInfo";
    info.innerHTML =`
    <h1>${mainInfo.header}</h1> 
    <p>${mainInfo.describe}</p>`;
    div.appendChild(info);
    infoCon.appendChild(div);
        

})
.catch(error => console.error("Chyba při načítání JSON:", error));