async function includeHTML(elementId, file){
    const response = await fetch(file);
    const htmlContent = await response.text();
    document.getElementById(elementId).innerHTML = htmlContent;
}
includeHTML('elondo','/pages/elondo_page.html');
includeHTML('fangmbeng','/pages/fangmbeng_page.html');