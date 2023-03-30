import { Person } from "@/models";
import { addFavorite } from "@/redux/states";
import { AppsStore } from "@/redux/store";
import { Checkbox } from "@mui/material";
import { GridRenderCellParams, DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const PeopleTable = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);
  const rowsPerPageOptions = [5];
  //use app state
  const dispatch = useDispatch();
  const statePeople = useSelector((state: AppsStore) => state.people);
  const favoritePeople = useSelector((state: AppsStore) => state.favorites);

  const findPerson = (person: Person) =>
    !!selectedPeople.find((people) => people.id === person.id);
  const filterPerson = (person: Person) =>
    selectedPeople.filter((people) => people.id !== person.id);

  const handleChange = (person: Person) => {
    const filteredPeople = findPerson(person)
      ? filterPerson(person)
      : [...selectedPeople, person];
    dispatch(addFavorite(filteredPeople));
    setSelectedPeople(filteredPeople);
  };

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
            <Checkbox
              size="small"
              checked={findPerson(params.row)}
              onChange={() => handleChange(params.row)}
            />
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

  useEffect(() => {
    setSelectedPeople(favoritePeople);
  }, [favoritePeople]);

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
