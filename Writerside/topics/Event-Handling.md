# Event Handling

Now we will learn how to handle events in our application. We will use the `on` method to handle events. The `on` method takes two arguments. The first argument is the name of the event and the second argument is the callback function. The callback function is called when the event is triggered.

For example, we can handle the `click` event on the `button` element as follows:

We add a cart element our JavaScript file:

```javascript
const app = Vue.createApp({
    data () {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
        }
    }
})
```
Then we add the `addToCart` method to our JavaScript file:

```javascript
const app = Vue.createApp({
    data () {
        return {
            cart: 0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        }
    }
})
```
Then we add the `button` element to our HTML file.

```html
<button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>
```

> Is important to know that we can use the `v-on` directive as `@` symbol. For example, we can use `@click` instead of `v-on:click`.
> ```html
> <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>
> ```
> {style="note"}

We can add others events to our application. For example, we can add the `mouseover` event to the `image` element as follows:

First we add the images into the `data` object:

```javascript
variants: [
                { id: 2234, color: 'green', image: './path/to/your_image_green.jpg' },
                { id: 2235, color: 'blue', image: './path/to/your_image_blue.jpg' },
            ]
```
Then we add the `updateImage` method to our JavaScript file:

```javascript
methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
```
Then we add the `image` element to our HTML file.

```html
<img :src="image" alt="Socks" @mouseover="updateImage(variant.image)">
```
This way every time we move the mouse over the image, the `updateImage` method is called and the image is updated.