# Practice: High-Order Functions with Product Objects

### Example Object:
```javascript
const product = {
    title: "Wireless Headphones",
    description: "Noise-cancelling over-ear headphones with 40 hours of playtime.",
    year: 2023,
    price: 199.99,
    image: "https://example.com/images/headphones.jpg",
    isDiscounted: true,
    isRefurbished: false,
    discount: {
        discountAvailable: "10%"
    },
    quantity: 50
};
```

#### You will be working with an array of products like this:
```javascript
const products = [
    {
        title: "Wireless Headphones",
        description: "Noise-cancelling over-ear headphones with 40 hours of playtime.",
        year: 2023,
        price: 199.99,
        image: "https://example.com/images/headphones.jpg",
        isDiscounted: true,
        isRefurbished: false,
        discount: {
            discountAvailable: "10%"
        },
        quantity: 50
    },
    // More product objects here...
];
```

## Your tasks
##### Go to the `src/script.js` file and complete the following:

### 1. Console Log All Products
Write the code logic that logs all the products in this format:
```text
    Title - $Price
    Wireless Headphones - $199.99
```

### 2. Filter Products with Long Descriptions
Write code logic that filters out all products whose description is less than 30 characters long.

After Filtering:
- Log the title “Products with short Descriptions” and display the filtered items.

### 3. Filter Products by Price Range
Write code logic that filters out all products that are in the price range $200 - $400.

After Filtering:
- Log the title “Products in Price Range $200-$400” and display the filtered items.

### 4. Filter Discounted Products
Write a function that filters only the products where isDiscounted is true.

After Filtering:
- Log the title “Discounted Products” and display the filtered items.

### 5. Filter Products with 15% or More Discount
Write code logic that that filters all the products where the discountAvailable property inside discount is 15% or more.

Hint: You’ll need to convert the string (e.g., "15%") into a number using parseFloat().

After Filtering:
- Log the title “Products with 15% or More Discount” and display the filtered items.

### 6. Filter New Products
Write a function that filters all products that have a year equal to 2024.



