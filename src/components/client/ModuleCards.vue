<template>
    <div>
        <div class="w-full h-fit py-16 sm:px-[8px] md:px-4 md:flex">
            <div class="sm:w-full md:w-[20%] md:pr-4 py-4">
                <div class="space-y-2">
                    <details open class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                        <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                            <span class="text-sm font-medium"> Module Name </span>

                            <span class="transition group-open:-rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div class="border-t border-gray-200 bg-white">
                            <header class="flex items-center justify-between p-4">
                                <span class="text-sm text-gray-700">Filter by module name</span>

                                <button
                                type="button"
                                class="text-sm text-gray-900 underline underline-offset-4"
                                >
                                Reset
                                </button>
                            </header>

                            <div class="border-t border-gray-200 p-4">
                                <div class="flex justify-between gap-4">
                                    <input type="text" placeholder="Module Name" class="block w-full outline-none border-gray-200 sm:text-sm"/>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
                <div class="space-y-2 mt-8">
                    <details open class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                        <summary class="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                            <span class="text-sm font-medium"> Price </span>

                            <span class="transition group-open:-rotate-180">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </span>
                            </summary>

                            <div class="border-t border-gray-200 bg-white">
                            <header class="flex items-center justify-between p-4">
                                <span class="text-sm text-gray-700"> The highest price is $600 </span>

                                <button
                                type="button"
                                class="text-sm text-gray-900 underline underline-offset-4"
                                >
                                Reset
                                </button>
                            </header>

                            <div class="border-t border-gray-200 p-4">
                                <div class="flex justify-between gap-4">
                                <label for="FilterPriceFrom" class="flex items-center gap-2">
                                    <span class="text-sm text-gray-600">$</span>
                                    <input type="number" id="from" placeholder="From" min="0" class="w-full outline-none border-gray-200 sm:text-sm"/>
                                </label>

                                <label for="FilterPriceTo" class="flex items-center gap-2">
                                    <span class="text-sm text-gray-600">$</span>

                                    <input
                                    type="number"
                                    id="FilterPriceTo"
                                    placeholder="To"
                                    min="0" class="w-full outline-none border-gray-200 sm:text-sm"
                                    />
                                </label>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
            <div class="sm:w-full md:w-[80%] sm:mt-10 md:mt-0">
                <div class="flex justify-between mb-2">
                    <p class="text-sm font-[500] text-gray-700"> Showing <span class="font-bold">9</span> results from total <span class="font-bold">30</span> </p>
                    <!-- <p class="text-sm font-[500] text-gray-700 flex"> Sort by</p> -->
                    <div class="relative inline-block">
                        <p @click="toggleDropdown" class="cursor-pointer text-sm font-[500] text-gray-700 flex items-center"> Sort by <i class="ml-1 fa-solid fa-sort"></i></p>
                        <div v-if="isDropdownOpen" class="absolute right-0 w-48 mt-2 bg-white border border-gray-300 rounded-md shadow-lg z-[1]">
                            <p @click="sortBy('default')" class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Default
                            </p>
                            <p @click="sortBy('name')" class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Name
                            </p>
                            <p @click="sortBy('date')" class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Latest
                            </p>
                            <p @click="sortBy('pricel')" class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Price Low to High
                            </p>
                            <p @click="sortBy('priceh')" class="cursor-pointer block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                                Price High To Low
                            </p>
                        </div>
                    </div>
                </div>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-x-2 lg:grid-cols-5" v-if="ready">

                    <div class="mt-4 overflow-hidden block md:mx-0 cursor-pointer card" v-for="item in displayedItems" :key="item">
                        <div class="relative h-fit w-fit test rounded-[5px] overflow-hidden" :title="item.name">
                            <img class="filt sm:w-[140px] md:w-[220px] sm:h-[200px] md:h-[250px] object-cover block" :src="item.relationships.images[0].url" alt="">
                            <div class="absolute top-[5px] right-[5px] h-fit w-fit sm:pr-[8px] md:pr-[10px] sm:pl-[6px] md:pl-[8px] sm:py-[6px] md:py-[8px] bg-[#1d242d] text-[white] rounded-[5px] flex justify-center items-center">
                                <img class="block sm:w-[14px] md:w-[16px]" src="@/assets/icons/whitecart.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between sm:w-[160px] md:w-[200px]">
                            <div class="text-[#1d242d]">
                                <router-link :to="`/module/${item.id}/${slug(item.name)}`">
                                    <p class="sm:text-[12px] md:text-[16px] font-poppins font-[400]">
                                        {{ item.name.length <= 14 ? item.name : item.name.slice(0,11).concat("...") }}
                                    </p>
                                    <p class="mt-[-3px] font-poppins sm:text-[12px] md:text-[16px] font-bold">${{ item.price }}</p>
                                </router-link>
                            </div>
                        </div>
                    </div>

                </div>
                <button @click="loadMore()" v-if="!allItemsDisplayed">load more ...</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import slugify from 'slugify'

export default {
    name : 'ModuleCards',
    data(){
        return{
            isDropdownOpen: false,
            data : [],
            displayedItems : [],
            ready : false,
            pageSize : 20,
            currentPage : 1
        }
    },
    computed: {
        ...mapGetters('moduleModule', ['getData', 'getLoading', 'getError', 'getSuccess']),
        allItemsDisplayed() {
            return this.displayedItems.length === this.data.length
        }
    },
    watch: {
        getSuccess(newValue){
            if(newValue){
                this.data = [...this.getData]
                this.ready = true
                console.log(this.data)
                this.loadMore()

            }else{
                console.log('error')
            }
        }
    },
    methods: {
        ...mapActions('moduleModule', ['getModules']),
        slug(name){
            return slugify(name, {lower : true, replacement: '-'})
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen
        },
        sortBy(option) {
            console.log('Sorting by:', option);
            this.isDropdownOpen = false;
        },
        card(){
            const cards = document.querySelectorAll('.card');
            if(window.innerWidth < 750){
                cards.forEach((card, index) => {
                    if (index % 2 === 0) {
                        card.classList.add('card-left');
                    } else {
                        card.classList.add('card-right');
                    }
                })
            }else{
                cards.forEach((card) => {
                    if(card.classList.contains('card-left')){
                        card.classList.remove('card-left')
                    }

                    if(card.classList.contains('card-right')){
                        card.classList.remove('card-right')
                    }
                })
            }

        },
        loadMore() {
            const startIndex = (this.currentPage - 1) * this.pageSize
            const endIndex = startIndex + this.pageSize

            this.displayedItems = this.displayedItems.concat(
                this.data.slice(startIndex, endIndex)
            );

            this.currentPage++
        }
    },
    mounted(){
        window.addEventListener("load", () => {
            this.card()
        })
        window.addEventListener("resize", () => {
            this.card()
        })

        
        if(this.getData != null){
            this.data = [...this.getData]
            this.loadMore()
            this.ready = true
        }else{
            this.getModules()
        }
    }
}
</script>

<style scoped>
    .plx{
        background-image: url('https://images.pexels.com/photos/4872023/pexels-photo-4872023.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-color: rgba(0, 0, 0, 0.247);
        background-blend-mode: multiply;
        background-position: top;
    }

    .card-left{
        @apply ml-auto;
    }

    .card-right{
        @apply mr-auto;
    }
</style>