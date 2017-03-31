<template>

  <div class="row">

    <table-calculator
      :data.sync="data"
      :highlight="cheapest"
    ></table-calculator>

    <portlet-calculator
      v-for="(d, i) in data"
      :data.sync="d" :index="i+1"
      :key="i"
      :highlight="d == cheapest"
      @remove="remove(i)"
    ></portlet-calculator>

  </div>
</template>

<script>
  import _ from 'lodash';
  import TableCalculator from './calculators/Table';
  import PortletCalculator from './calculators/Portlet';

  export default {
    props: ['data'],
    watch: {
      data: {
        handler() {
          this.calcSubtotal();
          this.$emit('change', this.data);
        },
        deep: true,
      },
    },
    methods: {
      remove(index) {
        this.data.splice(index, 1);
      },
      calcSubtotal() {
        _.map(this.data, (data, index) => {
          const total = parseFloat(data.price) / (parseInt(data.sheet, 10)
            * parseInt(data.package, 10));
          this.data[index].subtotal = isNaN(total) ? '' : total.toFixed(5);
        });
      },
    },
    computed: {
      cheapest() {
        const data = _.filter(this.data, d => !_.isEmpty(d.subtotal));
        if (data.length) {
          return _.minBy(data, d => d.subtotal);
        }

        return null;
      },
    },
    components: { TableCalculator, PortletCalculator },
  };
</script>
