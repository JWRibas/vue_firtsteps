# Computed Properties

Now we're going to use computed properties to make our code more readable and reusable.

In here we're going to create a computed property to add the name of the product with the brand name.

First lest add the brand name to the data model.

```javascript
data: {
  brand: 'Vue Mastery',
  product: 'Socks',
```
Now let's create the computed property.

```javascript
computed: {
  title() {
    return this.brand + ' ' + this.product
  }
}
```
Now our javascript complete code ends up like this:

```javascript
const app = Vue.createApp({
    data () {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            image: './path/to/your_image.jpg',
            inStock: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './path/to/your_image_green.jpg' },
                { id: 2235, color: 'yellow', image: './path/to/your_image_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
});
```

The computed property allows us to use this component automates way to update the title when the brand or the product changes.

Now let's use the computed property in our html.

```html
<div class="product-info">
    <h1>{{ title }}</h1>
</div>
```
Done! Now we have the title of the product with the brand name.

### Complex computed properties

Now let's create a complex computed property to show the inStock status of the product.

For this we're going to change the code, first lets change the html to update the way we deal with the variants.

```html
<div class="color-box"
    v-for="(variant, index) in variants"
    :key="variant.id"
    @mouseover="updateImage(index)"
    :style="{ backgroundColor: variant.color }">
</div>
```
As we can see we're using the index of the variant to update the image.

Now let's change the javascript code to use the index to update the image.

First lets remove the image from the data model and replace it with the selectedVariant, starts with 0 because the first variant is the default one.

```javascript
selectedVariant: 0,
```
Now we **remove the inStock**, because we're going to use the selectedVariant to get the inStock status.

Let's go to the methods and remove the updateImage to use the selectedVariant.

```javascript
methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
    },
```
Now let's create the computed property to get the image and the inStock status.

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
        }
    }
```
Now we have the image and the inStock status of the product, when we mousse over the color box.