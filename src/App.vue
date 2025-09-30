<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import UserCard from './components/UserCard.vue';
const api = fetch('https://jsonplaceholder.typicode.com/users')
const users = ref([])
</script>

<template>
  <div class="container">
    <div class="container-input-search">
      <input class="input-search" type="text" placeholder="Пошук користувачів..."/>
    </div>
    <div class="container-user-card">
      <UserCard>
        <template #name>
          <div class="info-name">
            <h3>Nikita</h3>
          </div>
        </template>
        <template #email>
          <div class="info-name">
            <p>example@gmail.com</p>
          </div>
        </template>
        <template #phone>
          <div class="info-name">
            <p>+380 689 621 643</p>
          </div>
        </template>
      </UserCard>
      <UserCard>
        <template #name>
          <div class="info-name">
            <h3>Nikita</h3>
          </div>
        </template>
        <template #email>
          <div class="info-name">
            <p>example@gmail.com</p>
          </div>
        </template>
        <template #phone>
          <div class="info-name">
            <p>+380 689 621 643</p>
          </div>
        </template>
      </UserCard>
      <UserCard>
        <template #name>
          <div class="info-name">
            <h3>Nikita</h3>
          </div>
        </template>
        <template #email>
          <div class="info-name">
            <p>example@gmail.com</p>
          </div>
        </template>
        <template #phone>
          <div class="info-name">
            <p>+380 689 621 643</p>
          </div>
        </template>
      </UserCard>
      <UserCard>
        <template #name>
          <div class="info-name">
            <h3>Nikita</h3>
          </div>
        </template>
        <template #email>
          <div class="info-name">
            <p>example@gmail.com</p>
          </div>
        </template>
        <template #phone>
          <div class="info-name">
            <p>+380 689 621 643</p>
          </div>
        </template>
      </UserCard>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

.container-input-search {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
}

.input-search {
  transition: all 200ms ease;
  border: 2px solid transparent;
}

.input-search:hover {
  border-color: var(--color-accent);
}

.input-search:focus {
  border-color: var(--color-accent);
}

.container-user-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 8px;
}
</style>
