import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "light"}
        onChange={toggleColorMode}
      />
      <Text>Light Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
