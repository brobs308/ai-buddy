import { Box, Text } from "@chakra-ui/react";

interface IBlockProps {
  title: string;
}
const Block = (props: IBlockProps) => {
  return (
    <Box
      draggable={true}
      sx={{
        border: "1px solid blue",
        height: "100px",
        width: "100px",
        textAlign: "center",
      }}
    >
      <Text fontWeight={20} fontSize={30}>
        {props.title}
      </Text>
    </Box>
  );
};

export default Block;
