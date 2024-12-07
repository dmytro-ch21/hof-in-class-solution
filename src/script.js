// given array 
const products = [
    {
      title: "Wireless Headphones",
      description: "Noise-cancelling over-ear.",
      year: 2024,
      price: 199.99,
      image: "https://example.com/images/headphones.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "10%"
      },
      quantity: 50
    },
    {
      title: "Smartphone",
      description: "Latest model with 128GB storage and 5G connectivity.",
      year: 2022,
      price: 899.99,
      image: "https://example.com/images/smartphone.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 20
    },
    {
      title: "Gaming Laptop",
      description: "High-performance laptop with RTX 3060 GPU and 16GB RAM.",
      year: 2024,
      price: 1299.99,
      image: "https://example.com/images/laptop.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "15%"
      },
      quantity: 10
    },
    {
      title: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with customizable keys.",
      year: 2021,
      price: 89.99,
      image: "https://example.com/images/keyboard.jpg",
      isDiscounted: false,
      isRefurbished: false,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 100
    },
    {
      title: "Smartwatch",
      description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
      year: 2022,
      price: 249.99,
      image: "https://example.com/images/smartwatch.jpg",
      isDiscounted: true,
      isRefurbished: true,
      discount: {
        discountAvailable: "5%"
      },
      quantity: 30
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with 20W output and 12-hour battery life.",
      year: 2024,
      price: 49.99,
      image: "https://example.com/images/speaker.jpg",
      isDiscounted: false,
      isRefurbished: false,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 200
    },
    {
      title: "4K Monitor",
      description: "Ultra HD monitor with 144Hz refresh rate and HDR support.",
      year: 2024,
      price: 399.99,
      image: "https://example.com/images/monitor.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "20%"
      },
      quantity: 25
    },
    {
      title: "Fitness Tracker",
      description: "Lightweight tracker with step count, calorie burn, and sleep monitoring.",
      year: 2021,
      price: 69.99,
      image: "https://example.com/images/fitness-tracker.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 150
    },
    {
      title: "Drone",
      description: "Camera drone with 4K video and 30-minute flight time.",
      year: 2024,
      price: 999.99,
      image: "https://example.com/images/drone.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "25%"
      },
      quantity: 15
    },
    {
      title: "Electric Scooter",
      description: "Foldable scooter with a top speed of 25 mph and 30-mile range.",
      year: 2022,
      price: 499.99,
      image: "https://example.com/images/scooter.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 40
    }
  ];

console.log('Solution:');
// Schema
// {
//   title: string,
//   description: string,
//   year: number,
//   price: number,
//   image: string,
//   isDiscounted: boolean,
//   isRefurbished: boolean,
//   discount: {
//     discountAvailable: string
//   },
//   quantity: number
// }

// write code here
// 1. Console Log All Products
// products.forEach(function(item){
//   console.log(`${item.title} - $${item.price}`);
// });

products.forEach((item) => console.log(`${item.title} - $${item.price}`)); 

// 2. Filter Products with Long Descriptions
console.log('Products with long description:');
const longDescArray = products.filter((item) => item.description.length >= 30);
longDescArray.forEach((item, index) => console.log(` - ${index + 1}. ${item.title}`));

// 3. Filter Products by Price Range
console.log('Products in price range of $200 and $400');
const priceRangeProducts = products.filter((item) => item.price >= 200 && item.price <= 400);
priceRangeProducts.forEach((item, index) => console.log(` - ${index + 1}. ${item.title}: $${item.price}`));


// 4. Filter Discounted Products
console.log('Discounted Products:');
const discountedProducts = products.filter((item, idex) => item.isDiscounted === true);
discountedProducts.forEach((item, index) => console.log(` - ${index + 1}. ${item.title}`));

// 5. Filter Products with 15% or More Discount
console.log('Producst with more than 15% discount:');
const largeDiscountProducts = products.filter((item) => parseInt(item.discount.discountAvailable) >= 15); // parseInt(10%)
largeDiscountProducts.forEach((item, index) => console.log(` - ${index + 1}. ${item.title}: ${item.discount.discountAvailable}`));

// 6. Filter New Products
console.log('New Producst:');
const newProducts = products.filter((item) => item.year >= 2024);
newProducts.forEach((item, index) => console.log(` - ${index + 1}. ${item.title}: ${item.year}`));



// const text = '123%';

// const number = +text;

// console.log(number);