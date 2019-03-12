import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styles: [`
        .modal-backdrop {
            position: absolute;
            background: rgba(0, 0, 0, 0.5);
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: -1;
        }
        .modal {
            transition: opacity 0.3s;
        }
        .modal.open {
            opacity: 1;
            display: block;
        }
    `]
})
export class ModalComponent {
    @Input()
    title: String;

    @Input()
    open: boolean = false;

    @Output()
    close = new EventEmitter<any>();
}