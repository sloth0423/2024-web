const express = require('express');
const { createHmac } = require("node:crypto");

const qs = require('qs'); // require는 ES6에서 만들어짐
const app = express()
const port = 3000

app.use(express.static('public'));

// 여기서 부터 
app.use(express.json());

app.post("/login",(req,res)=>{
  
  console.log(req.body);
  // const email = req.body.email;
  // const password = req.body.password; 
  // 바로 아래 코드랑 똑같다. 완벽히 똑같지는 않지만 개념상 똑같다.
  const {email,password} = req.body;

  const secret = '123';
  const hash = createHmac('sha256', secret)
  .update(password)
  .digest('hex');
  console.log(hash);

  // DB가 없으므로 하드 코딩(데이터를 코드에 직접 입력하는 것)을 해보자
  // 정보가 일치하면
  if (email === 'asdfasdf' && hash === '4e1752806fc26ed7300a307a5c5054a27127184eea239e47ea60e2c77b648c51' ){
    res.json({result:'success'});
  } else{
    res.json({result:'fail'});
  }
})
// 여기까지 2024/06/13

app.get('/lotto-numbers',(req,res)=>{
    var numbers = [];
    var randomNumbers = [];
    function makeArray(){
        for (var i = 0 ; i < 45 ; i++){ // 일단 1 ~ 45 숫자 나열
            numbers.push(i+1);
        }
        
        for (var i = 0 ; i < 6; i++){ // 뽑기
           var selectedNumber = (Math.floor(Math.random()*numbers.length));
           randomNumbers.push(numbers[selectedNumber]);
           numbers.splice(selectedNumber,1);
        }
        
        randomNumbers = randomNumbers.sort(function (a, b) {
            if (a - b > 0) {
              return 1;
            }
        
            if (a - b < 0) {
              return -1;
            }
        
            return 0;
          });
        }
    makeArray();
        


res.json({ result: randomNumbers });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

// query params로 보내는 건 좋지 않음 url에 노출되기 때문이다.