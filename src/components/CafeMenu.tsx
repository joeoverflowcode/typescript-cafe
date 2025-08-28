import type { CafeItemPreview } from "../types/cafe.types";

type CafeMenuProps = {
  data: CafeItemPreview[];
};
const CafeMenu = ({ data }: CafeMenuProps) => {
  return (
    <div>
      <h3>Mateo's Cafe Menu</h3>
      {data.map((item) => (
        <p key={item.id}> 
        {item.name} - {" "} 
         {item.category}</p>
      ))}
    </div>
  );
};

export default CafeMenu;
