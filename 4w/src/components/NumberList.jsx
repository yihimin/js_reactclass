import React from 'react';

// 학생 목록 배열 정의
// 각 학생 객체는 고유한 id와 이름(name)을 가지고 있음
const students = [
  {
    id: 1,
    name: 'Inje',
  },
  {
    id: 2,
    name: 'Steve',
  },
  {
    id: 3,
    name: 'Bill',
  },
  {
    id: 4,
    name: 'Jeff',
  },
];

// NumberList라는 이름의 React 컴포넌트 정의
export default function NumberList() {
  return (
    <ul>
      {/* 
        students 배열을 map()을 사용해서 순회하면서 
        각 학생 객체(student)를 li 요소로 렌더링 
      */}
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
        // key는 React가 각 요소를 고유하게 식별하기 위한 값
        // student.id는 고유하므로 key로 적절함
      })}
    </ul>
  );
}
