import Unsplash, { toJson } from "unsplash-js";

const accessKey = "rUttPX0GjgLp7kiiXGQNNTqLIuS2XGtb3OP6L0ZqSQY";
const unsplash = new Unsplash({
  accessKey: accessKey,
});

export const UNAPI = {
  getPhoto: (id) => {
    return unsplash.photos.getPhoto(id).then(toJson);
  },
  photos: () => {
    const json = unsplash.photos
      .listPhotos(1, 10, "latest")
      .then(toJson)
      .then((json) => json);
    return json;
  },
  download: (json) => {
    fetch(json.links.download_location + `?client_id=${accessKey}`)
      .then((resp) => {
        return resp.json();
      })
      .then((link) => {
        console.log(typeof link);

        window.open(link.url);
      });
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
