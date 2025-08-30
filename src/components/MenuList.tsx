import type { MenuItem } from "../types/menu"

type MenuListProps= {
    data: MenuItem[]
}
const MenuList = ({data}: MenuListProps) => {
  return (
    <div><h3>Menu List</h3>
    {data.map((item) => (
        <div key={item.id}>
            {item.name} - {item.description}
        </div>
    ))}
    </div>
  )
}

export default MenuList