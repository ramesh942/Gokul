import React from "react";


export default class Header extends React.Component {
  render() {
    return (
        <table>
                <tr>
                  <th>
                    <div className="d-flex">
                      <span
                        className="justify-content-center"
                        style={{ display: "inline-block" }}
                      >
                        invoice
                      </span>
                      <span style={{ marginLeft: "4px" }}>
                        <i
                          class=" fas fa-caret-up"
                          style={{ display: "block" }}
                        ></i>
                        <i
                          class=" fas fa-caret-down"
                          style={{ display: "block", marginTop: "-4px" }}
                        ></i>
                      </span>
                    </div>
                  </th>
                  <th>
                    <div className="d-flex">
                      <span
                        className="justify-content-center"
                        style={{ display: "inline-block" }}
                      >
                        Vendors
                      </span>
                      <span style={{ marginLeft: "4px" }}>
                        <i
                          class=" fas fa-caret-up"
                          style={{ display: "block" }}
                        ></i>
                        <i
                          class=" fas fa-caret-down"
                          style={{ display: "block", marginTop: "-4px" }}
                        ></i>
                      </span>
                    </div>
                  </th>
                  <th>PayIQ date..</th>
                  <th>
                    <div className="d-flex">
                      <span
                        className="justify-content-center"
                        style={{ display: "inline-block" }}
                      >
                        Due date
                      </span>
                      <span style={{ marginLeft: "4px" }}>
                        <i
                          class=" fas fa-caret-up"
                          style={{ display: "block" }}
                        ></i>
                        <i
                          class=" fas fa-caret-down"
                          style={{ display: "block", marginTop: "-4px" }}
                        ></i>
                      </span>
                    </div>
                  </th>
                  <th>Ammount du..</th>
                  <th>Payment m..</th>
                  <th>
                    <div className="d-flex">
                      <span
                        className="justify-content-center"
                        style={{ display: "inline-block" }}
                      >
                        Status
                      </span>
                      <span style={{ marginLeft: "4px" }}>
                        <i
                          class=" fas fa-caret-up"
                          style={{ display: "block" }}
                        ></i>
                        <i
                          class=" fas fa-caret-down"
                          style={{ display: "block", marginTop: "-4px" }}
                        ></i>
                      </span>
                    </div>
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
                    <i
                      className="fas fa-circle"
                      style={{ color: "orange" }}
                    ></i>
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
      
    );
  }
}