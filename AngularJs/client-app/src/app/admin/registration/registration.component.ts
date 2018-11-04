import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'eslab-enblock-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class EnblockRegistrationComponent implements OnInit {
  registerEnblockForm: FormGroup;
  submitted = false;
  options: string[] = ['One', 'One1', 'One12', 'One13', 'One2', 'One21', 'One23', 'Two', 'Three'];
  groups: string[] = ['Group1', 'Group2', 'Group3'];
  filteredOptions: Observable<string[]>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerEnblockForm = this.formBuilder.group({
      userEmail: ['', Validators.required],
      client: ['', Validators.required],
      group: ['', [Validators.required]],
      limit: ['',],
      emptyLimit: ['',],
      emptyHold: ['',],
      emptyApproved: ['',],
      loadedLimit: ['',],
      loadedHold: ['',],
      loadedApproved: ['',]
    });

    this.filteredOptions = this.registerEnblockForm.controls['userEmail'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerEnblockForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerEnblockForm.invalid) {
      return;
    }
  }
}