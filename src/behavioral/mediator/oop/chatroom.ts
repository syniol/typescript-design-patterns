import { TeamMember } from './team-member'

export abstract class Chatroom {
    abstract register(member: TeamMember): void

    abstract send(from: string, message: string): void
}
