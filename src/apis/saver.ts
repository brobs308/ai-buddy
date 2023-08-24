import axios from "axios";

const rootUrl = `${import.meta.env.VITE_BACKEND_ROOT_URL}/mediumSaver/getLinks`;

export const getLinks = async ({ queryKey }: any) => {
  const [_, userId] = queryKey;
  const response = await axios({
    method: "GET",
    url: rootUrl,
    params: {
      userId,
    },
  });

  return response.data;
};
