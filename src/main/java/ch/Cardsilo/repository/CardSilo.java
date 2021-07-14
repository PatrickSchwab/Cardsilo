package ch.Cardsilo.repository;

import ch.Cardsilo.domain.User;
import org.springframework.data.repository.CrudRepository;

public interface CardSilo extends CrudRepository<User, Long> {
}
