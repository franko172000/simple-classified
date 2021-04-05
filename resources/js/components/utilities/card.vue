<template>
    <div :class="className" class="bg-white rounded shadow p-6 m-4 w-full border-gray-300 border bottom-border-style">
        <slot></slot>   
    </div>
</template>
<script>
export default {
    name: 'card',
    props:{
        className: String
    }
}
</script>