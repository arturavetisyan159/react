import './App.css';
import Info from './Info'

function App() {
  let album_name = 'Highway to Hell';
  let group_name = 'AC/DC';
  let year = 1979;
  let pict = "https://upload.wikimedia.org/wikipedia/ru/5/53/HighwayHellCover.jpg"

  return (
    <div className="App">
      <Info album_name = {album_name} group_name = {group_name} year = {year} pict = {pict} />
    </div>
  );
}

export default App;
