async function includeHTML(elementId, file){
    const response = await fetch(file);
    const htmlContent = await response.text();
    document.getElementById(elementId).innerHTML = htmlContent;
}
includeHTML('derick','/pages/derick_page.html');
includeHTML('nestorngwa','/pages/nestorngwa_page.html');
includeHTML('elondo','/pages/elondo_page.html');
includeHTML('newton','/pages/brain_page.html');
includeHTML('joshian','/pages/joshian_page.html');
includeHTML('browndon','/pages/newton_page.html');
includeHTML('Fangmbeng','/pages/emil_page.html');
includeHTML('Fangmbeng','/pages/fangmbeng_page.html');
