'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {ThreeDotsMiddle} from 'react-svg-spinners'
import { Button } from './ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from './ui/use-toast';

const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().min(8),
  comments: z.string(),
});

function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      comments: '',
    },
  });

  const {formState: {isSubmitting}} = form

  const {toast} = useToast()

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000); // 5 seconds in milliseconds
    });

    toast({
      description: 'Mensagem enviada com sucesso!'
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Nome' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='email@examplo.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='comments'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observações</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Como podemos ajuda-lo'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>{isSubmitting ? <ThreeDotsMiddle /> : 'Submit'}</Button>
      </form>
    </Form>
  );
}

export default ContactForm;
