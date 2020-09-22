import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { generateID } from "shared/utils";
import { Business, BusinessList } from "./business.model";

const businessData: BusinessList = [
  {
    id: generateID(),
    name: "design",
    desciption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    content: "",
    picture: "https://fakeimg.pl/440x230/282828/eae0d0/?text=design",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: generateID(),
    name: "website",
    desciption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    content: "",
    picture: "https://fakeimg.pl/440x230/282828/eae0d0/?text=website",
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: generateID(),
    name: "application",
    desciption: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    content: "",
    picture: "https://fakeimg.pl/440x230/282828/eae0d0/?text=application",
    created_at: new Date(),
    updated_at: new Date(),
  },
];

@Injectable({ providedIn: "root" })
export class BusinessService {
  private _business: BusinessList = businessData;
  private set business(value) {
    this._business = value;
  }
  private get business() {
    return this._business;
  }
  constructor(private readonly http: HttpClient) {}
  get(): Observable<BusinessList>;
  get(
    where: (business: Business, index: Number) => boolean
  ): Observable<Business>;
  get(where?: (business: Business, index: Number) => boolean) {
    if (where) {
      return new Observable((sub) => sub.next(this.business.find(where)));
    } else {
      return new Observable((sub) => sub.next(this.business));
    }
  }
}
