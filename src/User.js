import {useState} from 'react';

function User() {

    const [name,setName]=useState("");
    const [tnc,settnc]=useState(false);
    const [tcc,settcc]=useState("");
    function getFormData(e)
    {
        console.warn(name,tnc,tcc)
        e.preventDefault();
    }
    return (
       <form onSubmit={getFormData}>
           <input type="text" placeholder="Username" onChange={(e) =>setName(e.target.value)}/><br/>
<select onChange={(e) =>settnc(e.target.value)}>
    <option value="">HTML</option>
    <option value="">PHP</option>
    <option value="">JAVA</option>
    <option value="">C</option>
</select><br/>
<input type="checkbox" onChange={(e) =>settcc(e.target.checked)}/><span>Ok Good</span><br/>
<button type="submit">Submit</button>
       </form>
        
    )
}


export default User