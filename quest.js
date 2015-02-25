//add and maintence the command history and the relevant view
var CommandHistory={
	commands: Array(),
	commands_pntr:0,
	add: function(command){
		this.commands.push(command);
		this.commands_pntr++;
		$('commands-history').innerHTML+=command+'<br />';
	}
}
var GameWords={
	addWord: function(MyWord)
	{
		this[MyWord.gameWord]=MyWord;
	},
	getWords: function()
	{
		var html='';
		for(var myword in this)
		{
			if(this[myword].gameWord)
			{
				html+='<br />'+this[myword].versions.join("<br />");
			}
		}
		return html;
	}
}

//WordToken An object that holds the game words and their relevant token
function Word(gameWord)
{
	this.add=function(version)
	{
		this.versions.push(version);
	}
	this.gameWord=gameWord;
	this.versions=new Array();
	this.add(gameWord);
	GameWords.addWord(this);
}//EOF Word



//words arrays. 
//
//Each word array is. 0: The token. All others are variants.
//
//All the words will go into several big arrays:
//Nouns (key,armor,door etc)
//Adjectives (red,big,rotten etc)
//Actions (go, fight, climb etc)
//Directions (under,below,above,up etc)
//Links (and, with ???)
//ParserCommands (n,s,i,words,dictionary etc)
//-------------------------------------------------------------------------------------------------------------------------------------------------

//-------------------------- NOUNS -------------------------------------------------
var NounsW=new Array();
	NounsW.push('nun'); //type

	//------------ KEY ----------
	var tmp=new Word('key');
	tmp.add('keys');
	NounsW.push(tmp);
	
	//--------- BUTTON ----------
	NounsW.push(new Word('button'));
	
	//---------- passage ---------
	NounsW.push(new Word('passage'));
	
	//----------- DOOR ----------
	NounsW.push(new Word('door'));
	
	//----------- TRAP ----------
	NounsW.push(new Word('trap'));
	
	//----------- ROOM ----------
	NounsW.push(new Word('room'));
	
	//----------- HERO ----------
	NounsW.push(new Word('hero'));
	
	//--------- WEAPON ----------
	NounsW.push(new Word('weapon'));

	//----------- ARMOR ---------
	NounsW.push(new Word('armor'));

	//----------- NPC -----------
	var tmp=new Word('npc');
	tmp.add('character');
	tmp.add('person');
	NounsW.push(tmp);
	
//----------------------- Adjectives ------------------------------------------------
var AdjectivesW=new Array();
	AdjectivesW.push('adj'); //type
	
	//------------ RED ----------
	AdjectivesW.push(new Word('red'));

	//---------- YELLOW ---------
	AdjectivesW.push(new Word('yellow'));

	//---------- GREEN ----------
	AdjectivesW.push(new Word('green'));

	//---------- BLUE -----------
	AdjectivesW.push(new Word('blue'));

	//---------- BLack ----------
	AdjectivesW.push(new Word('black'));

	//---------- WIN ------------
	AdjectivesW.push(new Word('win'));

	//---------- LOST -----------
	AdjectivesW.push(new Word('lost'));

	//------------ BIG ----------
	AdjectivesW.push(new Word('big'));

	//----------- SMALL ---------
	AdjectivesW.push(new Word('small'));

//--------------------------- ACTIONS ------------------------------------------------
var ActionsW=new Array();
	ActionsW.push('act');
	
	//------------- GO ----------
	var Go=new Word('go');
	Go.add('go');
	Go.add('walk');
	Go.add('run');
	Go.add('step');
	Go.add('advance');
	ActionsW.push(Go);
	
	//------------ KILL ----------
	var Kill=new Word('kill');
	Kill.add('kill');
	Kill.add('attack');
	Kill.add('fight');
	ActionsW.push(Kill);
		
	//------------ OPEN ----------
	ActionsW.push(new Word('press'));

	//------------ OPEN ----------
	var tmp=new Word('open');
	tmp.add('o');
	ActionsW.push(tmp);

	//------------ CLOSE ----------
	ActionsW.push(new Word('close'));
	
	//------------ LOCK -----------
	ActionsW.push(new Word('lock'));
	
	//----------- UNLOCK ----------
	var tmp=new Word('unlock');
	tmp.add('u');
	ActionsW.push(tmp);
	
	//------------ TAKE -----------
	var tmp=new Word('take');
	tmp.add('get');
	tmp.add('t');
	ActionsW.push(tmp);
	
	//------------ DROP -----------
	ActionsW.push(new Word('drop'));
	
	//------------ GIVE -----------
	ActionsW.push(new Word('give'));
	
	//---------- EXPLODE ----------
	ActionsW.push(new Word('explode'));

	//------------ USE ------------
	var tmp=new Word('use');
	tmp.add('equip');
	tmp.add('wear');
	ActionsW.push(tmp);
	
//--------------------------- DIRECTIONS ------------------------------------------------
var DirectionsW=new Array();
	DirectionsW.push('dir');

	//------------ SOUTH ----------
	var South=new Word('south');
	South.add('s');
	DirectionsW.push(South);

	//------------ EAST -----------
	var East=new Word('east');
	East.add('e');
	DirectionsW.push(East);

	//------------ WEST -----------
	var West=new Word('west');
	West.add('w');
	DirectionsW.push(West);

	//-------------- UP------------
	DirectionsW.push(new Word('up'));

	//------------ DOWN -----------
	DirectionsW.push(new Word('down'));
	
	//------------ NORTH ----------
	var North=new Word('north');
	North.add('n');
	DirectionsW.push(North);

//--------------------------- lINKS -----------------------------------------------------
var LinksW=new Array();
	LinksW.push('lnk');
	
	//------------ WITH -----------
	var With=new Word('with');
	With.add('using');
	LinksW.push(With);

	//------------ AND ------------
	var And=new Word('and');
	And.add('&');
	LinksW.push(And);

