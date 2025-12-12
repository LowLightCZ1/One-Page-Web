fetch('../data/survey.json')
.then(res => res.json())
.then(surveyInfo =>{

    const surveyCon = document.getElementById("mainContainer");

    surveyCon.innerHTML = '';

    const div = document.createElement("div");
    div.className = "surveyInfo";
    div.id = "surveyInfo";

    const info = document.createElement("div");
    info.className = "survey-info";

    info.innerHTML = `
    <h2>${surveyInfo.header}</h2>
    <p>${surveyInfo.info}</p>
    `;

    div.appendChild(info);
    surveyCon.appendChild(div);
})
.catch(error => console.error("Chyba při načítání JSON:", error));
