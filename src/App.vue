<template>
  <div id="app">
    <div class="container">
      <h1>
        <img src="./assets/logo.png" alt="tissue calculator" />
        衛生紙計算機
      </h1>

      <router-view></router-view>

    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>
