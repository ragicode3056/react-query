import { useState } from 'react';
import classes from './styles/card.module.css';
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from 'axios';
export const Header = () =>{
    // const[name,setName] = useState("");
    // const[companyName,setCompanyName] = useState("");
   
    const {isLoading, error, data, isFetching} = useQuery("res",()=>
        
           axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>res.data)
           
    );

 
   
    return(
        <div className={classes.headerLayout}>
        {error? "error occured" + "" +error.message:
        <div className={classes.childDataRow}>
            <div>{isLoading ? "Loading...." : "Welcome"+ " " + data[0].name}</div>
            <div>{isLoading ? "" : data[0].company.name}</div>
        </div>
    }
        </div>
    )
}