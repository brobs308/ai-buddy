import {
  Button,
  Container,
  Input,
  Spinner,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { useFormik } from "formik";
import { useMutation } from "react-query";
import { postChat } from "../apis/chat";
import { useState } from "react";

function Chat() {
  const [chatResponse, setChatResponse] = useState<string>(
    "Chat Response......"
  );

  const getChat = useMutation("postChat", postChat, {
    onSuccess(data) {
      setChatResponse(data?.[0]?.message?.content);
    },
  });

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      setChatResponse("");
      getChat.mutate(values.content);
    },
  });

  return (
    <Container>
      <VStack alignItems="center" spacing={2}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
          onSubmit={formik.handleSubmit}
        >
          <label htmlFor="content">Ask something..</label>
          <Textarea
            id="content"
            name="content"
            autoComplete="off"
            minH={40}
            onChange={formik.handleChange}
            value={formik.values.content}
          />

          <Button
            sx={{
              mt: 2,
            }}
            disabled={getChat.isLoading}
            type="submit"
          >
            Submit
          </Button>
        </form>

        {getChat.isLoading ? (
          <Spinner
            sx={{
              alignSelf: "center",
            }}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        ) : null}

        <Text
          sx={{
            minH: "100px",
            minW: "100%",
          }}
        >
          {chatResponse}
        </Text>
      </VStack>
    </Container>
  );
}

export default Chat;
