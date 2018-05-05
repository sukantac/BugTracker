import { Component,OnInit } from '@angular/core';

@Component({
	selector : 'bug-tracker-app',
	templateUrl : 'bugTracker.component.html'
})
export class bugTrackerComponent implements OnInit{
     bugValue:string='';
     setBugdescription:string='';
     getBugdescription=[];
      bugDescriptionArray=[];
     bugs=[{
        title:"this is bug1",
        createdAt:new Date(),
        isClosed:false
     },
     {
        title:"this is bug2",
        createdAt:new Date(),
        isClosed:false
     },
     {
        title:"this is bug3",
        createdAt:new Date(),
        isClosed:false
     },


     ]

        ngOnInit(){
          this.getBugdescription = JSON.parse(localStorage.getItem('setBugdescription'));
          for(let i=0;i<this.getBugdescription.length;i++){
            this.bugs.push({
              title:this.getBugdescription[i],
             createdAt:new Date(),
              isClosed:false
            });
          }
          
        }
	addBug(bugVal){
        // alert(bugVal);
         this.bugDescriptionArray.push(bugVal)
        localStorage.setItem('setBugdescription', JSON.stringify(this.bugDescriptionArray)); 
     
        this.bugValue=bugVal;

        this.bugs.push({
          title:this.bugValue,
          createdAt:new Date(),
          isClosed:false
        });
        
    }

}