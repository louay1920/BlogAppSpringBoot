import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'app/models/blog';
import { BlogService } from 'app/services/blog.service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent implements OnInit {

  blogsList : Blog[];
  content : string;
  author : string;
  title: string;

  constructor(private service : BlogService, private router : Router) { }

  ngOnInit(): void {
 

    this.getAllBlogs();
  }

  getAllBlogs(){
    this.service.getAllBlog().subscribe( data => {
      this.blogsList = data;
      console.log(" Liste des blogs : ", this.blogsList)
    })
  }


  upvote(id : number){
    this.service.upvoteBlog(id).subscribe( data => {
      console.log(data);
      this.ngOnInit()
    })
  }

  downvote(id : number){
    this.service.downvoteBlog(id).subscribe( data => {
      console.log(data);
      this.ngOnInit()
    })
  }

  BlogDetails(id : number){
    this.router.navigate(['blogDetails',id]);
  }


  SearchTitle()
  {
    if (this.title != "")
    {
      this.blogsList= this.blogsList.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      });
    }
    else if (this.title =="")
    {
      this.ngOnInit();
    }
  }

  SearchAuthor()
  {
    if (this.author != "")
    {
      this.blogsList= this.blogsList.filter(res=>{
        return res.author.toLocaleLowerCase().match(this.author.toLocaleLowerCase());
      });
    }
    else if (this.author =="")
    {
      this.ngOnInit();
    }
  }

  SearchContent()
  {
    if (this.content != "")
    {
      this.blogsList= this.blogsList.filter(res=>{
        return res.content.toLocaleLowerCase().match(this.content.toLocaleLowerCase());
      });
    }
    else if (this.content =="")
    {
      this.ngOnInit();
    }
  }

}
