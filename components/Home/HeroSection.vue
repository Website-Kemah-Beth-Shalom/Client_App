<script setup>
import Image from "@/assets/image/Hero.png";
</script>


<template>
    <div id="HeroSection">
        <img :src="Image" id="HeroImage" alt="Hero Section Image" class="w-full h-full object-cover" />
        <div id="content">
            <div id="top">
                <h1>
                    Selamat Datang di Website
                    Kemah Beth Shalom
                </h1>
            </div>
            <div id="center">
                <button class="button_cta">
                    What we do
                </button>
                <button id="CTA_play_video">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <g filter="url(#filter0_b_1_915)">
                            <path
                                d="M0 12.2139C0 5.58645 5.37258 0.213867 12 0.213867C18.6274 0.213867 24 5.58645 24 12.2139C24 18.8413 18.6274 24.2139 12 24.2139C5.37258 24.2139 0 18.8413 0 12.2139Z"
                                fill="#E8EBF0" />
                        </g>
                        <path
                            d="M8.99268 13.9282V10.3939C8.99268 8.88722 8.99268 8.13388 9.48339 7.84348C9.97411 7.55309 10.6345 7.91564 11.9552 8.64075L14.9846 10.304C16.3231 11.0388 16.9924 11.4062 17.0071 11.9807C17.0218 12.5551 16.3722 12.9563 15.0731 13.7587L12.0437 15.6298C10.6936 16.4637 10.0185 16.8807 9.50559 16.5946C8.99268 16.3085 8.99268 15.5151 8.99268 13.9282Z"
                            fill="#096A56" />
                        <defs>
                            <filter id="filter0_b_1_915" x="-80" y="-79.7861" width="184" height="184"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="40" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_915" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_915"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    Play Video
                </button>
            </div>
            <!-- <div id="bottom">
                <p>230 children under our care</p>
                <span></span>
                <p>10 years of experience</p>
            </div> -->
        </div>
    </div>
</template>


<style lang="scss" scoped>
#HeroSection {
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    /*margin-top: 78px;*/


    @media screen and (max-width: 1000px) {
        margin-top: 71px;
        min-height: fit-content;
    }

    #HeroImage {
        filter: brightness(0.5);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }


    #content {
        padding: 10% 5%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;

        #top {
            h1 {
                color: var(--bg-color, #E8EBF0);
                font-family: Nunito Sans;
                font-size: 4rem;
                font-style: normal;
                font-weight: 900;
                line-height: 120%;
                /* 4.8rem */
                width: 45.75rem;

                @media screen and (max-width: 768px) {
                    font-size: 2rem;
                    width: 100%;
                }
            }
        }

        #center {
            display: flex;
            align-items: center;
            justify-content: left;
            gap: 10px;

            @media screen and (max-width: 768px) {
                flex-direction: column;
                gap: 1rem;
            }

            .button_cta {
                padding: 1rem 2rem;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                gap: 0.625rem;
                border-radius: 0.25rem;
                background: var(--bg-color, #E8EBF0);
                backdrop-filter: blur(40px);
                transition: all 0.3s ease-in-out;

                &:hover {
                    cursor: pointer;
                    background-color: rgba(255, 255, 255, 0.2);
                }

                @media screen and (max-width: 1000px) {
                    margin-block: 20px;
                }
            }

            #CTA_play_video {
                color: white;
                display: flex;
                gap: 0.625rem;
                padding: 1rem 2rem;
                border-radius: 10px;
                transition: all 0.3s ease-in-out;

                &:hover {
                    cursor: pointer;
                    background-color: rgba(0, 0, 0, 0.2);
                }
            }


        }

        #bottom {
            position: absolute;
            left: 0%;
            right: 0%;
            margin: auto;
            padding-inline: 7.5%;
            bottom: 10%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: white;

            span {
                width: 50%;
                border: 1px solid var(--bg-color, #E8EBF0);
            }

            @media screen and (max-width: 768px) {
                position: relative;
                flex-direction: column;
                gap: 1rem;
                bottom: 5%;
            }
        }

    }

}
</style>