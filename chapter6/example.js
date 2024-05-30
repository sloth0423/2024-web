// ECMAScript 2015, ES6 부터 지원되는 거들
// 함수선언 ES5
function xxx (){
    // console.log(this); // 차이점 (여기서의 this는 함수이다.)
}
// ES6
const xxx = () => {
    // console.log(this); // 차이점 (여기서의 this는 전체이다.)
} 
// Context(문맥)의 차이가 존재한다.

// 변수 선언 ES5
var aaaa; // 그냥 변수
// ES6
const aaaa = 1; // 상수 가능 (상수선언시 초기화 필수)
// 변하지 않는 상수 형태가 필요했다.
let aaaaa; // 지역변수 let 가능
//
function aaa(){
    var abc; // 다른 언어들에서는 이 함수 안에서만 사용되지만 자바스크립트는 지역밖에서도 접근가능해서 let이 만들어짐
}

// Promise 패턴 (기존 ES5 Callback Hell 패턴을 극복하기 위해 생성)
// setTimeout(function(){
//     setTimeout(function(){
//         setTimeout(function(){
//             setTimeout(function(){
//                 setTimeout(function(){
//                     setTimeout(function(){
//                         setTimeout(function(){
//                             setTimeout(function(){
//                                 setTimeout(function(){
//                                     setTimeout(function(){
//                                     },100)
//                                 },100)
//                             },100)
//                         },100)
//                     },100)
//                 },100)
//             },100)
//         },100)
//     },100)
// },100)

// ES6
// fetch()
//     .then(function(){

//     })
//     .then(function(){

//     })
//     .then(function(){

//     })
//     .then(function(){

//     })
//     .then(function(){

//     })
//     .then(function(){

//     })
//     .then(function(){

//     })    


