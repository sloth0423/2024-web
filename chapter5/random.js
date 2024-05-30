function MakeArray(){
var numbers = [];
var randomNumbers = [];
for (var i = 0 ; i < 45 ; i++){ // 일단 1 ~ 45 숫자 나열
    numbers.push(i+1);
}

for (var i = 0 ; i < 6; i++){ // 뽑기
   var selectedNumber = (Math.floor(Math.random()*numbers.length));
   randomNumbers.push(numbers[selectedNumber]);
   numbers.splice(selectedNumber,1);
}
console.log(randomNumbers);
}

const clickEvent= document.querySelector("#clickButton");
clickEvent.addEventListener("click", changeText);

function changeText(){
    document.
    // 이 윗줄부터 고치기 시작해야함
}

/* ES6(ECMAScript6)
   ES6와 그전 버전들은 차이가 크다.
   웹에서 호환하는 스크립트의 표준이다.
   자바스크립트가 ECMAScript6표준에 맞줘서 만든 프로그램이다.
   Web은 오픈소스이다.
   Web 2.0에 오면서 클라이언트 소스는 오픈되어도 서버 소스는 오픈되지 않음
   WEB 1.0
   HTML
   CSS
   JAVAScript(거의 존재하지 않음)
   클라이언트 쪽만 존재
   ex) Wikipedia
   WEB 2.0
   서버에서 데이터를 관리
   플랫폼들이 등장
   플랫폼 + 서버기술 
   DBMS, NOSQL, Cloud
   ex)인스타, 페이스북
   WEB 3.0 
   서버 코드도 오픈소스로
   데이터도 오픈
   탈중앙화
   ---------------------------------------------------------------------
   기획은 필수 디자인은 필수는 아님
   HTML, CSS만 전문으로 하는 사람 (코더, 퍼블리셔)
   + 인터렉션 + JS or Animation 
   디자이너가 HTML, CSS를 같이 하는 경우도 있음
   웹 개발자(서버랑 클라이언트쪽 둘 다 개발): PHP, Java, JSP 개발, 프론트엔드랑 백엔드로 나뉨
   FrontEnd: Javascript(Reactjs)
   BackEnd: Api개발, DevOps
   var, class, const, let, 리터럴문자열은 ES6이후에 사용가능해졌다.
   
*/