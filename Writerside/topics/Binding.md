# Binding

Now that we have a basic understanding of Vue, let's learn how to bind data to the HTML.

### Binding Data

Binding data is the process of connecting the data from the Vue app to the HTML. We can do this by using the expression **v-bind:attribute="data"**. Let's see an example:

```javascript
const app = Vue.createApp({
    data () {
        return {
            product: 'Socks',
            image: './path/to/your_image.jpg',
        }
    }
});
```
In the HTML, we can bind the data to the image source like this:

```html
<img v-bind:src="image" alt="">
```

> We can also use the shorthand for v-bind, which is :. So, the code above can be written like this:
> ```html
> <img :src="image" alt="">
> ```
{style="note"}


The result will be:
```html
<body>
<div id="app">
    <div class="nav-bar"></div>

    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image" alt="">
            </div>
            <div class="product-info">
                <h1>{{ product }}</h1>
            </div>
        </div>
    </div>
</div>
```
Binding can be use in numerous ways, like:
```html
<img :src="image" :alt="product">
<img :alt="description">
<a :href="url">Link</a>
<div :class="isActive ? 'active' : ''"></div>
<span :style="isActive ? 'color: red' : ''"></span>
<span :disble="isDisabled"></span>
```

