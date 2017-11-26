import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from "./userlist/userlist.component";
import { UserdetailComponent } from "./userdetail/userdetail.component";

const routes: Routes = [
  {
    path: '',
    component: UserlistComponent
  },
  {
    path: 'userdetail/:userid',
    component: UserdetailComponent
  }
];

export const routing = RouterModule.forRoot(routes);
