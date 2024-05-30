const express = require('express')
const qs = require('qs'); // require는 ES6에서 만들어짐
const app = express()
const port = 3000

app.use(express.static('public'));

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