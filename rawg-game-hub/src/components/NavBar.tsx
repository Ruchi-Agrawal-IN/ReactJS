import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GameHub Resources/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onNavSearch: (searchText: string) => void;
}
const NavBar = ({ onNavSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onNavSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
