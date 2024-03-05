<template>
  <section class="flex flex-col gap-6">
    <LayoutHeader></LayoutHeader>

    <div class="wrapper">
      <LayoutForm></LayoutForm>

      <div>cards</div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 25px;
  padding: 0 35px;
}
</style>