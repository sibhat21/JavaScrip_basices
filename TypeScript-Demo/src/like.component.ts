export class LikeComponent {
  constructor(private likesCount: number, private isSelected: boolean) {}
  onClik() {
    this.likesCount += this.isSelected ? -1 : +1;
    this.isSelected = !this.isSelected;
    //     if (this.isSelected) {
    //       this.likesCount--;
    //       this.isSelected = false;
    //     } else {
    //       this.likesCount++;
    //       this.isSelected = true;
    //     }
  }
}
