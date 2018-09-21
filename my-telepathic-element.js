import {TelepathicElement} from "../telepathic-element/telepathic-element.js";
export default class MyTelepathicElement extends TelepathicElement{
	static describe(){return `MyTelepathicElement provides a quick example of how easy it is to create a new element using telepathy.`};
	constructor(){
		//super(null,false,true);
		super();
		this.seconds = 0;
		this.status = {};
		this.statusClass = "loading";
		this.status.message = `Loading ${window.location} please wait... (simulating slow connection)`;
		window.mytelepathic = this;
	}

	async init(){
		
		setTimeout(async ()=>{
			this.statusClass = "ready";
			this.status.message = `Hello from ${window.location}`;
			setInterval(async ()=>{
				this.seconds++;
				//console.log(this.seconds);
			},1000);
		},5000);

	}
}
