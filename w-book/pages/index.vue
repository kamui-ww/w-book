<template>
    <nuxt-link :to="{ path: '/about', query: { msg: JSON.stringify(msg) } }">666</nuxt-link>
    <h1>{{ myStore.counter }}</h1>
    <h1>{{ myStore.doubleCounter }}</h1>
    <a-button type="primary" @click="info">按钮</a-button>
</template>

<script setup>
import { message } from "ant-design-vue"
import { message } from "ant-design-vue"
import { message } from "ant-design-vue"
import { message } from "ant-design-vue"
import { useMyStore } from '~/store/myStore'

const myStore = useMyStore()

const msg = ref({
    name: '三三',
    age: 22
})
const info = () => {
    myStore.add()
}

</script>

<style scoped></style>