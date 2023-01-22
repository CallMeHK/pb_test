import { render } from 'preact'
import { App } from './app'
import '@picocss/pico'

render(<App />, document.querySelector('body') as HTMLElement)
