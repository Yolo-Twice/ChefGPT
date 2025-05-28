import {useState} from "react"

export default function Main(){
    const [ingredients,setIngredients] = useState([]) 
    const List1 = ingredients.map((item)=>{
        return <li className="slide-in" key={item}>
            {item}
        </li>
    })
    
    function handleSubmit(formData){
        const newIngredient = formData.get("ingredient") 
        if(newIngredient.length>1){
            setIngredients((prev)=> [...prev,newIngredient])
        }       
        

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
    {ingredients.length>0 && <section>
        <h2 className="slide-in">Ingredients Added:</h2>
        <ul className="ingredients-list" aria-live="polite">{List1}</ul>
        {ingredients.length>2 &&<div className="get-recipe-container slide-in2">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>}
    </section>}
    </main>
    </>)
}
