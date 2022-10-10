import { useState } from "react";
export function useBasket() {
    const [sum, setSum] = useState(0);
    const [items, setItems] = useState(0);
    function addToBasket() {
        console.log("CYKA")
        setItems( items + 1)
        setSum( sum + 1)
    }
    return [sum, items, addToBasket]
}

