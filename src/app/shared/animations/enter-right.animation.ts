import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

const ExitStyle = style({ opacity: 0, transform: 'translateX(50px)' });
const EnterStyle = style({ opacity: 1, transform: 'translateX(0px)' });

export const enterRight = trigger('enterRight', [
  transition(':enter', [
    query(':enter', [
      ExitStyle,
      stagger('.1s', [
        animate('.4s ease-in-out', EnterStyle)
      ]),
    ], { optional: true }),
  ]),
  transition(':leave', [
    query(':leave', [
      EnterStyle,
      stagger('100ms', [animate('.2s ease-in-out', ExitStyle)]),
    ]),
  ]),
]);
