# Conditional

### Using `if` and `else` statements

First we add to the main.js file to the following:

```javascript
const app = Vue.createApp({
    data () {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: true
        }
    }
});
```

Then we add the following to the index.html file:

```html
<div class="cart">
    <p v-if="inStock">In Stock</p>
    <p v-else>Out of Stock</p>  
</div>
```
Now we can see that the text "In Stock" is displayed on the page, creating a boolean value that is displayed on the page.

> We don't need to pair the v-else directive.
> {style="note"}

Other way to show the conditional is using the **v-show** operator:

```html
<p v-show="inStock">In Stock</p>
<p v-show="!inStock">Out of Stock</p>
```

### Using `v-if` with `v-else-if` and `v-else`

We can use the **v-else-if** directive to display a message if the product is on sale:

First we add to the main.js file to the following:

```javascript
const app = Vue.createApp({
    data () {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: 100
        }
    }
});
```

Then we add the following to the index.html file:

```html
    <p v-if="inStock">In Stock</p>
    <p v-else-if="inStock <= 10 && inStock > 0">Almost Sold Out!</p>
    <p v-else>Out of Stock</p>
```

This will display the message "Almost Sold Out!" if the inStock value is less than or equal to 10 and greater than 0.
