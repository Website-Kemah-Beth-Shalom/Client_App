<script setup>
import Image from "@/assets/image/HeroSection.webp";
</script>
<template>
    <div id="Event">
        <div id="top">
            <div id="card">
                <img :src="Image" alt="">
                <div id="content">
                    <p>You can contribute to provide a place for children with special needs!</p>
                    <div id="buttonsection">
                        <HomeComponentsButton>Join as a volunteer</HomeComponentsButton>
                        <HomeComponentsButton bgcolor="rgba(232, 235, 240, 1)" color="rgba(9, 106, 86, 1)">Donate
                        </HomeComponentsButton>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div id="bottom">
            <div id="title">
                <h2>Our Event</h2>
                <div></div>
            </div>
        </div> -->
    </div>
</template>

<style scoped lang="scss">
#Event {
    $width: 100%;
    width: $width;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    background-color: var(--bg-color, #E8EBF0);

    #top {
        #card {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            padding: 10%;
            border-radius: 20px;

            img {
                isolation: isolate;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: brightness(0.5);
                z-index: 0;
            }

            #content {
                position: relative;

                p {
                    color: var(--bg-color, #E8EBF0);
                    text-align: center;
                    font-family: Nunito Sans;
                    font-size: 3rem;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 120%;
                    /* 3.6rem */
                }

                #buttonsection {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 1rem;
                    margin-top: 2rem;
                }
            }
        }
    }

}
</style>