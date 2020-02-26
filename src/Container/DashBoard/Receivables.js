import React from "react";

class Receivables extends React.Component {
 
    render() {
        const { student = [] } = this.props;
        const {  workers = [] } = this.props;
      return (
        <div>
          <h2>All student</h2>
          {student.map(record => {
            return (
              <div>
                {record.id} : {record.name}
              </div>
            );
          })}
          
          <h2>All workers</h2>
            {workers.map(record => {
            return (
              <div>
                {record.id} : {record.name}
              </div>
            );
          })}
        </div>
      );
    }
  }
  
  export default Receivables;
  