import React from "react";

class Payable extends React.Component {

  render() {
      const {  workers = [] } = this.props;
      const { student = [] } = this.props;
    return (
      <div>
        <h2>All workers</h2>
        {workers.map(record => {
          return (
            <div>
              {record.id} : {record.name}
            </div>
          );
        })}
          <h2>All student</h2>
          {student.map(record => {
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

export default Payable;

// function Payable(props) {
//     return <div>Hi2 {props.workerID}</div>
// }
