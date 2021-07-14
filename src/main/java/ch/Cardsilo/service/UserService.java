package ch.Cardsilo.service;


import ch.Cardsilo.domain.User;
import ch.Cardsilo.repository.CardSilo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private CardSilo cardSilo;

    public UserService(CardSilo cardSilo) {
        this.cardSilo = cardSilo;
    }

    public User createUser(User user) {
        return cardSilo.save(user);
    }

    public void removeUser(User user) {
        cardSilo.delete(user);
    }

    public void removeUserById(Long id) {
        cardSilo.deleteById(id);
    }

    public Optional<User> findUserById(Long id) {
        return cardSilo.findById(id);
    }

    public Iterable<User> findAllUsers() {
        return cardSilo.findAll();
    }

    public User changeUserById(User newEntry, Long id) {
        return cardSilo.findById(id).map(entry -> {
            entry.setUsername(newEntry.getUsername());
            entry.setPassword(newEntry.getPassword());
            return cardSilo.save(entry);
        }).orElseGet(() -> {
            newEntry.setId(id);
            return cardSilo.save(newEntry);
        });
    }

}
