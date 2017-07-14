import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-punyakshetraalu-gallery',
  templateUrl: './punyakshetraalu-gallery.component.html',
  styleUrls: ['./punyakshetraalu-gallery.component.less']
})
export class PunyakshetraaluGalleryComponent implements OnInit {
  dropdownWidth = '200px';
  dropdownHeight = '40px';
  dropdownList = ['Images', 'Videos'];
  constructor( private _DomSanitizationService: DomSanitizer) { }

  ngOnInit() {
  }
  galleryImages = [
    {
      galleryImage: " http://24.media.tumblr.com/tumblr_lxnj8pUbMr1rn5fn8o1_500.jpg "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypskjORReUqaO8TB16K57nC8843UTgPeqRcoZWBs9bpccxrQ1 "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgcnvEJ-ekjtczBqWkDkZp8vH7P9s0ShYKodjm4OfhdoTI1Rd "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GVR9sXdGfp8qVlwPm1RMXHPDpetOd6AGe0sX50liaHSP_wzm3w "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9Gmivj5IVB99yztilXttMXuPDNhypUQjnF5kBs84QqrQaIC4RA "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-7pzcdn9V4Y7wGufemYIvqxLurRpiKMZLuIF-V2vasClBwS7Jw "
    },

    {
      galleryImage: " https://askopinion.com/images/Files/EditorImages/0kp0kcur.rml.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://24.media.tumblr.com/tumblr_lxnj8pUbMr1rn5fn8o1_500.jpg "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypskjORReUqaO8TB16K57nC8843UTgPeqRcoZWBs9bpccxrQ1 "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgcnvEJ-ekjtczBqWkDkZp8vH7P9s0ShYKodjm4OfhdoTI1Rd "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GVR9sXdGfp8qVlwPm1RMXHPDpetOd6AGe0sX50liaHSP_wzm3w "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9Gmivj5IVB99yztilXttMXuPDNhypUQjnF5kBs84QqrQaIC4RA "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-7pzcdn9V4Y7wGufemYIvqxLurRpiKMZLuIF-V2vasClBwS7Jw "
    },

    {
      galleryImage: " https://askopinion.com/images/Files/EditorImages/0kp0kcur.rml.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://24.media.tumblr.com/tumblr_lxnj8pUbMr1rn5fn8o1_500.jpg "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypskjORReUqaO8TB16K57nC8843UTgPeqRcoZWBs9bpccxrQ1 "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgcnvEJ-ekjtczBqWkDkZp8vH7P9s0ShYKodjm4OfhdoTI1Rd "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GVR9sXdGfp8qVlwPm1RMXHPDpetOd6AGe0sX50liaHSP_wzm3w "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9Gmivj5IVB99yztilXttMXuPDNhypUQjnF5kBs84QqrQaIC4RA "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-7pzcdn9V4Y7wGufemYIvqxLurRpiKMZLuIF-V2vasClBwS7Jw "
    },

    {
      galleryImage: " https://askopinion.com/images/Files/EditorImages/0kp0kcur.rml.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://24.media.tumblr.com/tumblr_lxnj8pUbMr1rn5fn8o1_500.jpg "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypskjORReUqaO8TB16K57nC8843UTgPeqRcoZWBs9bpccxrQ1 "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgcnvEJ-ekjtczBqWkDkZp8vH7P9s0ShYKodjm4OfhdoTI1Rd "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GVR9sXdGfp8qVlwPm1RMXHPDpetOd6AGe0sX50liaHSP_wzm3w "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9Gmivj5IVB99yztilXttMXuPDNhypUQjnF5kBs84QqrQaIC4RA "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-7pzcdn9V4Y7wGufemYIvqxLurRpiKMZLuIF-V2vasClBwS7Jw "
    },

    {
      galleryImage: " https://askopinion.com/images/Files/EditorImages/0kp0kcur.rml.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://24.media.tumblr.com/tumblr_lxnj8pUbMr1rn5fn8o1_500.jpg "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypskjORReUqaO8TB16K57nC8843UTgPeqRcoZWBs9bpccxrQ1 "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgcnvEJ-ekjtczBqWkDkZp8vH7P9s0ShYKodjm4OfhdoTI1Rd "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GVR9sXdGfp8qVlwPm1RMXHPDpetOd6AGe0sX50liaHSP_wzm3w "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9Gmivj5IVB99yztilXttMXuPDNhypUQjnF5kBs84QqrQaIC4RA "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-7pzcdn9V4Y7wGufemYIvqxLurRpiKMZLuIF-V2vasClBwS7Jw "
    },

    {
      galleryImage: " https://askopinion.com/images/Files/EditorImages/0kp0kcur.rml.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://24.media.tumblr.com/tumblr_lxnj8pUbMr1rn5fn8o1_500.jpg "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypskjORReUqaO8TB16K57nC8843UTgPeqRcoZWBs9bpccxrQ1 "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgcnvEJ-ekjtczBqWkDkZp8vH7P9s0ShYKodjm4OfhdoTI1Rd "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GVR9sXdGfp8qVlwPm1RMXHPDpetOd6AGe0sX50liaHSP_wzm3w "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9Gmivj5IVB99yztilXttMXuPDNhypUQjnF5kBs84QqrQaIC4RA "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-7pzcdn9V4Y7wGufemYIvqxLurRpiKMZLuIF-V2vasClBwS7Jw "
    },

    {
      galleryImage: " https://askopinion.com/images/Files/EditorImages/0kp0kcur.rml.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://24.media.tumblr.com/tumblr_lxnj8pUbMr1rn5fn8o1_500.jpg "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQypskjORReUqaO8TB16K57nC8843UTgPeqRcoZWBs9bpccxrQ1 "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjgcnvEJ-ekjtczBqWkDkZp8vH7P9s0ShYKodjm4OfhdoTI1Rd "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GVR9sXdGfp8qVlwPm1RMXHPDpetOd6AGe0sX50liaHSP_wzm3w "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS9Gmivj5IVB99yztilXttMXuPDNhypUQjnF5kBs84QqrQaIC4RA "
    },
    {
      galleryImage: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-7pzcdn9V4Y7wGufemYIvqxLurRpiKMZLuIF-V2vasClBwS7Jw "
    },

    {
      galleryImage: " https://askopinion.com/images/Files/EditorImages/0kp0kcur.rml.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    },
    {
      galleryImage: " http://68.media.tumblr.com/0138c661da419617cbc11564e7863921/tumblr_miicofnhUQ1rmprfqo1_500.jpg "
    }
  ];

}
