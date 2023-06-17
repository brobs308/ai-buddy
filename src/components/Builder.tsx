import React, { useState } from "react";
import { Stage, Layer, Star, Image } from "react-konva";
import Block from "./Block";

import { Box, HStack, VStack } from "@chakra-ui/react";
import DragItem from "./Builder/Item";
import useImage from "use-image";

const URLImage = ({ image }: any) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      // I will use offset to set origin to the center of the image
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
    />
  );
};

const Builder = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [items = [], setItems] = useState<any[]>([]); // [ {id: "someId", x: 10, y: 20}
  const stageRef = React.useRef<any>(null);
  const [cordinates, setCordinates] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  });

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = (e: any) => {
    setIsDragging(false);
    setCordinates({ x: e.target.x(), y: e.target.y() });
  };
  return (
    <HStack>
      <VStack
        width="30%"
        height="100%"
        sx={{
          border: "1px solid red",
        }}
      >
        <DragItem />
      </VStack>
      <Box
        sx={{
          width: "80%",
          height: "100%",
          backgroundColor: "gray.100",
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          console.log(e);

          stageRef.current.setPointersPositions(e);

          setItems([
            ...items,
            {
              ...stageRef.current.getPointerPosition(),
              id: "someId",
              src: "./deadpool.png",
            },
          ]);
        }}
      >
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
          ref={stageRef}
        >
          <Layer>
            {items.map((item) => (
              <URLImage image={item} />
            ))}
            <Star
              id={"someId"}
              x={cordinates.x}
              y={cordinates.y}
              numPoints={5}
              innerRadius={20}
              outerRadius={40}
              fill="#89b717"
              opacity={0.8}
              draggable
              rotation={Math.random() * 180}
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              shadowOffsetX={isDragging ? 10 : 5}
              shadowOffsetY={isDragging ? 10 : 5}
              scaleX={isDragging ? 1.2 : 1}
              scaleY={isDragging ? 1.2 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          </Layer>
        </Stage>
      </Box>
    </HStack>
  );
};

export default Builder;
