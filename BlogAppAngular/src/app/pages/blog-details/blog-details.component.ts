import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Blog } from 'app/models/blog';
import { BlogService } from 'app/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  blog : Blog = new Blog();
  id : number;

  constructor(private route : ActivatedRoute, private service : BlogService, private router : Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.service.getBlogById(this.id).subscribe( data => {
      this.blog = data;
      console.log("blob details : ", this.blog);
    })


  }

  goToLIst(){
    this.router.navigate(['blogsList'])

  }

}
