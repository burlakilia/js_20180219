import {Message} from '../message/message';
import template from './chat.pug';

export class Chat {

    constructor(el, data) {
        this.el = el;
        this.data = data;
        this.render();

    }

    render(text = '') {
        this.el.innerHTML += template({
            text
        });
    }

    insertMessage(text) {
        this.render(text)
    }

}

