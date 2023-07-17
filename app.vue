<template>
  <div>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: 'NGO',
  meta: [
    { name: 'description', content: 'Bengkel Cendana Motor Graha Raya adalah bengkel yang melayani perbaikan sepeda motor dari berbagai merk dan juga pembelian sparepart original seperti honda dan yamaha' },
    { name: 'google-site-verification', content: 'iyly3wk2prm0hRXMjHMiR1Ok8Ow1gUXWyZX8v9Hrft8' },
    { name: 'keywords', content: "Cendana Motor Graha Raya, Cendana Motor, Bengkel Motor Graha Raya, Bengkel Tangerang, Lokasi Cendana Motor" }
  ],
  bodyAttrs: {
    class: 'test'
  },
  // script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})
</script>
