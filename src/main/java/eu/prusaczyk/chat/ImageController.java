package eu.prusaczyk.chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ImageController {

    @Autowired
    ImageContainer imageContainer;

    @MessageMapping("/image")
    @SendTo("/topic/images")
    public TopicMessage get(ServerMessage message) {
        //przyjmuję wiadomość od usera
        TopicMessage response = new TopicMessage();

        //tworzę wiadomość którą wyślę na kanał
        response.setUser(message.getUser());
        response.setValue(message.getMessage());
        //losuję zdjęcie i umieszczam w wiadomości
        response.setImage(this.imageContainer.getRandomImage());

        return response;
    }
}
