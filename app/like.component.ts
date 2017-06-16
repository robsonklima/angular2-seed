import { Component, Input, Output, EventEmitter } from 'angular2/core'

@Component ({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: [`
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer
        }

        .highlighted {
            color: red;
        }
    `]})
export class LikeComponent {
    @Input() totalLikes = 0;
    @Input() iLike = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.iLike = !this.iLike;
        this.totalLikes += this.iLike ? 1 : -1;

        this.change.emit({ newValue: this.totalLikes });
    }
}