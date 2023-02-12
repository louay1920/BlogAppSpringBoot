package blog.app.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import blog.app.demo.models.BlogEntity;

public interface BlogRepository extends JpaRepository<BlogEntity, Integer> {

}
