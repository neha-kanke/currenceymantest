import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './shared/services/currency.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currenceymantest';
  currencyform!: FormGroup
  currencyarr: any
  covertcurray: any
  constructor(private currencyservice: CurrencyService) { }
  ngOnInit(): void {
    this.createcuurnecyform()
    this.currencyservice.getalldata()
      .subscribe((res: any) => {
        this.currencyarr = res
      })
  }


  createcuurnecyform() {
    this.currencyform = new FormGroup({
      base_code1: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
      target_code: new FormControl(null, [Validators.required]),
      convertcurrey: new FormControl(null, [Validators.required]),

    })
  }

  oncuurntvalu() {
    console.log(this.currencyform.value);
    let newobj = this.currencyform.value
    this.currencyservice.getexchagecurrency(newobj)
      .subscribe((res: any) => {
        console.log(res.conversion_result);
        this.covertcurray = res.conversion_result
        // this.currencyform.patchValue({convertcurrey:res.conversion_rates})
        // this.currencyform.controls['convertcurrey'].setValue(res.conversion_rates);


      })







  }

}
