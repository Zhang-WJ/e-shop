<template>
  <BasePage class="page-orders">
    <div class="orders">
      <div class="orders-empty" v-if="!orderItemsLength">
        You order list is empty here!
      </div>
      <OrderItem
        v-for="order of orderItems"
        :key="order.orderId"
        :order="order"
      />
      <div class="order-footer" v-if="orderItemsLength">
        total {{ orderItemsLength }}
      </div>
    </div>
  </BasePage>
</template>

<script>
import OrderItem from "./OrderItem";
import BasePage from "./BasePage";
import { mapGetters } from "vuex";
export default {
  name: "PageOrderList",
  components: { OrderItem, BasePage },
  computed: {
    ...mapGetters("orders", ["orderItems", "orderItemsLength"])
  }
};
</script>

<style lang="stylus" scoped>
@import "../styles/imports"
</style>
