<template>
    <div element-loading-text="数据加载中..." class="global-wrap test-index-wrap">
        <globalHeader page="test"></globalHeader>
    </div>
</template>

<script setup name="vue3-test">
// import test from 'test'
import { useHead } from '@vueuse/head'
import globalHeader from './components/global-header.jsx'

useHead({
    title: 'Vue3 Test'
})
</script>
