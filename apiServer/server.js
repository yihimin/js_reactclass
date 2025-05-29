const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// 미들웨어
app.use(cors()); // CORS 허용
app.use(express.json()); // JSON 요청 바디 파싱

// GET 요청 처리
app.get('/data', (req, res) => {
  console.log('RECV[GET] ' + req.query.name + ", " + req.query.age);
  res.json({
    message: 'GET 요청 성공!',    
    data: [1, 2, 3, 4],
  });
});

// POST 요청 처리
app.post('/data', (req, res) => {  
  console.log('RECV[POST] ' + req.body.name + ", " + req.body.age);
  res.json({
    message: 'POST 요청 성공!',    
    data: [1, 2, 3, 4],
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중`);
});
