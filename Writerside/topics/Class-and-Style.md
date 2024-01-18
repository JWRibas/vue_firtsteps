# Class and Style

Now we going to learn how to use class and style in Vue.js.

First, using our previous example, we're going to create a .css file
    
```css  
.color-box {
width: 50px;
height: 50px;
margin-top: 8px;
border: 2px solid #d8d8d8;
border-radius: 50%;
}
```

Then, import to our HTML file.

```html
<link rel="stylesheet" href="style.css">
```

Now, we're going to define the class in our HTML file.

```html
<div v-for="variant in variants"
     :key="variant.id"
     @mouseover="updateImage(variant.image)"
     
     class="color-box" >
    
</div>
```

> Note that is the same class name that we defined in our main.js file.
> ```javascript
>const app = Vue.createApp({
>    data () {
>        return {
>            cart: 0,
>            product: 'Socks',
>            image: './path/to/your_image.jpg',
>            inStock: 100,
>            details: ['50% cotton', '30% wool', '20% polyester'],
>            variants: [
>                { id: 2234, color: 'green', image: './path/to/your_image_green.jpg' },
>                { id: 2235, color: 'blue', image: './path/to/your_image_blue.jpg' },
>            ]
>        }
>    },
> ```
> {style="note"}

Now, we're going to add the `style` attribute to our `div` element.

```html
<div v-for="variant in variants"
     :key="variant.id"
     @mouseover="updateImage(variant.image)"
     class="color-box"
     
     :style="{ backgroundColor: variant.color }" >
</div>
```
And that's it!
Now every variant will have a different color, pre-defined in our variants array.

Another example, is using classes to disable a element.

```html
<button
     @click="addToCart"
     :disabled="!inStock"
     :class="{ disabledButton: !inStock }">
     Add to Cart
</button>
```
in here we are using the `:disabled` attribute to disable the button when the `inStock` is false.

another example is using the :class attribute to change the class of a object.

```html
<div :class="[isActive ? 'active' : '']"></div>
```
```javascript
data() {
    return {
        isActive: true
    }
}
```
in here, we are using the `:class` attribute to change the class of the div element, when the `isActive` is true, the class will be `active`, if not, the class will be empty.
