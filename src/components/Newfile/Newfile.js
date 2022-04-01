function Newfile(props) {

  const styles = {
    border: "3px solid black",
    color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`,
  };
  



  const userList = props.src.map((user) => (
    <tr >
      <td style={styles}>
        {user.userId}
      </td>
      <td style={styles}>
        {user.id}
      </td>
      <td style={styles}>
        {user.title}
      </td>
    </tr>
  ));

  return (
    
      <table style={styles}>
        {userList}
      </table>
  );
  
};

export default Newfile;