import {View} from '../view';
import {Chat} from "../../blocks/chat/chat";

export class ChatView extends View {

    constructor(el) {
        super(el);
        this.chat = new Chat(this.el, {});
    }

}