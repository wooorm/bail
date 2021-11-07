import {expectType} from 'tsd'
import {bail} from './index.js'

expectType<void>(bail())

fn(new Error('!'))
fn1(undefined)
fn2(undefined)

function fn(x: Error) {
  bail(x)
  expectType<never>(x)
}

function fn1(x: Error | null | undefined) {
  bail(x)
  expectType<null | undefined>(x)
}

function fn2(x: null | undefined) {
  bail(x)
  expectType<null | undefined>(x)
}
