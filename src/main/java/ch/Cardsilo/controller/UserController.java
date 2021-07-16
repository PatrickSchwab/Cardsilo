package ch.Cardsilo.controller;

import ch.Cardsilo.domain.User;
import ch.Cardsilo.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.KeyStore;
import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:19006/", maxAge = 3600)
@RestController
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Iterable<User> getAllUsers() {
        return userService.findAllUsers();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@Valid @RequestBody User user) {
        return userService.createUser(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {

        Optional<User> opt = userService.findUserById(id);

        if (opt.isPresent()) {
            userService.removeUserById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@RequestBody User user, @PathVariable Long id) {
        return new ResponseEntity<>(userService.changeUserById(user, id), HttpStatus.OK);
    }

}
