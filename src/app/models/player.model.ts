export interface Player {
    name: string;
    onRound: boolean;
    initiativeBonus: number;
    initiative: number;
    selected?: boolean;
}