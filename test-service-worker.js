'use strict'

function startServiceWorker() {
    // Register the service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./worker.js').then((reg) => {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', reg.scope);

            var msg_chan = new MessageChannel();
            // Handler for recieving message reply from service worker
            msg_chan.port1.onmessage = function(event){
                document.getElementById("result1").innerHTML = event.data;
            };

            var num =  document.getElementById("number1").value
            navigator.serviceWorker.controller.postMessage(num,[msg_chan.port2]);
        }).catch((err) => {
              document.getElementById("result1").innerHTML = 'ServiceWorker registration failed';
              console.log(err);
        });
    }
}


function stopServiceWorker() {
    navigator.serviceWorker.terminate();
}
