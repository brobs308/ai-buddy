import axios from "axios";

const rootUrl = `${import.meta.env.VITE_BACKEND_ROOT_URL}/mediumSaver/getLinks`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getLinks = async ({ queryKey }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
