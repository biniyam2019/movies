import { execOnce } from "next/dist/shared/lib/utils";
import React from "react";
const SearchContext =React.createContext(

    {
        searchTerm:'hello',
        setSearchTerm:() =>{}
    }
    
);
export default SearchContext;