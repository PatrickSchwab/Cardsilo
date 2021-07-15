package ch.Cardsilo.repository;

import ch.Cardsilo.domain.Card;
import org.springframework.data.repository.CrudRepository;


public interface CardRepository extends CrudRepository<Card, Long> {
}
