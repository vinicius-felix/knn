import React from "react";
import ReactDOM from "react-dom";
import { Col, Row, Card, Button, Input, Icon, Tooltip } from "antd";
import "antd/dist/antd.css";

const padding = {
	top: {
		paddingTop: 10
	},
	left: {
		paddingLeft: 10
	},
	right: {
		paddingRight: 10
	},
	bottom: {
		paddingBottom: 10
	}
}

const chatBox = {
	backgroundColor: "#edfeff",
	width: "100%",
	height: 300
}

const textBox = {
	//backgroundColor: "#d8ffec",
	width: "100%",
	height: 50
}

const blue = "#2a80d6"
const red = "#d62a35"
const time = 1500

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
      /* #region dataset */
			badText: [
        // Insult, Obsene, Racism
        {name: "nigger",arr: [0, 0, 10]},
        {name: "xxx",arr: [0, 10, 0]},
        {name: "hell",arr: [10, 0, 0]},
        {name: "fuck",arr: [10, 0, 0]},
        {name: "rape",arr: [10, 0, 0]},
        {name: "tit",arr: [0, 10, 0]},
        {name:"2 girls 1 cup",arr:[0,10,0]},
        {name:"acrotomophilia",arr:[0,10,0]},
        {name:"alabama hot pocket",arr:[0,0,0]},
        {name:"alaskan pipeline",arr:[0,0,0]},
        {name:"anal",arr:[10,10,0]},
        {name:"anilingus",arr:[10,10,0]},
        {name:"anus",arr:[0,10,0]},
        {name:"apeshit",arr:[0,0,10]},
        {name:"arsehole",arr:[0,0,10]},
        {name:"ass",arr:[5,10,0]},
        {name:"asshole",arr:[10,10,0]},
        {name:"assmunch",arr:[10,10,0]},
        {name:"auto erotic",arr:[10,10,0]},
        {name:"autoerotic",arr:[10,10,0]},
        {name:"babeland",arr:[10,0,0]},
        {name:"baby batter",arr:[10,0,0]},
        {name:"ball sucking",arr:[10,10,0]},
        {name:"bangbros",arr:[0,10,0]},
        {name:"barenaked",arr:[7,10,0]},
        {name:"bastard",arr:[10,0,7]},
        {name:"bastardo",arr:[10,0,7]},
        {name:"bastinado",arr:[6,0,6]},
        {name:"bbw",arr:[5,10,0]},
        {name:"bdsm",arr:[2,9,0]},
        {name:"beaner",arr:[5,7,0]},
        {name:"beaners",arr:[3,6,0]},
        {name:"beaver cleaver",arr:[3,6,0]},
        {name:"beaver lips",arr:[3,6,0]},
        {name:"bestiality",arr:[3,6,0]},
        {name:"big black",arr:[5,2,5]},
        {name:"big breasts",arr:[5,2,5]},
        {name:"big knockers",arr:[5,5,5]},
        {name:"big tits",arr:[0,8,0]},
        {name:"bimbos",arr:[0,0,0]},
        {name:"birdlock",arr:[0,0,0]},
        {name:"bitch",arr:[0,10,0]},
        {name:"bitches",arr:[0,10,0]},
        {name:"black cock",arr:[0,10,0]},
        {name:"blonde action",arr:[8,10,0]},
        {name:"blonde on blonde action",arr:[10,10,0]},
        {name:"blowjob",arr:[7,10,0]},
        {name:"blow job",arr:[7,10,0]},
        {name:"blow your load",arr:[6,10,0]},
        {name:"blue waffle",arr:[0,10,0]},
        {name:"blumpkin",arr:[0,10,0]},
        {name:"bollocks",arr:[0,10,0]},
        {name:"bondage",arr:[0,10,0]},
        {name:"boner",arr:[0,7,0]},
        {name:"boob",arr:[0,9,0]},
        {name:"boobs",arr:[0,9,0]},
        {name:"booty call",arr:[8,0,0]},
        {name:"brown showers",arr:[5,5,0]},
        {name:"brunette action",arr:[0,9,0]},
        {name:"bukkake",arr:[0,9,0]},
        {name:"bulldyke",arr:[8,0,0]},
        {name:"bullet vibe",arr:[0,7,0]},
        {name:"bullshit",arr:[10,0,0]},
        {name:"bung hole",arr:[0,0,0]},
        {name:"bunghole",arr:[0,0,0]},
        {name:"busty",arr:[0,0,0]},
        {name:"butt",arr:[0,0,0]},
        {name:"buttcheeks",arr:[0,0,0]},
        {name:"butthole",arr:[0,0,0]},
        {name:"camel toe",arr:[0,0,0]},
        {name:"camgirl",arr:[0,0,0]},
        {name:"camslut",arr:[0,0,0]},
        {name:"camwhore",arr:[0,0,0]},
        {name:"carpet muncher",arr:[0,0,0]},
        {name:"carpetmuncher",arr:[0,0,0]},
        {name:"chocolate rosebuds",arr:[0,0,0]},
        {name:"circlejerk",arr:[0,0,0]},
        {name:"cleveland steamer",arr:[0,0,0]},
        {name:"clit",arr:[0,0,0]},
        {name:"clitoris",arr:[0,0,0]},
        {name:"clover clamps",arr:[0,0,0]},
        {name:"clusterfuck",arr:[0,0,0]},
        {name:"cock",arr:[0,0,0]},
        {name:"cocks",arr:[0,0,0]},
        {name:"coprolagnia",arr:[0,0,0]},
        {name:"coprophilia",arr:[0,0,0]},
        {name:"cornhole",arr:[0,0,0]},
        {name:"coon",arr:[0,0,0]},
        {name:"coons",arr:[0,0,0]},
        {name:"creampie",arr:[0,0,0]},
        {name:"cum",arr:[0,0,0]},
        {name:"cumming",arr:[0,0,0]},
        {name:"cunnilingus",arr:[0,0,0]},
        {name:"cunt",arr:[0,0,0]},
        {name:"darkie",arr:[0,0,0]},
        {name:"date rape",arr:[0,0,0]},
        {name:"daterape",arr:[0,0,0]},
        {name:"deep throat",arr:[0,0,0]},
        {name:"deepthroat",arr:[0,0,0]},
        {name:"dendrophilia",arr:[0,0,0]},
        {name:"dick",arr:[9,10,0]},
        {name:"dildo",arr:[9,10,0]},
        {name:"dingleberry",arr:[0,0,0]},
        {name:"dingleberries",arr:[0,0,0]},
        {name:"dirty pillows",arr:[0,0,0]},
        {name:"dirty sanchez",arr:[0,0,0]},
        {name:"doggie style",arr:[0,0,0]},
        {name:"doggiestyle",arr:[0,0,0]},
        {name:"doggy style",arr:[0,0,0]},
        {name:"doggystyle",arr:[0,0,0]},
        {name:"dog style",arr:[0,0,0]},
        {name:"dolcett",arr:[0,0,0]},
        {name:"domination",arr:[0,0,0]},
        {name:"dominatrix",arr:[0,0,0]},
        {name:"dommes",arr:[0,0,0]},
        {name:"donkey punch",arr:[0,0,0]},
        {name:"double dong",arr:[0,0,0]},
        {name:"double penetration",arr:[0,0,0]},
        {name:"dp action",arr:[0,0,0]},
        {name:"dry hump",arr:[0,0,0]},
        {name:"dvda",arr:[0,0,0]},
        {name:"eat my ass",arr:[0,0,0]},
        {name:"ecchi",arr:[0,0,0]},
        {name:"ejaculation",arr:[0,0,0]},
        {name:"erotic",arr:[0,0,0]},
        {name:"erotism",arr:[0,0,0]},
        {name:"escort",arr:[0,0,0]},
        {name:"eunuch",arr:[0,0,0]},
        {name:"faggot",arr:[0,0,0]},
        {name:"fecal",arr:[0,0,0]},
        {name:"felch",arr:[0,0,0]},
        {name:"fellatio",arr:[0,0,0]},
        {name:"feltch",arr:[0,0,0]},
        {name:"female squirting",arr:[0,0,0]},
        {name:"femdom",arr:[0,0,0]},
        {name:"figging",arr:[0,0,0]},
        {name:"fingerbang",arr:[0,0,0]},
        {name:"fingering",arr:[0,0,0]},
        {name:"fisting",arr:[0,8,0]},
        {name:"foot fetish",arr:[0,9,0]},
        {name:"footjob",arr:[0,9,0]},
        {name:"frotting",arr:[0,0,0]},
        {name:"fuck",arr:[10,5,2]},
        {name:"fuck buttons",arr:[0,6,1]},
        {name:"fuckin",arr:[10,6,2]},
        {name:"fucking",arr:[10,5,2]},
        {name:"fucktards",arr:[10,6,1]},
        {name:"fudge packer",arr:[0,0,0]},
        {name:"fudgepacker",arr:[0,0,0]},
        {name:"futanari",arr:[0,0,0]},
        {name:"gang bang",arr:[0,0,0]},
        {name:"gay",arr:[8,0,0]},
        {name:"genitals",arr:[0,0,0]},
        {name:"giant cock",arr:[0,0,0]},
        {name:"girl on",arr:[0,0,0]},
        {name:"girl on top",arr:[0,0,0]},
        {name:"girls gone wild",arr:[0,0,0]},
        {name:"goatcx",arr:[0,0,0]},
        {name:"goatse",arr:[0,0,0]},
        {name:"god damn",arr:[0,0,0]},
        {name:"gokkun",arr:[0,0,0]},
        {name:"golden shower",arr:[0,0,0]},
        {name:"goodpoop",arr:[0,0,0]},
        {name:"goo girl",arr:[0,0,0]},
        {name:"goregasm",arr:[0,0,0]},
        {name:"grope",arr:[0,0,0]},
        {name:"group sex",arr:[0,8,0]},
        {name:"g-spot",arr:[0,0,0]},
        {name:"guro",arr:[0,0,0]},
        {name:"hand job",arr:[0,0,0]},
        {name:"handjob",arr:[0,0,0]},
        {name:"hard core",arr:[0,0,0]},
        {name:"hardcore",arr:[0,0,0]},
        {name:"hell",arr:[8,0,10]},
        {name:"homoerotic",arr:[0,0,0]},
        {name:"honkey",arr:[0,0,0]},
        {name:"hooker",arr:[0,0,0]},
        {name:"hot carl",arr:[0,0,0]},
        {name:"hot chick",arr:[0,0,0]},
        {name:"how to kill",arr:[0,0,10]},
        {name:"how to murder",arr:[0,0,10]},
        {name:"huge fat",arr:[0,0,0]},
        {name:"humping",arr:[0,0,0]},
        {name:"incest",arr:[0,0,0]},
        {name:"intercourse",arr:[0,0,0]},
        {name:"jack off",arr:[0,0,0]},
        {name:"jail bait",arr:[0,0,0]},
        {name:"jailbait",arr:[0,0,0]},
        {name:"jelly donut",arr:[0,0,0]},
        {name:"jerk off",arr:[0,0,0]},
        {name:"jigaboo",arr:[0,0,0]},
        {name:"jiggaboo",arr:[0,0,0]},
        {name:"jiggerboo",arr:[0,0,0]},
        {name:"jizz",arr:[0,0,0]},
        {name:"juggs",arr:[0,0,0]},
        {name:"kike",arr:[0,0,0]},
        {name:"kinbaku",arr:[0,0,0]},
        {name:"kinkster",arr:[0,0,0]},
        {name:"kinky",arr:[0,0,0]},
        {name:"knobbing",arr:[0,0,0]},
        {name:"leather restraint",arr:[0,0,0]},
        {name:"leather straight jacket",arr:[0,0,0]},
        {name:"lemon party",arr:[0,0,0]},
        {name:"lolita",arr:[0,0,0]},
        {name:"lovemaking",arr:[0,0,0]},
        {name:"make me come",arr:[0,0,0]},
        {name:"male squirting",arr:[0,0,0]},
        {name:"masturbate",arr:[2,8,0]},
        {name:"menage a trois",arr:[4,10,0]},
        {name:"milf",arr:[4,10,0]},
        {name:"missionary position",arr:[0,0,0]},
        {name:"motherfucker",arr:[0,0,10]},
        {name:"mound of venus",arr:[0,0,0]},
        {name:"mr hands",arr:[0,0,0]},
        {name:"muff diver",arr:[0,0,0]},
        {name:"muffdiving",arr:[0,0,0]},
        {name:"nambla",arr:[0,0,0]},
        {name:"nawashi",arr:[0,0,0]},
        {name:"negro",arr:[7,0,5]},
        {name:"neonazi",arr:[8,0,8]},
        {name:"nigga",arr:[6,2,9]},
        {name:"nigger",arr:[7,1,8]},
        {name:"nig nog",arr:[0,0,0]},
        {name:"nimphomania",arr:[0,0,0]},
        {name:"nipple",arr:[0,0,0]},
        {name:"nipples",arr:[0,0,0]},
        {name:"nsfw images",arr:[0,0,0]},
        {name:"nude",arr:[0,0,0]},
        {name:"nudity",arr:[2,9,0]},
        {name:"nympho",arr:[0,0,0]},
        {name:"nymphomania",arr:[0,0,0]},
        {name:"octopussy",arr:[0,0,0]},
        {name:"omorashi",arr:[0,0,0]},
        {name:"one cup two girls",arr:[0,0,0]},
        {name:"one guy one jar",arr:[0,0,0]},
        {name:"orgasm",arr:[0,8,0]},
        {name:"orgy",arr:[0,7,0]},
        {name:"paedophile",arr:[7,6,7]},
        {name:"paki",arr:[0,0,0]},
        {name:"panties",arr:[0,6,0]},
        {name:"panty",arr:[0,6,0]},
        {name:"pedobear",arr:[7,7,7]},
        {name:"pedophile",arr:[7,7,7]},
        {name:"pegging",arr:[0,0,0]},
        {name:"penis",arr:[7,10,0]},
        {name:"phone sex",arr:[0,10,0]},
        {name:"piece of shit",arr:[0,0,0]},
        {name:"pissing",arr:[0,0,0]},
        {name:"piss pig",arr:[0,0,0]},
        {name:"pisspig",arr:[0,0,0]},
        {name:"playboy",arr:[0,8,0]},
        {name:"pleasure chest",arr:[0,0,0]},
        {name:"pole smoker",arr:[0,0,0]},
        {name:"ponyplay",arr:[0,0,0]},
        {name:"poof",arr:[0,0,0]},
        {name:"poon",arr:[0,0,0]},
        {name:"poontang",arr:[0,0,0]},
        {name:"punany",arr:[0,0,0]},
        {name:"poop chute",arr:[0,0,0]},
        {name:"poopchute",arr:[0,0,0]},
        {name:"porn",arr:[1,6,0]},
        {name:"porno",arr:[1,6,0]},
        {name:"pornography",arr:[2,6,0]},
        {name:"prince albert piercing",arr:[0,0,0]},
        {name:"pthc",arr:[0,0,0]},
        {name:"pubes",arr:[0,0,0]},
        {name:"pussy",arr:[7,10,2]},
        {name:"queaf",arr:[0,0,0]},
        {name:"queef",arr:[0,0,0]},
        {name:"quim",arr:[0,0,0]},
        {name:"raghead",arr:[0,0,0]},
        {name:"raging boner",arr:[1,8,7]},
        {name:"rape",arr:[10,0,10]},
        {name:"raping",arr:[10,0,10]},
        {name:"rapist",arr:[10,0,10]},
        {name:"rectum",arr:[0,0,0]},
        {name:"reverse cowgirl",arr:[0,10,0]},
        {name:"rimjob",arr:[0,0,0]},
        {name:"rimming",arr:[0,0,0]},
        {name:"rosy palm",arr:[0,0,0]},
        {name:"rosy palm and her 5 sisters",arr:[0,0,0]},
        {name:"rusty trombone",arr:[0,0,0]},
        {name:"sadism",arr:[8,0,7]},
        {name:"santorum",arr:[0,0,0]},
        {name:"scat",arr:[7,9,0]},
        {name:"schlong",arr:[0,0,0]},
        {name:"scissoring",arr:[0,10,0]},
        {name:"semen",arr:[7,9,9]},
        {name:"sex",arr:[0,9,0]},
        {name:"sexo",arr:[0,9,0]},
        {name:"sexy",arr:[0,8,0]},
        {name:"shaved beaver",arr:[8,10,0]},
        {name:"shaved pussy",arr:[9,10,0]},
        {name:"shemale",arr:[10,2,10]},
        {name:"shibari",arr:[0,0,0]},
        {name:"shit",arr:[10,0,10]},
        {name:"shitblimp",arr:[0,0,0]},
        {name:"shitty",arr:[0,0,0]},
        {name:"shota",arr:[0,0,0]},
        {name:"shrimping",arr:[0,0,0]},
        {name:"skeet",arr:[0,0,0]},
        {name:"slanteye",arr:[0,0,0]},
        {name:"slut",arr:[9,10,5]},
        {name:"s&m",arr:[0,0,0]},
        {name:"smut",arr:[0,0,0]},
        {name:"snatch",arr:[0,0,0]},
        {name:"snowballing",arr:[0,0,0]},
        {name:"sodomize",arr:[0,0,0]},
        {name:"sodomy",arr:[0,0,0]},
        {name:"spic",arr:[0,0,0]},
        {name:"splooge",arr:[0,0,0]},
        {name:"splooge moose",arr:[0,0,0]},
        {name:"spooge",arr:[0,0,0]},
        {name:"spread legs",arr:[4,5,0]},
        {name:"spunk",arr:[0,0,0]},
        {name:"strap on",arr:[6,8,8]},
        {name:"strapon",arr:[6,9,7]},
        {name:"strappado",arr:[6,10,7]},
        {name:"strip club",arr:[0,10,0]},
        {name:"style doggy",arr:[10,10,0]},
        {name:"suck",arr:[10,10,10]},
        {name:"sucks",arr:[10,10,10]},
        {name:"suicide girls",arr:[0,10,0]},
        {name:"sultry women",arr:[0,0,0]},
        {name:"swastika",arr:[0,0,0]},
        {name:"swinger",arr:[0,0,0]},
        {name:"tainted love",arr:[0,0,0]},
        {name:"taste my",arr:[0,0,9]},
        {name:"tea bagging",arr:[0,0,0]},
        {name:"threesome",arr:[2,9,0]},
        {name:"throating",arr:[0,0,0]},
        {name:"tied up",arr:[2,2,0]},
        {name:"tight white",arr:[0,8,0]},
        {name:"tit",arr:[0,9,0]},
        {name:"tits",arr:[0,8,0]},
        {name:"titties",arr:[0,8,0]},
        {name:"titty",arr:[0,7,0]},
        {name:"tongue in a",arr:[0,0,0]},
        {name:"topless",arr:[0,8,0]},
        {name:"tosser",arr:[8,0,0]},
        {name:"towelhead",arr:[8,0,0]},
        {name:"tranny",arr:[8,0,0]},
        {name:"tribadism",arr:[0,8,0]},
        {name:"tub girl",arr:[0,8,0]},
        {name:"tubgirl",arr:[0,8,0]},
        {name:"tushy",arr:[0,8,0]},
        {name:"twat",arr:[0,8,0]},
        {name:"twink",arr:[0,8,0]},
        {name:"twinkie",arr:[0,8,0]},
        {name:"two girls one cup",arr:[0,10,0]},
        {name:"undressing",arr:[0,0,0]},
        {name:"upskirt",arr:[0,0,0]},
        {name:"urethra play",arr:[0,0,0]},
        {name:"urophilia",arr:[1,0,0]},
        {name:"vagina",arr:[1,9,0]},
        {name:"venus mound",arr:[5,5,0]},
        {name:"vibrator",arr:[0,10,0]},
        {name:"violet wand",arr:[0,0,0]},
        {name:"vorarephilia",arr:[0,0,0]},
        {name:"voyeur",arr:[0,0,0]},
        {name:"vulva",arr:[0,5,0]},
        {name:"wank",arr:[7,0,5]},
        {name:"wetback",arr:[7,0,5]},
        {name:"wet dream",arr:[7,0,5]},
        {name:"white power",arr:[0,0,10]},
        {name:"wrapping men",arr:[6,0,0]},
        {name:"wrinkled starfish",arr:[0,7,0]},
        {name:"xx",arr:[0,0,10]},
        {name:"xxx",arr:[0,10,0]},
        {name:"yaoi",arr:[0,10,0]},
        {name:"yellow showers",arr:[0,10,0]},
        {name:"yiffy",arr:[0,0,0]},
        {name:"zoophilia",arr:[10,10,0]},
			],
      /* #endregion */
			text: [],
			userName1: "",
			userName2: "",
			valueInputUser1: "",
			valueInputUser2: "",
			iconType1: "smile", // smile="good", meh="moderate", frown="bad"
			iconType2: "smile", // smile="good", meh="moderate", frown="bad"
			tooltip1: "This user have good rating.",
      tooltip2: "This user have good rating.",
      insultCount: 0,
      obsceneCount: 0,
      racismCount: 0
		};
	}

	onChangeName1 = (e) => {
		this.setState({
			userName1: e.target.value
		})		
	}

	onChangeName2 = (e) => {
		this.setState({
			userName2: e.target.value
		})		
	}

	onChange1 = (e) => {
		this.setState({
			valueInputUser1: e.target.value
		})		
	}

	onChange2 = (e) => {
		this.setState({
			valueInputUser2: e.target.value
		})		
	}

	resetChat(){
		this.setState({
			text: [],
			userName1: "",
			userName2: "",
			valueInputUser1: "",
			valueInputUser2: "",
			iconType1: "smile",
			iconType2: "smile",
			tooltip1: "This user have good rating.",
			tooltip2: "This user have good rating.",
		})
	}

	filter_array(test_array) {
		var index = -1,
			arr_length = test_array ? test_array.length : 0,
			resIndex = -1,
			result = [];
	
		while (++index < arr_length) {
			var value = test_array[index];
	
			if (value) {
				result[++resIndex] = value;
			}
		}
	
		return result;
	}

	classify(arr){

    setTimeout(
        function() {
          if(arr[0] > arr[1] && arr[0] > arr[2]){

            this.setState({ insultCount: this.state.insultCount + 1 }, () => console.log("count:", this.state.insultCount))			
            this.setState({ insult: true, obscene: false, racism: false })
            
          } else if(arr[1] > arr[0] && arr[1] > arr[2]){
      
            this.setState({ obsceneCount: this.state.obsceneCount + 1}, () => console.log("count:", this.state.obsceneCount))			
            this.setState({ insult: false, obscene: true, racism: false })
            
          } else if(arr[2] > arr[0] && arr[2] > arr[1]){
      
            this.setState({ racismCount: this.state.racismCount + 1}, () => console.log("count:", this.state.racismCount))			
            this.setState({ insult: false, obscene: false, racism: true })
            
          } else {
      
            this.setState({ insult: false, obscene: false, racism: true, insultCount: 0, obsceneCount: 0, racismCount: 0 })
      
          }
        }
        .bind(this),
        time
    )

  }

	async analyseText(element){

		let words = element.split(" ")
		let wordsObj = []
		let badText = this.state.badText
		let de, quad = [], subtr = [], menor = 999999, sum = 0, menorPos

		for(let i = 0; i < wordsObj.length; i++){
			for(let j = 0; j < wordsObj[i].arr.length; j++){
				subtr[j] = badText[j].arr[j] - wordsObj[i].arr[j];				
			  	quad[j] = Math.pow(subtr[j], 2);
			  	sum += quad[j];
			}

			de = Math.sqrt(sum)/10			
			
			if(de < menor){
			  menor = de;			  
			}

			console.clear()
			console.log("DE:", de)
			console.log("sum", sum)
			console.log("menor:", menor)
			console.log("wordsObj", wordsObj)
			sum = 0;
		}
		
		words.map(w =>
			badText.map(bt => 
        w.toLowerCase() === bt.name.toLowerCase() 
          ? wordsObj.push(Object.assign({nome: w, arr: bt.arr})) 
          : setTimeout(
              function() {
                this.setState({ insult: false, obscene: false, racism: false })      
              }
              .bind(this),
              time
          )
			)
    )

    wordsObj.map((w, i) => (this.classify(w.arr)))    
    
  }
  		
	render() {

		const { text } = this.state;
		
    	return (
			<Card 
				title={"Chat"}
				style={padding.top}
				extra={
					<Button 
						title="Chat"
						type="secundary"
						onClick={() => this.resetChat() }
					> 
						Reset 
					</Button>
				}
			>
				{/** ######################## User 1 ######################## */}
				<Col span={11} style={padding.right}>
					<Card 
						title={<Input 
							placeholder="User 1" 
							onChange={this.onChangeName1} 
							value={this.state.userName1}
						/>}
						extra={
              <Tooltip>
                <Icon 
                  style={{ fontSize: "20px", ...padding.left, ...padding.right }} 
                  type={this.state.insult || this.state.obscene || this.state.racism ? "frown" : "smile"} 
                  theme="twoTone" 
                  twoToneColor={blue} 
                  
                />
                { this.state.racism && 
                  <Tooltip title="this may contains racism words"><span style={{ paddingLeft: 5, fontWeight: "bold", fontSize: 20, color: "red"}}>R</span></Tooltip> }
                { this.state.obscene && 
                  <Tooltip title="this may contains obscene words"><span style={{ paddingLeft: 1, fontWeight: "bold", fontSize: 20, color: "red"}}>O</span></Tooltip> }
                { this.state.insult && 
                  <Tooltip title="this may contains insult words"><span style={{ paddingLeft: 1, fontWeight: "bold", fontSize: 20, color: "red"}}>I</span></Tooltip> }
              </Tooltip>}
					>
						<Row style={chatBox}>
							{text.map((text, index) => (
								text.msg && <Row 
									key={index} 
									style={padding.left}>
										<div style={{color: text.color}}>
											{`${text.user}: ${text.msg}`}											
										</div>
								</Row>
							) )}
						</Row>
						
						<Row style={textBox}>
							<Row style={padding.top}>
								<Col style={padding.left} span={18}>
									<Input
										value={this.state.valueInputUser1}
										placeholder="Text..." 
										onChange={this.onChange1}
										allowClear
										onPressEnter={async () => (this.setState(prev => {
											text.push(Object.assign({
												color: blue, 
												user: this.state.userName1 || "User 1", 
												msg: this.state.valueInputUser1 && this.state.valueInputUser1
											}))
										}), 
										this.setState({ valueInputUser1: "" }),
                    this.analyseText(this.state.valueInputUser1))}
									/>
								</Col>
								
								<Col style={{textAlign: "center"}} span={5}>
									<Button
										type="primary" 
										style={{width: "90%"}}
										onClick={async () => (this.setState(() => { 
											text.push(Object.assign({
												color: blue, 
												user: this.state.userName1 || "User 1", 
												msg: this.state.valueInputUser1 && this.state.valueInputUser1
											}))
										}), 
										this.setState({ valueInputUser1: "" }), 
										await this.analyseText(this.state.valueInputUser1)
										)}
									>
										Send 
									</Button>
								</Col>
							</Row>
						</Row>
					</Card>          
				</Col>
        {/** ######################################################## */}
        

				{/** ######################## User 2 ######################## */}
				<Col span={11}>
					<Card 
						title={<Input placeholder="User 2" onChange={this.onChangeName2} value={this.state.userName2}/>}
						extra={<Tooltip title={this.state.tooltip2}><Icon style={{ fontSize: "20px", ...padding.left}} type={this.state.iconType2} theme="twoTone" twoToneColor={red} /></Tooltip>}
					>
						<Row style={chatBox}>
							{text.map((text, index) => (
								text.msg && <Row key={index} style={padding.left}><div style={{color: text.color}}>{`${text.user}: ${text.msg}`}</div></Row>
							))}
						</Row>
						
						<Row style={textBox}>
							<Row style={padding.top}>
								<Col style={padding.left} span={18}>
									<Input
										value={this.state.valueInputUser2}
										placeholder="Text..." 
										onChange={this.onChange2}
										allowClear
										onPressEnter={() => (this.setState(prev => {
											text.push(Object.assign({color: red, user: this.state.userName2 || "User 2", msg: this.state.valueInputUser2 && this.state.valueInputUser2}))
										}), this.setState({ valueInputUser2: ""}))}
									/>
								</Col>
								
								<Col style={{textAlign: "center"}} span={5}>
									<Button
										type="primary" 
										style={{width: "90%"}}
										onClick={() => (this.setState(prev => {
											text.push(Object.assign({color: red, user: this.state.userName2 || "User 2", msg: this.state.valueInputUser2 && this.state.valueInputUser2}))
										}), this.setState({ valueInputUser2: ""}))}
									>
										Send 
									</Button>
								</Col>
							</Row>
						</Row>
					</Card>
      	</Col>
				{/** ######################################################## */}

				{/* {console.clear()} */}
				{/* {console.log(this.state)} */}
			</Card>
    	);
  	}  	
}

ReactDOM.render(<App />, document.getElementById("root"));