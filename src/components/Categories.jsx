import { useState } from "react";

function Categories({toggler}) {
    const [activeIndex, setActiveIndex] = useState(0);
    
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
            <ul>
                {toggler(categories, activeIndex, setActiveIndex)}
            </ul>
        </div>
    )
}

export default Categories;


// <div className="categories">
//     <ul>
//         <li className="active" onClick={changingActiveEl}>Все</li>
//         <li onClick={changingActiveEl}>Мясные</li>
//         <li onClick={changingActiveEl}>Вегетарианская</li>
//         <li onClick={changingActiveEl}>Гриль</li>
//         <li onClick={changingActiveEl}>Острые</li>
//         <li onClick={changingActiveEl}>Закрытые</li>
//     </ul>
// </div> 