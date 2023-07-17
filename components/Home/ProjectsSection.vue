<template>
    <div id="Project">
        <HomeComponentsTextWithLine>PROJECTS WE HAVE DONE</HomeComponentsTextWithLine>
        <HomeComponentsParagraf titleSize="100%" title="We are all about creating a place where girls can thrive">
        </HomeComponentsParagraf>
        <div id="list">
            <HomeComponentsProjectCard title="Mission smile 1k: Outdoor charity" v-for="i in 1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
            </HomeComponentsProjectCard>
        </div>
    </div>
</template>

<style scoped lang="scss">
#Project {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 1rem;
    text-align: left;
    justify-content: center;
    padding: 5%;
    min-height: 100vh;
    height: fit-content;

    #list {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>