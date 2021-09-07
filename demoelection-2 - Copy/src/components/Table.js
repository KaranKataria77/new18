import { fetch_data } from "@/includes/article.helper";
import fetchUtility from "@/includes/fetchUtility";
//import axios from "axios";
import { useEffect, useState } from "react";

const Table = (props) => {
  const [tableData, setTableData] = useState([]);
  //const ['varaible name','variable set function'] = useState([]);
  
  useEffect(async () => {
    // let result = await axios.get(
    //   "https://www.moneycontrol.com/newsapi/get_data/widget/main_home_page/"
    // );
    //fetch_data()
    let result = await fetchUtility("https://www.moneycontrol.com/newsapi/get_data/widget/main_home_page/",[])
    setTableData(result.section_1 || []);
  }, []);

  try{
  return (
    <div>
      <h2>{props.title}</h2>

      <table>
        <tr>
          <th>Headline</th>
          <th>Post Type</th>
          <th>Source</th>
        </tr>
        {tableData.map((data) => {
          return (
            <tr>
              <td>{data.headline}</td>
              <td>{data.post_type}</td>
              <td>{data.source}</td>
            </tr>
          );
        })}
      </table>

      <style>
        {`
            table {
                font-family: arial, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }
            
            td, th {
                border: 1px solid #dddddd;
                text-align: left;
                padding: 8px;
            }
            
            tr:nth-child(even) {
                background-color: #dddddd;
            }
        `}
      </style>
    </div>
  );
  }
  catch (e) {
      //console.log('Error(Table.js)::',e);
      return null;
  }
};
export default Table;
