<template>
    <div class="card-carousel-wrapper">
        <div class="card-carousel--nav__left" @click="moveCarousel(-1)" :disabled="atHeadOfList"></div>
        <div class="card-carousel">
          <div class="card-carousel--overflow-container">
            <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
              <div class="card-carousel--card" v-for="(item, index) in items" :key="index"><img src="https://placehold.it/200x200"/>
                <div class="card-carousel--card--footer">
                  <p>{{ item.name }}</p>
                  <p class="tag" v-for="(tag,index) in item.tag" :key="index" :class="index &gt; 0 ? 'secondary' : ''">{{ tag }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-carousel--nav__right" @click="moveCarousel(1)" :disabled="atEndOfList"></div>
      </div>
</template>

<script>
export default {
    name: 'carousel',
    data() {
        return {
          currentOffset: 0,
          windowSize: 3,
          paginationFactor: 220,
          items: [
            {name: 'Kin Khao', tag: ["Thai"]},
            {name: 'Jū-Ni', tag: ["Sushi", "Japanese", "$$$$"]},
            {name: 'Delfina', tag: ["Pizza", "Casual"]},
            {name: 'San Tung', tag: ["Chinese", "$$"]},
            {name: 'Anchor Oyster Bar', tag: ["Seafood", "Cioppino"]},
            {name: 'Locanda', tag: ["Italian"]},
            {name: 'Garden Creamery', tag: ["Ice cream"]},
          ]
        }
      },
      computed: {
        atEndOfList() {
          return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
        },
        atHeadOfList() {
          return this.currentOffset === 0;
        },
      },
      methods: {
        moveCarousel(direction) {
          // Find a more elegant way to express the :style. consider using props to make it truly generic
          if (direction === 1 && !this.atEndOfList) {
            this.currentOffset -= this.paginationFactor;
          } else if (direction === -1 && !this.atHeadOfList) {
            this.currentOffset += this.paginationFactor;
          }
        },
      }
}
</script>