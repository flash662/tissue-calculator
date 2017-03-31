<template>

  <div class="col-md-12 visible-md-block visible-lg-block">
    <table class="table table-striped">
      <thead>
      <tr>
        <th></th>
        <th>名稱</th>
        <th style="width: 80px">抽</th>
        <th style="width: 80px">包</th>
        <th style="width: 100px">價錢</th>
        <th style="width: 150px">單價/抽</th>
        <th>備註</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(d, i) in data" is="tr-row"
          :data="d" :index="i+1"
          :class="{ success: highlight == d}"
          @remove="$parent.remove(i)"></tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  import TrRow from './Tr';

  export default {
    props: ['data', 'highlight'],
    data() {
      return {};
    },
    components: { TrRow },
  };
</script>
