fetch('../data/engine.json')
.then(res => res.json())
.then(data =>{
    const engineCon = document.getElementById("engineContainer")

    data.forEach(engine => {
        const div = document.createElement("div");
        div.className = "Engines";

        div.innerHTML =`
        <h3>${engine.name}</h3>
        <p>Popis: ${engine.popis}</p>`;

        engineCon.appendChild(div);
        
    });
})
.catch(error => console.error("Chyba při načítání JSON:", error));