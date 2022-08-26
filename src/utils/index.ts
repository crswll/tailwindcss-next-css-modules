import styles from '../styles/tw.module.css'

export const tw = (classes: string) => classes.split(' ').map(className => styles[className]).join(' ')
