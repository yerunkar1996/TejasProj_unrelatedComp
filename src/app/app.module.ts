import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Child1Component } from './child1/child1.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HoverDirective } from './customiseDir/hover.directive';
// import { AuthModuleModule } from './auth-module/auth-module.module';
@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    PagenotfoundComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AuthModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
