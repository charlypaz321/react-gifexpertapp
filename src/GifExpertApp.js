import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp  = () => {

    //Definimos un arreglo y el estado inicial del arreglo con elementos
    const [ categories, setCategories ] = useState(['Legend of Zelda']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Jazz'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } /> {/* Agregamos el componente AddCategory a nuestra página padre */}
            <hr /> {/*Barra divisoria*/}

            <ol> {/*Order list */}
                {
                    categories.map( category => ( // Ciclo para mostrar los elementos
                        <GifGrid
                            key={ category }
                            category={ category }
                        />    
                    ))
                }
            </ol>
        </>
    );


};