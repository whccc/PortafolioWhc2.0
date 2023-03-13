import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import db from "../firebase/firebaseConfig";
const useProjects = () => {
  const [JsonProjectsWeb, setJsonProjectsWeb] = useState([]);
  const [JsonProjectsMovil, setJsonProjectsMovil] = useState([]);

  //Get Projects
  const GetHookProjectsWeb = async () => {
    try {
      const DataJson = [];
      const querySnapshot = await getDocs(collection(db, "ProjectsWeb"));

      querySnapshot.forEach((DataItem) => {
        DataJson.push(DataItem.data());
      });

      DataJson.sort(function (a, b) {
        return a.order - b.order;
      });
      setJsonProjectsWeb(DataJson);
    } catch (Error) {
      console.error("Server Error", Error);
    }
  };

  //Get Projects
  const GetHookProjectsMovil = async () => {
    try {
      const DataJson = [];
      const Data = await getDocs(collection(db, "ProjectsMovil"));
      Data.forEach((DataItem) => {
        DataJson.push(DataItem.data());
      });
      DataJson.sort(function (a, b) {
        return a.order - b.order;
      });
      setJsonProjectsMovil(DataJson);
    } catch (Error) {
      console.error("Server Error");
    }
  };

  return {
    JsonProjectsWeb,
    JsonProjectsMovil,
    GetHookProjectsWeb,
    GetHookProjectsMovil,
  };
};

export default useProjects;
