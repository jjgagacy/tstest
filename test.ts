console.log('typescript')
import { Observable } from 'rxjs';
let o = new Observable(function subscribe(subscriber) {
    subscriber.next("first value");
});
o.subscribe(x => console.log(x));
