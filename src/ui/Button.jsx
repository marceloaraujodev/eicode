/* eslint-disable no-unused-vars */

export default function Button({ btnTitle, onClick, className, ...props}) {
  return (
    <button type="button" className={className} onClick={onClick}>{btnTitle}</button>
  )
}
