type Frequency = 'daily' | 'weekly' | 'monthly';

interface Chore {
	name: string;
	description?: string;
	frequency: Frequency;
}

export type { Chore, Frequency };
