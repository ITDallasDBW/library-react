// import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import { useEffect, useState } from "react";


function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    // console.log('add to cart', book)
    //setCart([...cart, {...book, quantity: 1}]) this adds quantity of 1 to the book properties object. BUT, don't want to do that. REALLY want to increment quantity if it's already in cart. So, check for dupes first:
    //const dupeItem = cart.find(item => +item.id === +book.id)
    //When a dupe is found, quantity is updated:
    // if (dupeItem) {
    //   dupeItem.quantity += 1;
    // }
    //BUT, this increments the quantity AND the array...[q1] then [q2, q1] then [q3, q2, q1].
    //SO...gotta map thru the array. Where map finds a dupe, increment that dupe. But don't increment the array.
    const dupeItem = cart.find(item => +item.id === +book.id)
    if (dupeItem) {
      // dupeItem.quantity += 1;
      setCart(cart.map(item => {
        if (item.id === dupeItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          }
        }
        else {
          return item
        }
      }))
    }
    else {
      setCart([...cart, {...book, quantity: 1}])
    }
    // console.log(dupeItem)
    // setCart([...cart, {...book, quantity: 1}])
  }
  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} />} />
        {/* <Route path="/cart" component={Cart} /> */}
        <Route path="/cart" render={() => <Cart books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
