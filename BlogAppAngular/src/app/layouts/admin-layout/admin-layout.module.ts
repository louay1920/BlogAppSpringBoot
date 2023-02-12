import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogsListComponent } from 'app/pages/blogs-list/blogs-list.component';
import { BlogDetailsComponent } from 'app/pages/blog-details/blog-details.component';
import { AddBlogComponent } from 'app/pages/add-blog/add-blog.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    BlogsListComponent,
    BlogDetailsComponent,
    AddBlogComponent,
  ]
})

export class AdminLayoutModule {}
