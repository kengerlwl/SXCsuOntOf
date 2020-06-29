<template>
  <div class="sign-body">
    <div class="overflow-hidden signCard">
      <router-view></router-view>
    </div>
  </div>
</template>
<style>
.sign-body {
  width: 100%;
  height: 60rem;
  display: flex;
  justify-content: center;
  background: url("../../assets/sign2.jpg") no-repeat fixed center center/cover;
}
.signCard {
  width: 40rem;
  position: absolute;
  top: 7rem;
  max-height: 40rem;
  opacity: 0.95;
  border-radius: 30px;
  background-color: white;
  padding: 1rem;
}
</style>
