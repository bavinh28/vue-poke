<template>
    <div class="screen">
        <card-flip-vue v-for="(card, index) in cardContext" v-bind:key="index" :imgBackUrl="`images/${card}.png`"
            @onFlipped="checkRule($event)" :ref="`card-${index}`" :card="{ index, value: card }" />
        <button @click="result">abc</button>
    </div>

</template>



<script>
import cardFlipVue from './CardFlip.vue'

export default {
    data() {
        return {
            rule: [],
        }
    },
    components: {
        cardFlipVue
    },
    props: {
        cardContext: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    methods: {
        checkRule(card) {
            console.log(card);
            if (this.rule.length === 2) {
                return false;
            }
            this.rule.push(card);
            console.log(this.rule);
            if (this.rule.length === 2 && this.rule[0].value === this.rule[1].value) {
                console.log("ri");
                this.$refs[`card-${this.rule[0].index}`][0].onDisabled();
                this.$refs[`card-${this.rule[1].index}`][0].onDisabled();
                this.rule = [];

                const disabledEs = document.querySelectorAll(".screen .card.disabled");
                if (disabledEs.length === this.cardContext.length - 2) {
                    setTimeout(() => {
                        this.$emit('onFinish')
                    }, 1000)
                }
            } else if (this.rule.length === 2 && this.rule[0].value !== this.rule[1].value) {
                console.log("wro");
                setTimeout(() => {
                    // console.log();
                    this.$refs[`card-${this.rule[0].index}`][0].onToggleClose();
                    this.$refs[`card-${this.rule[1].index}`][0].onToggleClose();
                    this.rule = [];
                    console.log(this.rule);
                }, 900);

            } else {
                return false;
            }
        },
        result() {
            this.$emit('toResult');
        }
    }
}
</script>

<style>
</style>