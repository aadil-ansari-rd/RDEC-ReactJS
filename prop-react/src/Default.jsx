function Default(){
    return(
        <div>
            <h1>Going to learn Default </h1>
        </div>
    )
}
function Default1(){
    return(
        <div>
            <h1>Going to learn Default 1</h1>
        </div>
    )
}
function Default2(){
    return(
        <div>
            <h1>Going to learn Default 2</h1>
        </div>
    )
}
function Default3(){
    return(
        <div>
            <h1>Going to learn Default 3</h1>
        </div>
    )
}
export {Default , Default1 , Default3};
export default Default2 ;



// Summary

// Feature	       Default Export	          Named Export
// Quantity	       Only one per module     	  Multiple per module
// Syntax	       export default	          export
// Import Syntax   import X from 'module'	  import { X } from 'module'
// Renaming	       Can rename during import	  Can rename using as during import
// Use Case	       Main item of a module	  Multiple items in a module
