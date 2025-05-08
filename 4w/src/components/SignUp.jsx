import React, { useState } from 'react';

export default function SignUp() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('여자');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [agree, setAgree] = useState(false);

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      alert('이름을 입력해주세요');
      return;
    }

    if (!agree) {
      alert('약관에 동의해주세요');
      return;
    }

    alert(`🎉 회원가입을 축하합니다, ${name}님!`);
  };

  const handleChangeEmail = (event) => {
    const email_str = event.target.value;
    setEmail(email_str);

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email_str) {
      setEmailError('이메일을 입력해주세요');
    } else if (!regex.test(email_str)) {
      setEmailError('유효한 이메일 주소를 입력해주세요');
    } else {
      setEmailError(''); // 오류 없음
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        이름:
        <input type="text" value={name} onChange={handleChangeName} />
      </label>
      <br />
      <label>
        성별:
        <select value={gender} onChange={handleChangeGender}>
          <option value="여자">여자</option>
          <option value="남자">남자</option>
        </select>
      </label>
      <br />
      <label>
        이메일:
        <input type="email" value={email} onChange={handleChangeEmail} />
      </label>
      <span style={{ color: 'red' }}>{emailError}</span>
      <br />
      <label>
        비밀번호:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        생일:
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        [필수] 약관에 동의합니다.
      </label>
      <br />
      <button type="submit">제출</button>
    </form>
  );
}
