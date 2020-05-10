import Unsplash, { toJson } from "unsplash-js";
import { accessKey } from "./secret";

const unsplash = new Unsplash({
  accessKey: accessKey,
});

export const UNAPI = {
  getPhoto: (id) => {
    return unsplash.photos.getPhoto(id).then(toJson);
  },
  photos: (page) => {
    if (page >= 50) {
      alert(`
      Вы обновили страницу ${page} раз
      Unsplash не позволяет обновлять страницу более 50 раз
      `);
      return;
    }
    const json = unsplash.photos
      .listPhotos(page, 4, "latest")
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
