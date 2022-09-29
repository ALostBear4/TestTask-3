import React from "react";
import './App.css';

const Paginate = ({Data,itemsPerPage,setCurrentPage}) => {

    let Pages=[];
    for(let i=1;i<=Data/itemsPerPage;i++){
    Pages.push(i);
}
    return ( 
        <div className="Pagination">{Pages.map((page,index)=>
            {
                return(
                    <button key={index} onClick={()=> setCurrentPage(page)}>
                        {page}
                        </button>
                );
            })}
                    </div>
     );
}
 
export default Paginate;