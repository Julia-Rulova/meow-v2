import { useAuthStore } from "~/store/auth.store";

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useAuthStore();

  const isAuth = computed(() => store.isAuth);

  if ((to.path === "/profile" || to.path === "/my-cats") && !isAuth.value) {
    return navigateTo("/sign-in");
  }
});
