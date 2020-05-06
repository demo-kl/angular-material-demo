import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './featured/welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FormControlsComponent } from './featured/form-controls/form-controls.component'
import { NavigationComponent } from './featured/navigation/navigation.component'
import { LayoutComponent } from './featured/layout/layout.component'
import { BtnIndicatorComponent } from './featured/btn-indicator/btn-indicator.component'
import { PopupModalComponent } from './featured/popup-modal/popup-modal.component'
import { TableComponent } from './featured/table/table.component'


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'form_control', component: FormControlsComponent },
  { path: 'navigation', component: NavigationComponent},
  { path: 'layout', component: LayoutComponent},
  { path: 'btn_indicator', component: BtnIndicatorComponent},
  { path: 'popup_modal', component: PopupModalComponent},
  { path: 'table', component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
