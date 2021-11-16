import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

//Para conectar los dos componentes, agregamos como props "setCategories" en el argumento
export const AddCategory = ( { setCategories } ) => {

    //Definimos la variable que guardará lo que escribamos en el input text
    const [ inputValue, setInputValue ] = useState(''); //Definimos el estado inicial, de no hacerlo quedará como undefined

    //Con esta función flecha podremos cambiar el valor del input text y verlo en la página web
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    //Función de flecha para controlar el evento a presionar Enter
    const handleSubmit = ( e ) => {
        e.preventDefault(); //Con esta función prevenimos a que se recargue la página cuando damos Enter

        //La función trim elimina los espacios en blanco antes o después del texto
        if( inputValue.trim().length > 2 ){
            //Con un callback llamamos el estado inicial y le agrega el nuevo texto del input al dar Enter
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue(''); //Limpiamos el input text
        }
        //console.log('Submit hecho');
    }

    return (
        <form onSubmit={ handleSubmit }> {/*Llamamos a la función handleSubmit*/}
            <input
                type="text" //Entrada de tipo texto
                value={ inputValue } //Pasamos el valor inicial del input
                onChange={ handleInputChange } //Llamamos a la función para poder modificar el texto en el input
            />
            
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
