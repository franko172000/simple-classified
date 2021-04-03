<template>
    <section :class="className">
        <div class="banner-content">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'banner',
    props:{
        className: String
    }
}
</script>