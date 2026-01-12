fetch('../data/survey.json')
.then(res => res.json())
.then(surveyInfo =>{
    const section = document.getElementById("mainSec");

    section.className = "survey-section";

    section.innerHTML = '';

    const info = document.createElement("div");
    info.className = "survey-info";
    info.id = "surveyInfo"

    info.innerHTML = `
    <h2 class = "h2ß1">${surveyInfo.h2ß1}</h2>
    <p>${surveyInfo.info}</p>

    <div class = "survey-div" id = "surveyDiv">
        <form id = "surveyForm" onsubmit="return false;">
            <textarea name = "text" class = "survey-text" rows = "4" cols = "50"></textarea>
            <input type = "submit" value = "Odeslat">
        </form>

        <div id="response" style="margin-top: 20px; font-weight: bold;"></div>
    </div>
    `;

    section.appendChild(info);
})
.catch(error => console.error("Chyba při načítání JSON:", error));
