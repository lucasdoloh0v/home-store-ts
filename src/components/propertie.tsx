import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import ContactForm from './contact-form';

interface PropertieProps {
  img_url: string;
  title: string;
  description: string;
  characteristics: Array<string>;
  price: number;
}

function Propertie({
  title,
  description,
  characteristics,
  img_url,
  price,
}: PropertieProps) {
  return (
    <Dialog>
      <DialogTrigger className='flex-1 min-w-64 max-w-96 sm:min-w-96 sm:w-full sm:flex-initial'>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle className='text-lg'>{title}</CardTitle>
            <CardDescription className='truncate'>
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className='w-full flex flex-col sm:flex-row items-center'>
            <Image
              className='w-full max-w-28 max-h-28'
              src={img_url}
              alt='imagem da propriedade'
              width={112}
              height={112}
            />
            <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
              {characteristics.map((characteristic) => (
                <li key={characteristic}>{characteristic}</li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <p className='font-bold'>
              Valor:{' '}
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(price)}
            </p>
          </CardFooter>
        </Card>
      </DialogTrigger>

      <DialogContent className='max-w-[80%] md:max-w-[40%]'>
        <DialogHeader>
          <DialogTitle>Deixe seu contato!</DialogTitle>
        </DialogHeader>
        
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}

export default Propertie;
