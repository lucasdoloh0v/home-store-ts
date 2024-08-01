import { Header } from "@/components/header";
import Propertie from "@/components/propertie";
import { api } from "@/lib/axios";
import { createContext, ReactNode, useEffect, useState } from "react";

interface HomeProps {
  properties: Array<{
    id: number
    img_url: string
    title: string
    description: string
    characteristics: Array<string>
    price: number
  }>
}

export type OrderState = 'default' | 'higher' | 'lower'

export default function Home({properties}: HomeProps) {
  const [ordenatedProperties, setOrdenatedProperties] = useState(properties);
  const [order, setOrder] = useState<OrderState>('default');

  useEffect(() => {
    console.log('aqui', properties);
    switch (order) {
      case 'lower':
        const ordenatedPropertiesGrowing = [...properties].sort(
          (propertieA, propertieB) => propertieA.price - propertieB.price
        );
        setOrdenatedProperties([...ordenatedPropertiesGrowing]);
        break;
      case 'higher':
        const ordenatedPropertiesDescending = [...properties].sort(
          (propertieA, propertieB) => propertieB.price - propertieA.price
        );
        setOrdenatedProperties([...ordenatedPropertiesDescending]);
        break;
      case "default":
        setOrdenatedProperties([...properties])
        break;  
    }
  }, [order, properties]);
  
  return (
    <>
      <Header setOrder={setOrder} />
      <div className="flex flex-wrap gap-4 mt-8 mx-auto max-w-[80%]">
        {ordenatedProperties.map(propertie => (
          <Propertie key={propertie.id} {...propertie} />
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const properties = (await api.get('properties')).data;

  // await new Promise<void>((resolve) => {
  //   setTimeout(() => {
  //     resolve();
  //   }, 5000); // 5 seconds in milliseconds
  // });

  return {
    props: {
      properties,
    },
    revalidate: 60 * 60 * 1, //1 hours
  };
};