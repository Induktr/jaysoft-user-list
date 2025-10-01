<script lang="ts" setup>
</script>

<template>
    <div class="container">
        <div class="container-user-info">
            <slot name="name"/>
            <slot name="email"/>
            <slot name="phone"/>
        </div>
        <slot />
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    background-color: var(--color-surface);
    padding: 24px;
    color: var(--color-main-text);
    border-radius: 8px;
    transition: all 200ms ease;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.container:hover {
    box-shadow: 0 4px 12px rgba(66, 184, 131, 0.15);
    transform: translateY(-2px);
    background-color: var(--color-accent);
    cursor: pointer;
}

.container-user-info {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.container-user-info h3 {
    margin: 0;
    padding: 0;
}

.container-user-info p {
    margin: 0;
    padding: 0;
    color: var(--color-main-text);
    opacity: 0.8;
}
</style>