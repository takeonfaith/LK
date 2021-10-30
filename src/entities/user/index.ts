import { createStore } from "effector";

export const NO_USER_ID = "-1";

interface User {
  id: string;
  name: string;
  photo: string;
  course: number;
}

interface UserStore {
  currentUser: User;
}

export default createStore<UserStore>({
  currentUser: {
    id: "-1",
    name: "какой-то человек",
    photo: "",
    course: 0,
  },
});
