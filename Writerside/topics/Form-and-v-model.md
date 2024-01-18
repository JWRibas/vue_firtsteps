# Form and v-model

Let's create a form with a text input, a rate review and a submit button.

First, we need to create a new component called `ReviewForm.js` and add it to the `components` folder.

In the `ReviewForm.js` file, we're going to add the following code:

```javascript
app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
        
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
        <label for="recommend">Would you recommend this product?</label>
        <select id="recommend" v-model="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>
        
        <input class="button" type="submit" value="Submit">
    </form>`,
```
now we need to add the data to the component, so we can use it in the form:

```javascript
data() {
    return {
        name: '',
        review: '',
        rating: null,
        recommend: null
    }
}
```
and create a method to handle the submit event:

```javascript
methods: {
    onSubmit() {
        if (this.name === '' || this.review === '' || this.rating === null || this.recommend === null) {
            alert('Review is incomplete. Please fill out every field.')
            return
        }
        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating,
            recommend: this.recommend
        }
        this.$emit('review-submitted', productReview)
        this.name = ''
        this.review = ''
        this.rating = null
        this.recommend = null
    }
}
```
Now we need to add the component to the `index.html` file:

```html
<review-form @review-submitted="addReview"></review-form>
```
> Don't forget to call the script in the `index.html` file.
> {style="note"}

and add the `addReview` method to the `ProductDisplay.js` file:

```javascript
methods: {
    addReview(review) {
        this.reviews.push(review)
    }
}
```
and add the `reviews` data to the `ProductDisplay.js` template:

```html
<review-form @review-submitted="addReview"></review-form>
```

Now we need to create a new component called `ReviewList.js` and add it to the `components` folder.

In the `ReviewList.js` file, we're going to add the following code:

```javascript
app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                {{ review.name }} gave this {{ review.rating }} stars
                <br/>
                "{{ review.review }}"
                <br/>
                Recommended: {{ review.recommend }}
            </li>
        </ul>
    </div>`
})
```
and add the `review-list` data to the `ProductDisplay.js` template:

```html
<review-list v-if="reviews.length" :reviews="reviews"></review-list>
```
> We are using the reviews.length to check if there are any reviews, if there are, we show the review list, if not, we show the form.
> {style="note"}

Done! Now we have a form and a list of reviews.
