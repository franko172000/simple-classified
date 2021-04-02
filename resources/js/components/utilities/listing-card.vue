<template>
    <!-- component -->
    <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <img class="w-full h-56 object-cover object-center" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar">
            <div class="flex items-center px-6 py-3 bg-gray-900">
                <i class="h-6 w-6 text-white fill-current fas fas fa-money-bill-wave-alt"></i>
                <p class="mx-3 text-white font-semibold text-lg">$450</p>
            </div>
            <div class="py-4 px-6">
                <p class="text-2xl font-semibold text-gray-800">Patterson johnson</p>
                <div class="flex flex-wrap justify-between">
                    <div class="flex items-center mt-4 text-gray-700">
                        <i class="h-6 w-6 fill-current fas fa-tag text-center leading-normal"></i>
                    
                        <p class="px-2 text-sm">Category</p>
                    </div>
                    <div class="flex items-center mt-4 text-gray-700">
                        <i class="h-6 w-6 fill-current fas fa-map-marker-alt text-center leading-normal"></i>
                    
                        <p class="px-2 text-sm">Location</p>
                    </div>
                    <div class="flex items-center mt-4 text-gray-700">
                        <i class="h-6 w-6 fill-current fas fa-clock text-center leading-normal"></i>
                    
                        <p class="px-2 text-sm">30 minutes ago</p>
                    </div>
                    <div class="flex items-center mt-4 text-gray-700">
                        <i class="h-6 w-6 fill-current fas fa-eye text-center leading-normal"></i>
                    
                        <p class="px-2 text-sm">500</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'listingCard'
}
</script>