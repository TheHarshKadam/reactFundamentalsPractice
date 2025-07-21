import {createContext, useContext, useReducer } from "react";

//Create a new context object. Think of it like a "box" where global values live.
const CartContext = createContext();

//This is a provider component — it wraps your app or a part of it, giving access to the cart's data & functions.
export function CartProvider({children}){
    
    //Cart starts empty: no items yet.
    const initialState = {
        cartItems:[]
    }
    //This function tells React how to change the cart when something happens. It follows the reducer pattern.
    function cartReducer(state, action){
        console.log(state,action)
        switch(action.type){
            //Adds the item to the cart by appending it to the array.
            case 'ADD_TO_CART' :
                return{
                    ...state,
                    cartItems:[...state.cartItems, action.payload]
                };

            //Loops through items. If it finds the item by id, it updates the quantity.
            case 'UPDATE_QUANTITY':
                return{
                    ...state,
                    cartItems: state.cartItems.map((item)=>item.id === action.payload.id?{...item, quantity:action.payload.quantity}:item)
                }
            
            //Removes the item using filter().
            case 'REMOVE_FROM_CART':
                return{
                    ...state,
                    cartItems:state.cartItems.filter((item)=>item.id!==action.payload)
                };
                
            // If the action is unknown, just return the current state.
            default:
                return state;
        }
    }
    const [cartState, cartDispatch] = useReducer(cartReducer,initialState);

    return <CartContext.Provider value = {{cartState, cartDispatch}}>{children}</CartContext.Provider>
}

export function useCart() { 
    return useContext(CartContext)
}