import React, { useState } from 'react';
// import PropTypes from 'prop-types';

export const AddCategory = ({ cambiaCategorias }) => {


    const [inputValue, cambiaInput] = useState('')

    const handleInputChange = (e) => {
        cambiaInput(e.target.value)
    }



    const handreSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            cambiaCategorias(categorias => [...categorias, inputValue])
            cambiaInput('')
        }
    }

    return (

        <form onSubmit={handreSubmit}>
            <input type='text' name='txtCategoria'
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type='submit'>Agregar</button>
        </form>


    );
}




// export default AddCategory;

// AddCategory.PropTypes = {
//     cambiaCategorias: PropTypes.func.isRequired
// }
