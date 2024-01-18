# List Rendering

### Using `v-for` to render a list of items based on an array.

First, we need to create an array of items to loop through. We can do this by creating a `data` property on our Vue instance.

```javascript
const app = Vue.createApp({
    data () {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: 100,
            details: ['50% cotton', '30% wool', '20% polyester'],
        }
    }
});
```
Then, we can use **v-for** to loop through the `details` array and render each detail as a list item.

```html
<ul>
    <li v-for="detail in details">{{ detail }}</li>
</ul>
```

> Think of `v-for` as a `for` loop in JavaScript. It takes an array and loops through each item in the array, assigning it to a variable. In this case, we're assigning each item to the variable `detail`.
> {style="note"}

### Rendering a list of objects by id

First, we need to create an array of objects to loop through. We can do this by creating a `data` property on our Vue instance.

```javascript
const app = Vue.createApp({
    data () {
        return {
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
});
```

Then, we can use **v-for** to loop through the `variants` array and render each variant as a list item.

```html
<ul>
    <li v-for="variant in variants" :key="variant.id">{{ variant.color }}</li>
</ul>
```
This way we can access the `id` of each variant in the array and use it as the `key` for each list item.
