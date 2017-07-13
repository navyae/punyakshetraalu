import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PunyakshetraaluHomeComponent } from './punyakshetraalu-home/punyakshetraalu-home.component';
import { PunyakshetraaluAboutComponent } from './punyakshetraalu-about/punyakshetraalu-about.component';
import { PunyakshetraaluContactComponent } from './punyakshetraalu-contact/punyakshetraalu-contact.component';
import {FormsModule} from '@angular/forms';
import { PunyaBlogComponent } from './punya-blog/punya-blog.component';
import {RouterModule, Routes} from '@angular/router';
import { PunyakshetraaluFeatureComponent } from './punyakshetraalu-feature/punyakshetraalu-feature.component';
import { SafePipePipe } from './safe-pipe.pipe';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';

const punyaRoute: Routes = [
  {
    path: '',
    component: PunyakshetraaluHomeComponent
  },
  {
    path: 'stories',
    component: PunyaBlogComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    PunyakshetraaluHomeComponent,
    PunyakshetraaluAboutComponent,
    PunyakshetraaluContactComponent,
    PunyaBlogComponent,
    PunyakshetraaluFeatureComponent,
    SafePipePipe,
    ImageCarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(punyaRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
