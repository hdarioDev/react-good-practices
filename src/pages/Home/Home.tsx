import { People } from "@/data";
import { Checkbox } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";

const colums = [
  {
    field: "actions",
    type: "actions",
    sortable: false,
    headerName: "",
    width: 50,
    renderCell: (params: GridRenderCellParams) => (
      <>
        {
          <Checkbox />
          // <Checkbox
          //   size="small"
          //   checked={findPerson(params.row)}
          //   onChange={() => handleChange(params.row)}
          // />
        }
      </>
    ),
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 150,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "category",
    headerName: "Categories",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "company",
    headerName: "Company",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
  {
    field: "levelOfHappiness",
    headerName: "Level of happiness",
    flex: 1,
    renderCell: (params: GridRenderCellParams) => <>{params.value}</>,
  },
];

const Home = () => {
  const rowsPerPageOptions = [5];

  return (
    <div style={{ height: 350, width: "100%" }}>
      <DataGrid
        rows={People}
        columns={colums}
        disableColumnSelector
        pagination={true}
        autoPageSize
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </div>
  );
};

export default Home;
