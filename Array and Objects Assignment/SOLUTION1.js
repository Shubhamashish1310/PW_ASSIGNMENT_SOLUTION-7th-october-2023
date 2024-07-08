/*
Ques1. In the following shopping cart add, remove, and edit items:
=> const shoppingCart =['Milk, 'Coffee', 'Tea', 'Honey']
- add 'Meat' in the beginning of your shopping cart if it has not been already added
- add Sugar at the end of you shopping cart if it has not been already added
- remove 'Honey' if you are allergic to honey
- modify Tea to 'Green Tea'
*/

function shoppingCart() {

    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey','shubham'];

    //add 'Meat' in the beginning of your shopping cart if it has not been already added
    shoppingCart.unshift('Meat');  // ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'shubham']

    // add Sugar at the end of you shopping cart if it has not been already added
    shoppingCart.push('Sugar');     // ['Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'shubham', 'Sugar']

    // remove 'Honey' if you are allergic to honey
    if (!shoppingCart.includes('Honey')) {
        shoppingCart.pop();         // ['Meat', 'Milk', 'Coffee', 'Tea', 'shubham', 'Sugar']
    }

    // modify Tea to 'Green Tea'
    const index = shoppingCart.indexOf('Tea');
    if (index !== -1) {
        shoppingCart[index] = 'Green Tea';  // ['Meat', 'Milk', 'Coffee', 'Green Tea', 'Honey', 'shubham', 'Sugar']
    }

    //updated shopping cart
    console.log(shoppingCart);
}

shoppingCart();