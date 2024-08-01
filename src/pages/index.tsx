import { Header } from "@/components/header";
import { api } from "@/lib/axios";

interface HomeProps {
  properties: {
    id: number
    img_url: string
    title: string
    description: string
    characteristics: Array<string>
    price: number
  }
}

export default function Home({properties}: HomeProps) {
  return (
    <>
      <Header />
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