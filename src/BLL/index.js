import Unsplash, { toJson } from "unsplash-js";

const accessKey = "rUttPX0GjgLp7kiiXGQNNTqLIuS2XGtb3OP6L0ZqSQY";
const unsplash = new Unsplash({
  accessKey: "rUttPX0GjgLp7kiiXGQNNTqLIuS2XGtb3OP6L0ZqSQY"
});

export const UNAPI = {
  photos: () => {
    const json = unsplash.photos
      .listPhotos(2, 10, "latest")
      .then(toJson)
      .then(json => json);
    console.log("BLL", json);
    return json;
  },
  download: json => {
    fetch(json.links.download_location + `?client_id=${accessKey}`)
      .then(resp => {
        return resp.json();
      })
      .then(link => {
        console.log(typeof link);

        window.open(link.url);
      });
    unsplash.photos.downloadPhoto(json);
  }
};
