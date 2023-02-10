import { selectAuthState, setAuthState } from "@/store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button } from "antd";

export default function ProductList() {
  const authState = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
    dispatch(setAuthState(!authState));
  };

  console.log('authState', authState)

  const handleLink = () => {
    router.push("/");
  };
  return (
    <>
      <div>{authState ? "Logged in" : "Not Logged In"}</div>
      <Button onClick={handleClick}>{authState ? "Logout" : "Login"}</Button>
      <Button onClick={handleLink}>首页</Button>
    </>
  );
}
