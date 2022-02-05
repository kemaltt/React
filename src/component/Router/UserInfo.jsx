import { useParams } from "react-router-dom";

const UserInfo = () => {
  const { userId } = useParams();

  return <h1>{userId}</h1>;
};

export default UserInfo;
