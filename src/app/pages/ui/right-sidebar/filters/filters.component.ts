import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  styleUrls: ['./filters.component.scss'],
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  public readonly currencies = ['UAN', 'EUR', 'USD', 'RUR', 'PLN'];
  public currentCurrency = 'UAN';

  public readonly languages = ['Ukraine', 'English', 'USD', 'German', 'Polish'];
  public currentLanguage = 'Ukraine';
}
