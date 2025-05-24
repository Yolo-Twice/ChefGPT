import {useState} from "react"

export default function Main(){
    const [ingredients,setIngredients] = useState([]) 
    const List1 = ingredients.map((item)=>{
        return <li key={item}>
            {item}
        </li>
    })
    
    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient")        
        setIngredients((prev)=> [...prev,newIngredient])

    }

    return (<>
    <main>
    <form className="ingredient-form" action={handleSubmit}>
        <input aria-label="Add ingredient"
            type="text"
            placeholder="ex: oregano"
            name="ingredient"
            />
        <button>Add Ingredient</button>
    </form>
        <ul>
        {List1}
        </ul>

    </main>
    </>)
}
