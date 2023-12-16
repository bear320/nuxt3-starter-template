<template>
  <header>
    <nav class="container">
      <h1>Header</h1>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: var(--header-height);
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  color: #fff;

  nav {
    padding: 0 1rem;

    h1 {
      font-size: var(--h1-font-size);
      text-align: center;
    }
  }
}
</style>
