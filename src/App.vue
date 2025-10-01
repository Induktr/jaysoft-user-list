<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import UserCard from './components/UserCard.vue';

type User = {
  id: number;
  name: string;
  email: string;
  address: { city: string };
};

const users = ref<User[]>([]);
const searchQuery = ref('');

onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    
    const data = await response.json() as User[];
    users.value = data;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }
});

const filteredUsers = computed(() => {
  if (!searchQuery.value.trim()) {
    return users.value;
  }
  return users.value.filter(user =>
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<template>
  <div class="container">
    <div class="container-input-search">
      <input 
        class="input-search" 
        type="text" 
        placeholder="Пошук користувачів за іменем..." 
        v-model="searchQuery" 
      />
    </div>

    <div v-if="filteredUsers.length > 0" class="container-user-card">
      <UserCard v-for="user in filteredUsers" :key="user.id">
        <template #name>
          <h3>{{ user.name }}</h3>
        </template>
        <template #email>
          <p>{{ user.email }}</p>
        </template>
        <template #city>
          <p>City: {{ user.address.city }}</p>
        </template>
      </UserCard>
    </div>

    <div v-else class="empty-state">
      <h3>Користувача не знайдено</h3>
      <p>Спробуйте змінити ваш пошуковий запит.</p>
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
  width: 100%;
  max-width: 300px;
  padding: 12px;
  border-radius: 8px;
  border: 2px solid var(--color-surface);
  background-color: var(--color-surface);
  color: var(--color-main-text);
  font-size: 16px;
  outline: none;
  transition: border-color 200ms ease;
}

.input-search:focus {
  border-color: var(--color-accent);
}

.container-user-card {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
  color: var(--color-main-text);
  opacity: 0.6;
}

.empty-state h3 {
  font-size: 20px;
  margin-bottom: 8px;
}

.empty-state p {
  font-size: 16px;
}
</style>