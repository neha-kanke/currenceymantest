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
    // this.basecodefunction()
    // this.targetcodefunction()




  }
  basecodefunction() {
    this.f['base_code1'].valueChanges
      .subscribe(res => {
        if (this.f['base_code1'].invalid) {
          this.f['target_code'].disable()
        } else {
          this.f['target_code'].enable()
        }
      })
  }
  targetcodefunction() {

    this.f['target_code'].valueChanges
      .subscribe(res => {
        if (this.f['target_code'].invalid) {
          this.f['amount'].disable()
        } else {
          this.f['amount'].enable()
        }
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

  get f() {
    return this.currencyform.controls
  }

  oncuurntvalu() {
    console.log(this.currencyform.value);
    if (this.currencyform.valid) {
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

}
