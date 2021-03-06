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
    newElementd = document.createElement('button');

    // newElementc = document.createElement('canvas');
    newElement.setAttribute("id", "newObject");
    newElement.setAttribute("class", "rainbow");
    newElementb.setAttribute("id", "alertbc");
    newElementd.setAttribute("id", "alertdc");
    // newElementc.setAttribute("id", "myCanvas");
    document.body.appendChild(newElement);
    newElement.appendChild(newElementb);
    newElement.appendChild(newElementd);
    // document.body.appendChild(newElementc);



    console.log("i am also running bro");

}
document.getElementById("alertbc").onclick = function () { myFunction() };
document.getElementById("alertdc").onclick = function () { myFunctiond() };
function myFunctiond() {
    var myCanvas = document.getElementById("myCanvas");
    if (myCanvas != null) {
        myCanvas.remove();
    }
    return;
}



function myFunction() {
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
        ctx.lineWidth = 5;
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
                ctx.strokeStyle = "#000";
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
};
// function myFunction() {
//     newElementc = document.createElement('canvas');
//     newElementc.setAttribute("id", "myCanvas");
//     document.body.appendChild(newElementc);
//     let isDrawing = false;
//     let x = 0;
//     let y = 0;

//     const myCanvasObj = document.getElementById('myCanvas');
//     myCanvasObj.width = window.innerWidth;
//     myCanvasObj.hieght = window.innerHeight;
//     const context = myCanvasObj.getContext('2d');
//     context.fillStyle = "#00000000";
//     context.fillRect(0, 0, myCanvasObj.width, myCanvasObj.height);


//     // event.offsetX, event.offsetY gives the (x,y) offset from the edge of the canvas.

//     // Add the event listeners for mousedown, mousemove, and mouseup
//     myCanvasObj.addEventListener('mousedown', e => {
//         x = e.offsetX;
//         y = e.offsetY;
//         isDrawing = true;
//     });

//     myCanvasObj.addEventListener('mousemove', e => {
//         if (isDrawing === true) {
//             drawLine(context, x, y, e.offsetX, e.offsetY);
//             x = e.offsetX;
//             y = e.offsetY;
//         }
//     });

//     window.addEventListener('mouseup', e => {
//         if (isDrawing === true) {
//             drawLine(context, x, y, e.offsetX, e.offsetY);
//             x = 0;
//             y = 0;
//             isDrawing = false;
//         }
//     });

//     function drawLine(context, x1, y1, x2, y2) {
//         context.beginPath();
//         context.strokeStyle = 'black';
//         context.lineWidth = 1;
//         context.moveTo(x1, y1);
//         context.lineTo(x2, y2);
//         context.stroke();
//         context.closePath();
//     }
// }