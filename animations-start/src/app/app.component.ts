import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red', // dashed and quoted or backgroundColor
        transform: 'translateX(0px)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red', // dashed and quoted or backgroundColor
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          backgroundColor: 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    // list1 trigger
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
    // list2 trigger
    trigger('list2', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        animate(1000, keyframes([
          style({
            transform: 'translateX(-100px)',
            opacity: 0,
            offset: 0 // animation percent 0-1
          }),
          style({
            transform: 'translateX(-50px)',
            opacity: 0.5,
            offset: 0.3 // animation percent 0-1
          }),
          style({
            transform: 'translateX(-20px)',
            opacity: 1,
            offset: 0.8 // animation percent 0-1
          }),
          style({
            transform: 'translateX(0px)',
            opacity: 1,
            offset: 1 // animation percent 0-1
          })
        ]))
      ]),
      transition('* => void', [
        group([ // group animations to happen at the same time
          animate(300, style({
            color: 'red'
          })),
          animate(800, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item) {
    this.list.push(item);
  }

  onAnimate() {
    if (this.state === 'normal') {
      this.state = 'highlighted';
    } else {
      this.state = 'normal';
    }
    if (this.wildState === 'normal') {
      this.wildState = 'highlighted';
    } else {
      this.wildState = 'normal';
    }
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onDelete(item) {
    const index = this.list.indexOf(item);
    this.list.splice(index, 1);
  }

  animationStarted(event) {
    console.log('started', event);
  }

  animationEnded(event) {
    console.log('ended', event);
  }
}
