import { animate, style, transition, trigger } from '@angular/animations';

export const fadeAnimation = (triggerName?: string,
                              startOpacity?: string,
                              endOpacity?: string,
                              transitionSpeed?: string) => {

    triggerName = triggerName ? triggerName : 'fadeInAnimation';
    startOpacity = startOpacity ? startOpacity : '0';
    endOpacity = endOpacity ? endOpacity : '1';
    transitionSpeed = transitionSpeed ? transitionSpeed : '200ms';

    return trigger(triggerName, [
      transition(':enter', [
        style({
          opacity: startOpacity
        }),
        animate(transitionSpeed, style({opacity: endOpacity}))
      ])
    ]);
  }
;
