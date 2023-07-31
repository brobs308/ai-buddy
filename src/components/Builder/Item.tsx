import Block from "../Block";

interface IDragItemProps {
  draggable?: boolean;
}

const DragItem = (
  props: IDragItemProps = {
    draggable: true,
  }
) => {
  console.log("DragItem props", props);
  return <Block title="Hello world" />;
};

export default DragItem;
