import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task-model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createList(title: string) {
    // we want  to send a web request to create a List
    return this.webReqService.post('lists',{ title });
  }

  updateList(id: string, title: string) {
    // we want  to send a web request to create a List
    return this.webReqService.patch(`lists/${id}`,{ title });
  }
  updateTask(listId: string,taskId:string, title: string) {
    // we want  to send a web request to create a List
    return this.webReqService.patch(`lists/${listId}/tasks/${taskId}`,{ title });
  }

  createTask(title: string, listId: string) {
    // we want  to send a web request to create a List
    return this.webReqService.post(`lists/${listId}/tasks`,{ title });
  }

  deleteList(id: string){
    return this.webReqService.delete(`lists/${id}`)
  }

  deleteTask(listId: string, taskId: string){
    return this.webReqService.delete(`lists/${listId}/tasks/${taskId}`)
  }


  getLists(){
    return this.webReqService.get('lists');
  }

  getTasks(listId: string){
    return this.webReqService.get(`lists/${listId}/tasks`);
  }

  complete(task: Task){
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      completed: !task.completed
    })
  }

  
}
