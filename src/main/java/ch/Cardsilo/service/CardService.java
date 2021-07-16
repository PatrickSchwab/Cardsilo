package ch.Cardsilo.service;


import ch.Cardsilo.domain.Card;
import ch.Cardsilo.domain.User;
import ch.Cardsilo.repository.CardRepository;
import ch.Cardsilo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CardService {

    private CardRepository cardRepository;

    public CardService(CardRepository cardRepository) {
        this.cardRepository = cardRepository;
    }

    public Card createCard(Card card) {
        return cardRepository.save(card);
    }

    public void removeCard(Card card) {
        cardRepository.delete(card);
    }

    public Optional<Card> findCardById(Long id) {
        return cardRepository.findById(id);
    }

    public Iterable<Card> findAllCards() {
        return cardRepository.findAll();
    }

    public void removeCardById(Long id) {
        cardRepository.deleteById(id);
    }

    public Card changeCardById(Card newEntry, Long id) {
        return cardRepository.findById(id).map(entry -> {
            entry.setCompanyName(newEntry.getCompanyName());
            entry.setNotes(newEntry.getNotes());
            return cardRepository.save(entry);
        }).orElseGet(() -> {
            newEntry.setId(id);
            return cardRepository.save(newEntry);
        });
    }




}
