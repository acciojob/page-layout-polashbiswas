import React from "react";


const PageLayout = ({header, footer, childreen}) => {

    return(
        <div>
            <h1>{header}</h1>
            <p>{childreen}</p>
            <p>{footer}</p>
        </div>
    )
}

export default PageLayout;