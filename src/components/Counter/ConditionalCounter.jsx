import React, { useState } from "react";
import Counter from "./Counter";
import Counter2 from "./Counter2";

export default function ConditionalCounter() {
    const [page, setPage] = useState(true);
    console.log(page);
    // let element;
    // element = page ? <Counter/> : <Counter2/>
    // if (page){
    //     return <Counter />
    // }
    // else {
    //     return <Counter2/>
    // }
    return (
        <div>
            {/* {element} */}
            {page ? <Counter /> : <Counter2 />}
        </div>
    );
}
