import React from "react";
import Header from "./../../Component/Header";
import Sidebar from "./../../Component/Sidebar";
import Box from "./../../Component/Box";
import CardButton from "./../../Component/CardButton";
import Table from "./../../Component/Table";
import BottomButton from "./../../Component/BottomButton";
import CardHeader from "./../../Component/CardHeader";

function Home() {
  return (
    <div>
      <div className="container-fluid h-100">
        <div className="row" style={{ backgroundColor: "white" }}>
          {/**header */}
          <Header />

          <div className="col-md-6 aligncenter">
            <div id="custom-search-input">
              <div class="input-group col-md-12">
                <input
                  type="text"
                  class="form-control input-lg"
                  placeholder="Search for an invoice,customer and vindror"
                />
                <span class="input-group-btn">
                  <i className="fas fa-search"></i>
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
          <div
            className="row"
            style={{ marginTop: "10px", backgroundColor: "#F9FAFB" }}
          >
            <Sidebar />
            <div className="col-md-10">
              <div className="scrollmenu">
                <div
                  className="card"
                  style={{
                    backgroundColor: "#FFF",
                    marginTop: "20px",
                    marginLeft: "10px",
                    marginRight: "10px"
                  }}
                >
                  <CardHeader />
                  <Box />
                  <CardButton />
                  <Table />
                </div>
              </div>
            </div>
            <BottomButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