//-------------------------- PARSER SHORTCUTS -------------------------------------------
var ParserShortcutsW=new Array();
	ParserShortcutsW.push('prs');
	
	//------------- e -------------
	ParserShortcutsW.push(GameWords.east);
	
	//------------- w -------------
	ParserShortcutsW.push(GameWords.west);
	
	//------------- s -------------
	ParserShortcutsW.push(GameWords.south);

	//------------- i -------------
	var tmp=new Word('inventory');
	tmp.add('inv');
	tmp.add('i');
	ParserShortcutsW.push(tmp);

	//------------- d -------------
	var tmp=new Word('dictionary');
	tmp.add('dic');
	tmp.add('d');
	tmp.add('words');
	tmp.add('help');
	ParserShortcutsW.push(tmp);

//------------- n -------------
	ParserShortcutsW.push(GameWords.north);


	

	
//------------------------------------------------------ ALL ------------------------------------
var AllWords=new Array();
	AllWords.push(NounsW);
	AllWords.push(AdjectivesW);
	AllWords.push(ActionsW);
	AllWords.push(DirectionsW);
	AllWords.push(LinksW);
	AllWords.push(ParserShortcutsW);

//This file holds the entire hierarchy of the game objects, from the abstract GameObject to the Silver Sword of Pupi

//GameObject: abstract class to represent all game objects.
//
// Defines also an array of types. This way, each child class will add it's type and we can have something of the typeof in OO
function GameObject(adjective,status,default_status)
{
	this.typesArray=new Array();
	this.typesArray[0]='GameObject';
	this.type='GameObject';
	this.adjective=(adjective || '');
	this.firstTimeDesc='';
	this.desc=this.adjective+' '+this.type;
	this.weight=0;
	this.status= (status || default_status);
	this.actionList=new Array();
	this.order=2; //order in which to show the firsttimedesc (first:1 or second:2)
	
	this.enter=function(additions)
	{
		var desc=this.desc
		if(additions){
			desc=additions+' '+this.desc;
		}

		if(this.order==2)
		{
			MessageQue.pushDesc(desc);
			MessageQue.pushDesc(this.firstTimeDesc);
		}
		else
		{
			MessageQue.pushDesc(this.firstTimeDesc);
			MessageQue.pushDesc(desc);
		}
		this.firstTimeDesc='';
	}//EOF enter
	
	//set first time description
	this.setFirstTimeDesc=function(desc,order)
	{
		if(order)
		{
			this.order=order;
		}
		this.firstTimeDesc=desc;
	}//EOF setFirstTimeDesc

	//set description
	this.setDesc=function(desc)
	{
		this.desc=desc;
	}//EOF setDesc

	//set weight
	this.setWeight=function(weight)
	{
		this.weight=weight;
	}//EOF setWeight

	//general: adds a type to the hierarchy
	this.addType=function(type_name)
	{
		this.typesArray.push(type_name);
	}//EOF addType
	
	//general: isOfType checks if input object is of type...
	this.isOfType=function(type_name)
	{
		if(this.typesArray.indexOf(type_name)>-1)
			return true;
		return false;
	}//EOF isOfType
	
	//isObjectMatch two object are the same if the same type and adjective (later mybe also status)
	this.isObjectMatch=function(objectToComapre)
	{
		if(this.type==objectToComapre.type && this.type==objectToComapre.adjective)
		{
			return true;
		}
		return false;
	}//EOF isObjectMatch
	
	//checks if noun adjective means this object
	this.isthisTheObj=function(noun,adjective)
	{
		if(adjective.length==0) adjective=this.adjective; //IF user haven't given any description of the noun, the first one that matches is the one!
		if(this.isOfType(noun) && this.adjective==adjective)
		{
			return true;
		}
		return false;
	}//EOF isthisTheObj
}//Game Object
//Keys to open doors and chests and boxes etc
function Key(adjective)
{
	this.base=GameObject; //this and the next line are the constructor inheritance.
	this.base(adjective);	
	this.addType('key');
	this.type='key';
	this.weight=1;
	this.desc=this.adjective+' '+this.type;
}//EOF Key
Key.prototype=new GameObject(); //this is the actual inheritance
//Traps, they explode and they are usualy wired to something that activates them.
function Trap(damage,target)//Most simplest of traps. Just explodes on activation. This is a hidden trap. The target is a room in the case of simple trap.
{
	this.base=GameObject; //this and the next line are the constructor inheritance.
	this.base('');	
	this.addType(GameWords.trap.gameWord);
	this.type=GameWords.trap.gameWord;
	this.weight=200;
	this.desc='';
	this.damage=damage;
	this.target=target;

	//--------------- EVENT/STATUS HANDLES ---------------------------------
	this.explode=function(MyTrap)
	{
		//hit hero
		MyTrap.target.Hero.hit(MyTrap.damage);
		
		//hit all others who have hitpoints
		MyTrap.target.damageAllObjects(MyTrap.damage);
	}//explode
	
	//---------------- load action lists -----------------------------------
	this.actionList[GameWords.explode.gameWord]=this.explode;
	
}//EOF Trap
Trap.prototype=new GameObject(); //this is the actual inheritance
//Wired ItemsItems which upon activation will activate other items. Like buttons.
//I will only use now  Button, and see what happens next for more objects
//Wire to an action can be a 1:1 or many:1  
//Many:1 can take three forms:
//1. either of the wired items are enough to activate the wired item
//2. several/all items need to be activate in order to activate the wired item.
//3. Items need to be activated in a specific order in order to activate the wired item. Wrong order can be wired to a different thing.
//
//Maybe I will add a ControlPanel which manages multiple wired items? (and he himeself is a wired item...)
function WiredItem(adjective,wiredItem,wiredMethod)
{
	this.base=GameObject; //this and the next line are the constructor inheritance.
	this.base(adjective);	
	this.addType('wire');
	this.type='wire';
	this.wiredMethod=wiredMethod;
	this.wiredItem=wiredItem;
	
	this.activateWiredItem=function(MyThis)
	{
		MyThis.wiredItem.actionList[MyThis.wiredMethod](MyThis.wiredItem,MyThis);
	}

}//EOF WiredItem
WiredItem.prototype=new GameObject(); //this is the actual inheritance


