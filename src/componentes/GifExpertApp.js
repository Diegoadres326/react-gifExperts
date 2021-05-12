import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {
    // const categorias = ['Iron man', 'agente romanoff', 'Dragon ball'];
    const [categorias, cambiaCategorias] = useState(['Iron man', 'agente romanoff'])


    // const handreAdd = () => {


    //     cambiaCategorias([...categorias, 'Piolin'])

    // }


    return (
        <>
            <h2>Gif Expert App</h2>
            <hr />
            <AddCategory cambiaCategorias={cambiaCategorias} />
            {/* <button onClick={handreAdd}>Agregar categoria</button> */}


            <ol>
                {
                    categorias.map((item, index) => {
                        return <GifGrid key={item} category={item} />
                    })


                }
            </ol>

        </>

    );
}

export default GifExpertApp;