import "./chart.scss";
import { Line, Radar, Bar, Doughnut, PolarArea, Bubble, Pie, Scatter } from "react-chartjs-2";

const state = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "blue",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        data: [2, 8, 22, 17, 24, 4],
      }
    ],
  };


const Chart = () => {
    return ( 
       <div className="chart">
           <div className="chart-flex">
           <div className="chart-header-left">
           <h5> Activity </h5>
           <select name="months" id="months">
           <option value="month">Month</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
            </select>
           </div>
           <div className="chart-hearder-right">
           <button>View Transaction History</button>
           </div>
           </div>
           
           <Line
        data={state}
        height={100}
        className="chart"
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right"
          },
        }}
      />
           
       </div>
     );
}
 
export default Chart;