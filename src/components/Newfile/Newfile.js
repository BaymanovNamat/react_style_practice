function Newfile(props) {
  const styles = {
    border: "3px solid black",
  };

  const userList = props.src.map((user) => (
    <tr>
      <td>
        {user.userId}
      </td>
      <td>
        {user.Id}
      </td>
      <td>
        {user.title}
      </td>
    </tr>
  ));

  return (
    
      <table style={styles}>
        {userList}
      </table>
  );
}

export default Newfile;