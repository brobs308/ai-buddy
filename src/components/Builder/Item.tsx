import Block from "../Block";

interface IDragItemProps {
  draggable?: boolean;
}

const DragItem = (
  props: IDragItemProps = {
    draggable: true,
  }
) => {
  return <Block title="Hello world" />;
};

export default DragItem;
