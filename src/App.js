
import React, { useState , useEffect} from "react";
import "./App.css"
import ListCards from "./components/ListCards"
import NavBar from "./components/NavBar"
import Title from "./components/Title";
import Search from "./components/Search";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const App = () => {   
  //  <Router>
  //     <div>
  //             <Link to="./Pages/Login">ttt</Link>    
  //       < Routes>
  //         <Route path="./Pages/Login">
  //           <Log/>
  //         </Route>        
  //       </ Routes>
  //     </div>
      
  //   </Router>

  const getBooks = () => {
    return fetch("https://fakerapi.it/api/v1/books?_quantity=7")
        .then(async (res) => {
            return await res.json();
        })
        .catch((err) => {
            console.log(err);
        });
}

  const [card, setCards] = useState([ ]);
  useEffect(() => {
    if (!card.length) {
      getBooks().then((books) => {
        setCards(books.data);
        
      });
    }
  })

  const handleSearch = (title) => {
    console.log(card.filter(item => item.title.includes(title)));
    setCards(card.filter(item => item.title.includes(title)));
   
}
  return (
    <div className="main-div">
     
    <NavBar />
     <Title title="List of books in our Library" />
      <Search onSubmit={handleSearch} />
      <ListCards items={card} />
      <footer className="footer"> 
            <p style={{color:'white'}}>copyright PSEU 2021</p>
        </footer>

        
        <Router>
      <div>  
        < Routes>
          <Route path="./pages/Log">

          </Route>        
        </ Routes>
      </div>
      
    </Router>


    </div>
  );
}


export default App;
