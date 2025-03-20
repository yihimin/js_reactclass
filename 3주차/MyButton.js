// 🔹 MyButton 컴포넌트 (각 버튼에 다른 텍스트 전달)
function MyButton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
    'button',
    { onClick: () => setIsClicked(true) },
    isClicked ? 'Clicked!' : props.text, // 버튼의 기본 내용 (props로 전달받음)
  );
}

// 🔹 여러 개의 버튼을 포함하는 ButtonGroup 컴포넌트
function ButtonGroup() {
  return React.createElement(
    'div',
    null,
    React.createElement(MyButton, { text: '버튼 1' }), // 첫 번째 버튼
    React.createElement(MyButton, { text: '버튼 2' }), // 두 번째 버튼
    React.createElement(MyButton, { text: '버튼 3' }), // 세 번째 버튼
  );
}

// 🔹 ReactDOM을 사용하여 `#root`에 ButtonGroup 렌더링
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(ButtonGroup), domContainer);
