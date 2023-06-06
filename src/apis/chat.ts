import axios from "axios";

const chatUrl = "https://h3yqubaa9b.execute-api.ap-south-1.amazonaws.com/chat";

export const postChat = async (content: string) => {
  const response = await axios({
    method: "POST",
    url: chatUrl,
    data: {
      content,
    },
  });

  return response.data;
};
