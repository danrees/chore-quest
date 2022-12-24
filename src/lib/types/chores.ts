type Frequency = 'daily' | 'weekly' | 'monthly';

interface Chore {
	name: string;
	frequency: Frequency;
}

export type { Chore, Frequency };
