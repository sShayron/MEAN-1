import { Component, OnInit } from "@angular/core";
import { MessageService } from "./message.services";
import { Message } from "./message.model";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-message-list",
  templateUrl: "./message-list.component.html",
  providers: [MessageService, AuthService]
})
export class MessageListComponent implements OnInit {
  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  copiedMessage: Message = new Message();
  isEditing: boolean = false;
  isAdding: boolean = false;

  ngOnInit() {
    this.messageService.getAllMessages();
  }

  close() {
    this.isAdding = false;
    this.isEditing = false;
  }

  onRemoveMessage(msg: Message) {
    this.messageService.removeMessage(msg);
  }

  onEditMessage(message: Message) {
    this.copiedMessage = new Message({ ...message });
    this.isEditing = true;
  }

  onDone() {
    if (this.isEditing) {
      this.messageService.updateMessage(this.copiedMessage);
    }
    if (this.isAdding) {
      this.messageService.addMessage(this.copiedMessage);
    }
    this.close();
    this.copiedMessage = new Message();
  }
}
