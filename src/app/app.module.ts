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
import {FormGroupComponent} from './components/form-group.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {FormlyDatepickerTypeComponent} from '@ngx-formly/material/datepicker/datepicker.type';
import {DebugComponent} from './debug.component';
import {MatTabsModule} from '@angular/material/tabs';
import {PanelWrapperFamilyComponent} from './sante/quotation/panel-wrapper/panel-wrapper-family.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    QuotationComponent,
    PanelWrapperComponent,
    FormGroupComponent,
    DebugComponent,
    PanelWrapperFamilyComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature('quotations', reducer),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    ReactiveFormsModule,
    FormlyModule.forRoot({
      wrappers: [
        {name: 'panel', component: PanelWrapperComponent},
        {name: 'panelFamily', component: PanelWrapperFamilyComponent},
      ],
      // types: [{name: 'date', component: FormlyDatepickerTypeComponent}]
    }),
    FormlyMaterialModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
