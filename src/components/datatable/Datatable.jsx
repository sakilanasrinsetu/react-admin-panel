import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";


const Datatable = () => {
  return (
    <div className="datatable">
        <DataGrid
        rows={userRows}
        columns={userColumns}
        pageSize={1}
        rowsPerPageOptions={[1]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable