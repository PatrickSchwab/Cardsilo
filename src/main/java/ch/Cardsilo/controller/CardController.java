package ch.Cardsilo.controller;

import ch.Cardsilo.domain.Card;
import ch.Cardsilo.domain.User;
import ch.Cardsilo.service.CardService;
import ch.Cardsilo.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:19006/", maxAge = 3600)
@RestController
@RequestMapping("/card")
public class CardController {

    private CardService cardService;

    public CardController(CardService cardService) {
        this.cardService = cardService;
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Card> getAllCards() {
        return cardService.findAllCards();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Card createCard(@Valid @RequestBody Card card) {
        return cardService.createCard(card);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCard(@PathVariable Long id) {

        Optional<Card> opt = cardService.findCardById(id);

        if (opt.isPresent()) {
            cardService.removeCardById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCard(@RequestBody Card card, @PathVariable Long id) {
        return new ResponseEntity<>(cardService.changeCardById(card, id), HttpStatus.OK);
    }

}
