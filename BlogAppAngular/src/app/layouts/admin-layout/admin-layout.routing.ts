import { Routes } from '@angular/router';



import { BlogsListComponent } from 'app/pages/blogs-list/blogs-list.component';
import { AddBlogComponent } from 'app/pages/add-blog/add-blog.component';
import { BlogDetailsComponent } from 'app/pages/blog-details/blog-details.component';


export const AdminLayoutRoutes: Routes = [
    { path : 'blogsList', component : BlogsListComponent},
    { path : 'addBlog', component : AddBlogComponent},
    { path : 'blogDetails/:id', component : BlogDetailsComponent}
];
