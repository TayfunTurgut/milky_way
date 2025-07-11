'use client';

import { useTrackingStore } from '@/store';
import { DiaperHistory } from '@/components/diaper/diaper-history';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Baby, Droplets, Zap } from 'lucide-react';

export function DiaperTracker() {
  const { addDiaperChange } = useTrackingStore();

  const diaperTypes = [
    {
      type: 'pee',
      label: 'Pee',
      icon: Droplets,
      color:
        'bg-yellow-100 hover:bg-yellow-200 text-yellow-700 dark:bg-yellow-900/30 dark:hover:bg-yellow-800/40 dark:text-yellow-300'
    },
    {
      type: 'poop',
      label: 'Poop',
      icon: Zap,
      color:
        'bg-amber-100 hover:bg-amber-200 text-amber-800 dark:bg-amber-900/30 dark:hover:bg-amber-800/40 dark:text-amber-300'
    },
    {
      type: 'both',
      label: 'Both',
      icon: Baby,
      color:
        'bg-gradient-to-r from-yellow-100 to-amber-100 hover:from-yellow-200 hover:to-amber-200 text-amber-700 dark:from-yellow-900/30 dark:to-amber-900/30 dark:hover:from-yellow-800/40 dark:hover:to-amber-800/40 dark:text-amber-300'
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
          {diaperTypes.map(({ type, label, icon: Icon, color }) => (
            <Button
              key={type}
              onClick={() => handleDiaperChange(type)}
              className={`flex flex-col items-center gap-2 p-6 h-auto w-full md:w-48 rounded-2xl transition-all duration-200 border-2 border-transparent hover:border-pastel-primary/20 ${color}`}
            >
              <Icon className='w-8 h-8' />
              <span className='text-lg font-medium'>{label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
