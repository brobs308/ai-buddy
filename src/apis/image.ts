import axios from "axios";

const chatUrl =
  "https://h3yqubaa9b.execute-api.ap-south-1.amazonaws.com/generate/image";

export const generateImage = async (content: string) => {
  const response = await axios({
    method: "POST",
    url: chatUrl,
    data: {
      content,
    },
  });

  return response.data;
};
