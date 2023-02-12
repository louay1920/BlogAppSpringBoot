package blog.app.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import blog.app.demo.models.BlogEntity;
import blog.app.demo.repositories.BlogRepository;


@Service
public class BlogServiceImpl implements BlogService {
	
	@Autowired
	private BlogRepository blogRepo;

	public BlogServiceImpl() {
		super();
	}

	@Override
	public List<BlogEntity> getAllBlogs() {
		List<BlogEntity> blogList = this.blogRepo.findAll();
		return blogList;
	}

	@Override
	public BlogEntity saveBlogEntity(BlogEntity request) {
		BlogEntity newBlog = blogRepo.save(request);
		return newBlog;
	}

	@Override
	public BlogEntity getBlogById(int id) {
		BlogEntity entity = this.blogRepo.findById(id).get();
		return entity;
	}

	@Override
	public BlogEntity upvoteBlog(int id) {
		BlogEntity entity = this.getBlogById(id);
		entity.setUpvote(entity.getUpvote() + 1);

		return blogRepo.save(entity);
	}

	@Override
	public BlogEntity downvoteBlog(int id) {
		BlogEntity entity = this.getBlogById(id);
		entity.setDownvote(entity.getDownvote() + 1);
		return blogRepo.save(entity);
	}

}
