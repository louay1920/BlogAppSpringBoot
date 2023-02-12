package blog.app.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import blog.app.demo.models.BlogEntity;
import blog.app.demo.services.BlogService;

import java.util.List;

@RestController
@RequestMapping("/api/blogs")
public class BlogRest {
	
	@Autowired
	private BlogService blogService;

	public BlogRest() {
		super();
	}
	
	@PostMapping
	public BlogEntity saveBlogEntity(@RequestBody BlogEntity request) {

		return this.blogService.saveBlogEntity(request);
	}

	@GetMapping
	public List<BlogEntity> getAllBlogs(){
		return this.blogService.getAllBlogs();
	}

	@GetMapping("/{id}")
	public BlogEntity getBlogById(@PathVariable("id") int id){
		return this.blogService.getBlogById(id);
	}

	@PutMapping("/upvote/{id}")
	public BlogEntity upvoteBlog(@PathVariable("id") int id){
		return this.blogService.upvoteBlog(id);
	}

	@PutMapping("/downvote/{id}")
	public BlogEntity downvoteBlog(@PathVariable("id") int id){
		return this.blogService.downvoteBlog(id);
	}

}
