<template>
  <div class="container">
    <h2>Nuxt3 Starter Template <Icon name="logos:nuxt-icon" /></h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium numquam explicabo,
      perspiciatis, placeat quo impedit minus aperiam nam eum, voluptatem vitae ipsam aut omnis?
      Dignissimos hic aut doloribus exercitationem adipisci voluptas repellat rerum consequuntur
      facilis aliquid accusantium dolores rem temporibus est quo, unde pariatur dicta architecto. A
      molestias corrupti deserunt iusto distinctio exercitationem pariatur cum incidunt debitis illo
      consequuntur aspernatur repellat, earum repellendus omnis aliquid quaerat ab architecto
      necessitatibus, dignissimos sunt sed. Reiciendis recusandae velit magni, ipsa consequuntur
      molestiae pariatur? Unde, modi ab ea, consectetur eveniet molestiae libero ducimus minus in
      ipsam, enim architecto nostrum cupiditate. Animi tempore laborum optio!
    </p>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'My App',
  meta: [{ name: 'description', content: 'My amazing site.' }]
});
</script>

<style lang="scss" scoped>
.container {
  padding: 1rem;

  h2 {
    padding-bottom: 1.5rem;
    font-size: var(--h2-font-size);
  }

  p {
    text-align: justify;
  }
}
</style>
