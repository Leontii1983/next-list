import { GetStaticProps } from 'next';
import ItemList from "./ItemList";
import { IItem } from '../types/types';
import { sampleItemsData } from '../data/sample-data';

type Props = {
  items: IItem[],
};


const Home = ( { items } : Props): JSX.Element => {
   
  return(
    <>
    <h3>Items list</h3>
    <ul>
    <ItemList  items ={ items } />
    </ul>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
 
  const items: IItem[] = sampleItemsData; 
  return { props: { items } };
};