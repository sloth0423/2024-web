// chapter2
// 배열
/*
var a = 1; // 정수형 
var f = 1.11;
var b = "안녕하세요"; //string타입
*/
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var chars = [ "a", "b", "c", "d","e"];

// 반복문 
// 1 ~ 100까지 더한 결과를 알려주는 함수
function sum(){
  var sum = 0;
  for ( var i = 1;i <= 100; i++){
    sum += i ;
    console.log(sum);
  }
  console.log("1부터 100까지 더한 값:" ,sum);
}

// 배열과 반복문
function example(){
  for(var i = 0; i < chars.length; i++){
    console.log(chars[i]);
  }
}

/*
var person = {
  age: 20,
  gender: "male",
  address: "서울시 강남구",
  heights:"179cm",
  sayYeah: function(){
    return "Yeah";
  }
  qSkill: function(){
    return setSilent();
  }
}
*/




// chapter1
function nameChange() {
  var nameSelectElement = document.querySelector("#nameSelect");
  var nameElement = document.querySelector("#name"); //querySelector로 name id를 불러와 nameElement 변수에 할당함
  console.log(nameElement); //원래는 여기서 ㅇㅇㅇ이 나와야 맞는데 양명관이 나옴 프로그램은 가끔 이렇게 동작한다고 알려주심
  nameElement.innerHTML = nameSelectElement.value; //innerHTML 속성으로 값을 바꿈
  console.log(nameElement);
}

const updateNameButton = document.querySelector("#updateName");
updateNameButton.addEventListener("click", nameChange);

