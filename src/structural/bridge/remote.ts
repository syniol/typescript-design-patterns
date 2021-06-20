import { Switcher } from './type'

















export abstract class Remote implements Switcher {
    turnOff(): void {}
    turnOn(): void {}
}

export abstract class AdvancedRemote extends Remote {
    standBy(): void {}
}

export class XBOX {
    turnOff(): void {}
    turnOn(): void {}
}

export class SmartSpeaker {
    turnOff(): void {}
    turnOn(): void {}
}
