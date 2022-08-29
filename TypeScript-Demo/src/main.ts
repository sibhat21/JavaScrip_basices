import { LikeComponent } from "./like.component";

let component = new LikeComponent(10, true);
component.onClik();
console.log(`LikeCount:${component.likesCount},${component.isSelected}`);
