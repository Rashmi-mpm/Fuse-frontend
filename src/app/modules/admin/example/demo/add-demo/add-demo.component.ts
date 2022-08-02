import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-demo',
  templateUrl: './add-demo.component.html',
  styleUrls: ['./add-demo.component.scss']
})
export class AddDemoComponent implements OnInit {
  demoForm:FormGroup
  
  constructor(
    public formBuilder: FormBuilder,
    public matDialogRef: MatDialogRef<AddDemoComponent>,
  ) { }

  ngOnInit(): void {
    this.demoForm = this.formBuilder.group({
      payee: [''],
      child: [''],
      threeweeks: [''],
      twoweeks: [''],
      oneweek: [''],
      current: [''],
      amount: [''],
      payment: [''],
      credit: [''],
      total:['']
    });
  }

}
