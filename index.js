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
trying(document.body)
function trying(element) {
    console.log("i am also running bro");
    newElement = document.createElement('div');
    newElement.setAttribute("id", "newObject");
    document.body.appendChild(newElement);
    console.log("i am also running bro");

}