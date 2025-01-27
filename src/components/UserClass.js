import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log( this.props.name + " constructor")
        
    }
  
  componentDidMount(){
    console.log(this.props.name+ " componentDidMount")

  }

    render(){
        const {name, location} = this.props;
        console.log(this.props.name+ " rendered")

        return(
            <div>
                <h6>{name}</h6>
                <h6>{location}</h6>
            </div>
           
        )
    }
}

export default UserClass;