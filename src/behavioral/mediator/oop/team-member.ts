import { Chatroom } from './chatroom'

export abstract class TeamMember {
    public chatRoom: Chatroom | undefined
    protected name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public send(msg: string): void {
        this.chatRoom?.send(this.name, msg)
    }

    public receive(from: string, msg: string): void {
        console.log(`From: ${from}: ${msg}`);
    }
}
