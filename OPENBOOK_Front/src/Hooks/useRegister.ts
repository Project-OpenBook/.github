import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface registerData {
  email: string;
  name: string;
  nickname: string;
  password: string;
}

const fetchSignUp = (registerData: registerData): Promise<void> => {
  const response = fetch("http://52.79.91.214:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  }).then((response) => {
    if (!response.ok) throw new Error("err");
    return response.json();
  });

  return response;
};

export const useRegisterUser = () => {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [name, setName] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const { mutate } = useMutation({
    mutationFn: () => fetchSignUp({ email, password, nickname, name }),
    onError: () => {
      alert("입력값 중 형식에 맞지 않는 입력값이 있습니다.");
    },
    onSuccess: () => {
      navi("/login");
    },
  });

  return {
    mutate,
    email,
    setEmail,
    password,
    setPassword,
    nickname,
    setNickName,
    name,
    setName,
    passwordCheck,
    setPasswordCheck,
  };
};
