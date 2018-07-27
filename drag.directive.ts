import { Directive,Input,ElementRef,AfterViewInit,OnDestroy} from '@angular/core';

@Directive({
  selector:'[appDrag]'
})

export class DragDirective implements AfterViewInit,OnDestroy {
  @Input('appDrag') parentOffsetTop = 0;
  public params = {
    left: 0,// the distance-X when mouse up accurence
	  top: 0,//the distance-Y when mouse up accurence
	  currentX: 0, // the distance-X to the position  mouse clicked
	  currentY: 0, // the distance-Y to the position mouse clicked
	  flag: false //true represents the move event
  }
  constructor(private elementRef: ElementRef){
        console.log("directive constructor")
  }

  /**
   * 判断value是否在最大值max和最小值min之间
   */
  validValue(value, max, min) {
    return Math.min(Math.max(value, min), max);
  }

 getTranslate (element) {
    const style = getComputedStyle(element);
    const regExp = /matrix\((\d+,\s){4}(\d+),\s(\d+)/i;
    const result = style.transform.match(regExp);
    if (result) {
      return {
        x: parseInt(result[2], 10),
        y: parseInt(result[3], 10)
      }
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }

 getCss(o,key){
    return o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o)[key]; 	
  }

  dragListener(target){
    if(this.getCss(target, "left") !== "auto"){
      this.params.left = this.getCss(target, "left");
    }
    if(this.getCss(target, "top") !== "auto"){
      this.params.top = this.getCss(target, "top");
    }
    //listener to mouse clicked
    target.onmousedown = (event) => {
      this.params.flag = true;
      if(!event){
        event = window.event;
        //prevent the mouse select event
        target.onselectstart = () => {
          return false;
        }
      }
      let e = event;
      this.params.currentX = e.clientX;
      this.params.currentY = e.clientY;
    };
    document.onmouseup = () => {
      this.params.flag = false;
      if(this.getCss(target, "left") !== "auto"){
        this.params.left = this.getCss(target, "left");
      }
      if(this.getCss(target, "top") !== "auto"){
        this.params.top = this.getCss(target, "top");
      }
    };
    document.onmousemove = (event:any) => {
      let e = event ? event: window.event;
      if(this.params.flag){
        let nowX = e.clientX, nowY = e.clientY;
        let disX = nowX - this.params.currentX, disY = nowY - this.params.currentY;

        const pWidth = target.parentNode.getBoundingClientRect().width;//获取父元素的宽度
        const pHeight = target.parentNode.getBoundingClientRect().height;//获取父元素的高度
        const sizeX = target.getBoundingClientRect().width;//获取本身的宽度
        const sizeY = target.getBoundingClientRect().height;//获取本身的高度

        let initX = parseInt(''+this.params.left);
        let initY = parseInt(''+this.params.top);

        target.style.left = this.validValue(initX + disX,pWidth-sizeX,0) + 'px';
        target.style.top = this.validValue(initY + disY,pHeight-sizeY,0) + 'px';

        if (event.preventDefault) {
          event.preventDefault();
        }
        return false;
      }
    }
  }

  ngAfterViewInit(){
    this.dragListener(this.elementRef.nativeElement);
  }
  ngOnDestroy(){

  }
}
