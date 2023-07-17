<script setup lang="ts">
const route = useRoute().path;
console.log(route);

const isOpen = useState('isOpen', () => false);
function toogleOpen() {
    isOpen.value = !isOpen.value;
    // console.log(isCrossed.value);
}
</script>

<template>
    <div id="Navbar">
        <div id="Logo" class=" relative">
            <div class="left-0 top-0 absolute text-zinc-700 text-2xl font-bold leading-[58px]">Christamelon</div>
            <div class="left-0 top-[27px] absolute text-orange-400 text-2xl font-light leading-[45px] tracking-[4px]">
                Foundation</div>
        </div>
        <button id="menu_btn" @click="toogleOpen">
            <svg v-if="isOpen === false" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                fill="none">
                <path d="M5.94043 24H41.5804" stroke="#666666" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M5.94043 12H41.5804" stroke="#666666" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M5.94043 36H41.5804" stroke="#666666" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="5.84961" y="4.72498" width="36" height="1.575" transform="rotate(45 5.84961 4.72498)"
                    fill="#131313" />
                <rect x="4.5" y="30.375" width="36" height="1.575" transform="rotate(-45 4.5 30.375)" fill="#131313" />
            </svg>
        </button>
    </div>
    <div class="content" v-if="isOpen">
        <div id="icon_list">
            <NuxtLink @click="toogleOpen" to="/" class="icon text-gray-700 text-base font-normal"
                :class="route === '/' ? 'active' : ''">Home
            </NuxtLink>
            <!-- <NuxtLink @click="toogleOpen" to="/about" class="icon text-gray-700 text-base font-normal"
                :class="route === 'about' ? 'active' : ''">About us</NuxtLink>
            <NuxtLink @click="toogleOpen" to="/whatwedo" class="icon text-gray-700 text-base font-normal"
                :class="route === 'whatwedo' ? 'active' : ''">What We Do</NuxtLink>
            <NuxtLink @click="toogleOpen" to="/media" class="icon text-gray-700 text-base font-normal"
                :class="route === 'media' ? 'active' : ''">Media</NuxtLink>
            <NuxtLink @click="toogleOpen" to="/contact" class="icon text-gray-700 text-base font-normal"
                :class="route === 'contact' ? 'active' : ''">Contact</NuxtLink> -->
            <NuxtLink @click="toogleOpen" id="donate" to="/donate"
                class="px-8 py-3 bg-teal-800 rounded justify-start items-start gap-2.5 flex">
                <div class="text-right text-white text-base font-bold">Donate</div>
            </NuxtLink>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#Navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.40);
    background: var(--bg-color, #E8EBF0);
    backdrop-filter: blur(15px);
    padding-inline: 5%;

    #Logo {
        width: 162px;
        height: 72px;
    }

    .menu_btn {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: rgb(0, 0, 0, 0.2);
        }
    }

    #menu_btn {
        width: 48px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        transition: background-color 0.2s ease-in-out;

        &:hover {
            background-color: rgb(0, 0, 0, 0.2);
        }
    }
}

.content {
    position: fixed;
    top: 71px;
    left: 0;
    z-index: 100;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    padding: 0 1rem;

    background-color: white;
    backdrop-filter: blur(30px);
    height: calc(100vh - 72px);
    width: 100%;
    overflow-y: hidden;

    #icon_list {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        .icon {
            width: 100%;
            text-align: center;
            font-size: 30px;

            &.active {
                color: orangez;
            }
        }
    }
}
</style>