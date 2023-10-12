import { cartStore } from '/components/programs-section/store/cart.store.js'
import { computed } from 'vue';

export const addToCart = (item) => {
    const store = cartStore()
    store.addToCart(item)
}
export const getCartTotal = computed(() => {
    const store = cartStore()
    return store.getCartTotal
})
export const getCartItemsCount=computed(()=>{
    const store=cartStore()
    return store.getCartItemsCount
})
export const getCartItems=computed(()=>{
    const store=cartStore()
    return store.getCartItems
});