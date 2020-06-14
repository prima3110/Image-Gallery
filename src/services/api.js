const baseUrl = `https://api.unsplash.com/photos?per_page=21&client_id=hynksbEJVcSB9wo7X_HbqGgAGRDwQaKda8y3szz0aZ8`;

export const getPosts = (page) =>
  fetch(baseUrl + `&page=${page}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
