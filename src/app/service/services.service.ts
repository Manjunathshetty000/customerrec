import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  table = [
    { companyName: "company1", companydec: "company1dec", companystartYear: "2021", id: "1011" },
    { companyName: "company2", companydec: "company2dec", companystartYear: "2020", id: "1012" },
    { companyName: "company3", companydec: "company3dec", companystartYear: "2018", id: "1013" },
    { companyName: "company4", companydec: "company4dec", companystartYear: "2017", id: "1014" },
    { companyName: "company5", companydec: "company5dec", companystartYear: "2015", id: "1015" },
  ]

  detailes = [
    { id: "1011", gst: "15%", Branches: "ABCD1", state: "KA", Technologies: "Html,Css,Javascript" },
    { id: "1012", gst: "12%", Branches: "ABCD2", state: "AP", Technologies: "Html,Css,Java" },
    { id: "1013", gst: "88%", Branches: "ABCD3", state: "KL", Technologies: "Html,Css,MongoDB" },
    { id: "1014", gst: "35%", Branches: "ABCD4", state: "TN", Technologies: "Html,Css,SQL" },
    { id: "1015", gst: "26%", Branches: "ABCD5", state: "MP", Technologies: "Html,Css,TYPESCRIPT" },

  ]
}

