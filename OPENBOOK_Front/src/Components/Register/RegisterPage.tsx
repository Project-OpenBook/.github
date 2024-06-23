import RegisterInput from "./RegisterInput";
import { useRegisterUser } from "../../Hooks/useRegister";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const {
    mutate,
    email,
    name,
    nickname,
    password,
    passwordCheck,
    setEmail,
    setName,
    setNickName,
    setPassword,
    setPasswordCheck,
  } = useRegisterUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isPasswordSame()) {
      return alert("비밀번호가 일치하지 않습니다.");
    }
    mutate();
  };

  function emailCheck(emailAddress: string) {
    const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    return email_regex.test(emailAddress);
  }

  function isPasswordSame() {
    return password === passwordCheck;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-1/2 h-full justify-center items-center shadow-md border-b-2 border-r-2 p-5">
        <img src="/images/logos/logo_wide.png" className="w-1/2" />
        <h1 className="font-bold text-xl">회원가입</h1>
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
          <RegisterInput
            label="이메일"
            placeholder="OpenBook에서 사용하실 이메일을 입력해주세요."
            type="text"
            value={email}
            setValue={setEmail}
            validate={emailCheck}
          />
          <RegisterInput
            label="닉네임"
            placeholder="OpenBook에서 사용하실 닉네임을 입력해주세요."
            type="text"
            value={nickname}
            setValue={setNickName}
          />
          <RegisterInput
            label="이름"
            placeholder="OpenBook의 예약 기능을 이용할 때 사용될 이름을 입력해주세요."
            type="text"
            value={name}
            setValue={setName}
          />
          <RegisterInput
            label="비밀번호"
            placeholder="OpenBook에서 사용하실 비밀번호를 입력해주세요."
            type="password"
            value={password}
            setValue={setPassword}
          />
          <RegisterInput
            label="비밀번호 확인"
            placeholder="비밀번호를 한번 더 입력해주세요."
            type="password"
            value={passwordCheck}
            setValue={setPasswordCheck}
            validate={isPasswordSame}
          />
          <input
            type="submit"
            value="회원가입"
            className="hover:cursor-pointer bg-[#0064FF] rounded-md text-white h-10 font-bold mt-5"
          />
        </form>
      </div>
    </div>
  );
}
