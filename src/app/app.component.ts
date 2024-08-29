import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms';

import { InvestmentResultsComponent } from './investment-results/investment-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
