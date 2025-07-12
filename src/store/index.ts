import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DiaperChange, FeedingSession } from '@/types';

interface TrackingStore {
  feedings: FeedingSession[];
  addFeeding: (feeding: Omit<FeedingSession, 'id' | 'duration'>) => void;
  completeFeeding: (id: string, duration: number) => void;
  getLastFeeding: () => FeedingSession | null;
  getNextSuggestedSide: () => 'left' | 'right' | null;
  diapers: DiaperChange[];
  addDiaperChange: (diaper: Omit<DiaperChange, 'id'>) => void;
  getLastDiaperChange: () => DiaperChange | null;
  clearEntry: (id: string) => void;
}

export const useTrackingStore = create<TrackingStore>()(
  persist(
    (set, get) => ({
      feedings: [],
      diapers: [],

      addFeeding: feeding =>
        set(state => ({
          feedings: [
            {
              ...feeding,
              id: Date.now().toString()
            },
            ...state.feedings
          ]
        })),

      completeFeeding: (id, duration) =>
        set(state => ({
          feedings: state.feedings.map(f =>
            f.id === id ? { ...f, active: false, duration } : f
          )
        })),

      addDiaperChange: diaper =>
        set(state => ({
          diapers: [
            {
              ...diaper,
              id: Date.now().toString()
            },
            ...state.diapers
          ]
        })),

      getLastFeeding: () => {
        const state = get();
        return state.feedings[0] ?? null;
      },

      getLastDiaperChange: () => {
        const state = get();
        return state.diapers[0] ?? null;
      },

      getNextSuggestedSide: () => {
        const state = get();
        const lastFeeding = state.feedings[0];
        if (!lastFeeding) return null;
        return lastFeeding.side === 'left' ? 'right' : 'left';
      },

      clearEntry: id =>
        set(state => ({
          feedings: state.feedings.filter(f => f.id !== id),
          diapers: state.diapers.filter(d => d.id !== id)
        }))
    }),
    {
      name: 'milky-way-store'
    }
  )
);
