export interface IUser {
  id: string;
  name: string;
  login: string;
  ava: string;
  phone: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      isAuth: false,
      user: {} as IUser,
    };
  },

  actions: {
    getUser() {
      const newUser = {
        id: "12345",
        name: "Test",
        login: "test.test",
        ava: "",
        phone: "+77777777777",
      };

      this.user = newUser;
      this.isAuth = true;
    },
  },
});
