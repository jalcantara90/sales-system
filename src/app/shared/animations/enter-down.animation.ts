import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

const ExitStyle = style({ opacity: 0, transform: 'translateY(50px)' });
const EnterStyle = style({ opacity: 1, transform: 'translateY(0px)' });

export const enterDown = trigger('enterDown', [
  transition(':enter', [
    query(':enter', [
      ExitStyle,
      stagger('.1s', [
        animate('.4s ease-in-out', EnterStyle)
      ]),
    ]),
  ])
]);
