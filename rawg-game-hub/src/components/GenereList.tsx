import { Image, List, ListItem, HStack, Text } from "@chakra-ui/react";
import useGeneres from "../hooks/useGenres";
import getCroppedImageurl from "../services/image-url";
const GenereList = () => {
  const { data } = useGeneres();
  return (
    <List>
      {data.map((d) => (
        <ListItem key={d.id} paddingY={1}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageurl(d.image_background)}
            ></Image>
            <Text fontSize="lg">{d.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
