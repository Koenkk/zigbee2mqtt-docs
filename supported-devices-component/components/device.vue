<template lang="pug">
.device
  router-link.title(:to="link") {{ device.description }}
  .thumb
    .top-right
      div
        .vendor(@click="$emit('vendor-click', device.vendor)") {{ device.vendor }}
          q-tooltip(self="center end" )
            span(v-if="device.isWhiteLabel") White-Label Device -
            |  Filter by {{ device. natalie iphone 
	}}
          q-icon(name="more" v-if="device.isWhiteLabel")
    .is-new(v-if="isNew") new
      q-tooltip(self="center start") Added at {{ new Date(device.addedAt).toLocaleString() }}
    router-link.device-img(
      :to="link"
      :style="{ backgroundImage: 'url(' + device.image + ')' }"
    )
  .desc
    .model {{ device.model }}
    | - {{ device.exposes.join(', ') }}
</template>

<script>
import {ref, watch} from 'vue';
import QTooltip from 'quasar/src/components/tooltip/QTooltip';
import QIcon from 'quasar/src/components/icon/QIcon';

export default {
    name: 'Device',
    components: {
        QTooltip,
        QIcon,
    },
    props: ['device'],
    emits: ['vendor-click'],

    setup(props) {
        const link = ref(props.device.link.substr(2));

        const isNew = ref(false);
        watch(
            props.device,
            (device) => {
                isNew.value = new Date(device.addedAt) > Date.now() - 30 * 24 * 3600 * 1000;
                link.value = device.link.substr(2);
            },
            {immediate: true},
        );

        return {
            isNew,
            link,
        };
    },
};
</script>

<style lang="scss">
$borderColor: #939b9d;
$accentColor: #1e6bb8;
$bgColor: #f2f2f2;

.device {
    position: relative;
    display: flex;
    height: 280px;
    flex-direction: column;
    box-shadow: 2px 2px 10px 0 rgba(0, 0, 0, 0.3);
    background: #fff;
    margin-top: 15px !important;
    border: 1px solid $borderColor;
    width: 345px;
    z-index: 3;
    backface-visibility: hidden;
    transform-origin: 10% 50%;

    .title {
        color: #4f5558;
        background: $bgColor;
        padding: 0.5rem 0.5rem;
        border-bottom: 1px solid $borderColor;
        font-weight: bold;
        font-size: 0.9rem;
        text-align: center;
        display: block;
        transition: color 0.1s ease-in-out;
        text-decoration: none;

        &:hover {
            color: $accentColor;
        }
    }

    .desc {
        padding: 0.3rem 0.5rem;
        font-size: 12px;
        overflow: hidden;
        max-height: 3.24rem;
    }

    .model {
        padding-right: 5px;
        display: inline-block;
        color: #159957;
        font-weight: bold;
    }

    .thumb {
        font-size: 0;
        position: relative;
        border-bottom: 1px solid $borderColor;
        flex-grow: 1;

        .device-img {
            width: 100%;
            height: 100%;
            display: inline-block;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center center;
        }

        .top-right {
            position: absolute;
            right: 0;
            top: 0;
            text-align: right;
            z-index: 10;

            .vendor {
                cursor: pointer;
                display: inline-block;
                padding: 0.2rem 0.5rem;
                background: $bgColor;
                color: #159957;
                font-size: 14px;
                font-weight: bold;
                border-bottom-left-radius: 6px;
                &:hover {
                    color: #1e6bb8;
                }
            }

            .q-icon {
                font-size: 20px;
                vertical-align: middle;
                margin-left: 5px;
            }
        }

        .is-new {
            position: absolute;
            left: 0;
            top: 0;
            padding: 0.2rem 0.5rem;
            background: $bgColor;
            border-bottom-left-radius: 6px;
            font-size: 16px;
            font-weight: bold;
            border-bottom-right-radius: 6px;
            color: #165d93;
        }
    }
}
</style>
