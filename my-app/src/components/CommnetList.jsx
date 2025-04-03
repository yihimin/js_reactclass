import Comment from './Comment';

function CommentList() {
  return (
    <div>
      <Comment name="홍길동" comment="안녕하세요!" />
      <Comment name="유재석" comment="리액트 재밌어요!" />
      <Comment name="강민경" comment="리액트 배워보고 싶어요!!" />
    </div>
  );
}

export default CommentList;
