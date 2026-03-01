export class Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly price: number
  ){}
}

export class Cart {

  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }

  get items(): Buyable[] {
    return [...this._items];
  }

  getSummWithoutDiscount(): number {
    return this._items.reduce((summ, item) => summ + item.price, 0);
  }

  getSummWithDiscount(discount: number): number {
    return this._items.reduce((summ, item) => summ + item.price * discount, 0)
  }

  delete(id: number): void {
    this._items = this._items.filter(item => item.id !== id);
  }

}