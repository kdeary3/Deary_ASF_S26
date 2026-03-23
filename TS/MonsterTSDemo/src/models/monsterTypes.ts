export interface Monster {
    firstname: string;
    lastname?: string;
    age: number;
    type: "Human" | "Blob" | "Undead";
    moreInfo: string;
}

export interface SuperMonster extends Monster{
    powerlevel: number;
}