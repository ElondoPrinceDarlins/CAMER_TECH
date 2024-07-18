async function includeHTML(elementId, file){
    const response = await fetch(file);
    const htmlContent = await response.text();
    document.getElementById(elementId).innerHTML = htmlContent;
}
includeHTML('derick','/pages/home/derick_page.html');
includeHTML('nestorngwa','/pages/home/nestorngwa_page.html');
includeHTML('elondo','/pages/home/elondo_page.html');
includeHTML('joshian','/pages/home/joshian_page.html');
includeHTML('Fangmbeng','/pages/home/fangmbeng_page.html');
includeHTML('newton','/pages/home/newton_page.html');
