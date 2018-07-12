import {Saleability} from './saleability.enum';

export class Book {
  id: string;
  title: string;
  authors: Array<string>;
  description: string;
  averageRating: number;
  smallThumbnail: string;
  saleability: Saleability;
  isEbook: boolean;
  amount: number;
  currencyCode: string;
  buyLink: string;

  constructor(id: string, title: string, authors: Array<string>, description: string, averageRating: number,
              smallThumbnail: string, saleability: Saleability, isEbook: boolean,
              amount: number,
              currencyCode: string, buyLink: string) {
    this.id = id;
    this.title = title;
    this.authors = authors;
    this.description = description;
    this.averageRating = averageRating;
    this.smallThumbnail = smallThumbnail;
    this.saleability = saleability;
    this.isEbook = isEbook;
    this.amount = amount;
    this.currencyCode = currencyCode;
    this.buyLink = buyLink;
  }
}
