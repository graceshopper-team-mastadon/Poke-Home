import React from "react";

// const CategoryBar = (props) => {
//     const category = props.category;
//     const generation = props.generation;

//     return (
//         <div className="category-bar">
//             {category}
//         </div>
//     )
// }


const CategoryBar = (props) => {
    const category = props.category;
    const generation = props.generation;

    return (
        <>
            {!generation ?
                (<div className="category-bar">
                    {category}
                </div>)
                : (<div className="category-bar">
                    Generation {generation} / {category}
                </div>)}
        </>

    )
}


export default CategoryBar