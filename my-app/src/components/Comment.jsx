import userIcon from '../assets/user_icon.png';

function Comment(props) {
  const styles = {
    wrapper: {
      padding: 8,
      display: 'flex',
      alignItems: 'center',
      border: '1px solid #ccc',
      borderRadius: 12,
    },
    image: { width: 50, height: 50, borderRadius: 25, marginRight: 12 },
  };

  return (
    <div style={styles.wrapper}>
      <img src={userIcon} alt="user" style={styles.image} />
      <div>
        <span style={{ fontWeight: 'bold', display: 'block' }}>
          {props.name}
        </span>
        <span>{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;
