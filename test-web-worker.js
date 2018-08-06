'use strict'

var w;

function startWebWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("worker.js");
        }
        var num =  document.getElementById("number").value
        w.postMessage(num);
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}


function stopWebWorker() {
    w.terminate();
    w = undefined;
}
