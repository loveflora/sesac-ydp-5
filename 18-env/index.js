//=== 환경변수 ===
// .env 파일로 중요한 내용
// .gitignore : local에만 존재 (깃헙에 올리지 X)
// ex. 암호화 키 값, 포트번호

//; 환경변수 확인
// const ps = process.env;
// console.log(ps);

const express = require('express');
const app = express();

//; .env 파일의 환경변수를 읽어옴
const dotenv = require('dotenv');
dotenv.config();

// 포트번호를 환경변수 파일에 저장
const PORT = process.env.PORT; // 8000

app.get('/', (req, res) => {
  console.log(process.env.NAME); // SESSAC
  console.log(process.env.NODE); // dev
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
