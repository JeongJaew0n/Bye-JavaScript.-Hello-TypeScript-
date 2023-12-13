// function logText<T>(text: T): T {
//     console.log(text)
//     return text;
// }

// logText<String>(1221); //error!
// logText<String>('1221');

function logText<T>(text: T): T {
    console.log(text);
    text
    return text;
}

let tet = logText<string>('1');

interface Dropdown<T> {
    value: T,
    selected: boolean
}

interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T) {
    return text;
}

interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T) {
    return itemOption;
}

getShoppingItemOption("price");

