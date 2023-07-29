import { Box, Image, Text } from "@chakra-ui/react";

interface IBlockProps {
  title: string;
}
const Block = (props: IBlockProps) => {
  return (
    <Box
      draggable={true}
      sx={{
        // border: "1px solid blue",
        height: "100px",
        width: "100px",
        textAlign: "center",
      }}
    >
      <Image src="./talking-icon.svg" />
    </Box>
  );
};

export default Block;
