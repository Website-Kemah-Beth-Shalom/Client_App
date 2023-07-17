<script setup>
const props = defineProps({
    bgcolor: {
        type: String,
        default: 'rgba(9, 106, 86, 1)'
    },
    color: {
        type: String,
        default: 'white'
    }
})
</script>
<template>
    <button :style="{
        backgroundColor: bgcolor,
        color: color
    }">
        <slot />
    </button>
</template>

<style scoped lang="scss">
button {
    width: fit-content;
    padding: 1rem 2rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.25rem;
    backdrop-filter: blur(40px);
    transition: all 0.2s ease-in-out;
    font-size: 1.25rem;

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        width: 100%;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
}
</style>