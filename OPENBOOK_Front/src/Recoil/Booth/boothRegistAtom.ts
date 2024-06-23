import { atom } from "recoil";

const boothName = atom({
  key: "boothRegistName", //이때 key는 중복되지 않는 값
  default: "", //초기값
});
const boothDate = atom({
  key: "boothRegistDate", //이때 key는 중복되지 않는 값
  default: "", //초기값
});
export const boothImageState = atom<File | null>({
  key: "boothRegistImage", // key는 전역에서 유일해야 합니다.
  default: null, // 초기값은 null
});

const boothLocation = atom({
  key: "boothRegistLocation", //이때 key는 중복되지 않는 값
  default: "", //초기값
});

const boothDescription = atom({
  key: "boothRegistDescription", //이때 key는 중복되지 않는 값
  default: "", //초기값
});

const boothAccount = atom({
  key: "boothRegistAccount", //이때 key는 중복되지 않는 값
  default: "", //초기값
});
