# Components and Props

Now we are going to learn about components and props. Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called "props") and return Vue elements describing what should appear on the screen.

## Components
First we will create a new directory called `components` in the `src` directory. Then we will create a new file called `HelloWorld.vue` in the `components` directory.
Inside we will create a file named ProductDisplay.js and add the following code:

```javascript
app.component('product-display', {
    template:
})
```
inside the template we will add our html code.

The code will be like this:

```javascript
app.component('product-display', {
    template:
    /*html*/
    `    <div class="product-display">
         <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image" alt="">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else-if="inStock <= 10 && inStock > 0">Almost Sold Out!</p>
                <p v-else>Out of Stock</p>
              
                <p>Shipping: {{ shipping }}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div v-for="(variant, index) in variants"
                     :key="variant.id"
                     @mouseover="updateVariant(index)"
                     class="color-box"
                     :style="{ backgroundColor: variant.color }"
                     >
                </div>
                <button
                        class="button"
                        @click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>`
```
> Is important to notice that we are using the **es6** template string to write the html code.
> For this we are using the **/*html*/** tag to tell the editor that we are using it.
> {style="note"}

Now we will add the data to the component. We will add the data that we have in the main.js file to the component.

```javascript
app.component('product-display', {
    template:
    /*html*/
    `    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image" alt="">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else-if="inStock <= 10 && inStock > 0">Almost Sold Out!</p>
                <p v-else>Out of Stock</p>
              
                <p>Shipping: {{ shipping }}</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div v-for="(variant, index) in variants"
                     :key="variant.id"
                     @mouseover="updateVariant(index)"
                     class="color-box"
                     :style="{ backgroundColor: variant.color }"
                     >
                </div>
                <button
                        class="button"
                        @click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>`,
    data () {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './path/to/your_image_green.jpg', quantity: 50 },
                { id: 2235, color: 'yellow', image: './path/to/your_image_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})
```

Great, just to be make sure everything is ok, the main.js remain like this:

```javascript
const app = Vue.createApp({
    data () {
        return {
            cart: 0,
        }
    },
    methods: {}

    })
```
and the html, like this:

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>School of Net</title>
</head>
<body>
<div id="app">
    <div class="nav-bar"></div>

    <div class="cart">Cart({{ cart }}</div>

</div>


<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!-- Import main.js -->
<script src="main.js"></script>

<script>
    const mountedApp = app.mount('#app')
</script>

</body>
</html>
```

Now we're going to add the ProductDisplay component to the html file.

```html
<script src="./components/ProductDisplay.js"></script>
```

and call it in the html file:

```html
<div id="app">
    <div class="nav-bar"></div>

    <product-display></product-display>

    <div class="cart">Cart({{ cart }}</div>
```
Perfect, now we have our component working, displaying the page as it was before.

**Final code of the html file:**

```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title>School of Net</title>
</head>
<body>
<div id="app">
    <div class="nav-bar"></div>

    <div class="cart">Cart({{ cart }}</div>
    <product-display :premium="premium"></product-display>
    <product-display></product-display>
</div>


<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

<!-- Import main.js -->
<script src="main.js"></script>

<!-- Import Components -->
<script src="./components/ProductDisplay.js"></script>

<script>
    const mountedApp = app.mount('#app')
</script>

</body>
</html>
```

## Props

Now we will learn about props. Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance.

In this example we will create a new data called `premium` and set it to `true` in the main.js file.

```javascript
const app = Vue.createApp({
    data () {
        return {
            cart: 0,
            premium: true,
        }
    },
    methods: {}

    })  
```

Now we can add the `premium` data to the ProductDisplay.js component.

```javascript
app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
```
now we can use the `premium` data in the html, where we're going to use it.

```html
<product-display :premium="premium"></product-display>
```

let's create a new variable called `shipping` at ProductDisplay.js component.

```javascript
<p>Shipping: {{ shipping }}</p>
```
after, just make the computed function to return the shipping value.

```javascript
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
```

Perfect, now we have the shipping value being displayed in the html.

If true, the shipping value will be `Free`, if false, the shipping value will be `2.99`.