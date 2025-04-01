



function show(){
    return <div>
      {  
           contents.map(({type, link, title}) => 
                 <Card   
                title={title}     
                link={link}        
                type={type}                
              ></Card>  
            ) 
            // printing the contents here if it is tweet
          }     </div>
}