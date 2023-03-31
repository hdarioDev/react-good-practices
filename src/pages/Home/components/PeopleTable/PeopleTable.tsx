import { DataGrid } from "@mui/x-data-grid";

import { usePeople } from "../../hooks/usePeople";

const PeopleTable = () => {
  const { statePeople, colums, rowsPerPageOptions } = usePeople();
  return (
    <div style={{ height: 350, width: "100%" }}>
      <DataGrid
        rows={statePeople}
        columns={colums}
        disableColumnSelector
        pagination={true}
        autoPageSize
        rowsPerPageOptions={rowsPerPageOptions}
      />
    </div>
  );
};

export default PeopleTable;
