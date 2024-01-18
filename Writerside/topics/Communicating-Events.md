# Communicating Events

We have seen how to communicate data between components, but how do we communicate events between components?

Let's take our example, we have a button that adds a product to the cart. We want to be able to click that button and have the cart update. We can do this by emitting an event from the child component and listening for it in the parent component.

First, we need to change our method to emit an event instead of directly updating the cart.

From this:

```javascript
methods: {
        addToCart() {
            this.cart += 1
        },
```
To this:

```javascript
    methods: {
        addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
```
in here we are creating a custom event called `add-to-cart` and emitting it from the child component.
and using the id of the product as a parameter.

Now let's add a listener for that event in the parent component.

on the line
```html
<div class="cart">Cart({{ cart }}</div>
<product-display :premium="premium"></product-display>
```
we are going to add
```html
<div class="cart">Cart({{ cart.length }}</div>
    <product-display :premium="premium" @add-to-cart="updateCart"></product-display
```
> Note: we are adding the **cart.length** because we are going to use an array instead of a number to store the products in the cart.

for make this updateCart function work, we need to create it in the main.js file.

```javascript
    methods: {
    updateCart(id) {
        this.cart.push(id)
    },
```
That's it! Now when we click the button, the cart will update.