<script setup lang="ts">
import Logo from "@/assets/image/logo.png";
</script>

<template>
    <div id="Navbar">
        <img id="img" :src="Logo" alt="Logo" />
        <div id="NavMenu">
            <div class="NavMenu-Item">
                <router-link to="/">Home</router-link>
            </div>
            <div class="NavMenu-Item">
                <router-link to="/about">Dokumentasi</router-link>
            </div>
            <div class="NavMenu-Item">
                <router-link to="/contact">Contact</router-link>
            </div>
            <button id="Donasi">
                Donasi
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#Navbar {
    isolation: isolate;
    position: fixed;
    z-index: 7;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 12rem;
    width: 100%;
    height: 70px;
    flex-shrink: 0;
    background-color: var(--secondary);


    #img {
        height: 90%;
        object-fit: cover;
    }

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
</style>