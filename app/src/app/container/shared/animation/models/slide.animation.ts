import { animate, style, transition, trigger } from '@angular/animations';


export const slideFromLeftAnimation = (triggerName?: string,
                                       startTranslateX?: string,
                                       endTranslateX?: string,
                                       transitionSpeed?: string) => {
  triggerName = triggerName ? triggerName : 'slideFromLeftAnimation';
  startTranslateX = startTranslateX ? startTranslateX : '-100%';
  endTranslateX = endTranslateX ? endTranslateX : '0%';
  transitionSpeed = transitionSpeed ? transitionSpeed : '200ms';
  return trigger(triggerName, [
    transition(':enter', [
      style({
        transform: `translateX(${startTranslateX})`
      }),
      animate(transitionSpeed, style({transform: `translateX(${endTranslateX})`}))
    ])
  ]);
};

export const slideFromRightAnimation = (triggerName?: string,
                                        startTranslateX?: string,
                                        endTranslateX?: string,
                                        transitionSpeed?: string) => {
  triggerName = triggerName ? triggerName : 'slideFromRightAnimation';
  startTranslateX = startTranslateX ? startTranslateX : '200%';
  endTranslateX = endTranslateX ? endTranslateX : '0%';
  transitionSpeed = transitionSpeed ? transitionSpeed : '700ms';
  return trigger(triggerName, [
    transition(':enter', [
      style({
        transform: `translateX(${startTranslateX})`
      }),
      animate(transitionSpeed, style({transform: `translateX(${endTranslateX})`}))
    ])
  ]);
};
