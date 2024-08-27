import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Event_Booking_Angular';
  @ViewChild('model') model: ElementRef | undefined;
  isLoginForm:boolean = false;



  openPopup(){
    if(this.model){
       this.model.nativeElement.style.display = "block";
    }
   
  }

  closePopup(){
    if(this.model){
       this.model.nativeElement.style.display = "none";
    }
   
  }
}
