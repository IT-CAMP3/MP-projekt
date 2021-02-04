package eu.prusaczyk.chat;

//Obiekt reprezentujący wiadomosci wysyłane na kanał
public class TopicMessage {

    private String value;
    private String user;
    private Image image;

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public Image getImage() {
        return image;
    }

    public void setImage(Image image) {
        this.image = image;
    }
}
