import { Button, Container, Image, Input, VStack } from "@chakra-ui/react";

import { useFormik } from "formik";
import { useMutation } from "react-query";
import { useState } from "react";
import { generateImage } from "../apis/image";
import ImageLoader from "./ImageLoader";

function ImageGenerator() {
  const [imageUrl, setImageUrl] = useState<string>("");

  const getImage = useMutation("generateImage", generateImage, {
    onSuccess(data) {
      setImageUrl(data?.[0]?.url);
    },
  });

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    onSubmit: (values) => {
      getImage.mutate(values.content);
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
          <label htmlFor="content">Generate Image....</label>
          <Input
            id="content"
            name="content"
            type="text"
            autoComplete="off"
            onChange={formik.handleChange}
            value={formik.values.content}
          />

          <Button
            sx={{
              mt: 2,
            }}
            disabled={getImage.isLoading}
            type="submit"
          >
            Generate
          </Button>
        </form>

        {getImage.isLoading ? (
          <ImageLoader />
        ) : // <Spinner
        //   sx={{
        //     alignSelf: "center",
        //   }}
        //   thickness="4px"
        //   speed="0.65s"
        //   emptyColor="gray.200"
        //   color="blue.500"
        //   size="xl"
        // />
        null}

        {getImage.isSuccess ? <Image src={imageUrl} /> : null}
      </VStack>
    </Container>
  );
}

export default ImageGenerator;
