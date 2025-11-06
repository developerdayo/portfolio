import resumeCss from '@styles/pages_resume.module.scss'

type ExperienceItemsProps = {
  institutionName: string
  startDate: string
  endDate: string
  descriptionTitle: string
  children?: React.ReactNode
}

export default function Experience({
  children,
  descriptionTitle,
  endDate,
  institutionName,
  startDate,
}: ExperienceItemsProps) {
  return (
    <div className={ resumeCss['experience-container'] }>
      <div>
        <h3> { institutionName } </h3>
        <span> { startDate } – { endDate } </span>
      </div>
      <div>
        <h4> { descriptionTitle } </h4>
        { children }
      </div>
    </div>
  )
}