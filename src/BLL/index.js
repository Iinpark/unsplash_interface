import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "rUttPX0GjgLp7kiiXGQNNTqLIuS2XGtb3OP6L0ZqSQY"
});

export const UNAPI = {
  photos: () => {
    const json = unsplash.photos
      .listPhotos(2, 1, "latest")
      .then(toJson)
      .then(json => json);
    console.log("BLL", json);
    return json;
  }
};
