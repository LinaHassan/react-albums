import { Link } from "react-router-dom";
import "./AlbumsList.css";
const AlbumsList = ({ albums }) => {
  return (
    <div className="continer">
      <div className="albums-header ">
        <h1>List of the Album</h1>
      </div>

      {albums.map((album) => (
        <div className="albums" key={album.id}>
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
