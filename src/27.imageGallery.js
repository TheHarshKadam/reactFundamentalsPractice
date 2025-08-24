import React, { useReducer } from 'react'

const initialState = {
    currentImageIndex: 0
}

const imageReducer = (state, action)=>{
    switch (action.type){
        case 'NEXT_IMAGE':
            return {
                currentImageIndex: (state.currentImageIndex+1)%images.length    
            };
        case 'PREVIOUS_IMAGE':
            return {
                currentImageIndex: (state.currentImageIndex-1 +images.length)%images.length
            }
        default:
            return state

    }
}

const images= [
    'https://img.mensxp.com/media/content/2021/Jun/Marvel-Characters-Blatantly-Copied-From-DC-Comics-That-Became-More-Popular-Than-The-Original-1200x900_60b9be097ad9e.jpeg',
    'https://hips.hearstapps.com/hmg-prod/images/captain-marvel-brie-larson-stand-1551890095.jpg?crop=1xw:0.66675xh;center,top&resize=640:*',
    'https://static.vecteezy.com/system/resources/previews/000/072/718/non_2x/iron-man-vector.jpg',
    'https://media.assettype.com/filmcompanion/2024-05/d5c0fc69-f9c7-4384-aa95-f9594ac5a881/wanda_maximoff_elizabeth_olsen_scarlet_witch_marvel_comics_1280x1280_8520.jpg',
    'https://i.pinimg.com/236x/f3/df/10/f3df10733d17e77e50c9294819f2d931.jpg',
    'https://d.ibtimes.co.uk/en/full/1512932/black-widow.jpg?w=658&f=ee2df106ec990ca1fa3d90fbe5add252'
]

export default function ImageGallery() {
    const [state, dispatch] = useReducer(imageReducer, initialState);
    const currentImage = images[state.currentImageIndex]
  return (
    <div>
        <h1>Image Gallery Using UseReducer</h1>
        <h2>Image Gallery</h2>
        <div>
            <img src ={currentImage} 
            alt='marvel-images'
            style={{ width: "400px", height: "300px", objectFit: "cover" }} 
            />
        </div>
        <div>
            <button onClick={()=>dispatch({type:'PREVIOUS_IMAGE'})}>Previous</button>
            <button onClick={()=>dispatch({type:'NEXT_IMAGE'})}>Next</button>
        </div>
    </div>
  )
}
