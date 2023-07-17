<script setup>
import Image from "@/assets/image/HeroSection.webp";

const isOpen = useState('isOpen', () => false);
function toggleOpen() {
    isCrossed.value = !isCrossed.value;
    // console.log(isCrossed.value);
}
</script>
<template>
    <div id="AboutSection">
        <div id="left">
            <HomeComponentsTextWithLine>
                KNOW ABOUT US
            </HomeComponentsTextWithLine>
            <HomeComponentsParagraf title="We provide empowerment, support and care to the girl child">
                It is a foundation to support and care for the girl child also Advocating for laws that are fair they should
                be made to enforce respect and protection for girls.
                We work to prevent social ills against girls - eg prostitution, child abuse, rape, early marriage, drug
                addiction, and all forms of discrimination.
            </HomeComponentsParagraf>
            <HomeComponentsButton>
                Learn More
            </HomeComponentsButton>
        </div>
        <div id="right">
            <div class="content">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none">
                        <g filter="url(#filter0_b_1_895)">
                            <path
                                d="M0.701736 29.1711C0.701736 13.3926 13.4927 0.601562 29.2712 0.601562C45.0497 0.601562 57.8407 13.3926 57.8407 29.1711C57.8407 44.9496 45.0497 57.7406 29.2712 57.7406C13.4927 57.7406 0.701736 44.9496 0.701736 29.1711Z"
                                fill="white" />
                        </g>
                        <path
                            d="M22.1113 33.2527V24.8382C22.1113 21.2511 22.1113 19.4576 23.2796 18.7662C24.4479 18.0748 26.0201 18.938 29.1645 20.6643L36.3769 24.6241C39.5636 26.3736 41.1569 27.2484 41.1919 28.616C41.2269 29.9836 39.6805 30.9388 36.5875 32.8491L29.3751 37.3039C26.1608 39.2892 24.5536 40.2818 23.3325 39.6008C22.1113 38.9197 22.1113 37.0307 22.1113 33.2527Z"
                            fill="#1D2130" />
                        <defs>
                            <filter id="filter0_b_1_895" x="-79.2983" y="-79.3984" width="217.139" height="217.139"
                                filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="40" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_895" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_895"
                                    result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </button>
                <img :src="Image" alt="About Section" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#AboutSection {
    display: flex;
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    background-color: rgba(232, 235, 240, 1);
    display: flex;
    flex-direction: row;

    $width: 100%;
    $left_width: 0%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        min-height: fit-content;
    }


    #left {
        $left_width: 60%;

        @media screen and (max-width: 768px) {
            $left_width: 100%;
        }

        padding: 10% 5%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;
        width: $left_width;


    }

    #right {
        padding: 10%;
        width: calc(100% - #{$left_width});

        .content {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 10px;

            button {
                width: fit-content;
                position: absolute;
                z-index: 5;
                top: 50%;
                left: 0;
                right: 0;
                margin: auto;
                transition: all 0.2s ease-in-out;

                &:hover {
                    cursor: pointer;
                    opacity: 0.6;
                }
            }

            img {
                width: inherit;
                height: inherit;
                object-fit: cover;
                border-radius: 10px;
                filter: brightness(0.5);
                animation: 10s ease-in-out 0s infinite slideshow;

                @keyframes slideshow {

                    0%,
                    100% {
                        transform: scale(1.1);
                    }

                    15% {
                        transform: scale(1.2) rotate(3deg);
                    }


                    50% {
                        transform: scale(1);
                    }
                }
            }
        }
    }
}
</style>