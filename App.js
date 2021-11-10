import  CardConverter  from "./CardConverter";
function App() {
  return (
    <div className="App" style={styles}>
      <CardConverter/>
    </div>
  );
}
const styles={
  app:{
    width:'100%',
    height:'100%',
    overflow:'hidden',
    display:'flex',
    justifyContent:'center',
    alignItems: 'center',
  }
}

export default App;
