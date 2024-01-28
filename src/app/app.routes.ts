import { Routes } from '@angular/router';
import { WordListComponent } from './word-list/word-list.component';
import { FormsComponent } from './forms/forms.component';



export const routes: Routes = [
    {path:'', component:WordListComponent},
    {path:'forms', component:FormsComponent},
    {path:'category', component:FormsComponent}
]

