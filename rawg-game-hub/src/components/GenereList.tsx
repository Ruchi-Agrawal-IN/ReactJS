import { Image, List, ListItem, HStack, Text, Spinner } from "@chakra-ui/react";
import useGeneres from "../hooks/useGenres";
import getCroppedImageurl from "../services/image-url";
const GenereList = () => {
  const { data, error, isLoading } = useGeneres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((d) => (
        <ListItem key={d.id} paddingY={1}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              // As cropping images to any dimentions is not supported so taking width n height a standard size
              src={getCroppedImageurl(d.image_background, 400, 600)}
            ></Image>
            <Text fontSize="lg">{d.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
