<template>
    <div class="Layout">
        <GeneralNavbar />
        <slot />
        <GeneralFooter />
    </div>
</template>


<style scoped>
.Layout {
    position: relative;
    overflow-x: hidden;
}
</style>