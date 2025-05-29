// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// 미들웨어
app.use(cors());
app.use(express.json());

// 하드코딩된 로그인 정보
const USER = {
  id: 'admin',
  password: '1234',
};

// 로그인 엔드포인트
app.post('/login', (req, res) => {
  const { id, password } = req.body;

  if (id === USER.id && password === USER.password) {
    res.json({ success: true, message: '로그인 성공!' });
  } else {
    res.status(401).json({ success: false, message: '아이디 또는 비밀번호가 틀렸습니다.' });
  }
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
