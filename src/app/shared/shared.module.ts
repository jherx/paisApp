import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    SidebarComponent,
    MenuComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    SidebarComponent,
    FooterComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
