import { useEffect, useState } from 'react';
import './App.css';
import Cat from './categories/cat';
import Tab from './table/table';


function App() {
let [produits,setProduits]=useState([]);
let [filtrers,setfiltrer]=useState("")
let [loading,setLoading]=useState(true);
let [categorie,setCategorie]=useState("electronics");




        let recupereprod2=()=>{
            let filtrer=produits.filter((ele)=>{
                return ele.description.includes(filtrers) && ele.category==categorie;
            })


            if(filtrer.length>0)
            return filtrer.map((ele,key)=>{
                return <Tab produit={ele} key={key}></Tab> 
            })

            else 
            return <tr>
                <td>no Items</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>

        }

        let recupereprod=()=>{
            fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(res=>{setProduits(res);setLoading(false)})

        }

        useEffect(()=>{
            recupereprod();
        },[])


        let changer2=()=>{
            console.log(document.querySelector("#fils3").value);
        }

        let envoyer=(e)=>{
        e.preventDefault();
        setfiltrer(document.querySelector("#fils3").value);
        }


        let filtrageparcat=(categorieex)=>{
         console.log(categorieex);
         setCategorie(categorieex);
        }





return <div className='App'>
              <div className='recherche'>
                  <div id='fils1'>Search:</div>
                  <form >
                      <div id='fils2'>
                      <label htmlFor="fils3">Search:</label>
                      <input type="text" id='fils3' onChange={changer2} />
                      </div>
                      <input type="submit" value="submit" id='submit' onClick={envoyer}/>
                      <input type="reset" value="reset" id='reset' /><br />
                  </form>
                  <hr id='ligne1'/>
              </div>
              <Cat filtrerparcat={(categories)=>{filtrageparcat(categories)}}></Cat>
              <table border={1}>
                  <thead>
                    <tr>
                        <th>ID</th>
                        <th id='titre'>titre</th>
                        <th>prix</th>
                        <th>description</th>
                        <th>categorie</th>
                        <th>image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(loading==true)?<tr><td colSpan={6}>Loading...</td></tr>:recupereprod2()}
                  </tbody>
              </table>
</div>
}

export default App;
