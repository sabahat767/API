import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import {Container, Row } from 'react-bootstrap';
function APIs() {
    const [recipes, setRecipes]=useState([])
    

    //useEffect ek state hai jo API s data fetching m use hoti khas tor p
    React.useEffect(()=>{
//console.log("i am in use effect")
Axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res=>{
    //console.log(res) //getting data
    setRecipes(res.data.meals[0]) //seting into reipes variable
})
    },[])
    console.log(recipes)
    
    function CallRandomRecipes()
    {
        console.log(recipes.strCategory)
    }
    //second param empty array [s] islye dia take ye function br br na chle ek hi bar chle
    return (
        <div style={{backgroundColor: '#2e1f0e'}}>
            <header>
          <h1 className="title text-white text-center">Meal Finder</h1>
        </header>

        <div className="input-group w-25 m-auto">
          <input type="text" className="form-control" placeholder="search for meal keywords" aria-label aria-describedby="basic-addon1" />
          <div className="input-group-append">
            <button className="btn btn-dark" type="submit"  ><i className="fa fa-search" aria-hidden="true" /></button>
          </div>
          <button className="btn btn-dark ml-2" type="submit" onClick={CallRandomRecipes} ><i className="fa fa-random" aria-hidden="true" /></button>
        </div>

       
            
        </div>
    )
}

export default APIs
