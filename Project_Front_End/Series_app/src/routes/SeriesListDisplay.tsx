import  { useContext, useEffect, useState } from 'react'
import SeriesList from '../components/SeriesList';
import { Category } from '../@types/types';
import { AuthContext } from '../contexts/AuthContext';
import {  useNavigate } from 'react-router-dom';
import { useAppState } from '../AppState';
import { Button } from '../components/Button';
import { CategoryService } from '../services/category-service';
import React from "react";

const SeriesListDisplay = () => {
    const [categoryArray,setCategoryArray]=useState<Array<Category>>([]);
    const { isLoggedIn, logout } = useContext(AuthContext);
  const nav=useNavigate();
  
  const [searchVal,setSearchVal]=useState('');
  
    useEffect(() => {
        const fetchData = async () => {
          try {
            const categoriesResponse = await CategoryService.getAllCategories() as Array<Category>;
            setCategoryArray(categoriesResponse)
    
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    
      function executeLogOut(){
        
        logout()
         nav("/MainPage")
      }



      async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target;
        setSearchVal(value)
        console.log(searchVal)
     
        console.log(value);
      }

  return (<div>
<div className="flex justify-center pt-4 w-full">
      <input className=' text-center  ' type="text" placeholder='search a series' value={searchVal} onChange={handleChange} />
</div>
    
    {categoryArray.map(categoryItem=> <SeriesList search={searchVal} key={categoryItem.id}
        categoryName={categoryItem.name} position="first-list"
         />)}
          { isLoggedIn && <button  onClick={executeLogOut} ><Button  class="logout" text="Log Out"  /></button>}
          <div className='text-center '>
   <button onClick={() => nav("/Choose")}>
   <Button class="return" text="back to Choose Screen" />
     </button> </div>
        </div>
  )
}

export default SeriesListDisplay