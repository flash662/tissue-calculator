<template>
  <div>
    <div class="col-xs-8 col-md-2">

      <div class="input-group">
        <div class="input-group-addon">增加欄位</div>
        <input type="text" v-model="count" class="form-control" />
      </div>

    </div>

    <div class="col-xs-4 col-md-2">
      <button type="button" class="btn btn-primary btn-sm" @click="onClick">
        <i class="fa fa-plus"></i>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      count: {
        type: Number,
        default: 5,
      },
    },
    methods: {
      onClick(e) {
        this.$emit('click', this.count, e);
      },
    },
  };
</script>
