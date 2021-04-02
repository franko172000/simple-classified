<template>
    <div id="home">
        <section id="banner">
            <div class="banner-content">
                <h1>You can Buy, Sell, Rent, Book anything from here </h1>
                <p>Buy and sell everything from used cars to mobile phones and computers, or search for property, jobs and more in the world.</p>
                <a href="#" class="btn btn-default btn-sm my-10"> <i class="fas fa-eye"></i> Show all ads</a>
            </div>
        </section>
        <section class="inner-content popular-listing">
            <h2> Popular Trending <span>Ads</span></h2>
            <div class="listing">
                <listing-card />
                <listing-card />
                <listing-card />
                <listing-card />
                <listing-card />
                <listing-card />
                <listing-card />
                <listing-card />
            </div>
            <div class="flex justify-center"><a href="#" class="btn btn-primary my-10"> View more ads</a></div>
            
        </section>
        <section class="inner-content category-listing">
            <h2> Top Categories by <span>Ads</span></h2>
            <div class="listing">
                <category-card />
                <category-card />
                <category-card />
                <category-card />
                <category-card />
            </div>
            <div class="flex justify-center"><a href="#" class="btn btn-primary my-10"> View more categories</a></div>
        </section>
    </div>
</template>