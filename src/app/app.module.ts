import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ObregonComponent } from './obregon/obregon.component';
import { HermosilloComponent } from './hermosillo/hermosillo.component';
import { NavojoaComponent } from './navojoa/navojoa.component';
import { NogalesComponent } from './nogales/nogales.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { Options } from '../../node_modules/@types/selenium-webdriver/safari';


const routes :Routes=[
      {path : '', component:ObregonComponent
      ,runGuardsAndResolvers: 'paramsChange'},
      {path : 'obregon', component:ObregonComponent
      ,runGuardsAndResolvers: 'paramsChange'},
      {path : 'hermosillo', component:HermosilloComponent
      ,runGuardsAndResolvers: 'paramsChange'},
      {path : 'navojoa', component:NavojoaComponent
      ,runGuardsAndResolvers: 'paramsChange'},
      {path : 'nogales', component:NogalesComponent
      ,runGuardsAndResolvers: 'paramsChange'}
];
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    ObregonComponent,
    HermosilloComponent,
    NavojoaComponent,
    NogalesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes,
      {
        onSameUrlNavigation:'reload',
        enableTracing: false
      }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
