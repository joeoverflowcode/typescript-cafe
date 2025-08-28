import type { CafeItem } from "../types/cafe.types";

type CafeMenuProps = {
  data: CafeItem[];
};
const CafeMenu = ({ data }: CafeMenuProps) => {
  return (
    <div>
      <h3>Cafe Menu</h3>
      {data.map((item) => (
        <p key={item.id}> 
        {item.name} - {" "} 
         {item.description}</p>
      ))}
    </div>
  );
};

export default CafeMenu;
