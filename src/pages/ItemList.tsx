
import { IItem } from '../types/types';
import {ReactChildren, ReactNode, useState, useEffect } from 'react'; 
import Image from 'next/image';


type Props = {
  items: IItem[],
  children?: ReactChildren | ReactNode,
  num: number
};



const ItemList = ( { items } : Props): JSX.Element  => {
  const [data, setData] = useState<IItem[]>(items);

   
   useEffect(()=>{
     if(items.length != 0){
       setData(items);
     }
   }, [items]);
  console.log(items);

  return(
    <>
      {data.map((item, i) => (
        <div key={i}>
          <li>{item.node.name}</li>
          <li>{item.node.node_locale}</li>
          <li>
           <Image
               src={`http:${item.node.thumbnailImage.file.url}`}
               alt="Picture of the author"
               width={200}
               height={200}
           /></li>
        </div>
      ))}
     </>
  );

};

export default ItemList;
