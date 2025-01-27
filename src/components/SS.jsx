import { HEADER_LOGO } from "../../Utils/constant";
import UserClass from "./UserClass";
import React from "react";


class SS extends React.Component{
    constructor(){
        super()
        console.log(  "Parent constructor")

    }

    componentDidMount(){
        console.log( " Parent componentDidMount")

    }

    render(){
        console.log( "Parent Rendered")

        return(
            <div className="items_card">
            <h3>name</h3>
             <h5>Price</h5>
             <h6>rating</h6>
             <h6>Description</h6>
             <div className="item-img">
                 <img className="" src={HEADER_LOGO}></img>
             </div>
             < UserClass name={"Frist"} location={"Hyderabad"}/>
             < UserClass name={"Second"} location={"Vizag"}/>
             < UserClass name={"Third"} location={"Vijayawada"}/>
             < UserClass name={"Fourth"} location={"Kakinada"}/>
             < UserClass name={"Fiveth"} location={"Nellore"}/>
             < UserClass name={"Sixth"} location={"Chittior"}/>
             < UserClass name={"Seventh"} location={"Tirupathi"}/>
         </div>
        )
    }
}



export default SS;