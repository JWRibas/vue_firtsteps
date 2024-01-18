app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `    <div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" alt="">
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
              <button
                  class="button"
                  @click="removeFromCart"
                  :disabled="!inStock"
                  :class="{ disabledButton: !inStock }">
                    Remove from Cart
              </button>
            </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data () {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './path/to/your_image_green.jpg', quantity: 50 },
                { id: 2235, color: 'yellow', image: './path/to/your_image_blue.jpg', quantity: 0 },
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart')
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review) {
            this.reviews.push(review)
        }
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