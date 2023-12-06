import { Image, List, ListItem, HStack, Button } from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGenres";
import getCroppedImageurl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenereList = ({ onSelectGenre }: Props) => {
  const { data, error } = useGeneres();
  if (error) return null;
  //   if (isLoading) return <Spinner />;
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
            <Button
              onClick={() => onSelectGenre(d)}
              fontSize="lg"
              variant="link"
            >
              {d.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
