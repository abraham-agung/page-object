class CartPage {
    constructor(page) {
        this.page = page;
        this.cartBadge = '.shopping_cart_badge'; // Update the selector for the cart badge
    }

    async getCartCount() {
        return await this.page.textContent(this.cartBadge);
    }
}

module.exports = CartPage;
 
