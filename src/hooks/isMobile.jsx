import { useEffect, useState } from "react";

export default function useIsMobile(MB = 768) {
    const [isMobile , setIsMobile] = useState(undefined);

    useEffect(() =>{
        const mql = window.matchMedia(`(max-width: ${MB - 1}px)`);
        
        const onChange = () => {
            setIsMobile(window.innerWidth < MB);
        };
        
        mql.addEventListener("change",onChange);

        setIsMobile(window.innerWidth < MB);

        return () => {
            mql.removeEventListener("change",onChange)
        };
    }, [MB]);

    return !!isMobile;

}