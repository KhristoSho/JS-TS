import { Cart, Buyable } from "../ts/cart";
import { Movie } from "../ts/movie";


test("test movie", () => {
  
  expect(new Movie(
    'The Avengers',
    'Мстители',
    'https://',
    2012,
    'США',
    'Avengers Assemble!',
    [ 'Фантастика', 'Боевик' ],
    137
  )
  ).toEqual(
    { nameEn: 'The Avengers', nameRu: 'Мстители', poster: 'https://', yearRelease: 2012, country: 'США', slogan: 'Avengers Assemble!', genre: [ 'Фантастика', 'Боевик' ], time: 137}
  )
  
});


test("test summ without discount", () => {
  
  const good1 = new Buyable (1, "milk", 150);
  const good2 = new Buyable (2, "chease", 325);
  const good3 = new Buyable (3, "meat", 250);
  const cart = new Cart();

  cart.add(good1);
  cart.add(good2);
  cart.add(good3);

  expect(cart.getSummWithoutDiscount()).toBe(725);

});

test("test summ without discount", () => {
  
  const good1 = new Buyable (1, "milk", 150);
  const good2 = new Buyable (2, "chease", 325);
  const good3 = new Buyable (3, "meat", 250);
  const cart = new Cart();

  cart.add(good1);
  cart.add(good2);
  cart.add(good3);

  expect(cart.getSummWithDiscount(0.95)).toBe(688.75);

});

test("test summ without discount", () => {
  
  const good1 = new Buyable (1, "milk", 150);
  const good2 = new Buyable (2, "chease", 325);
  const good3 = new Buyable (3, "meat", 250);
  const cart = new Cart();

  cart.add(good1);
  cart.add(good2);
  cart.add(good3);
  cart.delete(2)

  expect(cart.items).toEqual([new Buyable (1, "milk", 150), new Buyable (3, "meat", 250)]);

});