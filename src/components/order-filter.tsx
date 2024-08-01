import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

function OrderFilter() {
  return (
    <div className='flex items-center gap-1'>
    <p className="hidden sm:block text-lg font-medium">Ordenar por</p>
    <Select defaultValue='default'>
      <SelectTrigger className='sm:w-[180px]'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='default'>Padrão</SelectItem>
        <SelectItem value='higher'>Maior preço</SelectItem>
        <SelectItem value='lower'>Menor preço</SelectItem>
      </SelectContent>
    </Select>
    </div>
  );
}

export default OrderFilter;