function Button(adjective,wiredItem,wiredMethod)
{
	this.base=WiredItem; //this and the next line are the constructor inheritance.
	this.base(adjective,wiredItem,wiredMethod);	
	this.addType(GameWords.button.gameWord);
	this.type=GameWords.button.gameWord;
	this.weight=200;
	this.desc=this.adjective+' '+this.type;
	
	//----------------------------------------------------------------------------EVENT/STATUS HANDLES
	this.press=function(TheBtn)
	{
		 TheBtn.activateWiredItem(TheBtn)
	}//EOF press
	
	//---------------- load action lists -----------------------------------
	this.actionList[GameWords.press.gameWord]=this.press;

}//EOF Key
Button.prototype=new WiredItem(); //this is the actual inheritance

//needs all wired items to be activated for it to activate wired item.
function WiredItemsSwitchType1(wiredItem,wiredMethod,attachedItems)
{
	this.base=WiredItem; //this and the next line are the constructor inheritance.
	this.base(null,wiredItem,wiredMethod);	
	this.addType('switch_type_1');
	this.type='switch_type_1';
	this.weight=200;
	this.desc='';
	this.attachedItems=attachedItems; //the number of items wired to this CP. (int)
	this.activatingObjSignature=new Array();
	if(!this.attachedItems)
	{
		alert('WiredItemsSwitchType1:attachedItems is mandatory!');
	}
	
	//----------------------------------------------------------------------------EVENT/STATUS HANDLES
	this.activateOne=function(MyThis,activatingObj)
	{
		for(var i=0;i<MyThis.activatingObjSignature.length;i++)
		{
			if(MyThis.activatingObjSignature[i]==activatingObj)
			{
				return;
			}
		}
		MyThis.activatingObjSignature.push(activatingObj);
		if(MyThis.activatingObjSignature.length>=MyThis.attachedItems)
		{
			MyThis.activateWiredItem(MyThis);
		}
	}//EOF activateOne
	
	//---------------- load action lists -----------------------------------
	this.actionList['activate_one']=this.activateOne;
	
}
WiredItemsSwitchType1.prototype=new WiredItem(); //this is the actual inheritance






//This abstract is for game object that can hold other objects like
//Map, Room, Actors, Boxes and such
function GameObjectContainer(adjective,status)
{
	this.base=GameObject; //this and the next line are the constructor inheritance.
	this.base(adjective,status);	
	this.addType('GameObjectContainer');
	this.type='GameObjectContainer';
	this.Container=new Array();// this is an array of game objects
	this.freeWeight=this.weight; //this is the weight this object can hold.
	
	this.addObject=function(GameObj)
	{
		if(GameObj && this.freeWeight>GameObj.weight)
		{
			this.Container.push(GameObj);
			this.freeWeight-=GameObj.weight;
			return true;
		}
		else
		{
			return false;
		}
	}//EOF addObject
	
	this.removeObjectByDesc=function(game_object_type,game_object_adjective)
	{
		var len = this.Container.length;
		for(var i=0;i<len;i++)
		{
			if(this.Container[i].isthisTheObj(game_object_type,game_object_adjective))
			{
				var GObject=this.Container[i];
				this.Container.splice(i,1);
				this.freeWeight+=GObject.weight;
				//MessageQue.push(Messages.lost(this,GObject)); //a message handler
				return GObject;
			}
		}
		//MessageQue.push(Messages.dontHave(this,GameObject)); //a message handler
		return false;
	}//EOF removeObject
	

	//searches the container for an object and returns a reference of it
	this.getItem=function(game_object_type,game_object_adjective)
	{
		var len = this.Container.length;
		for(var i=0;i<len;i++)
		{
			if(this.Container[i].isthisTheObj(game_object_type,game_object_adjective))
			{
				return this.Container[i];
			}
		}
		return false;
	}//EOF getItem
	
	//pushes into desc messages all items
	this.pushAllItemsDescs=function()
	{
		for (var i=0;i<this.Container.length;i++)
		{
			this.Container[i].enter();
		}
	}//EOF

	//pushes into desc messages all items
	this.getAllItems=function()
	{
		return this.Container;
	}//EOF
	
	this.damageAllObjects=function(damage){
		for (var i=0;i<this.Container.length;i++)
		{
			if(typeof(this.Container[i].hit)=='function')
			{
				this.Container[i].hit(damage);
			}
		}		
	}//damageAllObjects
}//EOF GameObjectContainer
GameObjectContainer.prototype=new GameObject(); //this is the actual inheritance
//Portal is an object that connects two other rooms.
//I am starting with passage, mybe later will add an abstraction Portal.
//A psage is always open.
function passage(adjective,status)
{
	this.weight=110;
	this.base=GameObject; //this and the next line are the constructor inheritance.
	this.base(adjective,status);	
	this.addType(GameWords.passage.gameWord);
	this.type=GameWords.passage.gameWord;
	this.desc=this.adjective+' '+this.type;
	this.room1=false;
	this.room2=false;
	//coonects up to two rooms to this passage.
	this.connects=function(Room)
	{
		if(!Room.isOfType(GameWords.room.gameWord))
		{
			alert('you probably got a js error. You need to send a Room object to this method');
		}
		
		if(!this.room1)
		{
			this.room1=Room;
		}
		else
		{
			this.room2=Room;
		}		
	}

	//given a room, it returns the second room
	this.whoisConnectedTo=function(Room)
	{
		if(Room==this.room1)
		{
			return this.room2;
		}
		else
		{
			return this.room1;
		}
	}

	//try to pass to connected room only if door is opened
	this.tryToPass=function(Room)
	{
		return this.whoisConnectedTo(Room);
	}
}//EOF passage
passage.prototype=new GameObject(); //this is the actual inheritance

