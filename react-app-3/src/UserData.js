import React, { useState, useEffect } from "react";
import axios from "axios";
import Paginate from "./Paginate";
import ReactPaginate from "react-paginate";
import './App.css';

const UserData = () => {
  const [itemsPerPage, setitemsPerPage] = useState(10);
  const [CurrentPage, setCurrentPage] = useState(2);
  const [Data, setData] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [CurrentData, setCurrentData] = useState([]);

  useEffect(() => {
    async function getUserData(){
      const response=await fetch("https://api.github.com/users");
const users=await response.json();
setData(response.data);
     }
    }, []);

     useEffect(() => {
      axios.get("https://api.github.com/users").then((e) => setData(e.data));
    const LastpageIndex = CurrentPage * itemsPerPage;
    const FirstpageIndex = LastpageIndex - itemsPerPage;
    const Current = Data.slice(FirstpageIndex, LastpageIndex);
    setCurrentData(Current);
    console.log(Current);
   
  }, [Data,CurrentPage]);

  return (
    <div  className="App">
     <div  className="container-md">
       <div  className="row">
    <div  className="col-12">
      {CurrentData.map((item) => {
        return (

          <div key={item.id} className="ui card">
  <a key={item.id} className="image" href={item.avatar_url}>
    <img key={item.id} src={item.avatar_url}/>
  </a>
  <div key={item.id} className="content">
    <a key={item.id} className="header" href={item.html_url}>{item.login}</a>

  </div>
</div>
         
        );
      })}
      <Paginate Data={Data.length} itemsPerPage={itemsPerPage}  setCurrentPage={setCurrentPage}/>
    </div>
    </div>
    </div>
    </div>
  );
};

export default UserData;
