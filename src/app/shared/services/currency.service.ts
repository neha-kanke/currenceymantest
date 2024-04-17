import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  exchagenerat: string = `https://v6.exchangerate-api.com/v6/b28464c6b075cd9c7bee4b49/latest/USD`
 exchagener:string=`https://v6.exchangerate-api.com/v6/b28464c6b075cd9c7bee4b49/pair`

  constructor(private http: HttpClient) { }
  getalldata() {
    return this.http.get(this.exchagenerat)
      .pipe(
        map((res: any) => {
          let currenyArr = []
          for (const key in res.conversion_rates) {
            currenyArr.push(key)
          }

          return currenyArr

        })
      )
  }


  getexchagecurrency(obj: any): Observable<any> {
    let url = `${this.exchagener}/${obj.base_code1}/${obj.target_code}/${obj.amount}`
    return this.http.get(url)
  }
}
