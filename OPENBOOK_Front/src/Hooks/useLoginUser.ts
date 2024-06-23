import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { setAccessToken } from "../Api/Util/token";
import { useNavigate } from "react-router-dom";

interface loginData {
  email: string;
  password: string;
}

interface Token {
  token: string;
}

const fetchLogin = (loginData: loginData): Promise<Token> => {
  const response = fetch("http://52.79.91.214:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginData),
  }).then((response) => {
    if (!response.ok) throw new Error("err");
    return response.json();
  });

  return response;
};

export const useLoginUser = () => {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useMutation({
    mutationFn: () => fetchLogin({ email, password }),
    onError: () => {
      alert("아이디나 비밀번호를 잘못 입력하였습니다.");
    },
    onSuccess: (data: Token) => {
      navi("/");
      setAccessToken(data.token);
    },
  });

  return { mutate, email, setEmail, password, setPassword };
};
