import { of, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

console.log('switchMap example, started at ', new Date().toLocaleTimeString());
const source$ = of(1, 2, 3);
const switched$ = source$.pipe(
  switchMap(value => {
    return timer(1000 * value).pipe( // cancels previous timer
      map(() => `Completed after ${value} second(s)`)
    );
  })
);

switched$.subscribe(() => {
  console.log('Ended at ', new Date().toLocaleTimeString());
});
