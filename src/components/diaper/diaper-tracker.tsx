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
        'bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900/30 dark:hover:bg-blue-800/40 dark:text-blue-300'
    },
    {
      type: 'poop',
      label: 'Poop',
      icon: Zap,
      color:
        'bg-orange-100 hover:bg-orange-200 text-orange-700 dark:bg-orange-900/30 dark:hover:bg-orange-800/40 dark:text-orange-300'
    },
    {
      type: 'both',
      label: 'Both',
      icon: Baby,
      color:
        'bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-purple-700 dark:from-purple-900/30 dark:to-pink-900/30 dark:hover:from-purple-800/40 dark:hover:to-pink-800/40 dark:text-purple-300'
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
