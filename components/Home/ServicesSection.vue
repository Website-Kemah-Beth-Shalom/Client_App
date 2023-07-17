<script setup>
import Image from "@/assets/image/HeroSection.webp";
</script>

<template>
    <div id="Services">
        <div class="left">
            <HomeComponentsTextWithLine>
                WHAT WE DO
            </HomeComponentsTextWithLine>
            <HomeComponentsParagraf title="Some services we provide for our girls">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique.
            </HomeComponentsParagraf>
            <HomeComponentsServicesList v-for="i in 4" title="Advocacy">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </HomeComponentsServicesList>
        </div>
        <div class="right">
            <img :src="Image" alt="Hero Image" />
        </div>
    </div>
</template>


<style scoped lang="scss">
#Services {
    $width: 100%;
    $left-width: 50%;
    height: fit-content;
    min-height: 100vh;
    width: $width;
    display: flex;
    background: var(--bg-color, #E8EBF0);
    flex-direction: row;
    padding: 5%;

    .left {
        width: $left-width;
        display: flex;
        flex-direction: column;

        @media screen and (max-width: 768px) {
            width: 100%;
        }
    }

    .right {
        width: calc(100% - #{$left-width});
        padding: 5%;

        img {
            border-radius: 10px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        @media screen and (max-width: 768px) {

            display: none;
        }
    }
}
</style>