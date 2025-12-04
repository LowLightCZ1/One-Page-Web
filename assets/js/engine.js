fetch('../data/engine.json')
.then(res => res.json())
.then(data =>{
    const engineCon = document.getElementById("infoContainer");

    engineCon.innerHTML = '';

    data.forEach(engine => {
        const div = document.createElement("div");
        div.className = "Engines";

        const ikona = engine.ikona||"fdthdfh"

        div.innerHTML = `<img src="${ikona}" class="icon" /> ` ;
        
        const info = document.createElement("div");
        info.className = "info";

        info.innerHTML =`
        <h3>${engine.name}</h3> 
        <p>Popis: ${engine.popis}</p>`;

        div.appendChild(info);
        engineCon.appendChild(div);
        
    });
})
.catch(error => console.error("Chyba při načítání JSON:", error));