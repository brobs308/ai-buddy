import axios from "axios";

const loginUrl = `${import.meta.env.VITE_BACKEND_ROOT_URL}/mediumSaver/login`;

export const loginAction = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axios({
    method: "POST",
    url: loginUrl,
    data: {
      ...data,
    },
  });

  return response.data;
};
