import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component'

@NgModule({
    declarations: [
        TimerComponent,
   ],
    imports: [
        CommonModule
    ],
    exports: [
        TimerComponent,

    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})

export class ComponentsReusables { }
