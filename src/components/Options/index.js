const Options = props => {
  const {eachObject} = props
  const {optionId, displayText} = eachObject
  return <option value={optionId}>{displayText}</option>
}

export default Options
