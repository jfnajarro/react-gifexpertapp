import React, { useState, useEffect } from 'react'
import { useFetchgifs } from '../hooks/useFetchgifs'
import { GiftGridItem } from './GiftGridItem';
// import { getGifs } from '../helpers/getGifs';


export const GiftGrid = ({category}) => {

    const {data:images, loading} = useFetchgifs(category);

       
    return (
    <>
        <h3 className="animate_animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate_animated animate__flash">Loading...</p>}

        <div className='card-grid'>

            {
                images.map( img => (
                    <GiftGridItem  
                        key = {img.id}
                        {...img}
                    />
                        
                )) 
            }    
        </div>
    </>
  )
}
