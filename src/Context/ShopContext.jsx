import React, { createContext } from "react";
import All_Product from "../Components/Assets/All_Product";





export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
        const contextValue = {All_Product}

        return(
            <ShopContext.Provider value={contextValue}>
                {props.children}
            </ShopContext.Provider>
        )
}

export default ShopContextProvider;