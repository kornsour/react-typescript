// object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

// specific ordering of elements turns it from an array into a tuple
const pepsi: Drink = ['brown', true, 40];
