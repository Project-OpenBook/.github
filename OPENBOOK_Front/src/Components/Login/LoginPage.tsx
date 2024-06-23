import LoginInput from "./LoginInput";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "../../Hooks/useLoginUser";

export default function LoginPage() {
  const navi = useNavigate();
  const { mutate, email, password, setEmail, setPassword } = useLoginUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="flex justify-center items-center min-h-screen font-light">
      <div className="flex flex-col w-1/2 h-full justify-center items-center shadow-md border-b-2 border-r-2 p-5">
        <img
          src="/images/logos/logo_wide.png"
          className="w-1/3"
          alt="로그인이미지"
        />
        <h1 className="font-bold text-xl">로그인</h1>
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            placeholder="이메일을 입력해주세요."
            label="이메일"
            value={email}
            setValue={setEmail}
          />
          <LoginInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            label="비밀번호"
            value={password}
            setValue={setPassword}
          />
          <input
            type="submit"
            value="로그인"
            className="hover:cursor-pointer bg-[#0064FF] rounded-md text-white h-10 font-bold"
          />
          <button
            className="ml-auto border-black mt-1"
            onClick={() => {
              navi("/register");
            }}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
