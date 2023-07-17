<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    titleSize: {
        type: String,
    },
})
</script>

<template>
    <div>
        <h1 :style="{
            maxWidth: titleSize,
        }">{{ title }}</h1>
        <p>
            <slot />
        </p>
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1rem;
    text-align: left;
    justify-content: left;

    h1 {
        color: var(--title-color, #22495F);
        font-family: Nunito Sans;
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        /* 3.6rem */
        text-align: left;
        width: 100%;
    
    
        @media screen and (max-width: 768px) {
            font-size: 2.25rem;
        }
    }

    p {
        color: var(--text-color, #374151);
        font-family: Nunito Sans;
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 400;
        line-height: 190%;
        /* 2.1375rem */
        text-align: left;
        width: 100%;
    }
}
</style>