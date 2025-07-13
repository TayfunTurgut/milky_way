import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { History, Droplets, Zap, Baby } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTrackingStore } from '@/store';
import { ClearButton } from '@/components/clear-button';
import { DiaperStats } from '@/components/diaper/diaper-stats';

export function DiaperHistory() {
  const { diapers } = useTrackingStore();

  const getTypeIcon = (type: 'pee' | 'poop' | 'both') => {
    switch (type) {
      case 'pee':
        return (
          <Droplets className='w-4 h-4 text-yellow-600 dark:text-yellow-400' />
        );
      case 'poop':
        return <Zap className='w-4 h-4 text-amber-700 dark:text-amber-400' />;
      case 'both':
        return <Baby className='w-4 h-4 text-amber-600 dark:text-amber-400' />;
    }
  };

  const getTypeColor = (type: 'pee' | 'poop' | 'both') => {
    switch (type) {
      case 'pee':
        return 'bg-yellow-50 border-yellow-200 dark:bg-yellow-900/20 dark:border-yellow-800';
      case 'poop':
        return 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800';
      case 'both':
        return 'bg-gradient-to-r from-yellow-50 to-amber-50 border-amber-200 dark:from-yellow-900/20 dark:to-amber-900/20 dark:border-amber-800';
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          size='sm'
          className='rounded-full bg-white/80 dark:bg-gray-800/80 border-pastel-primary/30 text-pastel-primary hover:bg-pastel-primary/10 hover:text-pastel-primary shadow-sm'
        >
          <History className='w-4 h-4' />
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-pastel-card border-pastel-primary/20 max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-pastel-primary text-xl font-bold'>
            Diaper History
          </DialogTitle>
          <DialogDescription className='text-pastel-secondary'>
            View your recent diaper changes
          </DialogDescription>
        </DialogHeader>
        <DiaperStats />
        <div className='max-h-96 overflow-y-auto'>
          {diapers.length ? (
            <div className='space-y-3'>
              {diapers.map(diaper => (
                <div
                  key={diaper.id}
                  className={`rounded-lg p-3 border ${getTypeColor(diaper.type)}`}
                >
                  <div className='flex justify-between items-start'>
                    <div className='flex items-center gap-2'>
                      {getTypeIcon(diaper.type)}
                      <div>
                        <div className='font-medium text-pastel-primary capitalize'>
                          {diaper.type}
                        </div>
                        <div className='text-sm text-pastel-secondary'>
                          {new Date(diaper.timestamp).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <ClearButton id={diaper.id} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center py-8 text-pastel-secondary'>
              <History className='w-12 h-12 mx-auto mb-3 opacity-50' />
              <p>No diaper changes recorded yet</p>
              <p className='text-xs mt-1'>
                Start tracking to see your history here
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
