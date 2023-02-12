package blog.app.demo.services;

import java.util.List;

import blog.app.demo.models.BlogEntity;

public interface BlogService {
	
	public List<BlogEntity> getAllBlogs();
	public BlogEntity saveBlogEntity(BlogEntity request);
	public BlogEntity getBlogById(int id);
	public BlogEntity upvoteBlog(int id);
	public BlogEntity downvoteBlog(int id);

}
