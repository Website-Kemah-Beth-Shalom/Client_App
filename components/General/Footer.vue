
<script setup>
import Logo from "@/assets/image/logo.png";
import WA from "@/assets/image/wa.svg";
import Instagram from "@/assets/image/instagram.svg";
import Youtube from "@/assets/image/youtube.svg";

</script>
<template>
    <div id="Footer">
        <div id="top">
            <div id="left">
                <div class="NavMenu-Item">
                    <router-link to="/">Home</router-link>
                </div>
                <div class="NavMenu-Item">
                    <router-link to="/about">Dokumentasi</router-link>
                </div>
                <div class="NavMenu-Item">
                    <router-link to="/contact">Contact</router-link>
                </div>
            </div>
            <div id="right">
                <button id="Donasi">
                    Donasi
                </button>
            </div>
        </div>
        <div id="center">
            <div id="icon">
                <img :src="Instagram" alt="Instagram" />
            </div>
            <div id="icon center">
                <img :src="WA" alt="WA" />
            </div>
            <div id="icon">
                <img :src="Youtube" alt="Youtube" />
            </div>
        </div>
        <div id="bottom">
            <div id="left" class="bottom_text left">
                Copyright © Yayasan Shekinah Glory
            </div>
            <div id="center">
                <img :src="Logo" alt="Logo" />
            </div>
            <div id="right" class="bottom_text right">
                "Growing In Love Impacting Life"
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#Footer {
    background-color: var(--secondary);
    width: 100%;
    height: fit-content;
    padding: 0 12rem;
    padding-bottom: 0 !important;
    display: flex;
    flex-direction: column;

    #top {
        margin-block: 20px;
        border-radius: 9.375rem;
        background: #FFF;
        width: 70rem;
        height: fit-content;
        min-height: 5rem;
        flex-shrink: 0;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 5rem;

        #left {
            display: flex;
            flex-direction: row;
            gap: 4rem;

            #NavMenu {
                display: flex;
                gap: 2rem;

                .NavMenu-Item {
                    color: #292F36;
                    text-align: center;
                    font-family: Jost;
                    font-size: 1rem;
                    font-style: normal;
                    font-weight: 400;
                    width: 7.8125rem;
                    height: 2.5625rem;
                    flex-shrink: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }

        #right {
            #Donasi {
                border-radius: 0.375rem;
                background: #704012;
                color: #FFF;
                font-family: Jost;
                font-size: 1rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                width: 7.8125rem;
                height: 2.5625rem;
                flex-shrink: 0;
            }
        }
    }

    #center {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 2.5rem;
        margin-block: 20px;

        #icon {
            width: 4rem;
            height: auto;
            aspect-ratio: 1/1;
            background: #ffffff;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

        }
    }

    #bottom {
        height: 5rem;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1rem;

        .bottom_text {
            color: #292F36;
            text-align: right;
            font-family: Jost;
            font-size: 1rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            width: 22rem;
            display: flex;
            justify-content: center;
            align-items: center;

            &.left {
                text-align: left;
            }

            &.right {
                text-align: right;
            }
        }

        #center {
            $width: 22rem;
            $height: 10rem;
            padding-top: 1rem;
            background-color: var(--primary);
            width: $width;
            height: $height;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            transform: translateY(2rem);
            border-radius: 3rem;
            position: relative;

        }
    }
}
</style>