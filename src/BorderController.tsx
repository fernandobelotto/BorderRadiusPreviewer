import {
  Box, FormLabel, Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text
} from "@chakra-ui/react";

export function BorderController(props: any) {
  return (
    <Box border="2px solid" p={5} borderColor="gray.200">
      <Text>{props.title} Corder</Text>
      <FormLabel>Radius</FormLabel>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={30}
        onChange={(e) => props.setborderRadius(e)}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text textAlign="center" bg="gray.100" rounded="lg" p="2">
        {props.borderRadius}
      </Text>
    </Box>
  );
}
