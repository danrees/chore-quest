interface Entity {
	name: string;
}

interface Player extends Entity {
	login: string;
	characters: Character[];
}

interface Character extends Entity {
	avatar: string;
	experiencePoints: number;
	gold: number;
}

export type { Entity, Player, Character };