//This is the basic door. A door connects two rooms. Door can be close and can be open.
//A door will have a methode for each action (close|open) which can be wired to another object or
//can be accessed by the command dispatcher (for given "open"|"close" commands).
function Door(adjective,status,Key)
{
	//possible statuses:
	//locked
	//closed
	//opened
	
	this.base=passage; //this and the next line are the constructor inheritance.
	this.base(adjective,status,'closed');	
	this.addType(GameWords.door.gameWord);
	this.type=GameWords.door.gameWord;
	this.desc=this.adjective+' '+this.type;
	
	//key that can lock/unlock door.
	this.Key=(Key || null);
	
	//try to pass to connected room only if door is opened
	this.tryToPass=function(Room)
	{
		switch(this.status)
		{
			case('locked'):
				MessageQue.push(Messages.objectIs(this)); //a message handler
				break;
			case('closed'):
				MessageQue.push(Messages.objectIs(this)); //a message handler
				break;
			case('opened'):
				return this.whoisConnectedTo(Room);
			default:
				alert('Some error in setup of this door and rooms. Check status of door <'+this.status+'>');
				break;				
		}
		return false;		
	}
	
	//----------------------------------------------------------------------------EVENT/STATUS HANDLES
	
	this.lock=function(TheDoor,Key)
	{
		if(TheDoor.status=='locked')
		{
			MessageQue.push(Messages.objectIs(TheDoor)); //a message handler
			return true;
		}
		else if(TheDoor.status=='opened')
		{
			MessageQue.push(Messages.objectShouldBe(TheDoor,'closed')); //a message handler
			return false;
		}
		else if(TheDoor.Key.isObjectMatch(Key))
		{
			TheDoor.status='locked';
			MessageQue.push(Messages.objectIs(TheDoor)); //a message handler
			return true;
		}
		else
		{
			MessageQue.push(Messages.keyNotMatch(Key)); //a message handler
			return false;
		}
	}//EOF LOCK
	
	this.unlock=function(TheDoor,Key)
	{
		if(!Key || !Key.isOfType(GameWords.key.gameWord))
		{
			MessageQue.push(Messages.youCantAWithoutB(GameWords.unlock.gameWord,TheDoor.adjective,TheDoor.type,GameWords.key.gameWord,'a'));
			return false;
		}
		if(TheDoor.status!='locked')
		{
			MessageQue.push(Messages.objectIs(TheDoor,'unlocked')); //a message handler
			return true;
		}
		else if(TheDoor.status=='opened')
		{
			MessageQue.push(Messages.objectShouldBe(TheDoor,'closed')); //a message handler
			return false;
		}
		else if(TheDoor.Key==Key)
		{
			TheDoor.status='unlocked';
			MessageQue.push(Messages.objectIs(TheDoor)); //a message handler
			return true;
		}
		else
		{
			MessageQue.push(Messages.keyNotMatch(Key)); //a message handler
			return false;
		}
	}//EOF unlock
	
	this.open=function(TheDoor,wiredItem)
	{
		if(wiredItem && wiredItem.isOfType('wire') && TheDoor.status!='opened')
		{
			TheDoor.status='opened';
			MessageQue.push(Messages.objectIs(TheDoor)); //a message handler
			return true;
		}else if(TheDoor.status=='locked')
		{
			MessageQue.push(Messages.objectShouldBe(TheDoor,'unlocked')); //a message handler
			return false;
		}
		else
		{
			TheDoor.status='opened';
			MessageQue.push(Messages.objectIs(TheDoor)); //a message handler
			return true;
		}
	}//EOF open
	
	this.close=function(TheDoor)
	{
		if(TheDoor.status=='closed' || TheDoor.status=='locked')
		{
			MessageQue.push(Messages.objectIs(TheDoor,'closed')); //a message handler
		}else{
			TheDoor.status='closed';
			MessageQue.push(Messages.objectIs(TheDoor)); //a message handler
		}
		return true;
	}//EOF close
	
	//---------------- load action lists -----------------------------------
	this.actionList[GameWords.lock.gameWord]=this.lock;
	this.actionList[GameWords.unlock.gameWord]=this.unlock;
	this.actionList[GameWords.open.gameWord]=this.open;
	this.actionList[GameWords.close.gameWord]=this.close;
	
}//EOF Door
Door.prototype=new passage(); //this is the actual inheritance
//The Room object. A room is a square container of all kind of objects and persons. A room can be searched, a room can be looked at.
//You should give room a passage to other places and you can block this passage with all kind of stuff like doors, for example.
//in future we may have to make room a Ceiling,Floor,WallSouth,WallNorth,WallWest,Walleast
function Room(image,adjective,status,north_side,east_side,south_side,west_side)
{
	this.base=GameObjectContainer; //this and the next line are the constructor inheritance.
	this.base(adjective,status);	
	this.addType(GameWords.room.gameWord);
	this.type=GameWords.room.gameWord;
	
	//doors and walls of the room.
	this.NorthSide=(north_side || 'wall');
	this.EastSide=(east_side || 'wall');
	this.SouthSide=(south_side || 'wall');
	this.WestSide=(west_side || 'wall');
	this.Hero=null;
	this.image=image;
	
	this.weight=1000;
	this.freeWeight=1000;
	
	//connect the room to each portal, if it is a portal
	function connectToRoom(Portal,TheRoom)
	{
		if(Portal!='wall')
		{
			Portal.connects(TheRoom);
		}				
	}
	connectToRoom(this.NorthSide,this);
	connectToRoom(this.EastSide,this);
	connectToRoom(this.SouthSide,this);
	connectToRoom(this.WestSide,this);
	

	//overide enter (from GameObject)
	this.enter=function(additions)
	{
		//override
		GameObjectContainer.prototype.enter.call(this,additions);
		
		//show list of objects in the room
		MessageQue.pushDesc('--------------------');
		MessageQue.pushDesc('You see in the room:');
		this.pushAllItemsDescs();
		
		//doors
		if(this.NorthSide!='wall'){
			this.NorthSide.enter('To the North you see a');
		}
		if(this.EastSide!='wall'){
			this.EastSide.enter('To the East you see a');
		}
		if(this.SouthSide!='wall'){
			this.SouthSide.enter('To the South you see a');
		}
		if(this.WestSide!='wall'){
			this.WestSide.enter('To the West you see a');
		}
	}//EOF enter

	
	
	this.heroGoesThrough=function(side)
	{
		if(typeof(side)=='object' && side.isOfType(GameWords.passage.gameWord))
		{
			//hero goes to the room connected to the door. Return the new room.
			return side.tryToPass(this);
		}
		return false;
	}//EOF heroGoesThrough

	this.getRoomItem=function(noun,adjective)
	{
		//Now we search the room itself
		var RoomItem=this.getItem(noun,adjective);
		if(RoomItem)
		{
			return RoomItem;
		}else /* see if we mean the portals */ if(this.NorthSide !='wall' && this.NorthSide.isthisTheObj(noun,adjective))
		{
			return this.NorthSide;
		}else if(this.EastSide !='wall' && this.EastSide.isthisTheObj(noun,adjective))
		{
			return this.EastSide;
		}else if(this.SouthSide !='wall' && this.SouthSide.isthisTheObj(noun,adjective))
		{
			return this.SouthSide;
		}else if(this.WestSide !='wall' && this.WestSide.isthisTheObj(noun,adjective))
		{
			return this.WestSide;
		}
		return false;
		
	}//EOF getRoomItem


	//Searches only the objects which are available to the user to see (contained in room, contained by user,portals)
	this.locateHeroAccesObj=function(noun,adjective)
	{
		//first we search the user
		var HeroItem=this.Hero.getActorItem(noun,adjective);
		if(HeroItem)
		{
			return HeroItem;
		}
		
		//Now we search the room itself
		var RoomItem=this.getRoomItem(noun,adjective);
		if(RoomItem)
		{
			return RoomItem;
		}else
		{
			//no such object
			MessageQue.push(Messages.noSuchObject(adjective,noun));
		}		
		return false;
	}//EOF locateHeroAccesObj
	
	//--------------- EVENT/STATUS HANDLES ---------------------------------
	//GO
	//this methode tries to move the hero to a new room.
	this.go=function(CurrentRoom,WordToken)
	{
		var NewRoom=null;
		//TODO:
		//I have to translate nouns to passages (like saying "go through the red door" "go red door" "go to red door" "go door" should work same as go south
		if(WordToken.type) //i.e. I got a noun, presumably a Passage object and not a direction ("go to door")
		{
			NewRoom=CurrentRoom.heroGoesThrough(WordToken);
		}
		else
		{
			var dir=WordToken[0];
			switch(dir)
			{
				case(GameWords.north.gameWord):
					NewRoom=CurrentRoom.heroGoesThrough(CurrentRoom.NorthSide);
					break;
				case(GameWords.east.gameWord):
					NewRoom=CurrentRoom.heroGoesThrough(CurrentRoom.EastSide);
					break;
				case(GameWords.west.gameWord):
					NewRoom=CurrentRoom.heroGoesThrough(CurrentRoom.WestSide);
					break;
				case(GameWords.south.gameWord):
					NewRoom=CurrentRoom.heroGoesThrough(CurrentRoom.SouthSide);
					break;
				default:
					MessageQue.push(Messages.cantLeaveRoomThisWay(dir)); //a message handler
					NewRoom=false;
					break;
			}//EOF switch
		}
		
		if(NewRoom)
		{
			//debug
			if(!CurrentRoom.Hero) alert('for some reason I dont have an hero');

			NewRoom.Hero=CurrentRoom.Hero;
			CurrentRoom.Hero=null;
			MessageQue.push(Messages.ok(' here you go.'));
			NewRoom.enter();//starts the room
			window.MessageQue.getDesc();
			return NewRoom;
		}
		else
		{
			MessageQue.push(Messages.cantLeaveRoomThisWay(dir))
			return CurrentRoom;
		}
	}//EOF leaveRoom
	
	this.actionList[GameWords.go.gameWord]=this.go;
}//EOF Room
Room.prototype=new GameObjectContainer(); //this is the actual inheritance
//overide enter (from GameObject)
//npc represents all creatures in the game which are not the hero.
//If they are hostile, they will attack immediatly.
//In the very near future, each npc will have to get a dialog object.
function AbstractActor(adjective,status) //for some reason I can't override the hit when it is only one level up.
{
	this.base=GameObjectContainer; //this and the next line are the constructor inheritance.
	this.base(adjective,status);
		
	this.hit=function(damage){
		var final_damage=((100-this.getDefencePoints())/100)*damage;
		this.hitPoints-=final_damage;
		if(this.hitPoints<=0)
		{
			MessageQue.push(Messages.IAmDead(this));
		}
		else
		{
			MessageQue.push(Messages.IWasHitFor(final_damage));			
		}	
	}//EOF hit
}
AbstractActor.prototype=new GameObjectContainer(); //this is the actual inheritance

