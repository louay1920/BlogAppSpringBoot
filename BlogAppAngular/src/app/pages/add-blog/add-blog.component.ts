import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from 'app/models/blog';
import { BlogService } from 'app/services/blog.service';


@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  newBlog : Blog = new Blog();
  form : FormGroup;

  constructor(private router : Router, private fb : FormBuilder, private service : BlogService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', [Validators.required]],
      author: ['', [Validators.required]]
    });
  }

  onSubmit(){
    this.newBlog.upvote = 0;
    this.newBlog.downvote = 0;
    this.service.saveBlog(this.newBlog).subscribe( data => {
      console.log("blog saved : ", data);
      this.go()
      
    });
    
  }

  go(){
    this.router.navigate(['/blogsList']);
  }

}
