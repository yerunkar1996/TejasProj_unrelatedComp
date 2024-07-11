import { AboutCompanyComponent } from './about-company/about-company.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component'
import { HomeComponent } from './home/home.component';;
import { ContactComponent } from './contact/contact.component';
// import { LoginComponent } from './auth-module/login/login.component';
// import { RegisterComponent } from './auth-module/register/register.component';
// import { Child1Component } from './child1/child1.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { Child1Component } from './child1/child1.component';


const routes: Routes = [
  {
    path:"", redirectTo:"/Home", pathMatch:"full"
  },
  {
    path:"about",component:AboutComponent, children:[
      {
        path:'aboutme', component:AboutMeComponent
      },
      {
        path:'aboutcompany', component:AboutCompanyComponent
      }
    ]
  },
  {
    path:'child', component:Child1Component
  },
  {
    path:"Home",component:HomeComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"auth", loadChildren: ()=> import('./auth-module/auth-module.module').then(m => m.AuthModuleModule)
  },
  // {
  //   path:"signIn", component:LoginComponent
  // },
  // {
  //   path:"signUp", component:RegisterComponent
  // },
  {
    path:'**', component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
