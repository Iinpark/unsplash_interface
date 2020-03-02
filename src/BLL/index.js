import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "rUttPX0GjgLp7kiiXGQNNTqLIuS2XGtb3OP6L0ZqSQY"
});

export const UNAPI = {
  photos: () => {
    unsplash.photos
      .listPhotos(2, 15, "latest")
      .then(toJson)
      .then(json => {
        console.log("BLL", json);
      });
  }
};
