const fetchAPIData = async (url) => {
  return await fetch(url)
    .then((r) => r.json())
    .then((data) => {
      return data;
    });
};

export const getAPIData = async (apiUrl) => {
  const promises = apiUrl.map(async (repo) => {
    const apiPath = `${process.env.SERVER_API}/data`;
    const api = `${apiPath}/${repo.endpoint}.json`;
    const response = await fetchAPIData(api);
    return {
      name: repo.name,
      data: response,
    };
  });
  const receviedData = await Promise.all(promises);
  return receviedData;
};
