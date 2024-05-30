const express = require('express')
const qs = require('qs');
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.set('query parser', function (str) {
  return qs.parse(str, { /* custom options */ })
});

app.use(express.static('public'));

const champions = [
  "가렌",
  "그레이브즈",
  "나서스",
  "마스터이",
  "볼리베어"
];

var flowers = [
  {
    name:"개나리",
    thumbnail:"",
    color:"노란색",
    season:"봄",
    lifeCycle:100,
    country: [
      "대한민국",
      "일본",
      "중국"
    ]
  },
  {
    name:"진달래",
    thumbnail:"",
    color:"분홍색",
    season:"여름",
    lifeCycle:100,
    country: [
      "대한민국",
      "미국",
      "인도"
    ]
  },
  {
    name:"철쭉",
    thumbnail:"",
    color:"보라색",
    season:"봄",
    lifeCycle:10,
    country: [
      "대한민국",
      "대만",
      "태국"
    ]
  }
]


app.get('/data',function(req,res){
// 인증된 사용자인지 확인한다.
// 요청에 대한 유효성 확인
// 요청 확인
// DB에서 데이터를 찾고 가져온다.
// 가져온 데이터를 JSON으로 변환한다.

  res.json({name: "이재명", age: 50, address: "경기도 군포시"});
});

// 뒤에 s가 들어가면 목록을 전달하는 api라고 예측 가능
app.get('/champions', function(req,res){
  res.json({champions: champions});
});

app.get('/flowers',(req,res)=> {
  console.log(req.query);
  // query에서 color값이 있을 경우, 가져와서 일치하는 color를 가진 항목만 불러옴
  var filteredFlowers;
  if (req.query.color !== undefined){
  filteredFlowers = flowers.filter((flower)=> flower.color === req.query.color);
  res.json({flowers:filteredFlowers})
} else {
  //var list = flower.map(flower => flower.name);
  res.json({flowers: flowers.map (flower => flower.name)});
}

  // var list = [];
  // for (var i = 0; i < flowers.length; i++){
  //   list.push(flowers[i].name);
  // }

  // var list = flower.map(flower => flower.name);

  
});

app.get('/champions/:championIndex', (req,res) => {
  res.json({champions: champions[req.params.championIndex]})
});

app.get('/flowers/:flowerIndex', (req,res)=> {
  res.json({flowers: flowers[req.params.flowerIndex]})
});

app.get('/example1',(req,res) => {  // /example1이라는 경로로 get 요청이 왔을 때 
  res.render('index',{name :'양명관'}) // json 형태
});

app.get('/example2',(req,res) => {
  res.render('index',{name :'차은우'})
});

app.get('/example3',(req,res) => {
  res.render('index',{name :'한동훈'})
});

// app.get('/', (req, res) => { // root경로에 대한 응답
//   res.send('Hello World!')
// })

// app.get('/2', (req, res) => { 
//     res.send('안녕!')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});