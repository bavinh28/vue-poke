<template>
    <div class="container">
        <h1 class="title">
            Pokemon
        </h1>
        <p class="desc">
            Select mode
        </p>
        <div class="action">
            <button class="select" @click="onStart(16)">
                <span class="button-desc">4x4</span>
                <span class="mode">easy</span>
            </button>
            <button class="select" @click="onStart(36)">
                <span class="button-desc">6x6</span>
                <span class="mode">medium</span>
            </button>
            <button class="select" @click="onStart(64)">
                <span class="button-desc">8x8</span>
                <span class="mode">hard</span>
            </button>
            <button class="select" @click="onStart(100)">
                <span class="button-desc">10x10</span>
                <span class="mode">hell</span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        onStart(total) {
            this.$emit('onStart', {total})
        }
    }
}
</script>

<style>
</style>