function NPC(adjective,status,fname,lname,hitpoints,hostile)
{
	this.base=AbstractActor; //this and the next line are the constructor inheritance.
	this.base(adjective,status);	
	this.addType(GameWords.npc.gameWord);
	this.type=GameWords.npc.gameWord;
	this.hostile=hostile;
	this.armor=null;
	this.weapon=null;
	this.hitPoints=hitpoints;
	this.fname=fname;
	this.lname=lname;
	this.desc=adjective+' '+this.fname+' '+this.lname;
	
	this.weight=100;
	this.freeWeight=100;

	this.getDefencePoints=function()
	{
		if(this.armor) return this.armor.defencePoints;
		return 0;
	}//getDefencePoints

	//searches for an item in the NPC 
	this.getActorItem=function(noun,adjective)
	{
		var Item=this.getItem(noun,adjective);
		if(Item)
		{
			return Item;
		}else if(this.weapon && this.weapon.isthisTheObj(noun,adjective))
		{
			return this.weapon;
		}
		else if(this.armor && this.armor.isthisTheObj(noun,adjective))
		{
			return this.armor;
		}
		return false;
	}//serachItem
	//--------------- EVENT/STATUS HANDLES ---------------------------------
	this.kill=function(Target)
	{
		if(!Target.isOfType(GameWords.npc.gameWord))
		{
			MessageQue.push(Messages.cantKillA(Target)); //a message handler as to the reason of failure.
			return false;
		}
		var damage=(this.weapon.damage || 5);
		Target.hostile=true;
		Target.hit(damage);
	}//kill
	
	//---------------- load action lists -----------------------------------
	this.actionList[GameWords.kill.gameWord]=this.kill;
}//EOF NPC
NPC.prototype=new AbstractActor(); //this is the actual inheritance
/**Hero is you.*/
function Hero(adjective,status)
{
	this.base=NPC; //this and the next line are the constructor inheritance.
	this.base(adjective,status,null,null,null);	
	this.addType(GameWords.hero.gameWord);
	this.type=GameWords.hero.gameWord;
	
	this.hit=function(damage){
		//override
		NPC.prototype.hit.call(this,damage);
		if(this.hitPoints<=0)
		{
			//you_lost_the_game();
			(new WinLose()).lost();
		}
	}//EOF hit


	//--------------- EVENT/STATUS HANDLES ---------------------------------
	//USE
	this.use=function(MyHero,Item)
	{
		if(Item.isTypeOf(GameWords.weapon.gameWord))
		{
			Hero.weapon=Item;
			MessageQue.push(Messages.useWeapon(Item)); //a message handler
		}else if(Item.isTypeOf(GameWords.armor.gameWord))
		{
			Hero.armor=Item;
			MessageQue.push(Messages.useArmor(Item)); //a message handler
		}else if(Item.usable)
		{
			Item.use();
		}
		else 
		{
			MessageQue.push(Messages.itemCantBeUsedThatWay(Item)); //a message handler as to the reason of failure.
		}
	}//EOF use

	//take
	this.take=function(MyHero,GameObj,CurrentRoom)
	{
		if(MyHero.addObject(CurrentRoom.removeObjectByDesc(GameObj.type,GameObj.adjective)))
		{
			MessageQue.push(Messages.carry(GameObj)); //a message handler
		}
		else
		{
			MessageQue.push(Messages.cantCarry(GameObj)); //a message handler as to the reason of failure.
		}
	}//EOF take
	
	
	//drop
	this.drop=function(MyHero,GameObj,CurrentRoom)
	{
		if(CurrentRoom.addObject(MyHero.removeObjectByDesc(GameObj.type,GameObj.adjective)))
		{
			MessageQue.push(Messages.lost(MyHero,GameObj)); //a message handler
		}
		else
		{
			MessageQue.push(Messages.dontHave(MyHero,GameObj)); //a message handler as to the reason of failure.
		}
	}//EOF drop
	//---------------- load action lists -----------------------------------
	this.actionList[GameWords.take.gameWord]=this.take;
	this.actionList[GameWords.drop.gameWord]=this.drop;
/*	this.actionList[GameWords.give.gameWord]=this.give;
	this.actionList[GameWords.use.gameWord]=this.use; */
}//EOF Actor
Hero.prototype=new NPC(); //this is the actual inheritance
//Command parser takes the entered text and creates a token of it.
//A token is:
//1.  an two dim array [x][0]= game's version of used words [x][1]=type of word (i.e. 'lnk','adj','nun'...) .
//2.  Type of command (parser - one word shortcut, simple command - do something , complex command - do something with some thing)

