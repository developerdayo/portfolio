type SkillsListProps = {
  header: string
  items: string[]
}

const SkillsList = ({ header, items }: SkillsListProps) => {

  return (
    <div>
      <h3>{ header }</h3>
      <ul>
        { items.map(item => <li> { item } </li>) }
      </ul>
    </div>
  )
}

export default SkillsList