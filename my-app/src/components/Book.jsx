import React from 'react';

function Book(props) {
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1>
      <h2>{`이 책은 총 ${props.numOfPage}페이지입니다.`}</h2>
    </div>
  );
}

export default Book;
