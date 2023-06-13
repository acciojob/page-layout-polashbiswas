
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";
const App = () => {
  
  return (
    <div>
        <PageLayout 
        header = "Welcome to my website"
        footer = "@2023 My Website. All rights reserved."
        childreen= "This is the content of my website."
        >
          </PageLayout>
    </div>
  )
}

export default App
