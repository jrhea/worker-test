'use strict'

class WorkController{

    constructor(){
        if(typeof(Worker) !== "undefined") {
            if(typeof(this._worker) == "undefined") {
                console.log("Instantiating worker.")
                this._worker = new Worker("worker.js");
            }
            this._worker.onmessage = (message) => {
                console.log("Recieved message from worker.");
                var event = new CustomEvent('WorkerMessage',{ detail: message.data })
                window.dispatchEvent(event);
            };
        } else {
            var event = new CustomEvent('error',{ detail: 'Worker not supported' });
            window.dispatchEvent(event);
        }
    }

    startWorker(num) {
        console.log("Sending message to worker.")
        this._worker.postMessage(num);
    }

    stopWorker() {
        this._worker.terminate();
        this._worker = undefined;
    }
}

