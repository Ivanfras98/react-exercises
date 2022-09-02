import { useState } from "react";

//oltre al custom hook ho fatto un esempio pratico togliendo dall'app tutto il resto e lasciando solo l'hook applicato a due nuovi componenti

export function useInput(){
     const [data, setData] = useState({
       username: "",
       password: "",
     });
     function handleDataChange(event) {
       const { name, value } = event.target;
       
       setData((data) => {
           return {
               ...data,
               [name]: value,
            };
        });
    }
    console.log(data)
     return {
        data,
        handleDataChange
     }
}

export function Inputs (){
    const {data, handleDataChange} = useInput()
    return (
      <div>
        <input name="username" value={data.username} onChange={handleDataChange}/>
        <input name="password" value={data.password} onChange={handleDataChange}/>
      </div>
    );
}