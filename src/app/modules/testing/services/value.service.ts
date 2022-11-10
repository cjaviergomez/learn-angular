import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ValueService {
  private value: string = 'Value';

  constructor() {}

  getValue(): string {
    return this.value;
  }

  setValue(value: string) {
    this.value = value;
  }

  getPromiseValue(): Promise<string> {
    return Promise.resolve('Promise value is here');
  }

  getObservableValue(): Observable<string> {
    return of('Observable value is here');
  }
}
