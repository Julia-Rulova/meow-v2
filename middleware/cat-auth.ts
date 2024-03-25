export default defineNuxtRouteMiddleware((to, from) => {
  const loggenIn = useCookie("loggenIn");

  if (!loggenIn.value && to.path !== "/sign-in") {
    return navigateTo("/sign-in");
  } else if (loggenIn.value && to.path !== "/my-cats") {
    return navigateTo("/my-cats");
  }
});
