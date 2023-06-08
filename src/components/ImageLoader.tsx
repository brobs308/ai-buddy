import { useEffect, useRef } from "react";
import anime from "animejs";
import { Box, Skeleton } from "@chakra-ui/react";

function ImageLoader() {
  const animatedDiv = useRef(null);

  useEffect(() => {
    anime({
      targets: animatedDiv.current,
      direction: "alternate",
      loop: true,

      rotate: {
        value: 360,
        duration: 1800,
        easing: "easeInOutSine",
      },
      scale: {
        value: 2,
        duration: 1000,
        delay: 600,
        easing: "easeInOutQuart",
      },
      delay: 250, // All properties except 'scale' inherit 250ms delay
    });
  }, []);

  return (
    <Box
      sx={{
        mt: 10,
      }}
    >
      <Skeleton
        ref={animatedDiv}
        style={{ height: "50px", width: "50px", backgroundColor: "red" }}
      />
    </Box>
  );
}

export default ImageLoader;
