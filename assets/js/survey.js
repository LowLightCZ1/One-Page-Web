fetch('../data/survey.json')
.then(res => res.json())
.then(surveyInfo =>{
    const section = document.getElementById("mainSec");

    section.className = "survey-section";

    section.innerHTML = '';

    const div = document.createElement("div");
    div.className = "surveyInfo";
    div.id = "surveyInfo";

    const info = document.createElement("div");
    info.className = "survey-info";

    info.innerHTML = `
    <h2>${surveyInfo.header}</h2>
    <p>${surveyInfo.info}</p>

    <form action = "../php/test.php" method = "POST">
       Text <input type = "text" id = "testText" name = "text"> 
        <input type = "submit">  
    </form>
    `;

    div.appendChild(info);
    section.appendChild(div);
})
.catch(error => console.error("Chyba při načítání JSON:", error));
