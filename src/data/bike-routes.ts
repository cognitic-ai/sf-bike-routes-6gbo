export interface BikeRoute {
  id: string;
  name: string;
  distance: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  description: string;
  coordinates: Array<{ latitude: number; longitude: number }>;
  highlights: string[];
}

export const bikeRoutes: BikeRoute[] = [
  {
    id: '1',
    name: 'Golden Gate Bridge Loop',
    distance: '8.5 miles',
    difficulty: 'Moderate',
    description: 'Scenic route across the iconic Golden Gate Bridge with stunning bay views.',
    coordinates: [
      { latitude: 37.8080, longitude: -122.4177 },
      { latitude: 37.8199, longitude: -122.4783 },
      { latitude: 37.8270, longitude: -122.4815 },
      { latitude: 37.8080, longitude: -122.4177 },
    ],
    highlights: ['Golden Gate Bridge', 'Fort Point', 'Marin Headlands views'],
  },
  {
    id: '2',
    name: 'Embarcadero Waterfront',
    distance: '5.2 miles',
    difficulty: 'Easy',
    description: 'Flat, family-friendly ride along the waterfront from AT&T Park to Fisherman\'s Wharf.',
    coordinates: [
      { latitude: 37.7786, longitude: -122.3893 },
      { latitude: 37.7955, longitude: -122.3937 },
      { latitude: 37.8080, longitude: -122.4177 },
    ],
    highlights: ['Ferry Building', 'Pier 39', 'Bay Bridge views'],
  },
  {
    id: '3',
    name: 'Twin Peaks Summit',
    distance: '6.3 miles',
    difficulty: 'Hard',
    description: 'Challenging climb to Twin Peaks for panoramic 360° city views.',
    coordinates: [
      { latitude: 37.7599, longitude: -122.4468 },
      { latitude: 37.7544, longitude: -122.4477 },
      { latitude: 37.7544, longitude: -122.4477 },
    ],
    highlights: ['Panoramic city views', 'Sunset Boulevard', 'Christmas Tree Point'],
  },
  {
    id: '4',
    name: 'Presidio Loop',
    distance: '7.1 miles',
    difficulty: 'Easy',
    description: 'Peaceful ride through historic Presidio parklands and coastal trails.',
    coordinates: [
      { latitude: 37.7989, longitude: -122.4662 },
      { latitude: 37.7980, longitude: -122.4510 },
      { latitude: 37.8080, longitude: -122.4700 },
      { latitude: 37.7989, longitude: -122.4662 },
    ],
    highlights: ['Presidio forest', 'Baker Beach', 'Palace of Fine Arts'],
  },
  {
    id: '5',
    name: 'Mission to Castro',
    distance: '4.8 miles',
    difficulty: 'Moderate',
    description: 'Urban ride through vibrant Mission District and Castro neighborhoods.',
    coordinates: [
      { latitude: 37.7599, longitude: -122.4148 },
      { latitude: 37.7625, longitude: -122.4350 },
      { latitude: 37.7609, longitude: -122.4350 },
    ],
    highlights: ['Mission murals', 'Dolores Park', 'Castro Theatre'],
  },
];

export const SF_CENTER = {
  latitude: 37.7749,
  longitude: -122.4194,
};
