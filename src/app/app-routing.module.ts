import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule), canActivate: [NoIngresadoGuard] },
  { path: 'forgot-password', loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule) },
  { path: 'bloqueo-ruta', loadChildren: () => import('./bloqueo-ruta/bloqueo-ruta.module').then(m => m.BloqueoRutaPageModule) },
  { path: 'error404', loadChildren: () => import('./error404/error404.module').then(m => m.Error404PageModule) },
  { path: 'home-estudiante', loadChildren: () => import('./home-estudiante/home-estudiante.module').then(m => m.HomeEstudiantePageModule), canActivate: [IngresadoGuard] },
  { path: 'home-profesor', loadChildren: () => import('./home-profesor/home-profesor.module').then(m => m.HomeProfesorPageModule), canActivate: [IngresadoGuard] },
  { path: '**', redirectTo: 'error404' },
  { path: 'camara', loadChildren: () => import('./camara/camara.module').then( m => m.CamaraPageModule)},
  { path: 'lista-de-alumnos', loadChildren: () => import('./lista-de-alumnos/lista-de-alumnos.module').then( m => m.ListaDeAlumnosPageModule)},
  { path: 'qr-asistencia', loadChildren: () => import('./qr-asistencia/qr-asistencia.module').then( m => m.QrAsistenciaPageModule) },
  { path: 'bienvenido',  loadChildren: () => import('./bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

