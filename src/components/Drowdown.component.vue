<template>
    <div class="menu-item" @click="isOpen = !isOpen">
        <div class="item">
         <span> {{ title }} </span>
            <span v-if="!isOpen">
            <chevron-down-icon size="1.5x" class="icon">
            </chevron-down-icon>
            </span>
            <span v-else>
            <chevron-up-icon size="1.5x" class="icon">
            </chevron-up-icon>
            </span>
        </div>
        <transition name="fade" appear>
            <div class="sub-menu" v-show="isOpen">
                <div class="menu-item" v-for="(item, idx) in items" :key="idx">
                    <span>{{ item.title }}</span>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import { ChevronDownIcon, ChevronUpIcon } from 'vue-feather-icons'
    export default {
        name: 'dropdown',
        props: ['title', 'items'],
        data () {
            return {
                isOpen: false
            }
        },
        components: {
            ChevronDownIcon,
            ChevronUpIcon
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/variables";
    .menu-item {
        border: $border;
        border-radius: $border-radius;
        cursor: $cursor;
        padding: 0 12px;
        vertical-align: baseline;
        color: $text-light;
        font-weight: $normal;
        &:hover {
            color: $text-dark;
            background: #FAFBFD;
        }
        .item {
            display: flex;
            align-items: center;
            height: 52px;
        }
        .icon {
            margin-left: $margin-m;
            color: $text-light
        }
        .sub-menu {
            margin-top: 20px;
            padding: 20px;
            box-shadow: $box-shadow;
            border-radius: $border-radius;
            text-align: left;
            position: absolute;
            transform: translateX(-50%);
            width: max-content;
            .menu-item {
                padding: $padding-m;
                font-weight: $light;
            }
         }
    }
    .fade-enter-active,
    .fade.leave-active {
        transition: all .3s ease-out;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0
    }
</style>

