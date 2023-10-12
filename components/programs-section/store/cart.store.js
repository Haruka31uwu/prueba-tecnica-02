import {defineStore} from 'pinia';
export const cartStore = defineStore('cart', {
state:()=>{
    return{
        cartItems:[],
        cartTotal:0,
    }
},
getters:{
    getCartItems:function(){
        //get from local storage if not exists get for state
        if(process.client){
            const cartItems=localStorage.getItem('cartItems');
            if(cartItems){
                this.cartItems=JSON.parse(cartItems)                
                return this.cartItems
            }
            return this.cartItems
        }
    },
    getCartTotal:function(){
        //get from local storage if not exists get for state
        if(process.client){
            const cartTotal=localStorage.getItem('cartTotal');
            if(cartTotal){
                this.cartTotal=JSON.parse(cartTotal);
            }
            return this.cartTotal  
        }
    },
    getCartItemsCount:function(){
        if(process.client){
            const cartItems=localStorage.getItem('cartItems');
            if(cartItems){

                this.cartItems=JSON.parse(cartItems);
            }
            return this.cartItems.length;
        }   
    }
},
actions:{
    addToCart(item){
        //add to local storage element if not exists array in local storagae create, later add to state
        const cartItems=localStorage.getItem('cartItems');
        const cartTotal=localStorage.getItem('cartTotal');
        if(cartItems){
            this.cartItems=JSON.parse(cartItems);
            this.cartItems.push(item);
            localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
            
        }
       
        else{
            this.cartItems.push(item);
            localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
        }

        if(cartTotal){
            this.cartTotal=JSON.parse(cartTotal);
            this.cartTotal+=item.precio_pen;
            localStorage.setItem('cartTotal',JSON.stringify(this.cartTotal));
        }
        else{
            this.cartTotal+=item.precio_pen;
            localStorage.setItem('cartTotal',JSON.stringify(this.cartTotal));
        }

    },
    removeFromCart(item){
        //remove from local storage element if not exists array in local storagae create, later add to state
        const cartItems=localStorage.getItem('cartItems');
        if(cartItems){
            this.cartItems=JSON.parse(cartItems);
            this.cartItems=this.cartItems.filter(i=>i.id!==item.id);
            localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
        }
        else{
            this.cartItems=this.cartItems.filter(i=>i.id!==item.id);
            localStorage.setItem('cartItems',JSON.stringify(this.cartItems));
        }
    }
}
});
