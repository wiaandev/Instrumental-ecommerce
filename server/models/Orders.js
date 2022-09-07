const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    products: {
        guitarBrand:{type: String},
        model: {type: String},
        type: {type: String},
        qty: {type: String}
    },
    userInfo:{
        email: {type: String},
        address: {
            street: {type: String},
            suburb: {type: String},
            city: {type: String},
            postalCode: {type: Number},
        },
        amountPaid: {type: Number},
    }
    
});
module.exports = mongoose.model('orders', orderSchema);

// "userInfo":{
//     "email": "viandumpie@gmail.com",
//     "address": {
//         "street": "666 Doring Street",
//         "suburb": "Villeria",
//         "city": "Pretoria",
//         "postalCode": "0087"
//     },
//      "orderDate": "06-16-2022"

// },
// "orderDate": "06-03-2022", 
// "products": {
//     "guitarBrand": "Gibson",
//     "model": "ES-335",
//     "type": "Electric",
//     "qty": 3
// }
