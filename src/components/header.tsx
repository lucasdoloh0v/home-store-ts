import { OrderState } from '@/pages';
import OrderFilter from './order-filter';
import { ThemeToggle } from './theme-toggle';
import { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  setOrder: Dispatch<SetStateAction<OrderState>>
}

export function Header({setOrder}: HeaderProps) {
  return (
    <div className='p-3 border-b w-full flex justify-between items-center'>
      <h1 className='font-bold text-xl md:text-2xl'>Home store</h1>
      <div className='flex items-center gap-2'>
        <OrderFilter setOrder={setOrder} />
        <ThemeToggle />
      </div>
    </div>
  );
}
