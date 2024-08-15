import React from "react";
import ReactDOM from "react-dom/client";


    const heading2 = React.createElement("h1", { id: "heading", xyz: "hello" },//these are called props
     "Hello World From React"); //this is called children   
     //heading2 is object created by react
     const root2 = ReactDOM.createRoot(document.getElementById("root"));
     root2.render(heading2); //render will convert object html tag
     
     //--------------nested tags--------------
     /*
     <div id ="parent">
        <div id ="child">
            <h1>Hi I am an H1 Tag.</h1>
            <h2>Hi I am A H2 Tag.</h2>
        </div>
        <div id ="child2">
            <h1>Hi I am an H1 Tag.</h1>
            <h2>Hi I am A H2 Tag.</h2>
        </div>
     </div>
     */
    const heading3 = React.createElement("div",{id:"parent"},[
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"Hi I am a H10 tag."),
            React.createElement("h2",{},"hi I am a H2 tag")]),
            React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"Hi I am a H1 tag."),
            React.createElement("h2",{},"hi I am a H2 tag")])
    ]
        );
    
    root2.render(heading3);