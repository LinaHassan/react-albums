import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PhotoService } from "../../services/photo.service";
import PhotoAlbum from "react-photo-album";

const Photos = () => {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [photosData] = await Promise.all([PhotoService.list()]);
      if (photosData) {
        setPhotos(
          photosData
            .filter((item) => item.albumId === +id)
            .map((item) => ({ src: item.url, width: 600, height: 600 }))
        );
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div className="albums-header ">
        <h1
          style={{
            padding: "2rem",
            textAlign: "center",
          }}
        >
          List of the Photo
        </h1>
      </div>

      <PhotoAlbum layout="rows" photos={photos} />
    </div>
  );
};

export default Photos;
