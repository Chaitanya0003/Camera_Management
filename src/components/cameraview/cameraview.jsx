import React,{Component} from "react";
import GridDisplay from "./grid_display";
import "./cameraview.css";
import Data from '../../Data/cameraview.json';

const url= "https://s3.us-east-2.amazonaws.com/ftilab.com/api/traffic-counter-cameras.json";

class cameraView extends Component{
    constructor(){
      super()
      
      this.state={
        data: Data,
        originalData: Data,
        counter: 0,
        url: Data.data[0].SnapshotSignedUrl // always default the first image
      }
    }
    
    componentDidMount(){

      setInterval( () => {
        
        const maxRecords = this.state.originalData.data.length;
        let counter = this.state.counter || 0;
        if ( counter < maxRecords - 1){
          counter = counter + 1;
        }else{
          counter = 0; //reset counter
        }

        this.setState({counter : counter});
        const currentImageUrl = this.state.originalData.data[counter].SnapshotSignedUrl;
        this.setState ({ url: currentImageUrl});
      }, 5000);
    }

    handleTagSelection = (event)=>{
      var userInput = event.target.value;
      if ( userInput === 'tags') { // display all records
        const originalData = Object.assign({}, this.state.originalData);
        this.setState({data: originalData });
        return; 
      }
      var output = this.state.data.data.filter((item)=>{
        return(item.Tags.indexOf(userInput)> -1)
      });
      
      const newData = Object.assign({}, this.state.data, {data: output});
      
      this.setState({data: newData});
    }


    render(){
      
      return(
        <React.Fragment>
          <div className="view_cam">
              <div className="cam_show">
                  <div><img className="cctv" src={"./images/cctv1.jpg"} />
                  <span className="view">Camera View</span></div>
                  <div className="search_container">
                      <span style={{fontWeight:"bold",fontSize:"16px"}}>Search</span>
                      <div className="input-icons"> 
                          <i className="fa fa-search icon"></i>
                          <input className="input-field" type="text" placeholder="Search by device Id"/>

                          <select id="select-field" className="fa" onChange={this.handleTagSelection}>
                            <option value='tags'>&#xf02b; Tags</option>
                            <option >consectetur</option>
                            <option>Dolor Sit</option>
                            <option>Vestibulum</option>
                            <option>Office</option> 
                          </select>
                      </div><br/>
                      <div style={{fontSize:"15px"}}>Showing All ({this.state.data.data.length}): </div>
                  </div> 
                  
              </div>
              <div className="snapshot">
                  <div style={{fontWeight:"bold"}}>Latest Snapshot</div>
                  <img className="slider_img" src={this.state.url} />
              </div>
          </div>
          <div>
          <GridDisplay listData={this.state.data}/>
          </div>
          
        </React.Fragment>

      )
    }

   
    }


export default cameraView;