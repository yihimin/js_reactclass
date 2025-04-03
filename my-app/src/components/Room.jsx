import roomIconA from '../assets/room_icon_A.png';
import roomIconB from '../assets/room_icon_B.png';
import roomIconC from '../assets/room_icon_C.png';
import roomIconD from '../assets/room_icon_D.png';
import roomIconE from '../assets/room_icon_E.png';

const roomIcons = {
  A: roomIconA,
  B: roomIconB,
  C: roomIconC,
  D: roomIconD,
  E: roomIconE,
};

function Room(props) {
  const styles = {
    wrapper: {
      margin: 8,
      padding: 40,
      display: 'flex',
      flexDirection: 'row',
      border: '1px solid grey',
      borderRadius: 16,
      backgroundColor: props.status === '사용 불가능' ? '#E2E2E2' : '#ffffff',
    },
    contentContainer: {
      marginLeft: 10,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginBottom: 10,
    },
    nameText: {
      color: 'black',
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 15,
    },
    statusText: {
      color: 'black',
      fontSize: 16,
      marginBottom: 15,
    },
  };

  const icon = roomIcons[props.code];
  return (
    <div style={styles.wrapper}>
      <div style={styles.contentContainer}>
        <img src={icon} alt={`room-${props.code}`} style={styles.image} />
        <span style={styles.nameText}>[1F] {props.name}</span>
        <span style={styles.statusText}>{props.status}</span>
      </div>
    </div>
  );
}

export default Room;
