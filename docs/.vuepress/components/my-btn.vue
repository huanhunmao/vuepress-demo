<template>
  <button @click="handleClick()">my-btn</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert("点击成功");
    },
  },
};
</script>

<style scoped></style>
