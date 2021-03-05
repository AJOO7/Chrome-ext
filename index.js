replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        if (element.textContent.match(/coronavirus/gi)) {
            const newElement = document.createElement('span')
            newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
            element.replaceWith(newElement)
        }
    }
}
function alertb() {
    alert("yes working!");
}
trying(document.body)
function trying(element) {
    console.log("i am also running bro");
    newElement = document.createElement('div');
    newElementb = document.createElement('button');
    newElement.setAttribute("id", "newObject");
    newElement.setAttribute("class", "rainbow");
    newElementb.setAttribute("id", "alertbc");
    document.body.appendChild(newElement);
    newElement.appendChild(newElementb);

    console.log("i am also running bro");

}
document.getElementById("alertbc").onclick = function () { myFunction() };

function myFunction() {
    alert("yes u got it finally!");
}