<script setup>
import Image from "@/assets/image/HeroSection.webp";
const props = defineProps({
    title: {
        type: String,
        default: "Title"
    }
})
</script>

<template>
    <div id="Card">
        <img :src="Image" alt="Project Image" />
        <h2>{{ title }}</h2>
        <p>
            <slot />
        </p>
        <HomeComponentsButton bgcolor="rgba(232, 235, 240, 1)" color="rgba(9, 106, 86, 1)">
            Learn More
        </HomeComponentsButton>
    </div>
</template>


<style scoped lang="scss">
#Card {
    display: flex;
    position: relative;
    width: 22.5625rem;
    height: 26.3125rem;
    padding: 0rem 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2.9375rem;
    flex-shrink: 0;
    border-radius: 1.25rem;

    img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1.25rem;
        filter: brightness(0.5);
        z-index: -1;
    }

    h2 {
        color: #FFF;

        /* H3 */
        font-family: Roboto;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: 150%;
        /* 2.625rem */
    }

    p {
        color: #FFF;

        /* Paragraph */
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        /* 1.6rem */
    }
}
</style>
