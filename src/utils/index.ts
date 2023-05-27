/*
 * @Author: try try418@163.com
 * @Date: 2023-05-27 01:13:34
 * @Description: 
 */
import { history } from 'umi'
export const goto = (url: string) => {
  history.push(url)
}

export const fetchFile = (url: string) => {
  return fetch(url).then(res => res.text())
}