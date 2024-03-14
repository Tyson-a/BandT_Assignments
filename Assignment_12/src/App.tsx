import { useState } from 'react';
import './App.css';
import MyButton from './components/Button/Button';
import TextComponent  from './components/Text/Text'
import LabelComponent  from './components/Label/Label'
import HeroImageComponent  from './components/HeroImage/HeroImage'
import DropdownComponent  from './components/Dropdown/DropdownItem'
import MyCardComponent  from './components/Card/Card'
import MyTableComponent  from './components/Table/table'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <MyButton onClick={() => setCount(count => count + 1)}>
          count is {count}
        </MyButton>

        <LabelComponent text= " Title " fontFamily='Comic'  bold />
        <TextComponent text = "Hello world" fontFamily='arial' />
        <HeroImageComponent/>
        <DropdownComponent />
        <MyCardComponent src = "./hero-card-complete.jpeg" text='this is a test to see what my card component can do'/>
        <MyTableComponent starsCSS={5} starsHTML={2}/>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR updates.
        </p>
      </div>
    </>
  );
}

export default App;
