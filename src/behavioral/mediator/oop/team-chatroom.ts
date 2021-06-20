import { Chatroom } from './chatroom'
import { TeamMember } from './team-member'

export class TeamChatroom implements Chatroom {
    #members: Set<TeamMember>

    public constructor(members?: Set<TeamMember>) {
        this.#members = members || new Set<TeamMember>()
    }

    public register(member: TeamMember): void {
        member.chatRoom = this

        this.#members.add(member)
    }

    public send(from: string, message: string): void {
        this.#members.forEach((member: TeamMember) =>
            member.receive(from, message)
        )
    }
}
