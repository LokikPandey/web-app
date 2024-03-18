import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingopt = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      <Box width="full" height={"100vh"}>
        <Image src={img1} alt="img1" />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingopt}>
          Watch the future
        </Heading>
      </Box>
      <Box width="full" height={"100vh"}>
        <Image src={img2} alt="img2" />
        <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingopt}>
          {" "}
          Watch the future
        </Heading>
      </Box>
      <Box width="full" height={"100vh"}>
        <Image src={img3} alt="img3" />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingopt}>
          Watch the future
        </Heading>
      </Box>
      <Box width="full" height={"100vh"}>
        <Image src={img4} alt="img4" />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingopt}>
          Watch the future
        </Heading>
      </Box>
      <Box width="full" height={"100vh"}>
        <Image src={img5} alt="img5" />
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingopt}>
          Watch the future
        </Heading>
      </Box>
    </Carousel>
  );
};
function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={"container.xl"} minH={"100vh"} padding="16">
        <Heading
          textTransform={"uppercase"}
          margin={"auto"}
          py={"2"}
          w={"fit-content"}
          borderBottom={"2px solid"}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />

          <Text
            letterSpacing={"widest"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            nihil, facere assumenda sequi similique aliquam error hic neque
            architecto iusto at in nemo a animi dolorum laboriosam voluptatem
            minus? Neque animi amet ipsam quae illo, ad sint error dolore atque
            saepe iure est asperiores repudiandae minus similique quibusdam a
            accusantium.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
export default Home;
