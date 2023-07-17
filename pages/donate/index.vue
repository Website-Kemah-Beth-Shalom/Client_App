<script setup lang="ts">
import { donate } from '@/content'

useHead({
    title: donate.title,
    meta: [
        { name: 'description', content: 'Bengkel Cendana Motor Graha Raya adalah bengkel yang melayani perbaikan sepeda motor dari berbagai merk dan juga pembelian sparepart original seperti honda dan yamaha' },
        { name: 'google-site-verification', content: 'iyly3wk2prm0hRXMjHMiR1Ok8Ow1gUXWyZX8v9Hrft8' },
        { name: 'keywords', content: "Cendana Motor Graha Raya, Cendana Motor, Bengkel Motor Graha Raya, Bengkel Tangerang, Lokasi Cendana Motor" }
    ],
    bodyAttrs: {
        class: 'test'
    },
})
</script>
<template>
    <div id="Donate">
        <h2>Link Donasi</h2>
        <div class="list">
            <DonateCard v-for="i in 4" />
        </div>
        <DonateHowweuse />
    </div>
</template> 

<style scoped lang="scss">
#Donate {
    background-color: black;
    padding: 5%;
    padding-top: 120px;

    h2 {
        text-align: center;
        color: white;
        font-size: 30px;
        font-weight: 700;
        text-align: left;
    }

    .list {
        background-color: black;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        padding-top: 30px;

        @media screen and (max-width: 768px) {
            flex-direction: column;
        }
    }
}
</style>