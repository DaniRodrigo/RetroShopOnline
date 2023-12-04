import { 
  
  Component,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   pageTitle = 'Online Shop';

   userInfo = {
    image: 'https://media.licdn.com/dms/image/D4D03AQFhJeQFIOwznQ/profile-displayphoto-shrink_800_800/0/1677228680499?e=1706745600&v=beta&t=Lq656oKm6ALu559OLMViIV3XnvO279ditI34LZnadlw',
    role: 'ADMIN'
   }
}
