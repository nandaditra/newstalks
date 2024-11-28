import { useState } from "react";

interface LinkProps {
    url:string;
    urlName:string;
}

const Link = ({url, urlName}:LinkProps) => {
    const [hover, setHover] = useState<boolean>(false)
    const [active, setActive] = useState<boolean>(false)

    const handleMouseHover = () => {
        setHover(hover => !hover);
    }

    const handleMouseLeave = () => {
        setHover(hover => !hover);
    }

    const handleMouseClick = () => {
        setActive(active => !active)
    }

    const textColor = active ? "nav-link active" : "nav-link"
    
    return (
        <a 
           href={url} 
           className={textColor}
           onMouseEnter = {handleMouseHover}
           onMouseLeave={handleMouseLeave}
           onClick={handleMouseClick}
           > 
            {urlName} 
        </a>
    )
}

export default Link