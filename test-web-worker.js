'use strict'

window.addEventListener('WorkerMessage', (e) => {
    var element = document.getElementById("result");
    element.innerHTML = e.detail;
},false);

var controller = new WorkController();

function startWebWorker() {
    var num = document.getElementById("number").value;
    controller.startWorker(num);
}

function stopWebWorker() {
    controller.stopWorker();
}
