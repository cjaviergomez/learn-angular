export class FakeValueService {
  constructor() {}

  getValue(): string {
    return 'Fake Value';
  }

  setValue(value: string) {}

  getPromiseValue(): Promise<string> {
    return Promise.resolve('Fake Promise value is here');
  }
}
