// exercise: Shopping list

// Repo: boolean-uk-js-shopping-list

// Description
// We have another exercise for you! We want you to create a shopping list price displayer. You should be able to see in a list each item followed by its price!

// Instructions
// - Use these items and it's respective prices as a starting point: Milk at £1,20, Cocoa at £2,00, Salad at £2,00, Carrots at £2,00, Tomatoes at £2,50, Ready meals at £ 5,00
// - Store this information using the most appropriated data structures we've studied so far
// - Have a prompt to add an item to the list (you can have two prompts for the item and its price)
// - Output a list displaying each item and its price
// - Output the total at the end

// Tips
// - Pay attention to your data types, and what can you do with them

// Challenge
// We should be able to expand the list. As such, find a way to have two prompts, one for the item and another for the price, asking you repeatedly to add items to your list. The user should be able to stop adding items and then output the list to the user. We can use Google in our favour here if we know the right questions to ask

let priceArr;
const shoppingList = {
    'Milk' : 1.20,
    'Cocoa' : 2,
    'Salad' : 1.99,
    'Carrots' : 1.5,
    'Tomatoes' : 2.5,
    'Readymeals': 5
}

function showPrompt(){
    let newItem = prompt('Add your new Item');
    let newItemPrice = prompt("Add your new Item's price");

    // add an item to the shopping list 
    shoppingList[newItem]= Number(newItemPrice);

    // Output a list displaying each item and its price
    alert(`This is a list of our shopping items: \n ${JSON.stringify(shoppingList)}`);

    // get the values of shopping list
    priceArr = Object.values(shoppingList);

    // Output the total at the end
    let sum = 0;
    for(let i=0; i<priceArr.length; i++){
        sum += priceArr[i]
    }
    alert(`you have to pay : £${sum.toFixed(2)}`);
}
showPrompt();

// ask user if they want to continue or stop
const userNum = prompt('If you want continue adding item, type 1 otherwise type 2.')

const addItem =(num) => {
    if(Number(num) === 1){
        showPrompt()
    }else{
        alert('Bye Bye')
        window.stop
    }
}
addItem(userNum)