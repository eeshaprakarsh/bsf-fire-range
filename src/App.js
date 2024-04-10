import "./App.css";
import { Card } from "antd";
import Menu from "./components/Menu";

function App() {
  const gridStyle = {
    width: "46%",
    margin: "2% 2%",
    textAlign: "center",
    backgroundColor: "#1777ff",
    color: "white",
  };
  return (
    <div className="app">
      <Card title="BSF Firing Assesment" className="cardStyle">
        <Card.Grid style={gridStyle}>Update Candidate Details</Card.Grid>
        <Card.Grid style={gridStyle}>View/Edit Candidate Details</Card.Grid>
        <Card.Grid style={gridStyle}>Record report</Card.Grid>
        <Card.Grid style={gridStyle}>View Report</Card.Grid>
      </Card>
      <Menu />
      {/* <Typography.Title level={1}>BSF Fire Range</Typography.Title> */}
    </div>
  );
}

export default App;
