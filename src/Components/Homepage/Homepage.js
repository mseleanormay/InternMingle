import React from 'react';


const Homepage=(props)=>{

    //place state here, like react hooks
    /*
    Say i wanna store something passed from props (props is essentially parameters, that you'd see in a regualr function)
    then we would need to destructure props, or get all the variables that props represents like:
    const {name, lastName}= props
    so now we can set name and lastName in state for this prop. If you don't set state accordingly, like with most programming languages things will be hella outta sync

    if we wanna set with functional compoenents we would do
    const[name, setName]= useState("")

    then later we could do
    setName("Allison")

    and later in our code just call name and we'd get Allison
    
    */

    //place functions here as well


    /*
        - the return is essentially the html that gets shown
        - to call a variable: {variableName}
        - to call a fucntion like: {functionName()}
            - note: functions can return a html tags
        - if you need to use if else logic you'd write something like:
        {error===true? (<div> hello</div>): (<div> bye</div>)}
        so if the error is present, you'll see Hello, if not you'll see bye

     */
    return (
        <div>
            Homepage
        </div>
    )
}

export default Homepage;