import React from 'react';
import { useFechGifs } from '../hooks/useFechGifs';
import GifGridItem from './GifGridItem';




const GifGrid = ({ category }) => {



    const { data, loading } = useFechGifs(category);


    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Cargando...</p>}

            <div className='card-grid'>

                {

                    data.map(
                        i =>
                            // return <li>{i.title}</li>
                            (<GifGridItem key={i.id} img={i} />)


                    )
                }
            </div>
        </>

    );
}

export default GifGrid;