import { createStore } from "effector";

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
