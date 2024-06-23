const getAccessToken = (): string | null => {
  return localStorage.getItem("token");
};

const setAccessToken = (accessToken: string): void => {
  localStorage.setItem("token", accessToken);
};

const removeAccessToken = (): void => {
  localStorage.removeItem("token");
};

export { getAccessToken, setAccessToken, removeAccessToken };
