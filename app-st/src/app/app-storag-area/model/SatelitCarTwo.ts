export class SatelitCarTwo {
  positionX1: number
  positionZ1: number
  positionX2: number
  positionZ2: number
  busy: boolean

  constructor(positionX1: number, positionZ1: number, positionX2: number, positionZ2: number, busy: boolean) {
    this.positionX1 = positionX1;
    this.positionZ1 = positionZ1;
    this.positionX2 = positionX2;
    this.positionZ2 = positionZ2;
    this.busy = busy;
  }
}
