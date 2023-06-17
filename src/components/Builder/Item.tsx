import Block from "../Block";

interface IDragItemProps {
  draggable?: boolean;
}

const DragItem = (
  props: IDragItemProps = {
    draggable: true,
  }
) => {
  return <img src="./deadpool.png" />;
};

export default DragItem;
