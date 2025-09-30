import React, { useState } from 'react';
import Card from './Card';
import './App.css';

function App() {
  // Initial state with three albums
  const [albumList, setAlbumList] = useState([
    {
      albumTitle: "Abbey Road",
      albumDescription: "Abbey Road is the eleventh studio album by the Beatles, released in 1969.",
      buttonText: "Details",
      imgURL: "https://via.placeholder.com/150"
    },
    {
      albumTitle: "Dark Side of the Moon",
      albumDescription: "The Dark Side of the Moon is the eighth studio album by Pink Floyd, released in 1973.",
      buttonText: "Details",
      imgURL: "https://via.placeholder.com/150"
    },
    {
      albumTitle: "Thriller",
      albumDescription: "Thriller is the sixth studio album by Michael Jackson, released in 1982.",
      buttonText: "Details",
      imgURL: "https://via.placeholder.com/150"
    }
  ]);

  // Renders the cards using map
  const renderedList = () => {
    return albumList.map((album, idx) => (
      <Card
        key={idx}
        albumTitle={album.albumTitle}
        albumDescription={album.albumDescription}
        buttonText={album.buttonText}
        imgURL={album.imgURL}
      />
    ));
  };

  return (
    <div className="container">
      <h1 className="my-3">React Music App</h1>
      <div className="card-container">
        {renderedList()}
      </div>
    </div>
  );
}

export default App;