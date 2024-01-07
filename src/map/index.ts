import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const source$ = of({ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' });
const transformed$ = source$.pipe(
  map(user => ({ ...user, name: user.name.toUpperCase(), active: true }))
);

transformed$.subscribe(console.log);
