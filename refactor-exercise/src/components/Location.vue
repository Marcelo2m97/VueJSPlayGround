<template>
  <div class="place">
    <img :src="destiny.img" width="235" height="300" />
    <h2>{{ destiny.name }}</h2>
    <p>{{ destiny.desc }}</p>
  </div>
</template>

<script>
export default {
  props: ["destiny"],
  template: "#destinationcomponent"
};
</script>

<style lang="scss" scoped>
.place {
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 450px;
  justify-content: center;
  background: white;
  border: 1px solid #ddd;
  padding: 20px 20px;
  margin: 10px;
  h2 {
    margin: 0;
    text-align: center;
  }
  img {
    margin: 10px;
    align-self: center;
  }
}
</style>
