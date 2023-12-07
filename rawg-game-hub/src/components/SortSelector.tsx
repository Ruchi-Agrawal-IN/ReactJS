import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  selectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ sortOrder, selectSortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find((odr) => odr.value === sortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by:{currentSortOrder?.label || "Relevance"}
        <MenuList>
          {sortOrders.map((sortItem) => (
            <MenuItem
              onClick={() => {
                selectSortOrder(sortItem.value);
              }}
              key={sortItem.value}
              value={sortItem.value}
            >
              {sortItem.label}
            </MenuItem>
          ))}
        </MenuList>
      </MenuButton>
    </Menu>
  );
};

export default SortSelector;
