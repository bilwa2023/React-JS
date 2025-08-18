import { useState } from "react"

export function UseState(){
    const [getter,setter]=useState("Keeru")
    return (
        <>
            <div>
                <h2>UseState() Hook Data Binding</h2>
                <p>Hello ! {getter}. This is a hook used for maintaining state in React</p>
                <input type="text" value={getter} />
                
            </div>
        </>
    )
}