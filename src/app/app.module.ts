import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {QuotationComponent} from './sante/quotation/quotation.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducer} from './quotation.reducer';
import {FormlyMaterialModule} from '@ngx-formly/material';
import {PanelWrapperComponent} from './sante/quotation/panel-wrapper/panel-wrapper.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {DebugComponent} from './debug.component';
import {MatTabsModule} from '@angular/material/tabs';
import {PanelWrapperFamilyComponent} from './sante/quotation/panel-wrapper/panel-wrapper-family.component';
import {MatButtonModule} from '@angular/material/button';
import {QuotationEnfantComponent} from './sante/quotation/quotation-enfant/quotation-enfant.component';
import { MyDatePickerComponent} from './components/date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {QuotationEffects} from './quotation-effects.service';

@NgModule({
  declarations: [
    AppComponent,
    QuotationComponent,
    PanelWrapperComponent,
    DebugComponent,
    PanelWrapperFamilyComponent,
    QuotationEnfantComponent,
    MyDatePickerComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([QuotationEffects]),
    StoreModule.forFeature('quotations', reducer),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [
        {name: 'panel', component: PanelWrapperComponent},
        {name: 'panelFamily', component: PanelWrapperFamilyComponent},
        {name: 'repeat', component: QuotationEnfantComponent},
      ],
      types: [
        {name: 'repeat', component: QuotationEnfantComponent},
        {name: 'datePicker', component: MyDatePickerComponent}]
    }),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
