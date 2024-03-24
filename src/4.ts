class Key {
  private signature: number = Math.round(Math.random() * (10 - 1) + 1);
  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  public getKey(): number {
    return this.key.getSignature();
  }
}

abstract class House {
  protected door: boolean = false;

  public tenants: Person[] = [];

  constructor(protected key: Key) {}
  public comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
    }
  }
  public abstract openDoor(key: number): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  public openDoor(key: number): void {
    if (key === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();
const key1 = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
