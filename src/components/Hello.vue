<template>

  <section>

    <div class="row">
      <div class="col-md-2 col-xs-4">
        <div class="h6">
          <ui-switch label="自動儲存" :value="autoSave" v-model="autoSave" @change="save"></ui-switch>
        </div>
      </div>
    </div>

    <calculator :data.sync="data" @change="saveData"></calculator>

    <add-row @click="addColumn"></add-row>

    <hr>

    <share></share>
    <ad></ad>

  </section>

</template>

<script>
  import Vue from 'vue';
  import _ from 'lodash';
  import Calculator from './Calculator';
  import AddRow from './AddRow';
  import Share from './FBShare';
  import Ad from './GoogleAd';

  export default {
    name: 'hello',
    data() {
      return {
        autoSave: true,
        data: [],
        mockData: {
          name: '',
          sheet: '',
          package: '',
          price: '',
          subtotal: '',
        },
      };
    },
    methods: {
      addColumn(count) {
        _.times(count, () => {
          this.data.push(Vue.util.extend({}, this.mockData));
        });
      },
      saveData() {
        this.save(true);
      },
      save(value) {
        if (value) {
          localStorage.setItem('data', JSON.stringify(this.data));
        } else {
          localStorage.setItem('data', JSON.stringify([]));
        }

        localStorage.setItem('autoSave', value);
      },
      loadData() {
        try {
          if (localStorage) {
            const data = JSON.parse(localStorage.getItem('data'));
            if (data && data.length) {
              this.data = data;
            }

            if (localStorage.getItem('autoSave')) {
              this.autoSave = JSON.parse(localStorage.getItem('autoSave'));
            }
          }
        } catch (e) {
          //
        }

        if (!this.data || !this.data.length) {
          this.addColumn(5);
        }
      },
    },
    mounted() {
      this.loadData();
    },
    components: { Calculator, AddRow, Share, Ad },
  };
</script>
