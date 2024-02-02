import products from '../public/Products/products.json'

export default function calculateTotalPrice(cart){
    let totalPrice = 0
    cart.map((cartItem) => {
        const productItem = products[cartItem.product_id-1]
        const percent_payable = productItem.is_discount ? 1 - ( productItem.discount / 100 ) : 1
        const amount_payable = productItem.price[cartItem.color_id] * percent_payable
        const price = cartItem.number * amount_payable
        totalPrice += price
    })
    return totalPrice
}