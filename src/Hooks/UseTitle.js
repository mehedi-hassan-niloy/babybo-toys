import { useEffect } from "react"

const useTitle = title =>{
useEffect(()=>{
    document.title = `${title} - Babybo Toys`;
},[title])
}

export default useTitle;