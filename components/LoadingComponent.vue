<template>
  <div class="loading-wrapper">
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loading-wrapper {
  margin: 0 auto;
  width: 8rem;
  min-height: 800px;
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: 17rem;

}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #6d6662;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #6d6662 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>