import { Interface } from "readline";

export interface Repository{
    id: number;
    name: string;
    ownerLogin: string;
    language: string;
    starsNumber: number
}