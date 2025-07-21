import React from 'react'
import { useCart } from './shoppingCartContext'

export default function ShoppingCart() {
    const {cartState, cartDispatch} = useCart();
    const addToCart = (item)=>{
        const existingCartItems = cartState.cartItems.find((cartItem)=>cartItem.id === item.id);
        if(existingCartItems){
            cartDispatch({type:'UPDATE_QUANTITY', payload:{id: item.id, quantity: existingCartItems.quantity+1}})
        }
        else{
            cartDispatch({type: 'ADD_TO_CART', payload:{...item, quantity : 1}})
        }
        
    }

    const updateQuantity = (itemId, quantity) =>{
        if (quantity>0){
            cartDispatch({type: 'UPDATE_QUANTITY', payload:{id:itemId, quantity}});
        }
    }

    const removeFromCart=(itemId)=>{
        cartDispatch({type:'REMOVE_FROM_CART', payload:itemId})
    }
    const products = [
        { id: 1, name: 'Product A' },
        { id: 2, name: 'Product B' },
        { id: 3, name: 'Product C' },
        { id: 4, name: 'Product D' },
        { id: 5, name: 'Product E' }
    ]
    return (
        <div>
            <h1>Shopping Cart</h1>
            {cartState.cartItems.map((item)=>(
                <li key = {item.id}>
                    {item.name} - {item.quantity} 
                    <button onClick={()=> updateQuantity(item.id, item.quantity+1)}> +</button>
                    <button onClick={()=> updateQuantity(item.id, item.quantity-1)}> -</button>
                    <button onClick={()=> removeFromCart(item.id)}> Remove</button>
                </li>
            ))}
            <h2>Product List: </h2>
            <ul>
                {products.map((product) => {
                    //console.log(product); 
                    return <li key={product.id}>{product.name} <button onClick={()=>addToCart(product)}>Add to Cart</button>
                    </li>;
                })}
            </ul>

        </div>
    )
}
