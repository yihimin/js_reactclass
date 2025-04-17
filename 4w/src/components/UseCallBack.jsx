import React, { useState, useEffect, useCallback } from 'react'; // React와 훅(useState, useEffect, useCallback) 불러오기

export default function FetchComponent() {
  // 1) 검색어(keyword)를 저장하는 상태
  const [keyword, setKeyword] = useState('');

  // 2) API(모의) 호출 결과를 저장하는 상태
  const [data, setData] = useState('');

  // 3) fetchData 함수 정의 및 메모이제이션
  //    - keyword가 바뀔 때만 새로운 함수가 재생성됨
  const fetchData = useCallback(() => {
    console.log('데이터 불러오는 중...');

    // 실제 API 호출 대신 setTimeout으로 1초 지연 후 결과 설정
    setTimeout(() => {
      // 백틱 안에 "${keyword}"를 넣어 검색어가 반영된 메시지 생성
      setData(`"${keyword}"에 대한 검색 결과`);
    }, 1000);
  }, [keyword]);

  // 4) keyword가 변경될 때마다 자동으로 fetchData 호출
  useEffect(() => {
    console.log('useEffect() 실행');

    // keyword가 빈 문자열이 아닐 때만 API 호출
    if (keyword) {
      fetchData();
    }
  }, [fetchData]); // fetchData(즉 keyword)가 바뀔 때마다 실행

  // 5) 화면에 렌더링할 JSX
  return (
    <div>
      <h2>검색 예제 (단일 컴포넌트)</h2>

      {/* 입력 필드: 사용자가 검색어를 입력하면 keyword 상태 업데이트 */}
      <input
        type="text"
        placeholder="검색어 입력"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      {/* API 호출 결과 출력 */}
      <p>결과: {data}</p>

      {/* 수동 검색 버튼: 클릭 시 fetchData 직접 호출 */}
      <button onClick={fetchData}>수동 검색</button>
    </div>
  );
}
