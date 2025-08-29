import type { MenuItem } from "../types/menu.types";

type MenuCardProps = {
    item: MenuItem
}
const MenuCard = ({item}: MenuCardProps) => {
  return (
    <div className="menu-card">
    <p>{item.name} - {item.description}</p>
    </div>
  );
};

export default MenuCard;
