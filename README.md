

# 인덕대학교 도서관 좌석 예약 시스템

이 프로젝트는 인덕대학교 도서관의 좌석 예약 기능을 제공하는 React 기반 웹 애플리케이션입니다. 사용자는 좌석 배치도를 보고 원하는 좌석을 예약하거나, 예약을 취소할 수 있습니다.

## 주요 기능

- 실시간 좌석 배치도 시각화
- 좌석 예약 및 예약 취소 (아이디/비밀번호 입력)
- 예약된 좌석은 타이머(60초) 후 자동 해제
- 남은 좌석 수 표시
- 반응형 UI 및 styled-components 사용

## 설치 및 실행 방법

1. 저장소 클론
   ```sh
   git clone [저장소 주소]
   cd library-seat-reservation
   ```

2. 패키지 설치
   ```sh
   npm install
   ```

3. 개발 서버 실행
   ```sh
   npm start
   ```
   브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 실행화면
![image](https://github.com/user-attachments/assets/ab5e6b0a-ff2a-48e3-85db-3a7fa3ad7373)
![image](https://github.com/user-attachments/assets/eef07d17-00e2-446a-9d0f-522d93823c99)

## 폴더 구조

- `src/components/SeatReservation.jsx` : 좌석 예약 메인 컴포넌트
- `src/components/NavBar.jsx` : 네비게이션 바
- `src/components/Home.jsx` : 홈 화면

## 기술 스택

- React 19
- styled-components
- react-router-dom

## 사용 예시

1. 홈 화면에서 "좌석 예약" 메뉴 클릭
2. 좌석 배치도에서 원하는 좌석 클릭
3. 아이디/비밀번호 입력 후 예약 또는 취소

