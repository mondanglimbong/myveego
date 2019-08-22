import { Module } from 'vuex';
import { actions } from './actions';
import { mutations } from './mutations';
import { getters } from './getters';
import { LayoutState } from './types';
import { RootState } from '@/store';

export const state: LayoutState = {
    layouts: {
        lg: [
            {
                i: '1',
                x: 0,
                y: 6,
                h: 9,
                w: 2,
            },
            {
                i: '2',
                x: 0,
                y: 0,
                h: 9,
                w: 2,
            },
            {
                i: '3',
                x: 0,
                y: 0,
                h: 9,
                w: 2,
            },
            {
                i: '4',
                x: 0,
                y: 0,
                h: 9,
                w: 2,
            },
            {
                i: '5',
                x: 2,
                y: 4,
                h: 9,
                w: 2,
            },
            {
                i: '6',
                x: 2,
                y: 6,
                h: 9,
                w: 2,
            },
            {
                i: '7',
                x: 2,
                y: 8,
                h: 9,
                w: 2,
            },
            {
                i: '8',
                x: 2,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '9',
                x: 4,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '10',
                x: 4,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '11',
                x: 4,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '12',
                x: 4,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '13',
                x: 6,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '14',
                x: 6,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '15',
                x: 6,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '16',
                x: 6,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '17',
                x: 8,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '18',
                x: 8,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '19',
                x: 8,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '20',
                x: 8,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '21',
                x: 10,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '22',
                x: 10,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '23',
                x: 10,
                y: 10,
                h: 9,
                w: 2,
            },
            {
                i: '24',
                x: 10,
                y: 9,
                h: 9,
                w: 2,
            },
        ],
    },
    cols: 12,
    breakpoint: 'lg',

};

const namespaced: boolean = true;

export const layout: Module<LayoutState, RootState> = {
    namespaced,
    state,
    actions,
    getters,
    mutations,
};
