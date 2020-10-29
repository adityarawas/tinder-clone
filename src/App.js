
import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards.js';
import SwipeButton from './SwipeButton.js'
function App() {
  return (
    <div className="App">
      {/* HEADER */}
        <Header />
      {/* TINDER CARD */}
      <TinderCards />
      {/* SWIPE BUTTONS */}
      <SwipeButton />

    </div>
  );
}

export default App;
