const laptopPrice = 3000
const smartPhonePrice = 2000
const headPhonePrice = 1000

var laptop_quantity = +prompt("Enter the quantity of laptops: ")
var smartphone_quantity = +prompt("Enter the quantity of smartphone: ")
var headphone_quantity = +prompt("Enter the quantity of headphone: ")

var totalLaptopPrice = laptopPrice * laptop_quantity
var totalSmartPhonePrice = smartPhonePrice * smartphone_quantity
var totalHeadPhonePrice = headPhonePrice * headphone_quantity

var totalPrice = totalLaptopPrice + totalHeadPhonePrice + totalSmartPhonePrice


if (totalPrice > 5000){
    discountedPrice = totalPrice * 0.2
    alert(`This the total price of your items : ${totalPrice}
This is the discount on your products : ${discountedPrice}
Amount to pay : ${totalPrice - discountedPrice}
        `)
}
else if( totalPrice > 3000 && totalPrice < 5000 ){
    discountedPrice = totalPrice * 0.15
    alert(`This the total price of your items : ${totalPrice}
This is the discount on your products : ${discountedPrice}
Amount to pay : ${totalPrice - discountedPrice}
        `)
}
else {
    alert(`This the total price of your items : ${totalPrice}

Amount to pay : ${totalPrice }
        `)
}
