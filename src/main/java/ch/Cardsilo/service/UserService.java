package ch.Cardsilo.service;


import ch.Cardsilo.domain.User;
import ch.Cardsilo.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public void removeUser(User user) {
        userRepository.delete(user);
    }

    public User findUserByUsername(String username) {
        Optional opt = userRepository.findByUsername(username);
        return opt.isPresent() ? (User) opt.get() : null;
    }

    public void removeUserById(Long id) {
        userRepository.deleteById(id);
    }

    public Optional<User> findUserById(Long id) {
        return userRepository.findById(id);
    }

    public Iterable<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User changeUserById(User newEntry, Long id) {
        return userRepository.findById(id).map(entry -> {
            entry.setUsername(newEntry.getUsername());
            entry.setPassword(newEntry.getPassword());
            return userRepository.save(entry);
        }).orElseGet(() -> {
            newEntry.setId(id);
            return userRepository.save(newEntry);
        });
    }

}
