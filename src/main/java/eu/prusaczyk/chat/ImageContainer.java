package eu.prusaczyk.chat;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

//bean w którym trzymam obrazki i losuję je
@Component
public class ImageContainer {

    List<Image> images = new ArrayList<>();

    public ImageContainer() {
        images.add(new Image("https://wi.wallpapertip.com/wsimgs/15-155208_desktop-puppy-wallpaper-hd.jpg",
                280,
                200));
        images.add(new Image("https://wi.wallpapertip.com/wsimgs/156-1564365_golden-retriever-puppy-desktop-wallpaper-desktop-wallpaper-puppy.jpg",
                320,
                195));
        images.add(new Image("https://wi.wallpapertip.com/wsimgs/156-1564140_free-puppy-wallpapers-for-computer-wallpaper-cave-cute.jpg",
                320,
                195));
        images.add(new Image("https://wi.wallpapertip.com/wsimgs/156-1566650_cute-puppies-desktop-wallpaper-cute-puppies.jpg",
                350,
                250));
    }

    public Image getRandomImage() {
        return this.images.get(new Random().nextInt(this.images.size()));
    }
}
