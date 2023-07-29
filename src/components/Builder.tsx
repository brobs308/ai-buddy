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
  updateCoordinates,
  onDragStart,
}: {
  image: any;
  setSelected?: (id: string) => void;
  onDragStart: () => void;
  updateCoordinates: (
    points: {
      x: number;
      y: number;
    },
    id: string
  ) => void;
}) => {
  const [img] = useImage(image.src);
  return (
    <Image
      draggable
      onDragStart={onDragStart}
      onDragEnd={(e) => {
        updateCoordinates({ x: e.target.x(), y: e.target.y() }, image.id);
      }}
      id={image.id}
      key={image.id}
      image={img}
      x={image.x}
      y={image.y}
      width={100}
      height={100}
      onClick={() => {
        if (!setSelected) return;
        setSelected(image.id as string);
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

  const updateCoordinates = (points: { x: number; y: number }, id: string) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          ...points,
        };
      }
      return item;
    });
    setItems(newItems);
    setIsDragging(false);
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
                <URLImage
                  key={item.id}
                  image={item}
                  setSelected={setSelection}
                  updateCoordinates={updateCoordinates}
                  onDragStart={handleDragStart}
                />

                {!isDragging ? (
                  <Border
                    key={`${item.id}-border`}
                    step={{
                      x: item.x,
                      y: item.y,
                    }}
                  />
                ) : null}
                {selectedItem === item.id ? (
                  <GetAnchors
                    key={`${item.id}-anchors`}
                    points={{ x: item.x, y: item.y }}
                    size={180}
                  />
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
