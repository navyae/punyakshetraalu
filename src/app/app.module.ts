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
import { ArticleListComponent } from './article-list/article-list.component';
import { PunyaBhagavadGitaComponent } from './punya-bhagavad-gita/punya-bhagavad-gita.component';
import { PunyakshetraaluGalleryComponent } from './punyakshetraalu-gallery/punyakshetraalu-gallery.component';
import { PunyaDropdownComponent } from './global/punya-dropdown/punya-dropdown.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ArticlePageComponent } from './article-page/article-page.component';

const punyaRoute: Routes = [
  {
    path: '',
    component: PunyakshetraaluHomeComponent
  },
  {
    path: 'bhagavadgita',
    component: PunyaBhagavadGitaComponent
  },
  {
    path:'about',
    component:PunyakshetraaluAboutComponent
  },
  {
    path:'gallery',
    component: PunyakshetraaluGalleryComponent
  },
  {
    path: 'stories',
    component: PunyaBlogComponent
  },
  {
    path:'stories/:id',
    component:ArticlePageComponent
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
    ArticleListComponent,
    PunyaBhagavadGitaComponent,
    PunyakshetraaluGalleryComponent,
    PunyaDropdownComponent,
    ArticlePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(punyaRoute),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
