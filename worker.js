'use strict'

class Worker{
    constructor(n){
        this._i = 0;
    }

    is_prime(num){

        var counter = num - 1;
        while(counter > 1){
            if(num % counter == 0){
                return false;
            }
            counter--;
        }
        return true;
    };

    find_prime(nth_prime){
        // Find Nth prime

        var current_num = 2;
        var primes = [];
        while(primes.length != nth_prime){
            if(this.is_prime(current_num)){
                primes.push(current_num);
            }
            current_num++;
        }

        return primes[primes.length - 1];

    }
}

var _worker = new Worker();
self.onmessage =function(event){
    var nth_prime = parseInt(event.data, 10)
    var result = _worker.find_prime(nth_prime);
    if(event.ports.length == 0){
        self.postMessage(result);
    } else {
        event.ports[0].postMessage(result);
    }
};
