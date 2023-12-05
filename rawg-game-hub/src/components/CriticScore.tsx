import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 70 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="12px" paddingX={2} borderRadius="5px">
      {score}
    </Badge>
  );
};

export default CriticScore;
