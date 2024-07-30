import { Routes } from '@angular/router';

//import { HomePageComponent } from './pages/home-page/home-page.component';
//import { TestPageComponent } from './pages/test-page/test-page.component';

export const routes: Routes = [
    //{ path: '', component: HomePageComponent },
    {
        path: 'myDev',
        loadChildren: () =>
            import('../../../my-dev-app/src/app/app.routes')
                .then(m => m.routes)
    },
    {
        path: 'myWork',
        loadChildren: () =>
            import('../../../my-work-app/src/app/app.routes')
                .then(m => m.routes)
    },
    //// Option 1: Lazy Loading another Routing Config
    //{
        //path: 'flight-booking',
        //loadChildren: () =>
            //import('./booking/flight-booking.routes')
                //.then(m => m.FLIGHT_BOOKING_ROUTES)
    //},

    //// Option 2: Directly Lazy Loading a Standalone Component
    //{
        //path: 'next-flight',
        //loadComponent: () => 
            //import('./next-flight/next-flight.component')
                //.then(m => m.NextFlightComponent)
    //},
    //[...]
];
