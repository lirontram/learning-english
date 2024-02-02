import { Routes } from '@angular/router';
import { WordListComponent } from './word-list/word-list.component';
import { FormsComponent } from './forms/forms.component';



export const routes: Routes = [
    {path:'newcategory', component: FormsComponent},
    {path:'category/:idString', component: FormsComponent},
    {path:'', component: WordListComponent},
]

