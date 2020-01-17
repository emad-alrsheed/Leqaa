import React, { Component } from 'react'

export default class Add extends Component {
    constructor(){
        super()
        this.state={
            title:Text,
            artical:Text,
            cummant:Text
            // this.state={count:0}
            // this.handleClick=this.state.bind(this)
        }
    }
    changHandler=(e)=>{
        this.setState({[e.target.title]:e.target.title.Text})
    }
    changHandler2=(e)=>{
        this.setState({[e.target.artical]:e.target.artical.Text})
    }
    changHandler3=(e)=>{
        this.setState({[e.target.cummant]:e.target.cummant.Text})
    }
    handleClick=(e)=>{
        this.setState({cuenter:this.state.count+1})
    }
    render() {
        const {title,artical,cummant}=this.state
        return (
            <div>
            <div>
                <input type="text" name="title" value={title} 
                onChange={this.changHandler}></input>
            </div>
            <div>
                <input type="text" name="artical" value={artical}
                onChange={this.changHandler2}></input>
            </div>
            <div>
                <input type="text" name="cummant" value={Text}
                onChange={this.changHandler3}></input>
            </div>
            <div>
                <button  name="like" 
                onClick={this.handleClick}>{this.state.count}></button>
            </div>
           </div>
        )
    }
}






//             <div>
          
//                  <div class="container"></div>
// 	             <div class="row"></div>
// 	             <div class="col-md-6"></div>
// 	             <form method="post" action="#" id="#">
           
//                      <div class="form-group files"></div>
//                      <label>Upload Your File </label>
//                     <input type="file" class="form-control" multiple="">
//                  </form>
	      
	     
// 	      <div class="col-md-6">
// 	      <form method="post" action="#" id="#">
           
              
//               <div class="form-group files color"></div>
//                 <label>Upload Your File </label>
//                 <input type="file" class="form-control" multiple="">
            
              
            
//         </form>
	      
	      
// 	 </div>
// </div>