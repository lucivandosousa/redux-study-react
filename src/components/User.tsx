import { useSelector } from "react-redux";

export default function User() {

  const user = useSelector((state: any) => state.user.name);

  return (
    <h1>Usuário: {user}</h1>
  )
}
