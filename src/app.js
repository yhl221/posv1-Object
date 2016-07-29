const CartItem = require('./models/cart-item.js');
const ReceiptItem = require('./models/receipt-item.js');
const Receipt = require('./models/receipt.js');
const Item = require('./models/item.js');
const Promotion = require('./models/promotion.js');

function printReceipt(tags) {

  const cartItems = CartItem.buildCartItems(tags, Item.all());

  const receiptItems = ReceiptItem.buildReceiptItems(cartItems, Promotion.all());

  const receipt = new Receipt(receiptItems);

  const receiptText = receipt.buildReceiptText();

  console.log(receiptText);
}

exports.printReceipt = printReceipt;
