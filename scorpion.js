var MyHero=new Hero('John Bom',100);

//. ..
//...
//  ..
//------------------------------ ROOM1 ----------------------------------------------------------------------
var passage12=new passage();
var KeyBlue=new Key('blue');
var Room1=new Room('room1.jpg',null,null,null,null,passage12,null);
Room1.setFirstTimeDesc('So friend. You have decided to enter the Little Scorpion.<br />Find your way out, or die.<br />',1);
Room1.setDesc('The room you are in is made of plain grey stone. In the ceiling you see the small hole you entered the Scorpion through.');
Room1.addObject(KeyBlue);

//------------------------------ ROOM2 ----------------------------------------------------------------------
var Door23=new Door('','locked',KeyBlue);
var Room2=new Room('room2.jpg',null,null,passage12,Door23,null,null);
Room2.setFirstTimeDesc('When you stop to look around you, you suddenly hear the footsteps of something small, a mouse?');
Room2.setDesc('An empty room which echoes your footsteps. The brown spots on the wall suggest something dire happened here once.');

//------------------------------ ROOM3 ----------------------------------------------------------------------
var Door34=new Door(GameWords.green.gameWord,'locked');
var Room3=new Room('room3.jpg',null,null,null,Door34,null,Door23);
Room3.setFirstTimeDesc('When you enter the room, a click sounds and a buzzzz sound starts to come out from the wall where the three buttons are');
Room3.setDesc('This room is strange, The buttons on the wall, the low buzz you hear, and huge brown splatters all over the walls.');
var MyTrap=new Trap(120,Room3);
Room3.addObject(MyTrap);
var CP3=new WiredItemsSwitchType1(Door34,GameWords.open.gameWord,2); //control panel that opens the door when the two attached buttons are pressed.
Room3.addObject(WiredItemsSwitchType1);
var BlueBtn=new Button(GameWords.blue.gameWord,CP3,'activate_one');
Room3.addObject(BlueBtn);
var YellowBtn=new Button(GameWords.yellow.gameWord,CP3,'activate_one');
Room3.addObject(YellowBtn);
var RedBtn=new Button(GameWords.red.gameWord,MyTrap,GameWords.explode.gameWord);
Room3.addObject(RedBtn);

//------------------------------ ROOM4 ----------------------------------------------------------------------
var passage45=new passage();
var passage47=new passage();
var Room4=new Room('room4.jpg',null,null,passage45,null,passage47,Door34);
Room4.setFirstTimeDesc('');
Room4.setDesc('Besides the single black button, the only strange thing about this room is some writing engraved on the wall: "Press the left scorpion pincer to escape".');
var MyTrap4=new Trap(120,Room4);
var BlackBtn4=new Button(GameWords.black.gameWord,MyTrap4,GameWords.explode.gameWord);
Room4.addObject(BlackBtn4);
Room4.addObject(MyTrap4);

//------------------------------ ROOM5 ----------------------------------------------------------------------
var passage56=new passage();
var Room5=new Room('room5.jpg',null,null,null,passage56,passage45,null);
Room5.setFirstTimeDesc('');
Room5.setDesc('Looks the same as the last room.');
var MyTrap5=new Trap(120,Room5);
var BlackBtn5=new Button(GameWords.black.gameWord,MyTrap5,GameWords.explode.gameWord);
Room5.addObject(BlackBtn5);
Room5.addObject(MyTrap5);

//------------------------------ ROOM6 ----------------------------------------------------------------------
var Room6=new Room('room6.jpg',null,null,null,null,null,passage56);
Room6.setFirstTimeDesc('');
Room6.setDesc('Looks the same as the last room.');
var BlackBtn6=new Button(GameWords.black.gameWord,(new WinLose(Room6)),GameWords.win.gameWord);
Room6.addObject(BlackBtn6);

//------------------------------ ROOM7 ----------------------------------------------------------------------
var passage78=new passage();
var Room7=new Room('room7.jpg',null,null,passage47,passage78,null,null);
Room7.setFirstTimeDesc('');
Room7.setDesc('Looks the same as the last room.');
var MyTrap7=new Trap(120,Room7);
var BlackBtn7=new Button(GameWords.black.gameWord,MyTrap7,GameWords.explode.gameWord);
Room7.addObject(BlackBtn7);
Room7.addObject(MyTrap7);

//------------------------------ ROOM8 ----------------------------------------------------------------------
var Room8=new Room('room8.jpg',null,null,null,null,null,passage78);
Room8.setFirstTimeDesc('');
Room8.setDesc('Looks the same as the last room.');
var MyTrap8=new Trap(120,Room8);
var BlackBtn8=new Button(GameWords.black.gameWord,MyTrap8,GameWords.explode.gameWord);
Room8.addObject(BlackBtn8);
Room8.addObject(MyTrap8);