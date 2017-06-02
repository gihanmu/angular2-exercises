import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ProductFilterPipe }  from './products/product-filter.pipe';
import { StarComponent }  from './shared/star.component';
import { HttpModule } from '@angular/http';
import {WelcomeComponent}  from './home/welcome.component';
import { ProductDetailsComponent }  from './products/product-details.component';
import { ErrorComponent }  from './errors/error.component';
@NgModule({
  imports: [ 
    BrowserModule,
     FormsModule,
     HttpModule,
     RouterModule.forRoot([
         {path : 'products',component:ProductListComponent},
         {path : 'product/:id', component : ProductDetailsComponent},
         {path : 'welcome', component:WelcomeComponent},
         {path : '', redirectTo:'welcome', pathMatch : 'full'},
         {path : '**', component : ErrorComponent}


       ])
    ],
  declarations: [ 
  		AppComponent,
   		ProductListComponent,
      ProductFilterPipe,
      StarComponent,
      WelcomeComponent,
      ProductDetailsComponent,
      ErrorComponent
      
   ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
