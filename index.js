// replaceText(document.body)

// function replaceText(element) {
//     if (element.hasChildNodes()) {
//         element.childNodes.forEach(replaceText)
//     } else if (element.nodeType === Text.TEXT_NODE) {
//         if (element.textContent.match(/coronavirus/gi)) {
//             const newElement = document.createElement('span')
//             newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi, '<span class="rainbow">$1</span>')
//             element.replaceWith(newElement)
//         }
//     }
// }
var size = 5;
var points = [];
trying(document.body)
function trying(element) {

    console.log("i am also running bro");
    newElement = document.createElement('div');
    newElementb = document.createElement('button');
    newElementd = document.createElement('button');
    newElemente = document.createElement('button');
    newElementf = document.createElement('button');


    // newElementc = document.createElement('canvas');
    newElement.setAttribute("id", "newObject");
    newElement.setAttribute("class", "rainbow");
    newElementb.setAttribute("id", "alertbc");
    newElementb.innerHTML = "NEW";
    newElementd.setAttribute("id", "alertdc");
    newElementd.innerHTML = "DELETE";
    newElemente.setAttribute("id", "alertdcadd");
    newElemente.innerHTML = "A+";
    newElementf.setAttribute("id", "alertdcsub");
    newElementf.innerHTML = "A-";
    // newElementc.setAttribute("id", "myCanvas");
    document.body.appendChild(newElement);
    newElement.appendChild(newElementb);
    newElement.appendChild(newElementd);
    newElement.appendChild(newElemente);
    newElement.appendChild(newElementf);
    // document.body.appendChild(newElementc);



    console.log("i am also running bro");

}
document.getElementById("alertbc").onclick = function () { myFunction() };
document.getElementById("alertdc").onclick = function () { myFunctiond() };
document.getElementById("alertdcadd").onclick = function () { myFunctiondadd() };
document.getElementById("alertdcsub").onclick = function () { myFunctiondsub() };
function myFunctiondadd() {
    if (size <= 20) {
        size++;
    }

}
function myFunctiondsub() {
    console.log("decreasing ,may be");
    if (size > 2) {
        size--;
    }

}
function myFunctiond() {
    var myCanvas = document.getElementById("myCanvas");
    if (myCanvas != null) {
        myCanvas.remove();
    }
    return;
}



function myFunction() {
    var check = document.getElementById("myCanvas");
    if (check == null) {
        newElementc = document.createElement('canvas');
        newElementc.setAttribute("id", "myCanvas");
        document.body.appendChild(newElementc);
        var myCanvas = document.getElementById("myCanvas");
        var ctx = myCanvas.getContext("2d");

        // Fill Window Width and Height
        myCanvas.width = window.innerWidth;
        myCanvas.height = window.innerHeight;

        // Set Background Color
        ctx.fillStyle = " transparent";
        ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);

        // Mouse Event Handlers
        if (myCanvas) {
            var isDown = false;
            var canvasX, canvasY;
            ctx.lineWidth = size;
            // $(myCanvas)

            myCanvas.addEventListener('mousedown', e => {
                isDown = true;
                ctx.beginPath();
                canvasX = e.pageX - myCanvas.offsetLeft;
                canvasY = e.pageY - myCanvas.offsetTop;
                ctx.moveTo(canvasX, canvasY);
            })
            myCanvas.addEventListener('mousemove', e => {
                if (isDown !== false) {
                    canvasX = e.pageX - myCanvas.offsetLeft;
                    canvasY = e.pageY - myCanvas.offsetTop;
                    ctx.lineTo(canvasX, canvasY);
                    ctx.strokeStyle = "red";
                    ctx.stroke();
                }
            })
            myCanvas.addEventListener('mouseup', e => {
                isDown = false;
                ctx.closePath();
            });
        }

        // Touch Events Handlers
        draw = {
            started: false,
            start: function (evt) {

                ctx.beginPath();
                ctx.moveTo(
                    evt.touches[0].pageX,
                    evt.touches[0].pageY
                );

                this.started = true;

            },
            move: function (evt) {

                if (this.started) {
                    ctx.lineTo(
                        evt.touches[0].pageX,
                        evt.touches[0].pageY
                    );

                    ctx.strokeStyle = "#000";
                    ctx.lineWidth = 5;
                    ctx.stroke();
                }

            },
            end: function (evt) {
                this.started = false;
            }
        };

        // Touch Events
        myCanvas.addEventListener('touchstart', draw.start, false);
        myCanvas.addEventListener('touchend', draw.end, false);
        myCanvas.addEventListener('touchmove', draw.move, false);

        // Disable Page Move
        document.body.addEventListener('touchmove', function (evt) {
            evt.preventDefault();
        }, false);
    }

};
