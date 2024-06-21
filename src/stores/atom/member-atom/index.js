import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "user",
  storage: sessionStorage,
});
export const memberState = atom({
  key: "memberState",
  default: {
    userId: "",
    userEmail: "",
  },

  effects_UNSTABLE: [persistAtom],
});
