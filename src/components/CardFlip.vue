<template>
    <div class="card" :class="{ disabled: disabled }">
        <div class="card__inner" :class="{ 'flipped': flipped }" @click="onToggleCard()">
            <div class="card__face front">
                <div class="card__content">
                    <!-- truoc -->
                </div>
            </div>
            <div class="card__face back">
                <div class="card__content" :style="{ backgroundImage: `url(${require('@/assets/' + imgBackUrl)})` }">
                    <!-- sau -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flipped: false,
            disabled: false
        }
    },
    props: {
        imgBackUrl: {
            type: String,
            require: true
        },
        card: {
            type: [String, Number, Array, Object],
        }
    },
    methods: {
        onToggleCard() {
            if (this.disabled) {
                return false
            }
            this.flipped = !this.flipped;
            if (this.flipped) {
                this.$emit('onFlipped', this.card)
            }
        },
        onToggleClose() {
            console.log('dong');
            this.flipped = false;
        },
        onDisabled(){
             this.disabled = true;
        }

    }
}
</script>

<style lang="css" scoped>
.card {
    display: inline-block;
    margin: 1rem;
    width: 90px;
    height: 120px;
}

.card__inner {
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
    cursor: pointer;
    position: relative;
}

.card__inner.flipped {
    transform: rotateY(-180deg);

}

.card__face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    overflow: hidden;
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 3px 10px 3px rgba(0, 0, 0, 0.3);
}

.front .card__content {
    background: url("../assets/images/icon_back.png")no-repeat center center;
    background-size: 40px 40px;
    height: 100%;
    width: 100%;

}

.back {
    background-color: var(--light);
    transform: rotateY(-180deg);
}

.back .card__content {
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
}

.card.disabled .card__inner {
    cursor: default;
}
</style>