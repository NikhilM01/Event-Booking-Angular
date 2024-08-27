import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { EventComponent } from './pages/event/event.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"my-booking",
        component:MyBookingComponent
       
    },
    {
        path:"event/:id",
        component: EventComponent
        
    },
];
