// TODO: 함수 예제 추가
/*  */ 
console.log("javscript로 element 편집");

function nameChange() {
  var nameSelectElement = document.querySelector("#nameSelect");
  var nameElement = document.querySelector("#name"); //querySelector로 name id를 불러와 nameElement 변수에 할당함
  console.log(nameElement); //원래는 여기서 ㅇㅇㅇ이 나와야 맞는데 양명관이 나옴 프로그램은 가끔 이렇게 동작한다고 알려주심
  nameElement.innerHTML = nameSelectElement.value; //innerHTML 속성으로 값을 바꿈
  console.log(nameElement);
}

const updateNameButton = document.querySelector("#updateName");
updateNameButton.addEventListener("click", nameChange);

