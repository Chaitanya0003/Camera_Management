import React from "react";
import LastActivity from "../lastActivity/index";
import FileUpload from "../FileUpload/index";
import "./grid_display.css";

const gridDisplay = (props) =>{

    const renderTags =(tags) =>{
        if(tags){
            return tags.map((items,index) =>{
                return(
                    <span key={index}>{items}&nbsp;&nbsp;</span>
                )
            })
        }
    }

    const renderdata= ({listData}) =>{
        if(listData.data){
            return listData.data.map((item)=>{
                return(
                    <tr key={item.DeviceID}>
                        <td style={{textAlign:"center"}}><input className="check_box" type="checkBox"/></td>
                        <td style={{textAlign:"center"}}><img src={item.SnapshotSignedUrl} alt="snapshot" className="grid_snap" /></td>
                        <td>{item.DeviceID}</td>
                        <td><LastActivity time={item.LastActivityTime}/></td>
                        <td>{renderTags(item.Tags)}</td>
                    </tr>
                )
            })            
        }
    }
    return(
        <div className="table_box">
            <table width="100%" cellPadding="0" cellSpacing="0" border="0px">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th style={{width:"25%"}} >Device ID</th>
                        <th >Last Activity</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {renderdata(props)}
                </tbody>
            </table><br/><br/>
            <div>
                <FileUpload/>
            </div>
        </div>
    )
}

export default gridDisplay;