function parseCommand(command)
{
	//filter command
	command=trim(command.toLowerCase());
	
	//prepare token
	var Token={type:'',words:null,action:String(),orgCommand: command};
	
	//split sentence into words.
	var words_array=command.split(' ');
	words_array_op=getWordGameVersion(words_array); //get the game version for the words used.
	if(!words_array_op)
	{
		return false;
	}
	var words_num=words_array_op.length;
	
	//populate token words
	Token.words=words_array_op;
	
	//check if parser command, simple command or complext command and
	//set the token type accordingly.
	if(words_num==1)
	{
		Token.type='parser_command';
	}
	else if(checkLinkWords(words_array_op))
	{
		Token.type='complex_command';
		if(isComplexAnd(words_array_op))
		{
			Token.action=GameWords.and.gameWord;	
		}
	}
	else
	{
		Token.type='simple_command';
	}
	
	//validate first word is an action or parser command, also directions are parser commands, short cuts, when you see only one word. 
	if(Token.words[0][1]=='act' || Token.words[0][1]=='prs' || (Token.words[0][1]=='dir' && Token.words.length==1))
	{
		Token.action=Token.words[0][0];
	}
	else if(Token.action!=GameWords.and.gameWord)
	{
		MessageQue.push(Messages.errorFirstWordMustBeCommand(words_array[0])); //a message handler as to the reason of failure.
		Token.type='handled_error';
	}
	return Token;
}//EOF parseCommand


//Checks if there are link words in the input array
function checkLinkWords(words_array)
{
	var len_words=words_array.length;
	for(var i=0; i<len_words; i++)
	{
		if(words_array[i][1]=='lnk')
		{
			return true;
		}
	}
	return false;
}//EOF checkLinkWords

//getLinksWordsIdx(words_array_op)
//returns an array of indexes of link words
function isComplexAnd(words_array_op)
{
	for(var i=0;i<words_array_op.length;i++)
	{
		if(words_array_op[i][1]=='lnk' && words_array_op[i][0]==GameWords.and.gameWord)
		{
			return true;
		}
	}
	return false;
}

//Get an array of words and returns an array of the same size but with the
//words used by the game. If word is unknown, then this cell will have FALSE
function getWordGameVersion(words_array)
{
	var len_words=words_array.length;
	var new_words_array=new Array(len_words);
	
	for(var i=0;i<len_words;i++)
	{
		new_words_array[i]=getGameWordFor(words_array[i]);
		if(!new_words_array[i])
		{
			return false;
		}
	}
	
	return new_words_array;
}//EOF getWordGameVersion


//Finds the game word for input word and returns it and it's type.
function getGameWordFor(word)
{
	for(var i=0;i<AllWords.length;i++)
	{
		for(var j=1;j<AllWords[i].length;j++)
		{
			for(var k=0; k<AllWords[i][j].versions.length;k++)
			{
				//alert('*'+AllWords[i][j][k]+'*    *'+word+'*');
				if(word==AllWords[i][j].versions[k])
				{
					var T=new Array(2);
					T[0]=AllWords[i][j].gameWord; //game word
					T[1]=AllWords[i][0]; //game type
					return T;
				}
			}
		}
	}
	
	//unknown word
	MessageQue.push(Messages.unknownWord(word));
	return false;
}//EOF getGameWordFor 




function trim(str) {
	//return str.replace(/(^\s+)(\S.*\S)(\s+$)/, '$2');
	return str.replace(/^\s*/, "").replace(/\s*$/, "");
}
//command_dispatcher.js
//Dispatches each command to the right game object/s
//This is the router.
function command_dispatcher(Token,CurrentRoom)
{
	//temp (or not) parsing error catching
	if(!Token)
	{
		return CurrentRoom;
	}
	
	//add the command to the history
	window.CommandHistory.add(Token.orgCommand);
		
	//act
	switch(Token.type)
	{
		case('simple_command'):
			return dispatch_simple_command(Token,CurrentRoom);
		case('parser_command'):
			return dispatch_parser_command(Token,CurrentRoom);
		case('complex_command'):
			return dispatch_complex_command(Token,CurrentRoom);
		case('handled_error'):
			return CurrentRoom;
		default:
			alert('Hey man. some error in the programing (dispatcher)');
			break;
	}
}//EOF command_dispatcher (router)




