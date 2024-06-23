import { Link } from "react-router-dom";

export default function PleaseLogin() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2>로그인 후 이용해주세요.</h2>
      <Link to="/login" className="font-bold underline underline-offset-4">
        로그인 하러 가기→
      </Link>
    </div>
  );
}
