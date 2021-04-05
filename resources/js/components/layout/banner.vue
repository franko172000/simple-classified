<template>
    <section :class="className">
        <div class="banner-content">
            <slot></slot>
             <router-link to="/" v-if="showHomeButton" class="btn btn-default btn-sm my-10"> <i class="fas fa-home"></i> Home </router-link>
        </div>
    </section>
</template>

<script>
export default {
    name: 'banner',
    props:{
        className: String,
        showHomeButton: Boolean
    }
}
</script>