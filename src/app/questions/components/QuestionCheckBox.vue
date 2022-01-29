<template>
  <div class="custom-check-box">
    <input type="checkbox" :checked="val" />
    <label></label>
  </div>
</template>

<script>
export default {
  props: ["val"],
};
</script>

<style lang="scss" scoped>
.custom-check-box {
  z-index: 1;
}
</style>
