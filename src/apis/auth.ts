import axios from "axios";

const loginUrl = `${import.meta.env.VITE_BACKEND_ROOT_URL}/mediumSaver/login`;

const signUpUrl = `${import.meta.env.VITE_BACKEND_ROOT_URL}/mediumSaver/signup`;

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

export const signUpAction = async (data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  const response = await axios({
    method: "POST",
    url: signUpUrl,
    data: {
      ...data,
    },
  });

  return response.data;
};
