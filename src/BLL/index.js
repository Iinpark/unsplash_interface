import Unsplash, { toJson } from "unsplash-js";

const accessKey = "rUttPX0GjgLp7kiiXGQNNTqLIuS2XGtb3OP6L0ZqSQY";
const unsplash = new Unsplash({
  accessKey: accessKey,
});

export const UNAPI = {
  getPhoto: (id) => {
    return unsplash.photos.getPhoto(id).then(toJson);
  },
  photos: (page) => {
    const json = unsplash.photos
      .listPhotos(page, 2, "latest")
      .then(toJson)
      .then((json) => json);
    
    return json;
  },
  download: (json) => {
    unsplash.photos.downloadPhoto(json);
  },
  listCollections: () => {
    const json = unsplash.collections
      .listCollections(1, 10, "popular")
      .then(toJson)
      .then((json) => {
        return json;
      });
    return json;
  },
  searchPhotos: (keyword) => {
    const json = unsplash.search
      .photos(keyword, 1, 10)
      .then(toJson)
      .then((json) => {
        return json;
      });
    return json;
  },
};
