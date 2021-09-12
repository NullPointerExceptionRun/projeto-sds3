import { Seller } from "./sellers"

export type Sale =   {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller:Seller;
    }

export type Salepage = {
    content?: Sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size?: number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;

}



export type SaleSum = {
    sellerName: string;
    sum: number;
} 

export type SaleSuccess ={

    sellerName: string;
    deals: number;
    visited: number;
}