import React from "react";
import logofile from "./logo.jpg";

import "./DashBoard.css";

function DashBoard() {
  return (
    <div className="container-fluid h-100">
      <div
        className="row"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <div className="col-md-3">
          <div className="row" >
            <div className="col-md-2  border-right">
              <div className="sidebar ">
                <i className="fa fa-chevron-left "></i>
              </div>
            </div>
            <div className="col-md-2">
              <div className="logo">
                <img src={logofile} className="logo" alt="Cinque Terre"></img>
              </div>
            </div>
            {/* <div className="img"> */}
            {/* <i className="fa fa-search" /> */}
            {/* <img src={imgfile} className="img" alt="Cinque Terre"style={{marginTop:"8px"}}></img>
                    <img src={imgfile} className="img" alt="Cinque Terre"></img>
                    <img src={imgfile} className="img" alt="Cinque Terre"></img>
                    <img src={imgfile} className="img" alt="Cinque Terre"></img>
                    <img src={imgfile} className="img" alt="Cinque Terre"></img>
                    <img src={imgfile} className="img" alt="Cinque Terre"></img>
                    <img src={imgfile} className="img" alt="Cinque Terre"></img>
                    <img src={imgfile} className="img" alt="Cinque Terre"></img> */}
            {/* </div> */}

            <div className="col-md-2 ">
              <div className="name">
                <p> Payference</p>
                {/* <h6 style={{marginTop:"10px"}}>DashBoard</h6>
                  <h6>Payloll</h6>
                  <h6>Receivables</h6>
                  <h6>Vendor</h6>
                  <h6>customer</h6>
                  <h6>Reports</h6>
                  <h6>Setting</h6> */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 aligncenter">
          <div id="custom-search-input">
            <div class="input-group col-md-12">
              <input
                type="text"
                class="form-control input-lg"
                placeholder="Search for an invoice,customer and vindror"
              />
              <span class="input-group-btn">
                <button class="btn btn-info btn-lg" type="button">
                  <i className="fas fa-search"></i>
                </button>
              </span>
            </div>
          </div>
          {/* <div className="SearchBar" style={{marginTop:"30px"}}>
       
            
              <div class="input-group md-form form-sm form-2 pl-0">
              <input class="form-control my-0 py-1 red-border" type="text" placeholder="Search" aria-label="Search"></input>
              <div class="input-group-append">
              <span class="input-group-text red lighten-3" id="basic-text1"><i class="fas fa-search text-grey" aria-hidden="true"></i></span>
              </div>
              </div>
                </div> */}
        </div>
        <div className="col-md-3">
          <div class="text-icon-big rounded-circle ">V</div>
        </div>

        <div className="list-group" style={{ backgroundColor: "#f9fafb" }}>
          <div className="col-md-4">
            <p>
              <i className="fas fa-tachometer-alt mr-3">
                &nbsp;&nbsp;&nbsp;DashBoard
              </i>
            </p>
            <p>
              <i className="fas fa-money-bill mr-3">
                &nbsp;&nbsp;&nbsp;Payroll
              </i>
            </p>
            <p style={{ color: "#2a7fff", fontWeight: "bold" }}>
              <i className="fas fa-file-invoice-dollar mr-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Payables
              </i>
            </p>
            <p>
              <i className="fas fa-hand-holding-usd mr-3">
                &nbsp;&nbsp;&nbsp;Receivables
              </i>
            </p>
            <p>
              <i className="fas fa-user-tag mr-3">&nbsp;&nbsp;&nbsp;Vendors</i>
            </p>
            <p>
              <i className="fas fa-users mr-3">&nbsp;&nbsp;&nbsp;customers</i>
            </p>
            <p>
              <i className="fas fa-list mr-4">
                &nbsp;&nbsp;&nbsp;&nbsp;Reports
              </i>
            </p>
            <p>
              <i className="fas fa-cog mr-4">&nbsp;&nbsp;&nbsp;&nbsp;Setting</i>
            </p>
          </div>
        </div>

        <div className="col-md-10">
          <div className="card" style={{ backgroundColor: "#FFF" }}>
            <div
              class="col-md-12"
              style={{
                textAlign: "center",
                backgroundColor: "#fff",
                marginTop: "10px"
              }}
            >
              <h5>PayIQ</h5>
            </div>
            <div className="row">
          
             
              <div className="col-md-2"style={{backgroundColor:"gray",marginLeft:"20px",borderRadius:"5%",height:"100%"}}>
              <text>Total Ammount</text>  
              <h5>$30,440</h5>            
              </div>
              
             
              <div className="col-md-2"style={{backgroundColor:"red",marginLeft:"20px",borderRadius:"5%"}}>
             < text>Critical</text>  
              <h5>$9,177</h5> 
                </div>
                <div className="col-md-2"style={{backgroundColor:"#fd7e14",marginLeft:"20px",borderRadius:"5%"}}>
                < text>High</text>  
              <h5>$2,767</h5> 
                </div>
                <div className="col-md-2"style={{backgroundColor:"#ffc107",marginLeft:"20px",borderRadius:"5%"}}>
                < text>Medium</text>  
              <h5>$8,012</h5> 
                </div>
                
              <div className="col-md-2"style={{backgroundColor:"#28a745",marginLeft:"20px",borderRadius:"5%"}}>
              < text>Low</text>  
              <h5>$10,483</h5> 
              </div>
           
            </div>

            <div className="small">
              <div className="row">
                <div className="col-md-2">
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <button className="btn">
                    <i class="fas fa-sliders-h"></i> Filter{" "}
                    <i className=" fas fa-caret-down"></i>
                  </button>
                </div>

                <button className="btn" style={{ marginLeft: "70%" }}>
                  Export <i className=" fas fa-caret-down"></i>
                </button>
              </div>
            </div>
   
            <table>
              <tr>
            
                <th >
                <text  style={{display:"inline-block"}}>invoice</text>&nbsp;
                 <i className=" fas fa-caret-up" style={{display:"inline-block"}}></i>
                 <i className=" fas fa-caret-down" style={{display:"block", marginTop:"-10px",marginLeft:"83%"}}></i>
              
                </th>
                <th >
                Vendors&nbsp;
                 <i className=" fas fa-caret-up" style={{display:"inline-block"}}></i>
                 <i className=" fas fa-caret-down" style={{display:"block", marginTop:"-10px",marginLeft:"32%"}}></i>
                </th>
                <th>PayIQ date..</th>
                <th >
               Due Date&nbsp;
                 <i className=" fas fa-caret-up" style={{display:"inline-block"}}></i>
                 <i className=" fas fa-caret-down" style={{display:"block", marginTop:"-10px",marginLeft:"86%"}}></i>
                </th>
                <th>Ammount du..</th>
                <th>Payment m..</th>
                <th>
                  status&nbsp;
                <i className=" fas fa-caret-up" style={{display:"inline-block",marginLeft:"4%" ,marginTop:""}}></i>
                 <i className=" fas fa-caret-down" style={{display:"block", marginTop:"-10px",marginLeft:"83%"}}></i>
                </th>
                <th></th>
              </tr>
              <tr>
                
                <td>
                  <i className="fas fa-circle" style={{ color: "red" }}></i>
                  12345
                </td>
                <td>Source Support Services, Inc</td>
                <td>04/04/2020</td>
                <td>02/05/2020</td>
                <td>$2,123</td>
                <td>-</td>
                <td>open</td>
                <td>
                  <i
                    className="fa fa-thumbs-up"
                    style={{ color: "lightGray" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-circle" style={{ color: "orange" }}></i>
                  12345
                </td>
                <td>Source Support Services, Inc</td>
                <td>04/04/2020</td>
                <td>02/05/2020</td>
                <td>$2,123</td>
                <td>-</td>
                <td>open</td>
                <td>
                  <i
                    className="fa fa-thumbs-up"
                    style={{ color: "lightGray" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-circle" style={{ color: "green" }}></i>
                  12345
                </td>
                <td>Source Support Services, Inc</td>
                <td>04/04/2020</td>
                <td>02/05/2020</td>
                <td>$2,123</td>
                <td>-</td>
                <td>open</td>
                <td>
                  <i
                    className="fa fa-thumbs-up"
                    style={{ color: "lightGray" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-circle" style={{ color: "red" }}></i>
                  12345
                </td>
                <td>Source Support Services, Inc</td>
                <td>04/04/2020</td>
                <td>02/05/2020</td>
                <td>$2,123</td>
                <td>-</td>
                <td>open</td>
                <td>
                  <i
                    className="fa fa-thumbs-up"
                    style={{ color: "lightGray" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fas fa-circle" style={{ color: "red" }}></i>
                  12345
                </td>
                <td>Source Support Services, Inc</td>
                <td>04/04/2020</td>
                <td>02/05/2020</td>
                <td>$2,123</td>
                <td>-</td>
                <td>open</td>
                <td>
                  <i
                    className="fa fa-thumbs-up"
                    style={{ color: "lightGray" }}
                  ></i>
                </td>
              </tr>
            </table>
          </div>
          <div className="small">
            <div className="row">
              <div className="col-md-2"></div>

              <button className="btn" style={{ marginLeft: "850px" }}>
                Privious
              </button>
              <button className="btn" style={{ marginLeft: "10px" }}>
                next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
