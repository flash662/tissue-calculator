<template>
  <tr>
    <td>{{ index }}</td>
    <td><input type="text" class="form-control" v-model="data.name"/></td>
    <td><input type="number" class="form-control" v-model="data.sheet" /></td>
    <td><input type="number" class="form-control" v-model="data.package" /></td>
    <td><input type="number" class="form-control" v-model="data.price" /></td>
    <td><input type="text" class="form-control" v-model="data.subtotal" readonly /></td>
    <td><input type="text" class="form-control" v-model="data.note"/></td>
    <td>
      <button type="button" class="btn btn-danger btn-sm" @click="$emit('remove')">
        <i class="fa fa-remove"></i>
      </button>
    </td>
  </tr>
</template>

<script>
  export default {
    props: ['data', 'index'],
  };
</script>
