import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widgets from "../../components/widgets/Widgets";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Barchart from "../../components/barchart/Barchart";

const Home = () => {
  return (
    <div className="home">
        <Sidebar />
        <div className="homeContainer" >
          <Navbar/>
          <div className="widgets">
            <Widgets type= "user"/>
            <Widgets type= "order" />
            <Widgets type= "earning" />
            <Widgets type= "balance" />
          </div>
          <div className="charts">
            <Featured />
            <Chart  aspect={2/1} title = "Last 6 Months (Revenue) "/>
            {/* <Chart  aspect={2/1} title = "Last 6 Months (Revenue) "/> */}
            {/* <Barchart  aspect={1/2} title = "Last 6 Months (Revenue) "/> */}
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transaction</div>
            <Table />
          </div>
        </div>
    </div>
  )
}

export default Home