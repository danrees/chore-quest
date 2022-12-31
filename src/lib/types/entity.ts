interface Entity {
	name?: string;
	avatar: number;
}

interface Player extends Entity {
	id: string;
	email: string;
	characters?: Character[];
}

interface Character extends Entity {
	experiencePoints: number;
	gold: number;
}

export type { Entity, Player, Character };
