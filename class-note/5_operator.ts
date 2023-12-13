var sayHo: string | number | boolean;
function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    }
}

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone(someone: Developer & Person) {
}

