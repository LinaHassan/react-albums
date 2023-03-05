import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context";
import { AlbumService } from "./services/album.service";
import AlbumsList from "./components/AlbumsList";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      const [albumsData] = await Promise.all([AlbumService.list()]);
      setAlbums(albumsData.filter((item) => item.userId === currentUser?.id));
    };

    fetchData();
  }, [currentUser?.id]);

  return (
    <div>
      <AlbumsList albums={albums} />
    </div>
  );
};

export default Albums;
