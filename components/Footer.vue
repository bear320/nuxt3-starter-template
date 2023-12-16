<template>
  <footer>
    <div class="container">
      <h2>Footer</h2>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);

  .container {
    h2 {
      font-size: var(--h2-font-size);
      text-align: center;
    }
  }
}
</style>
