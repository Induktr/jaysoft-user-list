<script lang="ts" setup></script>

<template>
  <div class="card-container">
    <div class="user-info">
      <slot name="name"></slot>
      <slot name="email"></slot>
      <slot name="city"></slot>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  background-color: var(--color-surface);
  padding: 20px;
  color: var(--color-main-text);
  border-radius: 12px;
  transition: all 200ms ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
.card-container:hover {
  box-shadow: 0 6px 16px rgba(66, 184, 131, 0.2);
  transform: translateY(-4px);
  cursor: pointer;
}
.user-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
h3, p {
  margin: 0;
  padding: 0;
  word-break: break-all;
}
p {
  opacity: 0.7;
}
</style>