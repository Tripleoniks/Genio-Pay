import "./chart.scss"


const Chart = () => {
    return ( 
       <div className="chart">
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
     );
}
 
export default Chart;