import Room from './Room';

function RoomList() {
  const styles = {
    wrapper: {
      display: 'flex',
    },
  };
  return (
    <div style={styles.wrapper}>
      <Room code="A" name="Cube A" status="사용 가능" />
      <Room code="B" name="Cube B" status="사용 가능" />
      <Room code="C" name="Cube C" status="사용 가능" />
      <Room code="D" name="Cube D" status="사용 불가능" />
      <Room code="E" name="Cube E" status="사용 가능" />
    </div>
  );
}

export default RoomList;
