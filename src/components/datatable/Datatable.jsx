import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";



const Datatable = () => {
  
  const actionColumn = [
    {
      field: "action", 
      headerName : "Action", 
      width:  200,
      renderCell:() => {
        return (
          <div  className="cellAction">
            <div className="viewButton">
            <Link to="/users/12" style={{ textDecoration : "none"}}>
              View
              </Link>
              </div>
            <div className="deleteButton">Delete</div>
          </div>
        )
      }
    }
  ] 
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" style={{ textDecoration : "none"}}
        className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable