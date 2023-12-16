<template>
  <div class="layout">
    <Header></Header>
    <div class="view">
      <slot></slot>
    </div>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  .view {
    margin-top: var(--header-height);
    min-height: calc(100dvh - var(--header-height));
  }
}
</style>
