import type { Menu } from "../types/menu.types";
import MenuCard from "./MenuCard";

type MenuProps = {
  data?: Menu;
};
const MenuList = ({ data }: MenuProps) => {
  if(!data) return<p>Loading Menu...</p>
  return (
    <div>
      <h3>Cafe Menu</h3>
      <div className="menu-list">
        {data.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
