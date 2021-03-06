package ch.Cardsilo.controller;

import ch.Cardsilo.domain.Card;
import ch.Cardsilo.domain.User;
import ch.Cardsilo.security.JwtAuthenticationUserModel;
import ch.Cardsilo.security.JwtTokenUtil;
import ch.Cardsilo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.SchemaOutputResolver;
import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(value = "/api")
public class AuthenticationControllerREST {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    private CardController cardController;


    // create a new user and save to DB
    // on POST, always send JSON including the User - as AuthenticationUserModel
    @PostMapping(value = "/registerUser", produces = "application/json")
    public ResponseEntity<?> addUser(@RequestBody JwtAuthenticationUserModel inputUser) {

        System.out.println(inputUser.toString());

        // return 409 ERROR if user already exists in DB (with same USERNAME)
        if (userService.findUserByUsername(inputUser.getUsername()) != null) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        // if user doesn't exist => add to DB, encrypt password and return as http response OK 200
        User newUser = new User(inputUser.getUsername(), bcryptEncoder.encode(inputUser.getPassword()));
        System.out.println(newUser.toString());
        userService.createUser(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    // authenticate user with given credentials in DB
    // on POST, always send JSON including the User - as AuthenticationUserModel
    @CrossOrigin
    @PostMapping(value = "/authenticateUser", produces = "application/json")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtAuthenticationUserModel inputUser) {
        // when authentication fails, return with status code 401 UNAUTHORIZED
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(inputUser.getUsername(), inputUser.getPassword()));
            System.out.println(jwtTokenUtil.generateToken(userService.findUserByUsername(inputUser.getUsername()).getUsername()));
        } catch (AuthenticationException e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        // generate token with corresponding username in DB (prevents errors) and returns it with status OK 200
        return new ResponseEntity<>(jwtTokenUtil.generateToken(userService.findUserByUsername(inputUser.getUsername()).getUsername()), HttpStatus.OK);
    }

    @GetMapping(value = "/getAuthenticatedUser", produces = "application/json")
    public ResponseEntity<?> getUserFromToken(@RequestHeader("Authorization") String token) {
        User user = userService.findUserByUsername(jwtTokenUtil.getUsernameFromToken(token.substring(7)));
        if(user != null){
            return new ResponseEntity<>(user, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @GetMapping(value = "/getCardListFromAuthUser", produces = "application/json")
    public ResponseEntity<?> getCardListFromAuthUser(@RequestHeader("Authorization") String token) {
        ArrayList<Card> cardList = cardController.getAllCardsWithUserId(userService.findUserByUsername(jwtTokenUtil.getUsernameFromToken(token.substring(7))).getId());
        if(cardList != null){
            return new ResponseEntity<>(cardList, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
