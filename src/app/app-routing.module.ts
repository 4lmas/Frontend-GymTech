import { MachinesComponent } from './pages/machines/machines.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: 'layout', component: LayoutComponent},
  { path: 'machines', component: MachinesComponent},
  {
    path: 'pages',
    loadChildren: () => import('../app/layout/layout.module')
    .then(m => m.LayoutModule),
  },
  { path: '' || '*' || '**', redirectTo: 'layout', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
