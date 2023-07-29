import React, { useState } from "react";
import { Stage, Layer, Star, Image, Rect, Line } from "react-konva";
import Block from "./Block";

import { Box, HStack, VStack } from "@chakra-ui/react";
import DragItem from "./Builder/Item";
import useImage from "use-image";
import { nanoid } from "nanoid";
import GetAnchors from "./Builder/Anchor";

const SIZE = 120;
const points = [0, 0, SIZE, 0, SIZE, SIZE, 0, SIZE, 0, 0];

function Border({ step }: { step: any; id?: string }) {
  const { x, y } = step;
  return (
    <Line
      x={x}
      y={y}
      points={points}
      stroke="black"
      strokeWidth={2}
      perfectDrawEnabled={false}
      offsetX={10}
      offsetY={10}
    />
  );
}

const URLImage = ({
  image,
  setSelected,
}: {
  image: any;
  setSelected?: any;
}) => {
  const [img] = useImage(image.src);
  return (
    <Image
      image={img}
      x={image.x}
      y={image.y}
      width={100}
      height={100}
      onClick={() => {
        setSelected(image.id);
      }}
    />
  );
};

const Builder = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedItem, setSelection] = useState<string>("");
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
              id: nanoid(),
              src: "./talking-icon.svg",
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
              <>
                <URLImage image={item} setSelected={setSelection} />

                <Border
                  step={{
                    x: item.x,
                    y: item.y,
                  }}
                />

                {selectedItem === item.id ? (
                  <GetAnchors points={{ x: item.x, y: item.y }} size={180} />
                ) : null}
              </>
            ))}
          </Layer>
        </Stage>
      </Box>
    </HStack>
  );
};

export default Builder;
