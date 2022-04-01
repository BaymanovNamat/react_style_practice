import "./User2.css";


function User2(props) {


  const users = [
    {
      userId: 1,
      id: 1,
      age: 28,
      name: "Namat",
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 1,
      age: 38,
      name: "Namat",
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 1,
      age: 58,
      name: "Namat",
      title: "quidem molestiae enim",
    },
    {
      userId: 5,
      id: 2,
      age: 78,
      name: "Aziz",
      title: "quidem molestiae enim",
    },
    {
      userId: 2,
      id: 5,
      age: 27,
      name: "Gulnaz",
      title: "quidem molestiae enim",
    },
  ];


  const userList = users.map((user) => (
    <>
      <tr className="line">
        <td className="User2 modifygreen">
          {user.userId}
        </td>
        <td className="User2 modifyred">
          {user.id}
        </td>
        <td className="User2 modifyyellow">
          {user.age}
        </td>
        <td className="User2 modifyviolet">
          {user.name}
        </td>
        <td className="User2 modifyviocyan">
          {user.title}
        </td>
      </tr>
    </>
  ));


  return (
    <table className="User2">
      {userList}
    </table>
  );
}

export default User2;