import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { PlatsComponent } from './plats/plats.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { TypeComponent } from './type/type.component';
import { AddTypePlatComponent } from './add-type-plat/add-type-plat.component';
import { UpdateTypePlatComponent } from './update-type-plat/update-type-plat.component';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { UpdateFeedbackComponent } from './update-feedback/update-feedback.component';
import { ListFeedbackComponent } from './list-feedback/list-feedback.component';
import { DetailsPlatsComponent } from './details-plats/details-plats.component';
import { RestoComponent } from './resto/resto.component';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlatsComponent,
    FeedbackComponent,
    AddMenuComponent,
    UpdateMenuComponent,
    TypeComponent,
    AddTypePlatComponent,
    UpdateTypePlatComponent,
    AddPlatComponent,
    UpdateFeedbackComponent,
    ListFeedbackComponent,
    DetailsPlatsComponent,
    RestoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
