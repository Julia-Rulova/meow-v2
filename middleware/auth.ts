import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();

  if (!store.isAuth) {
    return navigateTo("/sign-in");
  }
});
