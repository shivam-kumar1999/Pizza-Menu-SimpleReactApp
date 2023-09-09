import './App.css';

function App() {

  return (
    <>
    
    <Header></Header>
      <Menu></Menu>
     <Footer></Footer>
    
    </>
   
  );
}

function Header() {
  return <h1>Fast React Pizza Company</h1>
}

function Menu() {
  return( 
  <>
    <h2>Our Menu</h2>

  </>
  )
}

function Footer() {
  return <h1>{new Date().toLocaleTimeString()}.  We are Currently Open !</h1>
}

export default App;
