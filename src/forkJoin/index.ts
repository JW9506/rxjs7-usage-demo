import { forkJoin, of, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';

const observable1$ = of('Hello').pipe(delay(1000));
const observable2$ = of('World').pipe(delay(2000));
const observable3$ = timer(3000).pipe(map(() => 'Goodbye'));

console.log('forkJoin example, started at ', new Date().toLocaleTimeString());
forkJoin([observable1$, observable2$, observable3$]).subscribe(results => {
  console.log(results);
  console.log('forkJoin example, ended at ', new Date().toLocaleTimeString());
});
