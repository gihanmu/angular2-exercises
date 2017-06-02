import { Component} from '@angular/core';


@Component({
	moduleId : module.id,
	templateUrl : 'error.component.html',
	styleUrls : ['error.component.css']
	//using relative path (module.id)
})
export class ErrorComponent{
	
	erorMessage : string = 'Page Not Found';

 
}