//Decision tree for a simple command.
function dispatch_simple_command(Token,CurrentRoom)
{
	var ChangedRoom=CurrentRoom;
	
	//if we have got a noune, we need to translate it to a game object (using it's adjective and if it is available to the Hero)
	var nounIdx=haveNoun(Token); //get the index of the noun in the command token
	if(nounIdx)
	{
		//get the object details
		var noun=Token.words[nounIdx][0];
		var adjective='';
		if(Token.words[nounIdx-1][1]=='adj') //check if there is an adjective and get it.
		{
			adjective=Token.words[nounIdx-1][0];
		}
		
		//check if object is accessible to user
		//if object is accesible, get it and do act on hero, with it and then on item (if hero has no such act).
		var GameObj=CurrentRoom.locateHeroAccesObj(noun,adjective);
		if(GameObj)
		{
			if(typeof(CurrentRoom.Hero.actionList[Token.action])=='function')
			{
				CurrentRoom.Hero.actionList[Token.action](CurrentRoom.Hero,GameObj,CurrentRoom);
			}
			else if(typeof(GameObj.actionList[Token.action])=='function')
			{
				GameObj.actionList[Token.action](GameObj,CurrentRoom);			
			}
			else if(typeof(CurrentRoom.actionList[Token.action])=='function')
			{
				ChangedRoom=CurrentRoom.actionList[Token.action](CurrentRoom,GameObj);			
			}else
			{
				//no such command
				//MessageQue.push(Messages.noSuchCommand(Token.words));
				alert('Error in dispatcher, tag aabbaa');
			}			
		}
	}
	//if we got a somthing which is not a noun, we look for the action only in the hero and  send the action the rest of the token.
	else 
	{
		Token.params=Token.words[1];
		if(typeof(CurrentRoom.Hero.actionList[Token.action])=='function')
		{
			ChangedRoom=CurrentRoom.Hero.actionList[Token.action](CurrentRoom.Hero,Token.params);
		}
		else if(typeof(CurrentRoom.actionList[Token.action])=='function')
		{
			ChangedRoom=CurrentRoom.actionList[Token.action](CurrentRoom,Token.params);			
		}
		else
		{
			//no such command
			MessageQue.push(Messages.noSuchCommand(Token.words));
		}
	}
	
	return ChangedRoom;
}//EOF dispatch_simple_command

function haveNoun(Token,idx)
{
	if(!idx)
	{
		idx=0;
	}
	var len=Token.words.length;
	for(var i=idx;i<len;i++)
	{
		if(Token.words[i][1]=='nun')
			return i;
	}
	return false;
}//EOF haveNoun

//----------------------------------------------------------- PARSER COMMANDS (SHORTCUTS & SPECIAL COMMANDS) ---------------------------------------
function dispatch_parser_command(Token,CurrentRoom)
{
	//handle direction commands
	if(Token.words[0][1]=='dir')
	{
		var Token=parseCommand('go '+Token.words[0][0]);
		return command_dispatcher(Token,CurrentRoom);
	}
	
	//other short cuts*********************************************************:
	switch(Token.words[0][0])
	{
		case(GameWords.dictionary.gameWord):
			window.open('words.html');
			break;
		case(GameWords.inventory.gameWord):
			MessageQue.push(Messages.youCarry(CurrentRoom.Hero.getAllItems()));
			break;
		default:
			break;			
	}
	
	return CurrentRoom
}//EOF dispatch_parser_command



//----------------------------------------------------------- COMPLEX COMMANDS -----------------------------------------------------------------------
//I handle two cases, an AND scenario (do two different actions in serial way) and WITH do an action using an item on item, like "unlock red door with blue key".
function dispatch_complex_command(Token,CurrentRoom)
{
	//split the token into parts, spliting by AND and reparsing it.
	if(Token.action==GameWords.and.gameWord)
	{
		var new_command='';
		for(var i=0;i<Token.words.length;i++)
		{
			if(Token.words[i][1]!='lnk' && Token.words[i][0]!=GameWords.and.gameWord)
			{
				new_command+=' '+Token.words[i][0];
			}
			else
			{
				var NewToken=parseCommand(new_command);
				CurrentRoom=command_dispatcher(NewToken,CurrentRoom);
				$('image_main').src=CurrentRoom.image;
				new_command='';
				MessageQue.pull();
			}
		}//AND loop
		var NewToken=parseCommand(new_command);
		CurrentRoom=command_dispatcher(NewToken,CurrentRoom);
		$('image_main').src=CurrentRoom.image;
		MessageQue.pull();
		return CurrentRoom;
	}
	else //----------------------------------------------------- WITH/USING COMMANDS ---------------------------------------------------
	{
		var ChangedRoom=CurrentRoom;
		
		//if we have got a noune, we need to translate it to a game object (using it's adjective and if it is available to the Hero)
		var nounIdx=haveNoun(Token); //get the index of the noun in the command token
		if(nounIdx)
		{
			//get the object details
			var noun=Token.words[nounIdx][0];
			var adjective='';
			if(Token.words[nounIdx-1][1]=='adj') //check if there is an adjective and get it.
			{
				adjective=Token.words[nounIdx-1][0];
			}
			
			//get second GameObject
			var nounIdx2=haveNoun(Token,nounIdx+2); //get the index of the noun in the command token
			var noun2=Token.words[nounIdx2][0];
			var adjective2='';
			if(Token.words[nounIdx2-1][1]=='adj') //check if there is an adjective and get it.
			{
				adjective2=Token.words[nounIdx2-1][0];
			}
						
			//check if object is accessible to user
			//if object is accesible, get it and do act on hero, with it and then on item (if hero has no such act).
			var GameObj1=CurrentRoom.locateHeroAccesObj(noun,adjective);
			var GameObj2=CurrentRoom.locateHeroAccesObj(noun2,adjective2);
			if(GameObj1 && GameObj2)
			{
				if(typeof(CurrentRoom.Hero.actionList[Token.action])=='function')
				{
					CurrentRoom.Hero.actionList[Token.action](CurrentRoom.Hero,GameObj1,GameObj2);
				}
				else if(typeof(GameObj1.actionList[Token.action])=='function')
				{
					GameObj1.actionList[Token.action](GameObj1,GameObj2);			
				}
				else if(typeof(CurrentRoom.actionList[Token.action])=='function')
				{
					ChangedRoom=CurrentRoom.actionList[Token.action](CurrentRoom,GameObj1,GameObj2);			
				}else
				{
					//no such command
					MessageQue.push(Messages.youCantAWithB(Token.action,noun,adjective,noun2,adjective2));
				}			
			}
		}//no noun
		else
		{
			MessageQue.push(Messages.cantDo(Token.orgCommand));
		}
	}//EOF WITH
	
	return ChangedRoom;
}


