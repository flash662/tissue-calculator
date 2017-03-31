<template>

  <div class="col-sm-12 visible-sm-block visible-xs-block">
    <div class="panel panel-default" :class="{ 'panel-success': highlight }">
      <div class="panel-heading">

        <div class="row">
          <div class="col-sm-10 col-xs-10">
            <div class="input-group">
              <div class="input-group-addon">{{index}}</div>
              <input type="text" class="form-control inline-block" v-model="data.name" placeholder="名稱"/>
            </div>
          </div>

          <div class="col-sm-2 col-xs-2">
            <button type="button" class="btn btn-sm btn-danger" @click="$emit('remove')">
              <i class="fa fa-remove"></i>
            </button>
          </div>
        </div>

      </div>

      <table class="table">
        <tbody>
        <tr :class="{ success: highlight }">
          <td>
            <div class="input-group">
              <input type="number" class="form-control" v-model="data.sheet"/>
              <div class="input-group-addon">抽</div>
            </div>
          </td>
          <td>
            <div class="input-group">
              <input type="number" class="form-control" v-model="data.package"/>
              <div class="input-group-addon">包</div>
            </div>
          </td>
        </tr>
        <tr :class="{ success: highlight }">
          <td>
            <div class="input-group">
              <input type="number" class="form-control" v-model="data.price"/>
              <div class="input-group-addon">元</div>
            </div>
          </td>
          <td>
            <div class="input-group">
              <div class="input-group-addon">單價/抽</div>
              <input type="text" class="form-control" v-model="data.subtotal" readonly/>
            </div>
          </td>
        </tr>
        <tr :class="{ success: highlight }">
          <td colspan="4">
            <input type="text" class="form-control" v-model="data.note" placeholder="備註"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {};
    },
    props: ['index', 'data', 'highlight'],
  };
</script>
