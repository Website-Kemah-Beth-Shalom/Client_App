<script setup>
// const props = defineProps({
//     text: {
//         type: String,
//         required: true
//     }
// })
</script>

<template>
    <div id="Know_about_us">
        <div></div>
        <p>
            <slot />
        </p>
    </div>
</template>

<style scoped lang="scss">
#Know_about_us {
    display: flex;
    align-items: center;
    gap: 1rem;

    div {
        border-bottom: 4px solid #22495F;
        width: 40px;
        height: 1px;
        content: '';
    }

    p {
        color: var(--title-color, #22495F);
        font-family: Nunito Sans;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: 0.125rem;
        text-transform: uppercase;
    }
}
</style>