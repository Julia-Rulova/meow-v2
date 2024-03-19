import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();

  const isAuth = computed(() => store.isAuth);

  if (!isAuth && to.path !== "/sign-in") {
    return navigateTo("/sign-in");
  } else if (to.path !== "/my-cats") {
    return navigateTo("/my-cats");
  }
});