//message handlers queue and messages themselves
var MessageQue={
	messages: Array(),
	Descriptions: Array(),
	push:function(txt)
	{
		MessageQue.messages.push(txt);
	},
	pull: function()
	{
		var Elm=document.getElementById('commands-history');
		Elm.innerHTML+='<div>'+MessageQue.messages.join(' ')+'</div>';
		MessageQue.messages=new Array();
		if(Elm.scrollHeight>300)
			Elm.scrollTop=Elm.scrollHeight;
			
		
	},
	pushDesc: function(txt)
	{
		if(txt.length>2) MessageQue.Descriptions.push(txt);
	},
	getDesc: function()
	{
		document.getElementById('comunication_div').innerHTML=MessageQue.Descriptions.join('<br />');
		MessageQue.Descriptions=new Array();
	}
}//EOF message queue
var Messages={
	noSuchCommand: function(commandArray)
	{
		return 'unknown command "'+commandArray.join(' ')+'"';
	},
	
	noSuchObject: function(adjective,noun)
	{
		return "You can't see "+adjective+" "+noun+" around you.";
	},
	
	carry: function (GameObj){
		return "You are now carrying a "+GameObj.adjective+' '+GameObj.type;
	},
	
	cantCarry: function(GameObj)
	{
		return "You can't carry the "+GameObj.adjective+' '+GameObj.type+". I thinks it is too big or heavy for you to carry.\nTry to eat some spinach and lift some weights.";
	},
	
	lost: function(Container,GameObj)
	{
		if(Container.isOfType('hero'))
		{
			var who='you';
		}
		else if(Container.isOfType('npc'))
		{
			var who=Container.fname+' '+Container.lname;
		}
		else
		{
			var who=Container.adjective+' '+Container.type;
		}
		
		return who+' lost '+GameObj.adjective+' '+GameObj.type;
	},
	
	dontHave: function(Container,GameObj)
	{
		if(Container.isOfType('hero'))
		{
			var who='you';
		}else if(Container.isOfType('npc'))
		{
			var who=Container.fname+' '+Container.lname;
		}
		else
		{
			var who=Container.adjective+' '+Container.type;
		}
		
		return who+" don't have "+GameObj.adjective+' '+GameObj.type;
	},
	
	objectIs: function(GameObj,alternate)
	{
		var status=(alternate || GameObj.status);
		return GameObj.adjective+' '+GameObj.type+' is '+status;
	},
	
	objectShouldBe: function(GameObj,SoughtStatus)
	{
		return GameObj.adjective+' '+GameObj.type+' should be '+SoughtStatus+' to perform this action.';
	},
	
	keyNotMatch: function(Key)
	{
		return Key.adjective+' key does not match the lock.';
	},
	
	errorFirstWordMustBeCommand: function(command)
	{
		return "I don't recognize the command \""+command+"\".";
	},
	
	cantLeaveRoomThisWay: function(dir)
	{
		return "I can't leave this room through the "+dir+".";
	},
	
	unknownWord: function(word)
	{
		return 'The word "'+word+'" is unknown in my dictionary, write "dic" to see list of all known words.';
	},
	
	ok: function(txt)
	{
		return 'OK! '+txt;
	},
	
	cantDo: function(command){
		return 'can\'t execute '+command;
	},
	
	youCantAWithB: function(action,noun,adjective,noun2,adjective2){
		return 'You can\'t '+action+' '+adjective+' '+noun+' with '+adjective2+' '+noun2;
	},
	
	youCantAWithoutB: function(action,noun,adjective,noun2,adjective2){
		return 'You can\'t '+action+' '+adjective+' '+noun+' without '+adjective2+' '+noun2;
	},

	youCarry: function(Items){
		var carry='';
		for(var i=0; i<Items.length;i++)
		{
			carry+=Items[i].desc+'<br />';
		}
		
		return 'You are carrying:<br />-----------------<br />'+carry;
	},
	
	IAmDead: function(actor){
		if(actor.isOfType(GameWords.hero.gameWord))
		{
			return 'You are so dead, that even a crazy rabbit won\'t touch you!';
		}
		return actor.fname+' '+actor.lname+' is dead';
	},
	
	IWasHitFor: function(damage){
		if(actor.isOfType(GameWords.hero.gameWord))
		{
			return 'You recieved '+damage+' points of damage!';
		}
		return actor.fname+' '+actor.lname+' recieved '+damage+' points of damage!';
	}
	
}



//winning and loosing scenarios
function WinLose(TheRoom)
{
	this.base=GameObject; //this and the next line are the constructor inheritance.
	this.base();	
	this.room=TheRoom;
	
	//----------------------------------------------------------------------------EVENT/STATUS HANDLES
	this.win=function()
	{
		$('image_main').src='win.jpg';
		alert("You hear a long hiss as the wall to the east starts to slide down and uncovers a long passage which plunges into darkens.....\n\n"+
		       "Congratulations, you have managed to escape the small scorpion!\n\n"+
		       "Come back for more in a few weeks (expect something bigger), this was just a test run.\nThanks for trying it.");
		window.location.reload();
	}
	
	
	this.lost=function(){
		$('image_main').src='lost.jpg';
		alert("You lost");
		window.location.reload();		
	}
	
	//---------------- load action lists -----------------------------------
	this.actionList[GameWords.win.gameWord]=this.win;
	this.actionList[GameWords.lost.gameWord]=this.lost;
}
