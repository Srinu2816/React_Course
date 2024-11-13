/**
 * 
 * <div id="parent">
 *  <div id="child"> 
 *      <h1></h1>    
 *  </div>
 * </div>
 * 
 * 
 */
const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id: "child"},[ (React.createElement("h1", { id: "heading"}, "I am H1 Tag!!!!" )),(React.createElement("h2", {id: "heading"}, "I am H2 Tag!!!!" ))]))

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
   