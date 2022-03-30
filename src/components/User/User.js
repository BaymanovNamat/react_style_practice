import Newfile from "../Newfile/Newfile";

function User() {
  
  

  const users = [
    {
      userId: 1,
      id: 1,
      title: "quidem molestiae enim",
    },
    {
      userId: 1,
      id: 2,
      title: "sunt qui excepturi placeat culpa",
    },
    {
      userId: 1,
      id: 3,
      title: "omnis laborum odio",
    },
  ];

  return (
      <Newfile src={users} />
  );
  
}

export default User;
