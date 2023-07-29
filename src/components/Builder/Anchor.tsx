import { Circle } from "react-konva";

const getAnchorPoints = (
  points: { x: number; y: number },
  size: number
): {
  x: number;
  y: number;
}[] => {
  return [
    {
      x: points.x + size / 2,
      y: points.y,
    },
    {
      x: points.x + size,
      y: points.y + size / 2,
    },
    {
      x: points.x + size / 2,
      y: points.y + size,
    },
    {
      x: points.x,
      y: points.y + size / 2,
    },
  ];
};

const GetAnchors = (props: {
  points: { x: number; y: number };
  size: number;
}) => {
  return getAnchorPoints(props.points, props.size).map((point, index) => (
    <Circle
      x={point.x}
      y={point.y}
      radius={5}
      fill="black"
      draggable
      //   dragBoundFunc={() => dragBounds(anchor)}
      perfectDrawEnabled={false}
      //   ref={anchor}
      offsetX={40}
      offsetY={40}
    />
  ));
};

export default GetAnchors;
