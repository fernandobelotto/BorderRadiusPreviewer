import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { BorderController } from "./BorderController";
import CopyClipboardButton from "./components/CopyClipboardButton";

export default function App() {
  const [cssValue, setCssValue] = useState("");

  const [borderTopLeftRadius, setborderTopLeftRadius] = useState(0);
  const [borderTopRightRadius, setborderTopRightRadius] = useState(0);
  const [borderBottomLeftRadius, setborderBottomLeftRadius] = useState(0);
  const [borderBottomRightRadius, setborderBottomRightRadius] = useState(0);

  return (
    <Center h="100vh">
      <VStack spacing={5}>
        <Box
          m={10}
          border="1px solid"
          borderColor="red"
          w="100px"
          h="100px"
          borderTopLeftRadius={borderTopLeftRadius}
          borderTopRightRadius={borderTopRightRadius}
          borderBottomLeftRadius={borderBottomLeftRadius}
          borderBottomEndRadius={borderBottomRightRadius}
        ></Box>

        <Box>
          <HStack m={5}>
            <BorderController
              title="Top Left"
              borderRadius={borderTopLeftRadius}
              setborderRadius={setborderTopLeftRadius}
            />
            <BorderController
              title="Top Right"
              borderRadius={borderTopRightRadius}
              setborderRadius={setborderTopRightRadius}
            />
          </HStack>
          <HStack m={5}>
            <BorderController
              title="Bottom Left"
              borderRadius={borderBottomLeftRadius}
              setborderRadius={setborderBottomLeftRadius}
            />
            <BorderController
              title="Bottom Right"
              borderRadius={borderBottomRightRadius}
              setborderRadius={setborderBottomRightRadius}
            />

          </HStack>
        </Box>
        {/* TODO: finish css generation
        <Text bg="gray.100" rounded="lg" p="2" paddingX="3" w="300px">
          -webkit-border-radius: 10px; -webkit-border-top-left-radius: 80px;
          -moz-border-radius: 10px; -moz-border-radius-topleft: 80px;
          border-radius: 10px; border-top-left-radius: 80px;
        </Text>
        <CopyClipboardButton value={cssValue} /> */}
      </VStack>
    </Center>
  );
}
