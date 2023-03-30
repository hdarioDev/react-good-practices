import { People } from "@/data";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPeople } from "@/redux/states";
import { PeopleTable } from "./components/PeopleTable";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(People));
  }, []);

  return <PeopleTable />;
};

export default Home;
