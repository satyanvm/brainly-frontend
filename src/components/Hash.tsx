import React, { useEffect } from "react";
import { useParams, useNavigate, Navigate} from 'react-router-dom';
import { useContent } from "../hooks/useContent.tsx";
import { Card } from './Card.tsx';
import axios from "axios";
  
 function Hash()  {
  useEffect(() =>{
    
  })
  const { shareLink } = useParams<{ shareLink: string }>(); 
  
    const {contents,refresh} = useContent();
    const navigate = useNavigate();
const link = localStorage.getItem("theuserid");
console.log("Below is the shareLInk");
console.log(shareLink);
    axios.get(`http://localhost:3000/api/v1/brain/${shareLink}`).then((response) => {
    
              const id = response.data?.userid;
              console.log("Below is the id");
      console.log(id);
      console.log(response.data.content[0].title);
            return  <div>
               {  contents.map(({type, link, title}) => {  
                for(let i = 0; i<2; i++){
                  console.log("inside the for loop");
                  const thetitle = response.data.content[i].title;
                  console.log(thetitle);
                  // make an api call here, and also define the route to handle this 
                  const link = response.data.content[i].link;    
                  const thetype = response.data.content[i].type;
               return <div>
                    {
                  <Card   
                  title={thetitle}     
                  link={link}        
                  type={thetype}  
                                
                ></Card>  
                   }
                   </div>
                }  
  
              
                 }
            )    
          }                     
              </div>  
    
        })
      
}
export default Hash;