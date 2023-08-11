
import ContextProductDetailCard from "@/Components/views/ContextProductDetailCard";
import { client } from "../../../../sanity/lib/client";



async function getata(id: string) {
  const res = await client.fetch(`*[_type=='products' && _id=='${id}']`);
  return res;
}


export default async function Catalog({ params }: { params: { _id: string } }) {
  const ProductData = await getata(params._id);

  return (
    <div>
      <ContextProductDetailCard data={ProductData[0]} />
    </div>
  );
}
