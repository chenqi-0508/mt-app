<template>
    <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
      <div class="choose" :class="disabled ? 'disabled' : ''">
        <span>{{ value }}</span>
        <i class="el-icon-caret-bottom"></i>
        <div :class="{'mt-content': true,  'active' : showWrapperActive} ">
          <h2>{{ title }}</h2>
          <div class="wrapper">
            <div class="col" v-for="( item, index ) in list" :key="index">
              <span class="mt-item" :class="{'active': item.name === value}" @click="changeValue(item)">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          showAction: false
        }
      },
      props: [
        'value',
        'list',
        'title',
        "disabled",
        'showWrapperActive'
      ],
      methods: {
        showWrapper(e){
          e.stopPropagation();
          if (!this.disabled){
            this.$emit('change_active', true);
          }
        },
        documentClick() {
          this.$emit('change_active', false);
        },
        changeValue(item) {
          const enent = window.event;
          enent.stopPropagation();
          this.$emit('change',item);
          this.$emit('change_active', false);
        }
      }
    }
</script>

<style lang="scss">
  @import "@/assets/css/changecity/select.scss";
</style>
