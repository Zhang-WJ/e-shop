<template>
  <div class="order-item order-item-infos-parent">
    <div class="order-item-infos">
      <div>订单总价：{{ totalPrice | money }}</div>
      <div>商品总数量：{{ totalAmount }}</div>
    </div>
    <div class="image" v-for="item of order.items" :key="item.id">
      <BaseImage ref="image" :src="item.storeItem.img" />
      <div>{{item.count}}</div>
      <div>{{item.storeItem.price}}</div>
    </div>
  </div>
</template>

<script>
import BaseImage from "./BaseImage";
export default {
  name: "OrderItem",
  props: {
    order: {
      require: true
    }
  },

  computed: {
    totalPrice: function() {
      return this.order.items.reduce(
        (cur, pre) => cur + pre.count * pre.storeItem.price,
        0
      );
    },
    totalAmount: function() {
      return this.order.items.reduce((cur, pre) => cur + pre.count, 0);
    }
  },
  components: {
    BaseImage
  }
};
</script>

<style lang="stylus" scoped>
.order-item
  .image
    margin-right 12px
    position relative
    transition all .3s cubic-bezier(0.0, 0.0, 0.2, 1)

    .base-image
      width 100px
      height @width
</style>
