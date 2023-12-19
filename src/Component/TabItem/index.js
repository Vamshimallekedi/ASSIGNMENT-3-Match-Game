const TabItem = props => {
  const {tabDetails, getCategoryItems} = props
  const {displayText, tabId} = tabDetails

  const onClickCategoryBtn = () => {
    getCategoryItems(tabId)
  }

  return (
    <li>
      <button type="button" onClick={onClickCategoryBtn}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
