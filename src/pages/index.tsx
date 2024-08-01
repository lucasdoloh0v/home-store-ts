import { Header } from "@/components/header";
import Propertie from "@/components/propertie";
import { api } from "@/lib/axios";

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

export default function Home({properties}: HomeProps) {
  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-4 mt-8 mx-auto max-w-[80%]">
        {properties.map(propertie => (
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