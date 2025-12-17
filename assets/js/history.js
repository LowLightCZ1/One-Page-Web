fetch('../data/history.json')
.then(res => res.json())
.then(data =>{
    const section = document.getElementById("mainSec");

    section.className = "history-section";

    section.innerHTML = '';

    data.forEach(historyInfo => {
        const div = document.createElement("div");
        div.className = "History";
    
        const info = document.createElement("div");
        info.className = "history-info";

        info.innerHTML =`
        <h2>${historyInfo.header}</h2> 
        <p>${historyInfo.main}</p>`;
    
        div.appendChild(info);
        section.appendChild(div);
    });
    
})
.catch(error => console.error("Chyba při načítání JSON:", error));