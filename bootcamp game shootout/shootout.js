var imgs = [
	"dora1.jpg",
	"dora2.jpg",
	"dora3.jpg",
	"aisza1.jpg",
	"aisza2.jpg",
	"aisza3.jpg",
	"https://i.pinimg.com/originals/05/f3/df/05f3df31a877febc514136b844bda2cb.jpg",
	"https://img1.etsystatic.com/111/1/5302623/il_570xN.991806421_50fx.jpg",
	"https://rlv.zcache.com/dachshund_square_sticker-r7e78e0ad32594fcaaf2ef0c62fe34f71_v9wf3_8byvr_324.jpg",
	"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Dachshund_brown_puppy.jpg/220px-Dachshund_brown_puppy.jpg",
	"https://petful-supercopyeditors.netdna-ssl.com/wp-content/uploads/2016/12/Dachshund-2.jpg",

]

var squares = document.querySelectorAll("#imgid");
//var target = pickTarget();
var messageDisplay = document.querySelector("#message");
var body = document.querySelector("body");
var resetButton = document.querySelector("#reset");
var overMessage = document.querySelector("#overMessage")

resetButton.addEventListener("click", function(){
	//generate new images
	for(var i = 0; i < squares.length; i++){
		var random = Math.floor(Math.random() * imgs.length);
		squares[i].src = imgs[random];
	}
	body.style.backgroundImage = "";
	body.style.backgroundColor = "#232323";
	messageDisplay.textContent = "";
	overMessage.style.display = "none";

	//
})

for(var i = 0; i < squares.length; i++){
	var random = Math.floor(Math.random() * imgs.length);
	//console.log(random);
	//add initial images to squares
	squares[i].src = imgs[random];
	//console.log("img " + i + " placed");
	//console.log(squares[i]);

	

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab img of clicked square
		var clickedImg = (this.src)
		//compare img to target
		if(clickedImg.startsWith("https")){
			//console.log("target is " + target + " picked img is " + clickedImg);
			messageDisplay.textContent = "Correct!";
			changeImgs(clickedImg);
			body.style.backgroundImage = "url('http://2.bp.blogspot.com/-mFN0mBpSs08/UU5WaqIvVBI/AAAAAAAADXo/6pKh_LnayYE/s1600/uglydachshund2.png')";
			resetButton.textContent = "PLAY AGAIN"
			overMessage.style.display = "block";
			overMessage.textContent = "you admitted it. daschunds are hideous!";
		} else {
			messageDisplay.textContent = "YOU MONSTER";
			//console.log("target is " + target + " picked img is " + clickedImg);
			monster(clickedImg);
			resetButton.textContent = "PLAY AGAIN"
			overMessage.style.display = "block";
			overMessage.textContent = "How dare you!? That is a cute dog!";

		}
	});
}

function changeImgs(img){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each square to the given img
		squares[i].src = img;
		//squares[i].src = "monster.jpg";
		//console.log("img " + i + " changed to target");
	}
}

function monster(img){
	for(var i = 0; i < squares.length; i++){
		//squares[i].src = "monster.jpg";
		squares[i].src = img;
	}
}


// function pickTarget(){
// 	//return squares[1]
// 	for(var i = 0; i < squares.length; i++){
// 		//console.log(squares[i].src);
// 		if(squares[i].src.startsWith("https")){
// 			console.log(squares[i].src);
// 			return squares[i].src
// 		}
// 	}
// }