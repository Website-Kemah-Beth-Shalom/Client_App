<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Title'
    },
    src: {
        type: String,
        required: true,
        default: 'https://via.placeholder.com/150'
    },
    url: {
        type: String,
        required: true,
        default: 'https://via.placeholder.com/150'
    },
})
</script>
<template>
    <a :href="url">
        <img :src="src" alt="test">
        <p> {{ title }}</p>
    </a>
</template>

<style scoped lang="scss">
a {
    background-color: white;
    height: max-content;
    min-height: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    border-radius: 10px;

    p {
        color: black;
    }

    img {
        border-radius: 10px;
        height: 40px !important;
        aspect-ratio: 1/1;
        object-fit: cover;
    }

    &:hover {
        opacity: 0.6;
    }
}
</style>