'use client';

import { useTrackingStore } from '@/store';
import { Button } from '@/components/ui/button';
import { Trash2Icon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';

export function ClearButton() {
  const { clearData } = useTrackingStore();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='rounded-full bg-white/80 dark:bg-gray-800/80 border-pastel-primary/30 text-pastel-primary hover:bg-pastel-primary/10 hover:text-pastel-primary shadow-sm'
        >
          <Trash2Icon className='w-4 h-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='bg-pastel-card border-pastel-primary/20'>
        <div className='p-4'>
          <p className='text-sm text-pastel-primary font-medium mb-2'>
            Clear all data?
          </p>
          <p className='text-xs text-pastel-secondary mb-4'>
            This will permanently delete all feeding and diaper records.
          </p>
          <div className='flex justify-end space-x-2'>
            <Button
              variant='outline'
              size='sm'
              className='text-red-600 border-red-300 hover:bg-red-50 dark:text-red-400 dark:border-red-600 dark:hover:bg-red-900/20'
              onClick={() => clearData()}
            >
              Yes, clear all
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
