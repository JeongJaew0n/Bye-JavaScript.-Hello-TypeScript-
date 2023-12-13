enum Shoes {
    Nike = '나이키',
    Adidas = '아디다스',
}

// 1. 데이터를 담는 그릇 == 명세
// 2. 이 클래스는 이런 멤버도 가지고, 이런 동작도 한다.
Shoes.Nike;

var myShoes = Shoes.Nike;
console.log(myShoes);

enum Answer {
    Yes = 'Y',
    No = 'N',
}

let ans = Answer;

function askQuestion(answer: Answer) {

    if(answer === Answer.Yes) {
        console.log("정답입니다.");
    } else if(answer === Answer.No) {
        console.log("오답입니다.");
    } else {
        console.log("이건 좀");
    }
}

