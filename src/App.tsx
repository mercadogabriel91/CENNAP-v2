import NavBar from './components/NavBar/NavBar';
import ParallaxView from './views/ParallaxView/ParallaxView';
import Introduction from './views/Introduction/Introduction';

function App() {
  return (
    <div>
      {NavBar()}
      {ParallaxView()}
      {Introduction()}
    </div>
  );
}

export default App;
