import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core"
import { MainDashboardComponent } from "./Components/main-dashboard/main-dashboard.component";



const routes: Routes = [
    // {path: 'dashboard', component: MainDashboardComponent},
]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MoviemainRoutingModule{}