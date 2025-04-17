import React, { useRef } from 'react';

export default function TextInputWithFocusButton() {
  // 1) useRef로 빈 ref 객체 생성
  const inputElem = useRef(null);

  // 2) 버튼 클릭 시 호출될 함수
  const onButtonClick = () => {
    // current가 실제 <input> DOM을 가리키므로, .focus()로 포커싱!
    inputElem.current.focus();
    inputElem.current.value = '포커스!';
  };

  return (
    <div>
      {/* 3) ref 속성에 inputElem 연결 */}
      <input ref={inputElem} type="text" />

      {/* 4) 버튼 누르면 onButtonClick 실행 */}
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}
