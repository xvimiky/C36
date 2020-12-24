class Form{
    constructor() {

    }

    display() {
        var title = createElement('h3');
        title.html("CAR RACING GAME");
        title.position(130, 20);

        var input = createInput("Name");
        var button = createButton('Play');
    
        input.position(130, 160);
        button.position(250, 200);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();

            playerCount+=1;
            player.update(name)
            player.updateCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("Hello " +name);
            greeting.position(130, 160);
        })
    }
}