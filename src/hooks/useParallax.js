import { useState, useEffect } from "react";

 const useParallax = () => {

     // state del el efecto parallax
    const [isDisable, guardarIsDisable] = useState(undefined);


    useEffect( () => {
        // Escuchamos por el evento de resize
        function handleWindowSizeChange() {
            
            // activamos/desactivamos parallax
            guardarIsDisable( window.innerWidth <= 768 );
        };

        window.addEventListener('resize', handleWindowSizeChange);

        // LLamamos el handler para tener un state inicial de la ventana
        handleWindowSizeChange();

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    
    return {
        isDisable
    }
 }
  
 export default useParallax;