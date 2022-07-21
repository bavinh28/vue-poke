<template>
    <!-- <p>rs</p> -->
    <div class="screen">
        <h1>Chuc mung</h1>
        <p>{{ Math.round(timer / 1000) }} seconds</p>
        <button @click="onStartAgain">Choi lai</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        timer: {
            type: Number,
            require: true
        }
    },
    methods: {
        onStartAgain() {
            this.$emit('onStartAgain');
        }
    }

}

</script>

<style>
</style>