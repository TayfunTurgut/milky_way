'use client';

import { useTrackingStore } from '@/store';
import { DiaperHistory } from '@/components/diaper/diaper-history';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export function DiaperTracker() {
  const { addDiaperChange } = useTrackingStore();

  const diaperTypes = [
    {
      type: 'pee',
      label: 'Pee',
      icon: '💧',
      color:
        'bg-yellow-50 hover:bg-yellow-100 text-yellow-600 dark:bg-yellow-700/30 dark:hover:bg-yellow-600/40 dark:text-yellow-100'
    },
    {
      type: 'poop',
      label: 'Poop',
      icon: '💩',
      color:
        'bg-amber-200 hover:bg-amber-300 text-amber-900 dark:bg-amber-700/30 dark:hover:bg-amber-600/40 dark:text-amber-100'
    },
    {
      type: 'both',
      label: 'Both',
      icon: '👶',
      color:
        'bg-gradient-to-r from-yellow-50 to-amber-200 hover:from-yellow-100 hover:to-amber-300 text-amber-800 dark:from-yellow-700/30 dark:to-amber-700/30 dark:hover:from-yellow-600/40 dark:hover:to-amber-600/40 dark:text-amber-100'
    }
  ] as const;

  const handleDiaperChange = (type: 'pee' | 'poop' | 'both') => {
    addDiaperChange({
      type,
      timestamp: new Date()
    });
    toast.success(`Diaper change recorded: ${type}`);
  };

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='relative w-full max-w-2xl rounded-3xl p-4 shadow-xl bg-pastel-card'>
        <div className='absolute top-4 right-4 z-10'>
          <DiaperHistory />
        </div>

        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold mb-2 text-pastel-primary'>
            Diaper Tracker
          </h1>
          <p className='text-lg text-pastel-secondary'>
            Track your baby&apos;s diaper changes
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
          {diaperTypes.map(({ type, label, icon, color }) => (
            <Button
              key={type}
              onClick={() => handleDiaperChange(type)}
              className={cn(
                'flex flex-col items-center gap-2 p-6 h-auto w-full md:w-48 rounded-3xl transition-all duration-200',
                color
              )}
            >
              <span className='text-3xl'>{icon}</span>
              <span className='text-lg font-medium'>{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
