import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface PropertieProps {
  img_url: string;
  title: string;
  description: string;
  characteristics: Array<string>;
  price: number;
}

function Propertie({title, description, characteristics, img_url, price}: PropertieProps) {
  return (
    <Card className='min-w-64 max-w-96'>
      <CardHeader>
        <CardTitle className='text-lg'>{title}</CardTitle>
        <CardDescription className='truncate'>{description}</CardDescription>
      </CardHeader>
      <CardContent className='w-full flex flex-col sm:flex-row items-center'>
        <Image className='w-full max-w-28 max-h-28' src={img_url} alt='imagem da propriedade' width={112} height={112} />
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
          {characteristics.map(characteristic => (
            <li key={characteristic}>{characteristic}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <p className='font-bold'>Valor: {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(price)}</p>
      </CardFooter>
    </Card>
  );
}

export default Propertie;
