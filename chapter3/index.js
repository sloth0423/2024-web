//server example?
const http = require('node:http'); 

const hostname = '127.0.0.1'; // 내 IP의 별칭 지정 
const port = 5000;

const server = http.createServer((req, res) => { // 응답의 정의
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => { 
  console.log(`Server running at http://${hostname}:${port}/`);
}); 



// console.log("안녕하세요");

// function sum(){
//     var sum = 0;
//     for ( var i = 1;i <= 100; i++){
//       sum += i ;
//       console.log(sum);
//     }
//     console.log("1부터 100까지 더한 값:" ,sum);
//   }
  
//   // 배열과 반복문
//   function example(){
//     for(var i = 0; i < chars.length; i++){
//       console.log(chars[i]);
//     }
//   }
//   sum();


// callback hell을 대비하기 위해 promise패턴을 사용 
// qs 모듈 사용
// url에 매개변수를 넣을 수 있는 방법이 두가지? 혹은 그 이상 있는데 그중 하나가 query parameter이다. ?뒤에 오는 것들이 query parameter이다.
// http status code(100 ~ 599): 200은 Okay, 404는 찾을 수 없음(니가 요청한 정보가 나한테 없다.),401은 로그인하지 않은 상태에서 로그인이 필요한 정보에 접근할 때,
//                              403은 로그인은 했지만 권한이 없을 때, 500번대 에러는 의도치 않은 에러임 502은 서버가 다운됐을 때 뱉는 에러코드이다.
// 포스트맨: API를 테스트하면서 만드는 툴
// API: 서버에서 주는 정보?
// url mapping 
// 서버는 html을 그려서 제공하는게 아니라 데이터를 제공하는 일이 주가 되었다.
// 클라이언트가 서버로부터 html,css문서를 받아와서 javascript가 그려준다. 이것을 client side rendering이라고 한다.
// server side rendering과 client side rendering의 가장 큰 차이는 후자는 데이터가 없어서(브라우저가 그려야 알 수있기 때문에) SEO가 인식을 잘 못할 수 있다.
// client side rendering으로 웹페이지를 만들면 검색엔진에 잘 안나올 수 있다.
// SEO(검색엔진 최적화): 인터넷을 떠돌면서 웹페이지를 수집? 
// API를 통해서 데이터를 주고받고 사용함
// 서버는 데이터를 주고받는 인터페이스를 제공하는 것이 주 역할이다.
// REST방식의 서버구현을 80~90%가 함
// html을 동적으로 바꾸기 위해서이다.
// 사용하는 이유는 html문서를 쉽게 바꾸기 위해서이다.
// 템플릿 엔진의 종류로 JPS(자바에서 사용),ASP 등이 있다. pug같은 것들도 많이 쓰지만 ejs를 사용하는 이유는 jsp와 문법이 유사하기 때문이다.
// 템플릿: 규격?
// 템플릿 엔진을 사용하여 정보들을 쉽게 넣을 수 있다.
// 정적인 파일들을 묶어서 관리하는 방법이 있다. (express.js에 들어가서 문서에 들어가서 정적파일 탭에 있음)
// REST방식 
// http는 Method를 가지고 있다.(대표적인 Method들: Get(http를요청을 할 때), Post(정보를 등록할 때), Put(정보를 수정할 때), Delete(글을 삭제할 때))
// node로 웹 서버를 만들어도 되지만 프레임워크를 사용하면 더 쉽게 만들수 있는데 그중하나로 express.js가 있다.
// node는 여러가지 모듈을 지원하는데 그중 http라는 모듈을 가져와 쓰고 싶다면 require명령어를 사용한다.
// 윈도우에 호스트 파일에서 별칭이나 IP를 지정할수 있는데 127.0.0.1은 나를 지정한다. (Local Host도 나를 지정한다.)
// http는 80포트를 보통 쓰는데 개발할 때는 언어별로 다르긴한데 자바는 8080, 8081포트를 많이 쓰고 비주얼 스튜디오 코드는 3000번 포트를 많이 쓴다.
// 프로그래밍 언어들은 라이브러리등을 쉽게 가져오게 할 수 있는데 node.js에는 npm(node package management?)등이 있다.
// init은 initialize(초기화)의 준말
// json규격을 많이 사용함 자바스크립트의 object형식하고 매우 유사함(똑같나?)
// dependencies (의존성) npm install만 쳐도 아까 node_modules가 깔림
// node_modules를 과제에 끼워넣으면 감점시킬거라고 하심. **************************************************************************************************
// --save명령어로 dependencies에 아까 그 버전 무조건 치기
// express를 사용하면 폰트가 다른 이유가 뭘까?
// npm에 대해 공부해야할 듯
// 개발자의 핵심은 기본 문서를 읽을 줄 알아야한다.
// 결국 영어를 잘 해야함


// 터미널에서는 되는데 비주얼 스튜디오 코드에서 안되는 경우중에 node.js를 설치하기전에 비주얼 스튜디오 코드를 먼저 띄워놔서 그런 경우가 있는데 껐다 다시 실행하면 된다.
// 이유는 설치하고 환경설정을 하고 환경변수 통해 어쩌고 였음